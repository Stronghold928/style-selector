// shared.jsx — small reusable atoms

function Mark({ size = 22, color = 'var(--ink)', accent = 'var(--accent)' }) {
  return (
    <span style={{
      width: size, height: size, position: 'relative', display: 'inline-block',
      flex: '0 0 auto',
    }} aria-hidden="true">
      <span style={{ position: 'absolute', inset: 0, border: `1.25px solid ${color}` }} />
      <span style={{ position: 'absolute', inset: 0, border: `1.25px solid ${accent}`, transform: 'translate(4px, 4px)' }} />
    </span>
  );
}

function Wordmark({ size = 13 }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: size, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'var(--ink)',
    }}>
      <Mark size={size + 9} />
      <span style={{ fontWeight: 500 }}>Stronghold</span>
      <span style={{ opacity: .5 }}>/</span>
      <span style={{ letterSpacing: '0.22em' }}>928</span>
    </span>
  );
}

// Striped architectural placeholder with optional content
function Placeholder({ label, ratio = 4/3, tone = 'neutral', children, style }) {
  const bg = tone === 'ink' ? 'var(--ink)' : tone === 'accent' ? 'var(--accent)' : 'var(--neutral)';
  const stripe = tone === 'ink' || tone === 'accent' ? 'rgba(255,255,255,.07)' : 'rgba(34,30,24,.06)';
  return (
    <div style={{
      position: 'relative', background: bg,
      aspectRatio: typeof ratio === 'number' ? `${ratio}` : ratio,
      border: '1px solid var(--line-2)',
      overflow: 'hidden', display: 'flex',
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `repeating-linear-gradient(135deg, transparent 0 9px, ${stripe} 9px 10px)`,
        pointerEvents: 'none',
      }} />
      {children}
      {label && (
        <div style={{
          position: 'absolute', left: 14, bottom: 14, zIndex: 2,
          padding: '6px 10px',
          fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: tone === 'ink' || tone === 'accent' ? 'var(--ground)' : 'var(--ink)',
          background: tone === 'ink' || tone === 'accent' ? 'rgba(0,0,0,.45)' : 'var(--ground)',
          border: `1px solid ${tone === 'ink' || tone === 'accent' ? 'rgba(255,255,255,.2)' : 'var(--line-2)'}`,
        }}>{label}</div>
      )}
    </div>
  );
}

// Style-specific abstract massing — switches motif based on style key.
// rectilinear (Transitional), organic (Organic), arch (European)
function StyleMassing({ styleKey, size = 220 }) {
  if (styleKey === 'organic') {
    // soft arches + plaster volumes
    return (
      <svg viewBox="0 0 220 220" width={size} height={size}>
        <defs>
          <pattern id="om-grain" patternUnits="userSpaceOnUse" width="6" height="6">
            <path d="M0,3 L6,3" stroke="var(--neutral-2)" strokeWidth="0.4" opacity="0.4" />
          </pattern>
        </defs>
        <rect x="20" y="80" width="180" height="120" fill="var(--neutral)" stroke="var(--ink)" strokeWidth="1" />
        <path d="M 40 200 L 40 130 A 30 30 0 0 1 100 130 L 100 200 Z" fill="var(--ground)" stroke="var(--ink)" strokeWidth="1" />
        <path d="M 120 200 L 120 150 A 20 20 0 0 1 160 150 L 160 200 Z" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1" />
        <rect x="20" y="80" width="180" height="120" fill="url(#om-grain)" />
        <ellipse cx="180" cy="60" rx="14" ry="14" fill="var(--accent-2)" stroke="var(--ink)" strokeWidth="1" />
        <line x1="180" y1="74" x2="180" y2="80" stroke="var(--ink)" strokeWidth="1" />
      </svg>
    );
  }
  if (styleKey === 'european') {
    // central arch elevation — old-world facade reduced to geometry
    return (
      <svg viewBox="0 0 220 220" width={size} height={size}>
        <defs>
          <pattern id="em-stip" patternUnits="userSpaceOnUse" width="4" height="4">
            <circle cx="2" cy="2" r="0.4" fill="var(--ink)" opacity="0.18" />
          </pattern>
        </defs>
        {/* facade ground */}
        <rect x="20" y="30" width="180" height="170" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1" />
        <rect x="20" y="30" width="180" height="170" fill="url(#em-stip)" />
        {/* central arched opening */}
        <path
          d="M 80 200 L 80 110 A 30 30 0 0 1 140 110 L 140 200 Z"
          fill="var(--accent)"
          stroke="var(--ink)"
          strokeWidth="1"
        />
        {/* arched window mullion */}
        <line x1="110" y1="200" x2="110" y2="92" stroke="var(--ground)" strokeWidth="1" opacity="0.55" />
        <line x1="80" y1="150" x2="140" y2="150" stroke="var(--ground)" strokeWidth="1" opacity="0.55" />
        {/* flanking sash windows */}
        <rect x="36" y="60" width="28" height="44" fill="var(--neutral)" stroke="var(--ink)" strokeWidth="1" />
        <rect x="156" y="60" width="28" height="44" fill="var(--neutral)" stroke="var(--ink)" strokeWidth="1" />
        {/* chimney */}
        <rect x="160" y="14" width="14" height="22" fill="var(--neutral-2)" stroke="var(--ink)" strokeWidth="1" />
        {/* ground line */}
        <line x1="0" y1="200" x2="220" y2="200" stroke="var(--ink)" strokeWidth="1.1" />
      </svg>
    );
  }
  // transitional — rectilinear axonometric
  return (
    <svg viewBox="0 0 220 220" width={size} height={size}>
      <polygon points="30,110 110,70 190,110 110,150" fill="var(--neutral)" stroke="var(--ink)" strokeWidth="1.1" />
      <polygon points="30,110 30,170 110,210 110,150" fill="var(--accent)" stroke="var(--ink)" strokeWidth="1.1" />
      <polygon points="110,150 110,210 190,170 190,110" fill="var(--surface)" stroke="var(--ink)" strokeWidth="1.1" />
      <rect x="135" y="40" width="14" height="50" fill="var(--accent-2)" stroke="var(--ink)" strokeWidth="1" />
      <polygon points="135,40 149,33 163,40 149,47" fill="var(--neutral)" stroke="var(--ink)" strokeWidth="1" />
      <polygon points="149,47 163,40 163,90 149,97" fill="var(--accent)" stroke="var(--ink)" strokeWidth="1" />
    </svg>
  );
}

// Eyebrow component
function Eyebrow({ children, style }) {
  return <div className="eyebrow" style={style}>{children}</div>;
}

// Small swatch chip
function SwatchChip({ hex, name, code, role, size = 'normal' }) {
  const isTall = size === 'tall';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
      <div style={{
        height: isTall ? 140 : 100, background: hex,
        border: '1px solid var(--line-2)',
      }} />
      <div style={{
        padding: '10px 12px 14px',
        borderLeft: '1px solid var(--line-2)',
        borderRight: '1px solid var(--line-2)',
        borderBottom: '1px solid var(--line-2)',
        display: 'flex', flexDirection: 'column', gap: 4,
      }}>
        <div style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--ink)' }}>{name}</div>
        <div className="mono" style={{
          fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase',
          color: 'var(--stone)', display: 'flex', justifyContent: 'space-between',
        }}>
          <span>{code}</span>
          {role && <span>{role}</span>}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Mark, Wordmark, Placeholder, StyleMassing, Eyebrow, SwatchChip });
