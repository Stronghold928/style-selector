// dna.jsx — "Style DNA" — 5 principles per active style.
// Click any row to reveal the body copy.

function DNA({ active }) {
  const [openIdx, setOpenIdx] = React.useState(0);

  // Reset open row to 0 whenever style switches — guards against an index that
  // exists in both but reads "wrong" because the user was studying a specific
  // principle that has now changed underneath them.
  React.useEffect(() => { setOpenIdx(0); }, [active.key]);

  return (
    <section id="dna" data-bg="ink">
      <div className="shell">
        <div className="sect-head">
          <div className="sect-code">§02 · Style DNA · {active.code}</div>
          <h2 className="sect-title" style={{ color: 'var(--ground)' }}>
            Five principles for an <em>{active.name.toLowerCase()}</em> home.
            <span className="small">The principles behind every decision in this guide. Click any rule to see why it matters.</span>
          </h2>
        </div>

        <div style={{
          border: '1px solid rgba(255,255,255,.18)',
          background: 'rgba(255,255,255,.02)',
        }}>
          {active.dna.map((p, i) => (
            <DNARow
              key={p.n}
              {...p}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              isFirst={i === 0}
              accent="var(--neutral-2)"
            />
          ))}
        </div>

        <DNAFootnote active={active} />
      </div>
    </section>
  );
}

function DNARow({ n, kicker, title, body, isOpen, onToggle, isFirst, accent }) {
  return (
    <div style={{
      borderTop: isFirst ? 'none' : '1px solid rgba(255,255,255,.18)',
    }}>
      <button
        type="button"
        onClick={onToggle}
        style={{
          display: 'grid', gridTemplateColumns: '60px 200px 1fr 50px',
          gap: 32, alignItems: 'center', width: '100%',
          padding: '28px 36px', textAlign: 'left',
          background: 'transparent', border: 0, color: 'var(--ground)',
          cursor: 'default',
        }}
      >
        <span className="mono" style={{
          fontSize: 11, letterSpacing: '0.14em', color: accent,
        }}>
          § {n}
        </span>
        <span className="mono" style={{
          fontSize: 10.5, letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,.65)',
        }}>
          {kicker}
        </span>
        <span className="serif" style={{
          fontSize: 30, lineHeight: 1.1, letterSpacing: '-0.01em',
          color: 'var(--ground)',
        }}>
          {title}
        </span>
        <span style={{
          justifySelf: 'end',
          width: 36, height: 36, borderRadius: '50%',
          border: '1px solid rgba(255,255,255,.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all .3s ease',
          background: isOpen ? accent : 'transparent',
          borderColor: isOpen ? accent : 'rgba(255,255,255,.3)',
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" style={{
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform .3s ease',
          }}>
            <line x1="2" y1="6" x2="10" y2="6" stroke={isOpen ? 'var(--ink)' : 'var(--ground)'} strokeWidth="1.4" />
            <line x1="6" y1="2" x2="6" y2="10" stroke={isOpen ? 'var(--ink)' : 'var(--ground)'} strokeWidth="1.4" />
          </svg>
        </span>
      </button>

      <div style={{
        maxHeight: isOpen ? 400 : 0,
        overflow: 'hidden',
        transition: 'max-height .5s ease',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '60px 200px 1fr 50px',
          gap: 32, padding: '0 36px 36px',
        }}>
          <span />
          <span />
          <p style={{
            fontSize: 17, lineHeight: 1.65, color: 'rgba(244,239,230,.78)',
            maxWidth: '64ch', margin: 0,
          }}>
            {body}
          </p>
          <span />
        </div>
      </div>
    </div>
  );
}

function DNAFootnote({ active }) {
  return (
    <div style={{
      marginTop: 56,
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32,
      alignItems: 'stretch',
    }}>
      <div style={{
        padding: '32px 36px',
        border: '1px solid rgba(255,255,255,.18)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16,
      }}>
        <div className="mono" style={{
          fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--neutral-2)',
        }}>
          Your goal
        </div>
        <p className="serif" style={{
          fontSize: 28, lineHeight: 1.35,
          color: 'var(--ground)', margin: 0,
        }}>
          Your goal is not perfection — it&rsquo;s a home that feels right. This is a set of guardrails, not strict rules. Make it yours.
        </p>
      </div>

      <div style={{
        padding: '32px 36px',
        background: 'var(--accent)', color: 'var(--ground)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 16,
      }}>
        <div className="mono" style={{
          fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
          opacity: 0.7,
        }}>
          The signature move
        </div>
        <p className="serif" style={{
          fontSize: 28, lineHeight: 1.35, margin: 0,
        }}>
          {active.key === 'transitional' && 'Bold contrast against soft creamy walls. One or two high-contrast moments per space — Wrought Iron against White Dove.'}
          {active.key === 'organic' && 'Material that asks to be touched. Lime plaster, wide white oak, unlacquered brass that patinas with the house.'}
          {active.key === 'european' && 'Honed marble, aged unlacquered brass, lime plaster — beauty that doesn\u2019t announce itself. Old-world references with modern restraint.'}
        </p>
      </div>
    </div>
  );
}

Object.assign(window, { DNA });
