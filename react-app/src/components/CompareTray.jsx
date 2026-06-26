export default function CompareTray({ compareCount, compareChips, canCompare, onClearCompare, onOpenCompare }) {
  if (!compareCount) return null
  return (
    <div style={{ position: 'fixed', left: '50%', bottom: 22, transform: 'translateX(-50%)', zIndex: 35, background: '#1B1B18', color: '#fff', borderRadius: 16, padding: '11px 14px 11px 18px', display: 'flex', alignItems: 'center', gap: 14, boxShadow: '0 14px 44px rgba(0,0,0,.24)', animation: 'popIn .22s ease', maxWidth: '94vw', flexWrap: 'wrap' }}>
      <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.03em', whiteSpace: 'nowrap' }}>比較清單 {compareCount}/4</span>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {compareChips.map((chip) => (
          <span key={chip.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,.13)', borderRadius: 8, padding: '5px 6px 5px 10px', fontSize: 12.5, whiteSpace: 'nowrap' }}>
            {chip.name}
            <button onClick={chip.onRemove} style={{ border: 'none', background: 'none', color: 'rgba(255,255,255,.65)', cursor: 'pointer', fontSize: 14, padding: 0, lineHeight: 1, fontFamily: 'inherit' }}>×</button>
          </span>
        ))}
      </div>
      <button onClick={onClearCompare} style={{ border: 'none', background: 'none', color: 'rgba(255,255,255,.55)', fontSize: 12.5, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>清除</button>
      {canCompare ? (
        <button onClick={onOpenCompare} style={{ border: 'none', background: 'var(--accent)', color: '#fff', borderRadius: 10, padding: '9px 16px', fontSize: 13.5, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>開始比較 →</button>
      ) : (
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,.5)', whiteSpace: 'nowrap' }}>再選一個比較</span>
      )}
    </div>
  )
}
