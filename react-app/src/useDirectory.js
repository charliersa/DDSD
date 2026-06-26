import { useMemo, useState, useCallback } from 'react'
import { TOOLS, CATS, PRICES, PLATS } from './data/tools.js'
import { dot, priceBadge, navRow, navLabel, navCount, chev } from './styleHelpers.js'

const toggleIn = (arr, v) => (arr.includes(v) ? arr.filter((x) => x !== v) : arr.concat([v]))

// Holds all directory state and exposes derived view-model values + handlers.
// `options` mirrors the original component props: { accent, density, showRowDesc }.
export default function useDirectory(options = {}) {
  const { accent = '#2347D9', density = 'comfortable', showRowDesc = true } = options

  const [search, setSearch] = useState('')
  const [platform, setPlatform] = useState('all')
  const [cats, setCats] = useState([])
  const [prices, setPrices] = useState([])
  const [detailId, setDetailId] = useState(null)
  const [compare, setCompare] = useState([])
  const [compareOpen, setCompareOpen] = useState(false)
  const [expanded, setExpanded] = useState({ web: true, desktop: true })
  const [navOpen, setNavOpen] = useState(true)

  // ---- mutations ----
  const toggleCat = useCallback((k) => setCats((c) => toggleIn(c, k)), [])
  const togglePrice = useCallback((k) => setPrices((p) => toggleIn(p, k)), [])

  const toggleCompare = useCallback((id) => {
    setCompare((c) => {
      if (c.includes(id)) return c.filter((x) => x !== id)
      if (c.length >= 4) return c
      return c.concat([id])
    })
  }, [])

  const removeCompare = useCallback((id) => {
    setCompare((c) => {
      const next = c.filter((x) => x !== id)
      if (next.length < 2) setCompareOpen(false)
      return next
    })
  }, [])

  const clearCompare = useCallback(() => {
    setCompare([])
    setCompareOpen(false)
  }, [])

  const clearFilters = useCallback(() => {
    setSearch('')
    setPlatform('all')
    setCats([])
    setPrices([])
  }, [])

  const toggleNav = useCallback(() => setNavOpen((v) => !v), [])
  const toggleExpand = useCallback((p) => {
    setExpanded((st) => ({ ...st, [p]: !(st[p] !== false) }))
  }, [])

  // ---- decorate a raw tool into a view model ----
  const decorate = useCallback(
    (t) => {
      const c = CATS.find((x) => x.key === t.cat)
      const p = PRICES.find((x) => x.key === t.price)
      const pl = PLATS[t.platform]
      const inC = compare.includes(t.id)
      return {
        ...t,
        catZh: c.zh, catEn: c.en, catDotStyle: dot(c.dot),
        priceZh: p.zh, priceEn: p.en, priceDotStyle: dot(p.dot), priceBadgeStyle: priceBadge(),
        platZh: pl.short, platEn: pl.shortEn,
        hasEquiv: !!t.equiv, equivBare: t.equiv || '', equivLabel: t.equiv ? '≈ ' + t.equiv : '',
        inCompare: inC, notInCompare: !inC,
        onOpen: () => setDetailId(t.id),
        onOpenSite: (e) => { e?.stopPropagation?.(); window.open(t.url, '_blank', 'noopener') },
        onToggleCompare: (e) => { e?.stopPropagation?.(); toggleCompare(t.id) },
      }
    },
    [compare, toggleCompare]
  )

  // ---- search query ----
  const q = (search || '').trim().toLowerCase()

  // ---- main filter ----
  const filtered = useMemo(() => {
    const match = (t) => {
      if (platform !== 'all' && t.platform !== platform) return false
      if (cats.length && !cats.includes(t.cat)) return false
      if (prices.length && !prices.includes(t.price)) return false
      if (q) {
        const hay = (t.name + ' ' + t.tag + ' ' + t.descZh + ' ' + t.descEn + ' ' + (t.equiv || '')).toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    }
    return TOOLS.filter(match)
  }, [platform, cats, prices, q])

  // ---- grouped directory ----
  const groups = useMemo(() => {
    return ['web', 'desktop']
      .map((pl) => {
        const catGroups = CATS.map((c) => {
          const tools = filtered.filter((t) => t.platform === pl && t.cat === c.key).map(decorate)
          return { key: c.key, zh: c.zh, en: c.en, dotStyle: dot(c.dot, 8), tools, count: tools.length, has: tools.length > 0 }
        }).filter((c) => c.has)
        const count = catGroups.reduce((a, c) => a + c.count, 0)
        const meta = PLATS[pl]
        return { key: pl, zh: meta.zh, en: meta.en, sub: meta.sub, cats: catGroups, count, has: catGroups.length > 0 }
      })
      .filter((g) => g.has)
  }, [filtered, decorate])

  // ---- sidebar tree ----
  const tree = useMemo(() => {
    const matchSP = (t) => {
      if (prices.length && !prices.includes(t.price)) return false
      if (q) {
        const hay = (t.name + ' ' + t.tag + ' ' + t.descZh + ' ' + t.descEn + ' ' + (t.equiv || '')).toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    }
    const spList = TOOLS.filter(matchSP)
    const countFor = (p, cat) => spList.filter((t) => t.platform === p && (!cat || t.cat === cat)).length
    const isAll = platform === 'all' && cats.length === 0
    const rows = []
    rows.push({
      key: 'all',
      onClick: () => { setPlatform('all'); setCats([]) },
      rowStyle: navRow(isAll, false),
      showChevron: false, showDot: false,
      labelStyle: navLabel(true), label: '全部 All Tools',
      countStyle: navCount(isAll), count: spList.length,
    })
    ;['web', 'desktop'].forEach((p) => {
      const meta = PLATS[p]
      const pActive = platform === p && cats.length === 0
      const isExpanded = expanded[p] !== false
      rows.push({
        key: p,
        onClick: () => { setPlatform(p); setCats([]) },
        rowStyle: navRow(pActive, false),
        showChevron: true, chevron: isExpanded ? '▾' : '▸', chevronStyle: chev(),
        onToggle: (e) => { e?.stopPropagation?.(); toggleExpand(p) },
        showDot: false, labelStyle: navLabel(true), label: meta.zh + '  ' + meta.en,
        countStyle: navCount(pActive), count: countFor(p, null),
      })
      if (isExpanded) {
        CATS.forEach((c) => {
          if (!TOOLS.some((t) => t.platform === p && t.cat === c.key)) return
          const cActive = platform === p && cats.length === 1 && cats[0] === c.key
          rows.push({
            key: p + ':' + c.key,
            onClick: () => { setPlatform(p); setCats([c.key]) },
            rowStyle: navRow(cActive, true),
            showChevron: false, showDot: true, dotStyle: dot(c.dot),
            labelStyle: navLabel(false), label: c.zh,
            countStyle: navCount(cActive), count: countFor(p, c.key),
          })
        })
      }
    })
    return rows
  }, [platform, cats, prices, q, expanded, toggleExpand])

  const detailTool = detailId ? decorate(TOOLS.find((t) => t.id === detailId)) : null
  const compareTools = compare.map((id) => decorate(TOOLS.find((t) => t.id === id)))
  const compareChips = compare.map((id) => {
    const t = TOOLS.find((x) => x.id === id)
    return { id, name: t.name, onRemove: () => removeCompare(id) }
  })

  return {
    rootStyle: {
      minHeight: '100vh',
      background: '#FBFAF7',
      '--accent': accent || '#2347D9',
      '--rowpad': density === 'compact' ? '9px 12px' : '15px 14px',
      '--descdisplay': showRowDesc === false ? 'none' : 'block',
    },
    totalCount: TOOLS.length,
    shownCount: filtered.length,
    search, onSearch: (e) => setSearch(e.target.value),
    catOpts: CATS.map((c) => ({
      key: c.key, labelZh: c.zh, labelEn: c.en, dotStyle: dot(c.dot),
      active: cats.includes(c.key), onClick: () => toggleCat(c.key),
    })),
    priceOpts: PRICES.map((p) => ({
      key: p.key, labelZh: p.zh, labelEn: p.en, dotStyle: dot(p.dot),
      active: prices.includes(p.key), onClick: () => togglePrice(p.key),
    })),
    platformOpts: [['all', '全部', 'All'], ['web', '線上', 'Web'], ['desktop', '電腦', 'Desktop']].map(
      ([k, zh, en]) => ({ key: k, labelZh: zh, labelEn: en, active: platform === k, onClick: () => setPlatform(k) })
    ),
    hasFilters: platform !== 'all' || cats.length > 0 || prices.length > 0 || (search || '').trim().length > 0,
    onClearFilters: clearFilters,
    groups, isEmpty: groups.length === 0,
    tree,
    navOpen, navClosed: !navOpen, onToggleNav: toggleNav,
    detailOpen: !!detailTool, detailTool, onCloseDetail: () => setDetailId(null),
    compareCount: compare.length, compareChips, compareTools,
    canCompare: compare.length >= 2, cannotCompare: compare.length < 2,
    compareOpen,
    onOpenCompare: () => { if (compare.length >= 2) setCompareOpen(true) },
    onCloseCompare: () => setCompareOpen(false),
    onClearCompare: clearCompare,
  }
}
