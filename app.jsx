// app.jsx — root shell. Owns activeStyle state, applies its theme to :root,
// renders all sections, and exposes a sticky style switcher.

const { useState, useEffect } = React;

const NAV_SECTIONS = [
  { id: 'cover',   label: 'Cover',   code: '00' },
  { id: 'glance',  label: 'Glance',  code: '01' },
  { id: 'dna',     label: 'DNA',     code: '02' },
  { id: 'method',  label: 'Method',  code: '03' },
  { id: 'splurge', label: 'Splurge', code: '04' },
];

function App() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const activeKey = t.activeStyle || 'transitional';
  const active = STYLES[activeKey] || STYLES.transitional;
  const [scrolled, setScrolled] = useState(false);

  // Apply this style's theme to :root
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(active.theme).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [activeKey]);

  // Scroll state for topbar border
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const pickStyle = (key) => setTweak('activeStyle', key);

  return (
    <>
      <TopBar scrolled={scrolled} active={active} activeKey={activeKey} onPick={pickStyle} />

      <main>
        <Cover activeKey={activeKey} onPick={pickStyle} />
        <Glance active={active} />
        <DNA active={active} />
        <Method active={active} />
        <Splurge active={active} />
        <Closing active={active} onPickStyle={pickStyle} />
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Active style" />
        <TweakSelect
          label="Style"
          value={activeKey}
          options={STYLE_LIST.map((s) => ({ value: s.key, label: s.name }))}
          onChange={(v) => setTweak('activeStyle', v)}
        />

        <TweakSection label="Jump to section" />
        <TweakButton label="§01 Style at a Glance" onClick={() => goTo('glance')} />
        <TweakButton label="§02 Style DNA" onClick={() => goTo('dna')} secondary />
        <TweakButton label="§03 The Method (demo)" onClick={() => goTo('method')} />
        <TweakButton label="§04 Splurge vs Save" onClick={() => goTo('splurge')} secondary />
        <TweakButton label="↑ Back to cover" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} secondary />
      </TweaksPanel>
    </>
  );
}

function goTo(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
}

function TopBar({ scrolled, active, activeKey, onPick }) {
  return (
    <header className={`topbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#cover" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
        <Wordmark />
      </a>

      {/* Style switcher pill */}
      <div className="style-switcher" role="radiogroup" aria-label="Active style">
        {STYLE_LIST.map((s) => (
          <button
            key={s.key}
            type="button"
            role="radio"
            aria-checked={s.key === activeKey}
            className={s.key === activeKey ? 'active' : ''}
            onClick={() => onPick(s.key)}
            title={s.name}
          >
            {s.code}
          </button>
        ))}
      </div>

      <div className="meta">
        <span className="meta-hide">{active.name}</span>
        <span style={{
          width: 8, height: 8, background: 'var(--accent)',
          display: 'inline-block', flex: '0 0 auto',
        }} />
      </div>
    </header>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
