// Inline-style builders ported from the original DC component, returning
// React-style objects (camelCased keys).

export const dot = (color, sz) => ({
  width: (sz || 7) + 'px',
  height: (sz || 7) + 'px',
  borderRadius: '50%',
  background: color,
  display: 'inline-block',
  flex: 'none',
})

export const chipStyle = (active) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '7px',
  border: active ? '1px solid #1B1B18' : '1px solid #E2E0D8',
  background: active ? '#1B1B18' : '#fff',
  color: active ? '#fff' : '#3A3A34',
  borderRadius: '9px',
  padding: '6px 11px',
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
  fontFamily: 'inherit',
  whiteSpace: 'nowrap',
  transition: 'all .12s',
})

export const segStyle = (active) => ({
  border: 'none',
  borderRadius: '8px',
  padding: '7px 13px',
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
  fontFamily: 'inherit',
  whiteSpace: 'nowrap',
  transition: 'all .12s',
  background: active ? '#1B1B18' : 'transparent',
  color: active ? '#fff' : '#6E6E66',
})

export const priceBadge = () => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  background: '#F4F2EC',
  border: '1px solid #EAE8E1',
  borderRadius: '8px',
  padding: '4px 9px',
  fontSize: '12.5px',
  fontWeight: 600,
  color: '#56564E',
  whiteSpace: 'nowrap',
})

export const navRow = (active, indent) => {
  const st = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '7px 10px',
    borderRadius: '9px',
    cursor: 'pointer',
    transition: 'background .12s',
    color: active ? 'var(--accent)' : '#3A3A34',
    background: active ? 'color-mix(in srgb, var(--accent) 11%, #ffffff)' : 'transparent',
  }
  if (indent) st.paddingLeft = '30px'
  return st
}

export const navLabel = (strong) => ({
  fontSize: strong ? '14px' : '13px',
  fontWeight: strong ? 700 : 500,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  flex: '1',
  minWidth: '0',
})

export const navCount = (active) => ({
  marginLeft: 'auto',
  fontSize: '11.5px',
  fontWeight: 600,
  fontVariantNumeric: 'tabular-nums',
  color: active ? 'var(--accent)' : '#B0AFA5',
  flex: 'none',
})

export const chev = () => ({
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  color: '#9A9A90',
  fontSize: '10px',
  width: '14px',
  padding: '0',
  fontFamily: 'inherit',
  lineHeight: 1,
  flex: 'none',
})
