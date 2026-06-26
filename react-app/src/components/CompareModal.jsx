import Logo from './Logo.jsx'

export default function CompareModal({ open, compareCount, compareTools, onClose }) {
  if (!open) return null
  const stop = (e) => e.stopPropagation()
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(27,27,24,.42)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'fadeIn .18s ease' }}>
      <div onClick={stop} style={{ background: '#FBFAF7', borderRadius: 18, maxWidth: 1020, width: '100%', maxHeight: '88vh', overflow: 'auto', boxShadow: '0 26px 80px rgba(0,0,0,.32)', animation: 'popIn .24s ease' }}>
        <div style={{ position: 'sticky', top: 0, background: '#FBFAF7', padding: '22px 26px 15px', borderBottom: '1px solid #EAE8E1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: '#1B1B18' }}>軟體比較</h2>
            <span style={{ fontSize: 14, color: '#9A9A90', fontWeight: 600 }}>Compare · {compareCount}</span>
          </div>
          <button onClick={onClose} style={{ border: 'none', background: '#F1EFE9', color: '#56564E', width: 34, height: 34, borderRadius: '50%', fontSize: 18, cursor: 'pointer', lineHeight: 1, fontFamily: 'inherit' }}>×</button>
        </div>
        <div style={{ display: 'flex', gap: 16, padding: '22px 26px 30px', overflowX: 'auto' }}>
          {compareTools.map((tool) => (
            <div key={tool.id} style={{ flex: '1 0 230px', maxWidth: 300, background: '#fff', border: '1px solid #EAE8E1', borderRadius: 14, padding: 18 }}>
              <Logo id={tool.id} name={tool.name} size={54} radius={13} />
              <div style={{ fontSize: 18, fontWeight: 800, marginTop: 13, color: '#1B1B18' }}>{tool.name}</div>
              <div style={{ fontSize: 13, color: '#8C8C82', marginTop: 2 }}>{tool.tag}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 13 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', background: '#F1EFE9', borderRadius: 7, padding: '4px 9px', fontSize: 12, fontWeight: 600, color: '#56564E' }}>{tool.platZh}</span>
                <span style={tool.priceBadgeStyle}>
                  <span style={tool.priceDotStyle}></span>{tool.priceZh}
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 11, fontSize: 12.5, color: '#76766E' }}>
                <span style={tool.catDotStyle}></span>{tool.catZh} · {tool.catEn}
              </div>
              <div style={{ height: 1, background: '#EDEBE4', margin: '14px 0' }}></div>
              <div style={{ fontSize: 13, lineHeight: 1.65, color: '#3A3A34' }}>{tool.descZh}</div>
              <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: 14, fontSize: 13, fontWeight: 700, color: 'var(--accent)', textDecoration: 'none' }}>官方網站 ↗</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
