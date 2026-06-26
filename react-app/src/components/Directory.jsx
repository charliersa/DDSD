import ToolRow from './ToolRow.jsx'

export default function Directory({ groups, isEmpty, isMobile }) {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      {isEmpty && (
        <div style={{ textAlign: 'center', padding: '100px 20px', color: '#9A9A90' }}>
          <div style={{ fontSize: 38, marginBottom: 12, opacity: 0.5 }}>∅</div>
          <div style={{ fontSize: 16, color: '#56564E' }}>找不到符合條件的軟體</div>
          <div style={{ fontSize: 13, marginTop: 6 }}>No tools match your filters — try resetting.</div>
        </div>
      )}

      {groups.map((group) => (
        <section key={group.key} style={{ marginTop: 48 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, paddingBottom: 9, borderBottom: '2px solid #1B1B18' }}>
            <h2 style={{ margin: 0, fontSize: 25, fontWeight: 800, color: '#1B1B18', letterSpacing: '-.01em' }}>{group.zh}</h2>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#9A9A90', letterSpacing: '.03em' }}>{group.en}</span>
            <span style={{ fontSize: 13, color: '#B0AFA5' }}>·  {group.sub}</span>
            <span style={{ marginLeft: 'auto', fontSize: 13, color: '#9A9A90', whiteSpace: 'nowrap' }}>{group.count} 款</span>
          </div>

          {group.cats.map((cat) => (
            <div key={cat.key} style={{ marginTop: 30 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 2 }}>
                <span style={cat.dotStyle}></span>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#1B1B18' }}>{cat.zh}</h3>
                <span style={{ fontSize: 12.5, color: '#A8A89E', fontWeight: 500 }}>{cat.en}</span>
              </div>
              {cat.tools.map((tool) => (
                <ToolRow key={tool.id} tool={tool} isMobile={isMobile} />
              ))}
            </div>
          ))}
        </section>
      ))}
    </div>
  )
}
