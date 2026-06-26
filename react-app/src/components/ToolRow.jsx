import Logo from './Logo.jsx'

export default function ToolRow({ tool }) {
  return (
    <div
      className="tool-row"
      onClick={tool.onOpen}
      style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 'var(--rowpad)', borderBottom: '1px solid #EDEBE4', cursor: 'pointer', borderRadius: 12 }}
    >
      <Logo id={tool.id} name={tool.name} size={46} radius={9} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: '#1B1B18' }}>{tool.name}</span>
          <span style={{ fontSize: 13, color: '#8C8C82' }}>{tool.tag}</span>
          {tool.hasEquiv && (
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--accent)', background: 'color-mix(in srgb, var(--accent) 11%, #ffffff)', borderRadius: 5, padding: '2px 6px' }}>
              {tool.equivLabel}
            </span>
          )}
        </div>
        <div style={{ display: 'var(--descdisplay)', fontSize: 13, color: '#76766E', marginTop: 3, lineHeight: 1.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {tool.descZh}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, flex: 'none' }}>
        <span style={tool.priceBadgeStyle}>
          <span style={tool.priceDotStyle}></span>
          {tool.priceZh}
        </span>
        {tool.inCompare ? (
          <button
            onClick={tool.onToggleCompare}
            style={{ border: '1px solid var(--accent)', background: 'var(--accent)', color: '#fff', borderRadius: 9, padding: '7px 11px', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}
          >
            ✓ 已加入
          </button>
        ) : (
          <button
            className="btn-outline"
            onClick={tool.onToggleCompare}
            style={{ border: '1px solid #E2E0D8', background: '#fff', color: '#3A3A34', borderRadius: 9, padding: '7px 11px', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}
          >
            ＋ 比較
          </button>
        )}
        <button
          className="btn-outline"
          onClick={tool.onOpenSite}
          title="官方網站 Official site"
          style={{ border: '1px solid #E2E0D8', background: '#fff', color: '#3A3A34', borderRadius: 9, padding: '7px 10px', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}
        >
          官網 ↗
        </button>
        <span style={{ color: '#C9C8BF', fontSize: 18, lineHeight: 1 }}>›</span>
      </div>
    </div>
  )
}
