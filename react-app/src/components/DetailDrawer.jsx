import Logo from './Logo.jsx'

export default function DetailDrawer({ tool, onClose }) {
  if (!tool) return null
  return (
    <>
      <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 40, background: 'rgba(27,27,24,.34)', animation: 'fadeIn .18s ease' }}></div>
      <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 41, width: 'min(468px,94vw)', background: '#fff', boxShadow: '-14px 0 50px rgba(0,0,0,.16)', animation: 'slideIn .28s cubic-bezier(.22,1,.36,1)', overflowY: 'auto' }}>
        <div style={{ position: 'sticky', top: 0, background: '#fff', display: 'flex', justifyContent: 'flex-end', padding: '14px 16px', zIndex: 2 }}>
          <button onClick={onClose} style={{ border: 'none', background: '#F1EFE9', color: '#56564E', width: 34, height: 34, borderRadius: '50%', fontSize: 18, cursor: 'pointer', lineHeight: 1, fontFamily: 'inherit' }}>×</button>
        </div>
        <div style={{ padding: '0 30px 52px' }}>
          <Logo id={tool.id} name={tool.name} size={84} radius={16} />
          <h2 style={{ margin: '18px 0 3px', fontSize: 29, fontWeight: 800, letterSpacing: '-.01em', color: '#1B1B18' }}>{tool.name}</h2>
          <div style={{ fontSize: 14, color: '#8C8C82' }}>{tool.tag}</div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 18 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', background: '#F1EFE9', borderRadius: 8, padding: '5px 11px', fontSize: 12.5, fontWeight: 600, color: '#56564E' }}>
              {tool.platZh} · {tool.platEn}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: '#F1EFE9', borderRadius: 8, padding: '5px 11px', fontSize: 12.5, fontWeight: 600, color: '#56564E' }}>
              <span style={tool.catDotStyle}></span>{tool.catZh}
            </span>
            <span style={tool.priceBadgeStyle}>
              <span style={tool.priceDotStyle}></span>{tool.priceZh} · {tool.priceEn}
            </span>
          </div>
          {tool.hasEquiv && (
            <div style={{ marginTop: 18, background: 'color-mix(in srgb, var(--accent) 7%, #ffffff)', border: '1px solid color-mix(in srgb, var(--accent) 22%, #ffffff)', borderRadius: 11, padding: '13px 15px', fontSize: 13.5, lineHeight: 1.6, color: '#3A3A34' }}>
              <span style={{ color: 'var(--accent)', fontWeight: 700 }}>學習提示 ·</span> 操作邏輯接近 <b>{tool.equivBare}</b>，學會它等同熟悉 {tool.equivBare}。
            </div>
          )}
          <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 22, background: 'var(--accent)', color: '#fff', borderRadius: 12, padding: 14, fontSize: 15, fontWeight: 700, textDecoration: 'none' }}>
            前往官方網站 · Visit Website ↗
          </a>
          <h3 style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#A8A89E', fontWeight: 700, margin: '30px 0 8px' }}>介紹 · About</h3>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.78, color: '#3A3A34' }}>{tool.descZh}</p>
          <h3 style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#A8A89E', fontWeight: 700, margin: '24px 0 8px' }}>English</h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: '#6E6E66' }}>{tool.descEn}</p>
          <div style={{ marginTop: 30 }}>
            {tool.inCompare ? (
              <button onClick={tool.onToggleCompare} style={{ width: '100%', border: '1px solid var(--accent)', background: 'color-mix(in srgb, var(--accent) 9%, #ffffff)', color: 'var(--accent)', borderRadius: 11, padding: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                ✓ 已加入比較
              </button>
            ) : (
              <button className="btn-outline" onClick={tool.onToggleCompare} style={{ width: '100%', border: '1px solid #E2E0D8', background: '#fff', color: '#1B1B18', borderRadius: 11, padding: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                ＋ 加入比較清單
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
