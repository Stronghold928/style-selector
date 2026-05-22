// glance.jsx — "Style at a Glance" section
// Shows: large palette display + "What fits / What doesn't fit" lists.
// Re-renders entirely when active style changes.

function Glance({ active }) {
  return (
    <section id="glance" data-bg="neutral">
      <div className="shell">
        <div className="sect-head">
          <div className="sect-code">§01 · Style at a Glance · {active.code}</div>
          <h2 className="sect-title">
            <em>{active.name}</em>, in a glance.
            <span className="small">{active.description}</span>
          </h2>
        </div>

        {/* Big palette display */}
        <div style={{ marginBottom: 80 }}>
          <div className="mono" style={{
            fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--stone)', marginBottom: 18,
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <span>The Five-Color Palette</span>
            <span>5 colors · used in different combinations · not five different colors in every room</span>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: `repeat(${active.palette.length}, 1fr)`, gap: 0,
            background: 'var(--surface)', border: '1px solid var(--line-2)',
          }}>
            {active.palette.map((p, i) => (
              <BigSwatch key={p.hex} {...p} isLast={i === active.palette.length - 1} />
            ))}
          </div>
        </div>

        {/* What fits / What doesn't */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0,
          border: '1px solid var(--line-2)', background: 'var(--surface)',
        }}>
          <FitColumn
            title="What fits this style"
            symbol="✓"
            items={active.fits}
            color="var(--accent)"
            border
          />
          <FitColumn
            title="What doesn't fit"
            symbol="✗"
            items={active.doesntFit}
            color="var(--stone)"
            strike
          />
        </div>

        <GuardrailFilter active={active} />
      </div>
    </section>
  );
}

function BigSwatch({ name, code, hex, role, isLast }) {
  return (
    <div style={{
      borderRight: isLast ? 'none' : '1px solid var(--line-2)',
      display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ height: 220, background: hex }} />
      <div style={{
        padding: '20px 22px 22px',
        display: 'flex', flexDirection: 'column', gap: 8,
        borderTop: '1px solid var(--line-2)',
      }}>
        <div className="mono" style={{
          fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--stone)',
        }}>
          {role}
        </div>
        <div style={{ fontSize: 17, color: 'var(--ink)', lineHeight: 1.2 }}>
          {name}
        </div>
        <div className="mono" style={{
          fontSize: 10.5, letterSpacing: '0.08em',
          color: 'var(--stone)', display: 'flex', justifyContent: 'space-between',
          marginTop: 4,
        }}>
          <span>{code}</span>
          <span style={{ textTransform: 'uppercase' }}>{hex}</span>
        </div>
      </div>
    </div>
  );
}

function FitColumn({ title, symbol, items, color, border, strike }) {
  return (
    <div style={{
      padding: '32px 32px 36px',
      borderRight: border ? '1px solid var(--line-2)' : 'none',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24,
        paddingBottom: 16, borderBottom: '1px solid var(--line-2)',
      }}>
        <span style={{
          width: 28, height: 28, border: `1.2px solid ${color}`,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          color: color, fontSize: 14,
        }}>{symbol}</span>
        <span style={{
          fontFamily: '"Instrument Serif", serif', fontSize: 26, color: 'var(--ink)',
        }}>
          {title}
        </span>
      </div>

      <ul style={{
        listStyle: 'none', padding: 0, margin: 0,
        display: 'flex', flexDirection: 'column', gap: 0,
      }}>
        {items.map((it, i) => (
          <li key={it} style={{
            display: 'flex', alignItems: 'flex-start', gap: 14,
            padding: '13px 0',
            borderBottom: i === items.length - 1 ? 'none' : '1px solid var(--line)',
            fontSize: 14.5,
            color: strike ? 'var(--stone)' : 'var(--ink)',
            textDecoration: strike ? 'line-through' : 'none',
            textDecorationColor: 'rgba(0,0,0,.25)',
          }}>
            <span style={{
              flex: '0 0 auto', marginTop: 8,
              width: 6, height: 6,
              background: strike ? 'transparent' : color,
              border: strike ? `1px solid ${color}` : 'none',
              borderRadius: strike ? '50%' : 0,
            }} />
            <span style={{ lineHeight: 1.45 }}>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GuardrailFilter({ active }) {
  const questions = [
    'Does this feel elevated and timeless, or trendy and dated?',
    'Does it balance classic character with a clean modern edge?',
    'Does it add contrast intentionally — or just visual confusion?',
    'Could this piece live comfortably in this home for 20 years?',
  ];
  return (
    <div style={{
      marginTop: 80,
      background: 'var(--ink)', color: 'var(--ground)',
      padding: '56px 56px 64px',
      display: 'grid', gridTemplateColumns: '240px 1fr', gap: 56,
    }}>
      <div>
        <div className="mono" style={{
          fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--neutral)', marginBottom: 16,
        }}>
          The Guardrail Filter
        </div>
        <div className="serif" style={{
          fontSize: 36, lineHeight: 1.05, letterSpacing: '-0.01em',
        }}>
          Ask before every purchase.
        </div>
      </div>

      <ol style={{
        listStyle: 'none', padding: 0, margin: 0,
        display: 'flex', flexDirection: 'column', gap: 0,
        counterReset: 'q',
      }}>
        {questions.map((q, i) => (
          <li key={q} style={{
            display: 'grid', gridTemplateColumns: '60px 1fr',
            gap: 24, padding: '20px 0',
            borderTop: i === 0 ? '1px solid rgba(255,255,255,.18)' : 'none',
            borderBottom: '1px solid rgba(255,255,255,.18)',
            alignItems: 'baseline',
          }}>
            <span className="mono" style={{
              fontSize: 11, letterSpacing: '0.14em', color: 'var(--neutral-2)',
            }}>
              0{i + 1}
            </span>
            <span style={{
              fontFamily: '"Instrument Serif", serif', fontSize: 24, lineHeight: 1.3,
              color: 'var(--surface)',
            }}>
              {q}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

Object.assign(window, { Glance });
