// cover.jsx — Cover: picks one of 3 styles, re-themes the whole page

function Cover({ activeKey, onPick }) {
  const active = STYLES[activeKey];
  return (
    <section id="cover" style={{
      paddingTop: 110, paddingBottom: 0, minHeight: '100vh',
      display: 'flex', flexDirection: 'column'
    }}>
      <div className="shell" style={{ paddingTop: 28, width: '100%' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80,
          alignItems: 'end', marginBottom: 48
        }}>
          <div>
            <Eyebrow style={{ marginBottom: 28 }}>
              Style Guide · A Demonstration · 2026
            </Eyebrow>
            <h1 className="serif" style={{
              fontSize: 'clamp(56px, 8.4vw, 132px)', lineHeight: 0.92,
              letterSpacing: '-0.022em', margin: 0
            }}>
              Your style simplified in<br />
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>three</span> voices.
            </h1>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingBottom: 8 }}>
            <p style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: 22, lineHeight: 1.4, color: 'var(--ink-soft)', maxWidth: '34ch'
            }}>One method. Three style languages. Choose the one that speaks to you, and your home will speak it back.

            </p>
            <p className="mono" style={{
              fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--stone)'
            }}>
              Currently showing → <span style={{ color: 'var(--ink)' }}>{active.name}</span>
            </p>
          </div>
        </div>

        {/* Picker header — over the moodboards */}
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
          paddingBottom: 18, marginBottom: 22,
          borderBottom: '1px solid var(--line-2)',
          gap: 24, flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 18 }}>
            <span className="mono" style={{
              fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--stone)'
            }}>
              § 00 · The Three Voices
            </span>
            <span style={{
              fontFamily: '"Instrument Serif", serif',
              fontSize: 22, fontStyle: 'italic', color: 'var(--ink-soft)'
            }}>
              tap any board to re-theme this guide.
            </span>
          </div>
          <span className="mono" style={{
            fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--stone)'
          }}>
            03 mood boards / 18 rooms
          </span>
        </div>

        {/* Three style cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28,
          marginBottom: 80
        }}>
          {STYLE_LIST.map((s) =>
          <StyleCard
            key={s.key}
            style={s}
            isActive={s.key === activeKey}
            onClick={() => onPick(s.key)} />

          )}
        </div>
      </div>

      <CoverFooter active={active} />
    </section>);

}

function StyleCard({ style: s, isActive, onClick }) {
  const [hover, setHover] = React.useState(false);
  const previewInk = s.theme['--ink'];
  const previewAccent = s.theme['--accent'];

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-pressed={isActive}
      style={{
        position: 'relative', textAlign: 'left',
        border: 0,
        background: 'transparent',
        padding: 0, cursor: 'default',
        display: 'flex', flexDirection: 'column', gap: 14,
        transition: 'transform .35s cubic-bezier(.2,.7,.2,1)',
        transform: isActive ? 'translateY(-6px)' : hover ? 'translateY(-3px)' : 'none'
      }}>
      
      {/* Moodboard hero */}
      <div style={{
        position: 'relative',
        aspectRatio: '1077 / 950',
        overflow: 'hidden',
        background: '#0c0c0c',
        outline: isActive ? `2px solid ${previewInk}` : '1px solid var(--line-2)',
        outlineOffset: isActive ? '4px' : '0px',
        boxShadow: isActive ?
        '0 30px 70px -24px rgba(0,0,0,.42)' :
        hover ? '0 22px 50px -28px rgba(0,0,0,.32)' : '0 6px 20px -16px rgba(0,0,0,.25)',
        transition: 'box-shadow .35s ease, outline-offset .35s ease'
      }}>
        <img
          src={s.moodboard}
          alt={`${s.name} mood board`}
          style={{
            display: 'block',
            width: '100%', height: '100%', objectFit: 'cover',
            transform: hover && !isActive ? 'scale(1.025)' : 'scale(1)',
            transition: 'transform .8s cubic-bezier(.2,.7,.2,1), filter .4s ease',
            filter: isActive ? 'none' : hover ? 'none' : 'saturate(.92)'
          }} />
        

        {/* Inactive scrim — lifts on hover */}
        <div style={{
          position: 'absolute', inset: 0,
          background: isActive ?
          'linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,.0) 100%)' :
          'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,.18) 100%)',
          opacity: isActive ? 0 : hover ? 0.25 : 1,
          transition: 'opacity .4s ease',
          pointerEvents: 'none'
        }} />

        {/* Top badge row */}
        <div style={{
          position: 'absolute', top: 14, left: 14, right: 14,
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          pointerEvents: 'none'
        }}>
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#fff',
            padding: '6px 10px',
            background: 'rgba(0,0,0,.55)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)'
          }}>
            § {s.code}
          </span>
          {isActive ?
          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#0c0c0c',
            padding: '7px 12px',
            background: '#fff',
            display: 'inline-flex', alignItems: 'center', gap: 8
          }}>
              <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: previewAccent || '#0c0c0c',
              animation: 'pulse 2.2s ease-in-out infinite'
            }} />
              Showing
            </span> :

          <span style={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase',
            color: '#fff',
            padding: '6px 10px',
            background: 'rgba(0,0,0,.55)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            opacity: hover ? 1 : 0.85,
            transition: 'opacity .25s ease'
          }}>
              Select →
            </span>
          }
        </div>
      </div>

      {/* Caption strip */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 6,
        padding: '0 2px'
      }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12
        }}>
          <span className="mono" style={{
            fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--stone)'
          }}>
            {s.eyebrow}
          </span>
          <span className="mono" style={{
            fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: isActive ? 'var(--ink)' : 'var(--stone)',
            opacity: isActive ? 1 : hover ? 1 : 0.55,
            transform: hover && !isActive ? 'translateX(3px)' : 'none',
            transition: 'all .25s ease'
          }}>
            {isActive ? 'Theme applied' : 'Tap to apply'}
          </span>
        </div>
        <p className="serif" style={{
          fontSize: 18, lineHeight: 1.32, color: 'var(--ink)',
          maxWidth: '34ch', margin: 0
        }}>
          {s.tagline}
        </p>
      </div>
    </button>);

}

// Footer strip under cover: live palette of the *currently active* style
function CoverFooter({ active }) {
  return (
    <div style={{ borderTop: '1px solid var(--line)', background: 'var(--ground-2)' }}>
      <div className="shell">
        <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 0 }}>
          <div style={{
            padding: '24px 24px 24px 0',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6,
            borderRight: '1px solid var(--line)'
          }}>
            <span className="mono" style={{
              fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--stone)'
            }}>
              Active palette
            </span>
            <span style={{ fontSize: 16, color: 'var(--ink)' }}>{active.name}</span>
          </div>
          <div style={{ display: 'flex' }}>
            {active.palette.map((p, i) =>
            <div key={p.hex} style={{
              flex: 1, padding: '18px 20px',
              borderRight: i === active.palette.length - 1 ? 'none' : '1px solid var(--line)',
              display: 'flex', flexDirection: 'column', gap: 12
            }}>
                <div style={{
                width: 32, height: 32, background: p.hex,
                border: '1px solid var(--line-2)'
              }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div style={{ fontSize: 12.5, color: 'var(--ink)' }}>{p.name}</div>
                  <div className="mono" style={{
                  fontSize: 9.5, letterSpacing: '0.08em',
                  color: 'var(--stone)', display: 'flex', justifyContent: 'space-between', gap: 6
                }}>
                    <span style={{ textTransform: 'uppercase' }}>{p.code}</span>
                    <span style={{ textTransform: 'uppercase' }}>{p.role}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>);

}

Object.assign(window, { Cover });