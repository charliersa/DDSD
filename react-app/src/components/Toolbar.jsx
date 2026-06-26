import { chipStyle } from '../styleHelpers.js'

export default function Toolbar({ search, onSearch, priceOpts, hasFilters, onClearFilters, shownCount, totalCount }) {
  return (
    <div
      style={{
        position: 'sticky', top: 0, zIndex: 20,
        background: 'rgba(251,250,247,.88)',
        backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        borderTop: '1px solid #EAE8E1', borderBottom: '1px solid #EAE8E1',
      }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '14px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
          <div style={{ position: 'relative', flex: 1, minWidth: 240 }}>
            <span style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: '#A8A89E', fontSize: 16, pointerEvents: 'none' }}>⌕</span>
            <input
              className="search-input"
              value={search}
              onInput={onSearch}
              onChange={onSearch}
              placeholder="搜尋軟體名稱、功能…  Search tools"
              style={{
                width: '100%', border: '1px solid #E2E0D8', background: '#fff',
                borderRadius: 11, padding: '11px 14px 11px 38px', fontSize: 14,
                fontFamily: 'inherit', color: '#1B1B18', outline: 'none',
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {priceOpts.map((opt) => (
              <button key={opt.key} onClick={opt.onClick} title={opt.labelEn} style={chipStyle(opt.active)}>
                <span style={opt.dotStyle}></span>
                {opt.labelZh}
              </button>
            ))}
          </div>
          {hasFilters && (
            <button
              onClick={onClearFilters}
              style={{ border: 'none', background: 'none', color: 'var(--accent)', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', padding: '6px 6px', whiteSpace: 'nowrap' }}
            >
              清除 Reset
            </button>
          )}
          <div style={{ fontSize: 13, color: '#9A9A90', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums', marginLeft: 'auto' }}>
            {shownCount} / {totalCount}
          </div>
        </div>
      </div>
    </div>
  )
}
