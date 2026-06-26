export default function Sidebar({ navOpen, tree, onToggleNav, isMobile }) {
  // 收合狀態：一顆 ☰ 按鈕（桌機是左側細欄，手機點了會打開抽屜）
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

  // 在手機抽屜模式，點分類後順手關閉抽屜
  const rowClick = (node) => (isMobile ? () => { node.onClick?.(); onToggleNav() } : node.onClick)

  const inner = (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '0 6px 12px 10px' }}>
        <span style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: '#A8A89E', fontWeight: 700 }}>分類導覽 · Browse</span>
        <button
          className="nav-collapse-btn"
          onClick={onToggleNav}
          title="收合側欄"
          style={{ border: 'none', background: '#F1EFE9', color: '#56564E', width: 26, height: 26, borderRadius: 7, cursor: 'pointer', fontSize: 15, lineHeight: 1, fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}
        >
          {isMobile ? '×' : '‹'}
        </button>
      </div>
      {tree.map((node) => (
        <div key={node.key} className="nav-row" onClick={rowClick(node)} style={node.rowStyle}>
          {node.showChevron && (
            <button onClick={node.onToggle} style={node.chevronStyle}>{node.chevron}</button>
          )}
          {node.showDot && <span style={node.dotStyle}></span>}
          <span style={node.labelStyle}>{node.label}</span>
          <span style={node.countStyle}>{node.count}</span>
        </div>
      ))}
    </>
  )

  // 手機：固定定位的抽屜 + 半透明遮罩，不擠壓內容
  if (isMobile) {
    return (
      <>
        <div onClick={onToggleNav} style={{ position: 'fixed', inset: 0, zIndex: 38, background: 'rgba(27,27,24,.34)', animation: 'fadeIn .18s ease' }}></div>
        <aside style={{ position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 39, width: 'min(280px,84vw)', background: '#FBFAF7', overflowY: 'auto', padding: '20px 14px 24px', boxShadow: '6px 0 34px rgba(0,0,0,.18)', animation: 'slideInLeft .26s cubic-bezier(.22,1,.36,1)' }}>
          {inner}
        </aside>
      </>
    )
  }

  // 桌機：原本的 sticky 側欄
  return (
    <aside style={{ width: 246, flex: 'none', position: 'sticky', top: 82, alignSelf: 'flex-start', maxHeight: 'calc(100vh - 98px)', overflowY: 'auto', padding: '26px 0 20px' }}>
      {inner}
    </aside>
  )
}
