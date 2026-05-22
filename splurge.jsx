// splurge.jsx — "Splurge vs Save" — per-style guidance.
// Six categories. Toggle a row to see which side belongs in this style.

function Splurge({ active }) {
  return (
    <section id="splurge" data-bg="neutral" style={{ paddingBottom: 100 }}>
      <div className="shell">
        <div className="sect-head">
          <div className="sect-code">§04 · Splurge vs Save · {active.code}</div>
          <h2 className="sect-title">
            Where to <em>invest</em>, where to <em>simplify</em>.
            <span className="small">
              Every good home design starts with knowing what is worth the splurge and what isn&rsquo;t.
              Below: how an <em>{active.name.toLowerCase()}</em> home spends.
            </span>
          </h2>
        </div>

        <div style={{
          background: 'var(--surface)', border: '1px solid var(--line-2)'
        }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '60px 1.2fr 1fr 1fr',
            gap: 0, padding: '16px 24px',
            borderBottom: '1px solid var(--line-2)',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--stone)'
          }}>
            <span>§</span>
            <span>Category</span>
            <span style={{ color: 'var(--accent)' }}>Splurge if…</span>
            <span>Save if…</span>
          </div>

          {active.splurgeSave.map((row, i) =>
          <SplurgeRow key={row[0]} row={row} idx={i} isLast={i === active.splurgeSave.length - 1} />
          )}
        </div>

        <FinalAdvice active={active} />
      </div>
    </section>);

}

function SplurgeRow({ row, idx, isLast }) {
  const [cat, splurge, save] = row;
  const [hover, setHover] = React.useState(null);
  return (
    <div
      onMouseLeave={() => setHover(null)}
      style={{
        display: 'grid', gridTemplateColumns: '60px 1.2fr 1fr 1fr',
        gap: 0, alignItems: 'stretch',
        borderBottom: isLast ? 'none' : '1px solid var(--line)'
      }}>
      
      <div style={{
        padding: '24px 24px', display: 'flex', alignItems: 'center'
      }}>
        <span className="mono" style={{
          fontSize: 11, letterSpacing: '0.14em', color: 'var(--stone)'
        }}>
          0{idx + 1}
        </span>
      </div>

      <div style={{
        padding: '24px 24px 24px 0', display: 'flex', alignItems: 'center'
      }}>
        <span className="serif" style={{ fontSize: 24, letterSpacing: '-0.005em' }}>
          {cat}
        </span>
      </div>

      <div
        onMouseEnter={() => setHover('splurge')}
        style={{
          padding: '24px 24px',
          background: hover === 'splurge' ? 'var(--ground-2)' : 'transparent',
          borderLeft: '1px solid var(--line)',
          transition: 'background .2s',
          display: 'flex', alignItems: 'flex-start', gap: 12
        }}>
        
        <span style={{
          flex: '0 0 auto', marginTop: 5,
          width: 8, height: 8, background: 'var(--accent)', borderRadius: 0
        }} />
        <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink)' }}>
          {splurge}
        </span>
      </div>

      <div
        onMouseEnter={() => setHover('save')}
        style={{
          padding: '24px 24px',
          background: hover === 'save' ? 'var(--ground-2)' : 'transparent',
          borderLeft: '1px solid var(--line)',
          transition: 'background .2s',
          display: 'flex', alignItems: 'flex-start', gap: 12
        }}>
        
        <span style={{
          flex: '0 0 auto', marginTop: 5,
          width: 8, height: 8, border: '1.2px solid var(--stone)',
          borderRadius: '50%'
        }} />
        <span style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--ink-soft)' }}>
          {save}
        </span>
      </div>
    </div>);

}

function FinalAdvice({ active }) {
  const advice = {
    transitional: [
    ['Hardest to change', 'Flooring, cabinetry, tile. Lock these first.'],
    ['Cheapest decision', 'Paint sampling. $14 saves five-figure mistakes.'],
    ['The signature move', 'Bold contrast on one or two surfaces. Quiet everywhere else.']],

    organic: [
    ['Where the budget goes', 'Materials you touch daily — plaster, oak, brass. Make them real.'],
    ['Where to save', 'Decorative lighting. Plaster sconces look great at any price.'],
    ['The signature move', 'Unlacquered brass that patinas. Spec it. Don\u2019t lacquer it later.']],

    european: [
    ['Where the budget goes', 'Stone and plaster. Honed marble runs and lime-troweled walls don\u2019t fake convincingly.'],
    ['Where to save', 'Decorative lighting. A pair of plaster sconces and one vintage piece beats a designer chandelier.'],
    ['The signature move', 'One arched opening, one piece of antique brass, one boucl\u00E9 seat. Restraint is the design.']]

  }[active.key];

  return (
    <div style={{
      marginTop: 64,
      display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0,
      border: '1px solid var(--line-2)', background: 'var(--surface)'
    }}>
      {advice.map(([label, body], i) =>
      <div key={label} style={{
        padding: '28px 28px 32px',
        borderRight: i === 2 ? 'none' : '1px solid var(--line-2)',
        display: 'flex', flexDirection: 'column', gap: 14
      }}>
          <span className="mono" style={{
          fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--stone)'
        }}>
            Final advice · {String(i + 1).padStart(2, '0')}
          </span>
          <h4 className="serif" style={{ fontSize: 24, lineHeight: 1.15 }}>
            {label}
          </h4>
          <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-soft)', margin: 0 }}>
            {body}
          </p>
        </div>
      )}
    </div>);

}

// Closing strip — small CTA + colophon
function Closing({ active, onPickStyle }) {
  return (
    <section id="closing" data-bg="ink" style={{ paddingBottom: 80 }}>
      <div className="shell">
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64,
          alignItems: 'end', paddingTop: 32
        }}>
          <div>
            <Eyebrow style={{ color: 'var(--neutral)', marginBottom: 28 }}>
              The other two styles
            </Eyebrow>
            <h2 className="serif" style={{
              fontSize: 'clamp(40px, 5.4vw, 78px)', lineHeight: 0.98,
              letterSpacing: '-0.015em', color: 'var(--ground)',
              maxWidth: '18ch', marginBottom: 32
            }}>
              Try the same method <em style={{ color: 'var(--neutral-2)' }}>in a different voice</em>.
            </h2>
            <p style={{
              fontSize: 17, lineHeight: 1.55, color: 'var(--neutral)',
              maxWidth: '50ch', marginBottom: 36
            }}>
              The method doesn&rsquo;t change. The decisions stay in the same order. Switch the style — see how every step answers differently.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {STYLE_LIST.filter((s) => s.key !== active.key).map((s) =>
              <button
                key={s.key}
                type="button"
                onClick={() => {
                  onPickStyle(s.key);
                  setTimeout(() => {
                    const el = document.getElementById('cover');
                    if (el) window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  padding: '14px 22px',
                  background: 'transparent', color: 'var(--ground)',
                  border: '1px solid rgba(255,255,255,.3)',
                  fontFamily: '"Geist", sans-serif', fontSize: 14,
                  cursor: 'default', borderRadius: 999,
                  transition: 'all .25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = s.theme['--ground'];
                  e.currentTarget.style.color = s.theme['--ink'];
                  e.currentTarget.style.borderColor = s.theme['--ground'];
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--ground)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,.3)';
                }}>
                
                  <span style={{
                  width: 22, height: 22, display: 'inline-flex', gap: 0
                }}>
                    {s.palette.slice(0, 4).map((p, i) =>
                  <span key={i} style={{ flex: 1, background: p.hex }} />
                  )}
                  </span>
                  Try {s.name} →
                </button>
              )}
            </div>
          </div>

          <div style={{
            padding: '32px 36px',
            border: '1px solid rgba(255,255,255,.2)',
            display: 'flex', flexDirection: 'column', gap: 16
          }}>
            <div className="mono" style={{
              fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--neutral-2)'
            }}>
              A note
            </div>
            <p className="serif" style={{
              fontSize: 22, lineHeight: 1.4, color: 'var(--ground)', margin: 0
            }}>
              &ldquo;Your goal is not perfection — it&rsquo;s a home that feels right. This is a set of guardrails, not strict rules. Use it with confidence. Make it yours.&rdquo;
            </p>
            <div className="mono" style={{
              fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--neutral)', marginTop: 8
            }}>— DEREK HANSON, DESIGNER

            </div>
          </div>
        </div>

        <Colophon active={active} />
      </div>
    </section>);

}

function Colophon({ active }) {
  return (
    <div style={{
      marginTop: 80, paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.18)',
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
      fontFamily: '"JetBrains Mono", monospace', fontSize: 10.5,
      letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--neutral)'
    }}>
      <div style={{ color: 'var(--ground)' }}>Stronghold / 928</div>
      <div>Style Guide · v2026.05</div>
      <div>BUILT ON THE STRONGHOLD 928 METHOD</div>
      <div style={{ textAlign: 'right' }}>Now showing · {active.name}</div>
    </div>);

}

Object.assign(window, { Splurge, Closing });