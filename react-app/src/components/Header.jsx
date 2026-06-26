export default function Header({ totalCount }) {
  return (
    <div style={{ maxWidth: 1140, margin: '0 auto', padding: '56px 28px 26px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 28, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 700 }}>
          <div style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: '#9A9A90', fontWeight: 700, marginBottom: 16 }}>
            教學軟體導覽 · Software Guide
          </div>
          <h1 style={{ margin: 0, fontSize: 46, lineHeight: 1.04, fontWeight: 800, letterSpacing: '-.015em', color: '#1B1B18' }}>
            繪圖軟體資訊整合
            <br />
            <span style={{ fontWeight: 500, color: '#6E6E66', fontSize: 34 }}>Drawing &amp; Design Software Directory</span>
          </h1>
          <p style={{ margin: '20px 0 0', fontSize: 16, lineHeight: 1.7, color: '#56564E', maxWidth: 580 }}>
            收錄線上與電腦版的繪圖、3D、設計與遊戲開發工具。依分類、平台、價格篩選，點任一列查看介紹、連結官網，或勾選加入比較。
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1, color: 'var(--accent)', letterSpacing: '-.02em' }}>{totalCount}</div>
          <div style={{ fontSize: 13, color: '#9A9A90', letterSpacing: '.1em', marginTop: 8 }}>款工具 · TOOLS</div>
        </div>
      </div>
    </div>
  )
}
