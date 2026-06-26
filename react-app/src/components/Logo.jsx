import { useState } from 'react'
import { LOGO_BY_ID } from '../data/tools.js'

// Replaces the original <x-import image-slot> web component.
// Renders the tool's icon from /public/icon, falling back to a lettered tile.
export default function Logo({ id, name, size = 46, radius = 9 }) {
  const file = LOGO_BY_ID[id]
  const [failed, setFailed] = useState(false)

  const box = {
    width: size,
    height: size,
    borderRadius: radius,
    flex: 'none',
    display: 'block',
    objectFit: 'contain',
    background: '#F4F2EC',
  }

  if (!file || failed) {
    return (
      <div
        style={{
          ...box,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#A8A89E',
          fontWeight: 700,
          fontSize: size * 0.4,
        }}
      >
        {(name || '?').charAt(0)}
      </div>
    )
  }

  // Accept either a full URL (http/https) or a filename in /public/icon
  const src = /^https?:\/\//.test(file) ? file : `${import.meta.env.BASE_URL}icon/${file}`

  return (
    <img
      src={src}
      alt={name}
      style={box}
      onError={() => setFailed(true)}
    />
  )
}
