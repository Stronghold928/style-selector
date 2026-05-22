// method.jsx — "The Method" — 6 decisions in order, interactive.
// This is the centerpiece demo: a clickable track that shows what each style
// chooses at every step.

const METHOD_STEPS = [
  {
    code: '01', key: 'flooring', name: 'Flooring + Wood Tone',
    summary: 'Sets the undertone for the entire home.',
    why: 'Every other finish must coordinate with this. Get this right and the home organizes itself around it.',
    locks: 'Material · Tone · Plank width · Stain · All wood in the home',
  },
  {
    code: '02', key: 'cabinets', name: 'Cabinets',
    summary: 'Your largest visual element. Longest lead time.',
    why: 'Cannot wait — 8 to 16 week lead time. Must happen before stone and tile so countertop and backsplash coordinate with cabinet finish.',
    locks: 'Approach · Door profile · Stain &/or paint · Hardware position',
  },
  {
    code: '03', key: 'stone', name: 'Stone + Tile',
    summary: 'Countertop first, always — then tile follows.',
    why: 'The slab sits next to the backsplash for decades. Choose the slab first, let tile coordinate with it. Two or three tiles total — repeated throughout.',
    locks: 'Counter material · Finish · Edge profile · Tile + grout',
  },
  {
    code: '04', key: 'metals', name: 'Metals + Lighting',
    summary: 'Decided as a whole-home system, never room-by-room.',
    why: 'Every metal in a room reads together. One primary metal everywhere, one accent in a single category. Two metals max. Three only with very clear intent.',
    locks: 'Primary metal · Accent metal · Lighting layers',
  },
  {
    code: '05', key: 'color', name: 'Color Palette',
    summary: 'Five colors. Used in different combinations.',
    why: 'Paint comes near the end — it should serve your hard finishes, not compete with them. White, neutral, contrast, two accents. Five total.',
    locks: 'White · Neutral · Contrast · Accent 1 · Accent 2',
  },
  {
    code: '06', key: 'millwork', name: 'Millwork',
    summary: 'The finishing architectural layer.',
    why: 'Every decision here depends on the five steps before it. Trim, doors, ceiling treatments, built-ins — all must respond to what came before.',
    locks: 'Trim · Doors · Drywall level · Built-ins · Ceiling',
  },
];

function Method({ active }) {
  const [stepIdx, setStepIdx] = React.useState(0);
  const step = METHOD_STEPS[stepIdx];
  const selection = active.method[step.code];

  return (
    <section id="method" style={{ paddingBottom: 80 }}>
      <div className="shell">
        <div className="sect-head">
          <div className="sect-code">§03 · The Method · Demo</div>
          <h2 className="sect-title">
            Six decisions, in <em>this order</em>.
            <span className="small">
              When you make the right six decisions in the right order, every room applies those decisions rather than remaking them.
              Walk through the method below — each step shows what an <em>{active.name.toLowerCase()}</em> home would choose.
            </span>
          </h2>
        </div>

        <MethodTrack stepIdx={stepIdx} onChange={setStepIdx} />

        <MethodDetail
          step={step} idx={stepIdx} total={METHOD_STEPS.length}
          selection={selection} active={active}
          onNext={() => setStepIdx((i) => Math.min(i + 1, METHOD_STEPS.length - 1))}
          onPrev={() => setStepIdx((i) => Math.max(i - 1, 0))}
        />
      </div>
    </section>
  );
}

function MethodTrack({ stepIdx, onChange }) {
  return (
    <div style={{
      borderTop: '1px solid var(--line-2)', borderBottom: '1px solid var(--line-2)',
      marginBottom: 56,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${METHOD_STEPS.length}, 1fr)` }}>
        {METHOD_STEPS.map((s, i) => {
          const isActive = i === stepIdx;
          const isPassed = i < stepIdx;
          return (
            <button
              key={s.key}
              type="button"
              onClick={() => onChange(i)}
              style={{
                position: 'relative',
                padding: '24px 18px 22px',
                background: isActive ? 'var(--surface)' : 'transparent',
                border: 0,
                borderRight: i === METHOD_STEPS.length - 1 ? 'none' : '1px solid var(--line-2)',
                textAlign: 'left', cursor: 'default',
                display: 'flex', flexDirection: 'column', gap: 12,
                color: 'var(--ink)',
                transition: 'background .3s ease',
              }}
            >
              <div style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span className="mono" style={{
                  fontSize: 10.5, letterSpacing: '0.14em',
                  color: isActive ? 'var(--accent)' : 'var(--stone)',
                }}>
                  § {s.code}
                </span>
                <span style={{
                  width: 10, height: 10, borderRadius: '50%',
                  background: isActive ? 'var(--ink)' : isPassed ? 'var(--accent)' : 'transparent',
                  border: `1px solid ${isActive || isPassed ? 'var(--ink)' : 'var(--line-2)'}`,
                  transition: 'all .25s ease',
                }} />
              </div>
              <div className="serif" style={{
                fontSize: 22, lineHeight: 1.05, letterSpacing: '-0.01em',
                maxWidth: '12ch',
              }}>
                {s.name}
              </div>
              <div className="mono" style={{
                fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--stone)',
              }}>
                {isActive ? 'Now showing' : isPassed ? 'Decided' : 'Up next'}
              </div>
              <div style={{
                position: 'absolute', left: 0, right: 0, bottom: -1,
                height: 2, background: isActive ? 'var(--ink)' : 'transparent',
              }} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MethodDetail({ step, idx, total, selection, active, onNext, onPrev }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: 56,
      alignItems: 'start',
    }}>
      {/* Left: explanation */}
      <div>
        <div className="mono" style={{
          fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--stone)', marginBottom: 20,
        }}>
          Step {String(idx + 1).padStart(2, '0')} of {String(total).padStart(2, '0')} · {step.name}
        </div>

        <h3 className="serif" style={{
          fontSize: 'clamp(40px, 4.6vw, 64px)', lineHeight: 1, letterSpacing: '-0.015em',
          margin: '0 0 24px', maxWidth: '18ch',
        }}>
          {step.summary}
        </h3>

        <p style={{
          fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)',
          maxWidth: '58ch', marginBottom: 36,
        }}>
          {step.why}
        </p>

        <div style={{
          padding: '20px 24px',
          background: 'var(--surface)', border: '1px solid var(--line-2)',
          marginBottom: 40,
        }}>
          <div className="mono" style={{
            fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--stone)', marginBottom: 8,
          }}>
            This step locks in
          </div>
          <div style={{ fontSize: 15, color: 'var(--ink)' }}>{step.locks}</div>
        </div>

        {/* Nav */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: 24, borderTop: '1px solid var(--line)',
          gap: 12, flexWrap: 'wrap',
        }}>
          <button
            type="button" onClick={onPrev} disabled={idx === 0}
            className="btn ghost"
            style={{ opacity: idx === 0 ? 0.35 : 1 }}
          >
            <span style={{ display: 'inline-block', transform: 'rotate(180deg)' }}>→</span> Previous
          </button>
          <button
            type="button" onClick={onNext} disabled={idx === total - 1}
            className="btn"
            style={{ opacity: idx === total - 1 ? 0.35 : 1 }}
          >
            {idx === total - 1 ? 'Method complete' : `Next · ${METHOD_STEPS[idx + 1].name}`}
            <span className="arrow">→</span>
          </button>
        </div>
      </div>

      {/* Right: the SELECTION card — shows what THIS style does at this step */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <SelectionCard step={step} selection={selection} active={active} />
        <StyleNote step={step} active={active} />
      </div>
    </div>
  );
}

function SelectionCard({ step, selection, active }) {
  return (
    <div style={{
      background: 'var(--surface)', border: '1px solid var(--line-2)',
      padding: '8px 8px 28px',
    }}>
      {/* Photo-placeholder area with style massing */}
      <Placeholder
        label={`${active.name} · ${step.name}`}
        ratio={1.1}
        tone="neutral"
        style={{ border: 'none', borderBottom: '1px solid var(--line-2)' }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <StyleMassing styleKey={active.key} size={220} />
        </div>
        {/* style stamp */}
        <div style={{
          position: 'absolute', top: 14, right: 14, zIndex: 2,
          padding: '6px 10px',
          fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--ink)', background: 'var(--ground)',
          border: '1px solid var(--line-2)',
        }}>
          § {step.code} · {active.code}
        </div>
      </Placeholder>

      <div style={{ padding: '24px 24px 0' }}>
        <div className="mono" style={{
          fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--stone)', marginBottom: 12,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span>{active.name} chooses</span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '4px 8px',
            background: 'var(--accent)', color: 'var(--ground)',
          }}>
            ● Selection
          </span>
        </div>

        <h4 className="serif" style={{
          fontSize: 28, lineHeight: 1.15, letterSpacing: '-0.005em',
          margin: '0 0 10px',
        }}>
          {selection.name}
        </h4>

        <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.55 }}>
          {selection.sub}
        </p>

        {/* tiny palette echo */}
        <div style={{
          marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line)',
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span className="mono" style={{
            fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--stone)',
          }}>
            In this palette →
          </span>
          <div style={{ display: 'flex', gap: 0 }}>
            {active.palette.map((p, i) => (
              <div key={p.hex} style={{
                width: 22, height: 22, background: p.hex,
                border: '1px solid var(--line-2)',
                marginLeft: i === 0 ? 0 : -1,
              }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StyleNote({ step, active }) {
  // Each step+style combo gets a small style-specific guidance note.
  const notes = {
    transitional: {
      '01': 'Pair Pale Oak flooring with a slightly deeper cabinet stain. Same temperature family, different depth — that\u2019s how cohesion happens.',
      '02': 'Slim shaker is the move. Avoid ornate inset doors. If you go two-tone, let the island carry the Wrought Iron.',
      '03': 'Honed finishes over polished. A leathered quartzite catches less glare and ages better. Repeat the same tile in 2–3 sizes across the house.',
      '04': 'Pick a primary metal and use it everywhere — then introduce one accent in lighting only. Matte black + brushed nickel is the safest bet.',
      '05': 'White Dove at 50% on walls, 100% on trim. That single tonal relationship does more than any contrast wall ever could.',
      '06': 'Caseless or flush trim. Eight-foot solid-core doors if your ceilings can hold them. Level 4 drywall minimum on every painted wall.',
    },
    organic: {
      '01': 'Wide rift-cut white oak, hardwax oil only. Avoid stain — let the wood do the work. Same finish on every floor for continuity.',
      '02': 'Slab or slim shaker, integrated pulls. Rift-cut grain running vertically on tall cabinets. The cabinet should look like furniture, not casework.',
      '03': 'Honed travertine on counters, tonal grout on tile. Handmade zellige for moments. The variation in the material is the decoration.',
      '04': 'Unlacquered brass — and accept the patina, don\u2019t lacquer over it. Plumbing in brass, hardware in brass, lighting in brass. Black only on doors.',
      '05': 'Swiss Coffee or Manchester Tan on walls. A terracotta or muddy clay in the powder bath. Lime plaster wherever budget allows.',
      '06': 'Lime plaster returns to drywall — no casing. Exposed beams stained warmer than the floor. Wood ceilings in primary spaces.',
    },
    european: {
      '01': 'European white oak, pickled or natural matte. Wide planks (8–10"). Same floor through every room; let the textiles change, not the floor.',
      '02': 'Slim inset shaker, painted in Oyster at perimeter and Warm Taupe on the island. Sprayed lacquer-free finish — softer in raking light.',
      '03': 'Honed Calacatta is the move. Run the slab up the wall behind the range; mitre the edges. Honed limestone for bathroom floors.',
      '04': 'Antique unlacquered brass on plumbing — accept the patina. Soft black on cabinet hardware. Never bright nickel or polished chrome.',
      '05': 'Oyster on walls, Mushroom on cabinetry, Muted Forest in one moody room (office or library). Limewash on a single accent wall if the wall geometry rewards it.',
      '06': 'Plaster reveal trim, no casing. Black steel windows with slim mullions. One arched opening per floor — never every doorway.',
    },
  };
  const note = notes[active.key]?.[step.code];
  if (!note) return null;
  return (
    <div style={{
      padding: '24px 28px',
      background: 'var(--ink)', color: 'var(--ground)',
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div className="mono" style={{
        fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--neutral-2)',
      }}>
        For {active.name.toLowerCase()} specifically
      </div>
      <p className="serif" style={{ fontSize: 21, lineHeight: 1.4, margin: 0 }}>
        {note}
      </p>
    </div>
  );
}

Object.assign(window, { Method });
