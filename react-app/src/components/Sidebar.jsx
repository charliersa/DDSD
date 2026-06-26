export default function Sidebar({ navOpen, tree, onToggleNav }) {
  if (!navOpen) {
    return (
      <aside style={{ width: 46, flex: 'none', position: 'sticky', top: 82, alignSelf: 'flex-start', paddingTop: 26 }}>
        <button
          className="nav-expand-btn"
          onClick={onToggleNav}
          title="展開分類導覽"
          style={{ border: '1px solid #E2E0D8', background: '#fff', color: '#3A3A34', width: 42, height: 42, borderRadius: 11, cursor: 'pointer', fontSize: 16, lineHeight: 1, fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          ☰
        </button>
      </aside>
    )
  }

  return (
    <aside style={{ width: 246, flex: 'none', position: 'sticky', top: 82, alignSelf: 'flex-start', maxHeight: 'calc(100vh - 98px)', overflowY: 'auto', padding: '26px 0 20px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 6px 12px 10px' }}>
        <span style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: '#A8A89E', fontWeight: 700 }}>分類導覽 · Browse</span>
        <button
          className="nav-collapse-btn"
          onClick={onToggleNav}
          title="收合側欄"
          style={{ border: 'none', background: '#F1EFE9', color: '#56564E', width: 26, height: 26, borderRadius: 7, cursor: 'pointer', fontSize: 15, lineHeight: 1, fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}
        >
          ‹
        </button>
      </div>
      {tree.map((node) => (
        <div key={node.key} className="nav-row" onClick={node.onClick} style={node.rowStyle}>
          {node.showChevron && (
            <button onClick={node.onToggle} style={node.chevronStyle}>{node.chevron}</button>
          )}
          {node.showDot && <span style={node.dotStyle}></span>}
          <span style={node.labelStyle}>{node.label}</span>
          <span style={node.countStyle}>{node.count}</span>
        </div>
      ))}
    </aside>
  )
}
