// styles.jsx — the three design styles. Single source of truth.
// Each style defines: palette, DNA principles, "fits/doesn't fit" lists,
// per-step Method selections, and splurge/save guidance.

const STYLES = {
  transitional: {
    key: 'transitional',
    name: 'Transitional Modern',
    code: 'TM',
    eyebrow: 'The bridge style',
    moodboard: 'assets/moodboards/transitional.png',
    tagline: 'Classic warmth, modern restraint.',
    description:
      "Transitional Modern walks the line between traditional comfort and contemporary clean lines — and does it confidently. Nothing too stark. Nothing too ornate. Everything sits in that perfect, timeless middle.",
    // CSS variable map — applied at root when this style is active.
    theme: {
      '--ground':    '#ECE8DF',   // White Dove at 50% — walls
      '--ground-2':  '#E3DDD0',
      '--surface':   '#F4F1EA',   // White Dove 100% — trim, cabinetry
      '--neutral':   '#DDD1BC',   // Pale Oak
      '--neutral-2': '#C9B996',
      '--accent':    '#2D2F33',   // Wrought Iron
      '--accent-2':  '#4A5240',   // Dark Olive
      '--accent-3':  '#3B4F5C',   // Ocean Floor
      '--ink':       '#1F2123',
      '--ink-soft':  '#3F4145',
      '--stone':     '#6E6F70',
      '--line':      '#D2C9B8',
      '--line-2':    '#B8AC93',
    },
    palette: [
      { name: 'White Dove · 50%', code: 'BM OC-17', hex: '#ECE8DF', role: 'Walls' },
      { name: 'Pale Oak',          code: 'BM OC-20', hex: '#DDD1BC', role: 'Neutral' },
      { name: 'Dark Olive',        code: 'BM 2140-30', hex: '#4A5240', role: 'Accent' },
      { name: 'Ocean Floor',       code: 'BM 2058-20', hex: '#3B4F5C', role: 'Accent' },
      { name: 'Wrought Iron',      code: 'BM 2124-10', hex: '#2D2F33', role: 'Contrast' },
    ],
    fits: [
      'White Dove at 50% strength on walls',
      'Pale Oak as primary neutral',
      'Mid-toned wood floors, warm matte finish',
      'Slim shaker cabinets — clean profile',
      'Caseless trim or flush corners',
      'Bold contrast: Wrought Iron island, charcoal vanity',
      'Matte black or brushed nickel — pick one',
      'Mixed warm + cool tones, in balance',
    ],
    doesntFit: [
      'All-white or all-gray rooms with no warmth',
      'Heavily distressed or rustic wood',
      'Orange or red-toned stains',
      'Ornate molding and decorative cabinetry',
      'Busy tile patterns competing for attention',
      'Trendy of-the-moment finishes',
      'Mixing warm brass with cool chrome',
      'Cold industrial elements',
    ],
    dna: [
      {
        n: '01',
        kicker: 'Walk the line',
        title: 'This style walks the line — confidently.',
        body: 'Transitional Modern is the bridge. It takes the comfort and warmth of traditional design and pairs it with the clean lines and restraint of modern. Elevated yet comfortable. Polished yet livable.',
      },
      {
        n: '02',
        kicker: 'Your foundation',
        title: 'White Dove at 50% is the move.',
        body: 'Mix White Dove at 50% strength for walls — a softness no standard white can replicate. Use it at full 100% on cabinetry, trim, and finish carpentry. That tonal relationship is the entire home\u2019s built-in cohesion.',
      },
      {
        n: '03',
        kicker: 'Defining move',
        title: 'Contrast is the design.',
        body: 'What separates this from softer styles is the willingness to use contrast boldly. Wrought Iron cabinetry against creamy walls. A charcoal island anchoring a white kitchen. Choose one or two high-contrast moments per space — let everything else stay soft around them.',
      },
      {
        n: '04',
        kicker: 'Clean lines',
        title: 'Crisp, never busy.',
        body: 'Trim is clean. Cabinetry is simple. Architectural details are proportional and uncluttered. Caseless or flush-trim windows. Slim shaker, not ornate inset. Crisp and intentional — never traditional for tradition\u2019s sake.',
      },
      {
        n: '05',
        kicker: 'Two directions',
        title: 'The palette works both ways.',
        body: 'Go softer with Pale Oak, White Dove, and natural wood. Go moodier with Wrought Iron, Deep Olive, Ocean Floor. The palette stays cohesive either direction — commit to a lane and trust it.',
      },
    ],
    method: {
      '01': { name: 'Mid-toned warm oak', sub: 'Engineered, 7" plank, matte finish' },
      '02': { name: 'Two-tone shaker', sub: 'Pale Oak perimeter, Wrought Iron island' },
      '03': { name: 'Honed quartzite + classic marble-look', sub: 'Bone-warm grout, slim joints' },
      '04': { name: 'Matte black primary, brushed nickel accent', sub: 'Plumbing, hardware, statement pendants' },
      '05': { name: 'White Dove · 50% walls, 100% trim', sub: 'Dark Olive in primary bedroom · Ocean Floor in powder' },
      '06': { name: 'Caseless trim, 8\u2032 solid-core doors', sub: 'Slim baseboards, wood-paneled ceiling beam' },
    },
    splurgeSave: [
      ['Flooring', 'Wide-plank engineered hardwood', 'Mid-tone warm LVP, wider plank'],
      ['Cabinetry', 'Custom slim shaker, two-tone', 'Pre-made shaker, elevated paint + hardware'],
      ['Countertops', 'Honed quartzite or marble', 'Quality quartz that mimics natural stone'],
      ['Tile', 'Statement powder bath, patterned floor', 'Porcelain marble-look in secondary spaces'],
      ['Lighting', 'Designer pendants + sconces', 'Recessed + one or two statement fixtures'],
      ['Hardware', 'Matte black or brushed nickel, primary spaces', 'One finish, bulk order, budget secondary baths'],
    ],
    motif: 'rectilinear',  // visual rhythm: rectilinear / organic / pure-grid
  },

  organic: {
    key: 'organic',
    name: 'Organic Modern',
    code: 'OM',
    eyebrow: 'The textural style',
    moodboard: 'assets/moodboards/organic.png',
    tagline: 'Soft modernism in plaster, oak, and brass.',
    description:
      "Organic Modern lets material do the talking. Lime plaster walls. White oak you can run your hand across. Unlacquered brass that patinas with the house. Modern lines, but everything in the room has a texture you want to touch.",
    theme: {
      '--ground':    '#F2EDE3',  // chalk linen
      '--ground-2':  '#EAE2D2',
      '--surface':   '#F8F4EB',
      '--neutral':   '#D9CCB1',  // oat
      '--neutral-2': '#B89569',  // honey oak
      '--accent':    '#8B5A3C',  // terracotta
      '--accent-2':  '#B08855',  // brass
      '--accent-3':  '#5A4A38',  // walnut
      '--ink':       '#2A2218',
      '--ink-soft':  '#4A4032',
      '--stone':     '#7A6E5B',
      '--line':      '#D9CFBC',
      '--line-2':    '#BDAE91',
    },
    palette: [
      { name: 'Chalk Linen', code: 'BM Swiss Coffee', hex: '#F2EDE3', role: 'Walls' },
      { name: 'Oat',         code: 'BM Manchester Tan', hex: '#D9CCB1', role: 'Neutral' },
      { name: 'White Oak',   code: 'Rubio Pure',        hex: '#B89569', role: 'Wood' },
      { name: 'Unlacquered Brass', code: 'BM Brass Accent', hex: '#B08855', role: 'Accent' },
      { name: 'Terracotta',  code: 'BM Carolina Brick',   hex: '#8B5A3C', role: 'Contrast' },
    ],
    fits: [
      'Lime plaster walls, hand-trowelled',
      'Wide white oak planks, natural matte',
      'Unlacquered brass — let it patina',
      'Travertine or limestone counters, honed',
      'Slim shaker or slab fronts, wood-grain forward',
      'Linen, wool, undyed fibers',
      'Visible joinery, exposed beams',
      'Soft curves where they earn it (arches, niches)',
    ],
    doesntFit: [
      'Glossy lacquered finishes',
      'Cool gray or blue-undertone whites',
      'Chrome or polished nickel',
      'LVT pretending to be wood',
      'Crisp drywall corners (drywall returns + plaster wins)',
      'High-contrast moments without softness around them',
      'Synthetic textiles (poly velvet, vinyl)',
      'Recessed-can ceilings as the primary light',
    ],
    dna: [
      {
        n: '01', kicker: 'Material first',
        title: 'The material is the design.',
        body: 'Choose finishes you would want to run your hand across — plaster, oak, travertine, linen. Then design the rooms around them. The palette comes from the materials, not the other way around.',
      },
      {
        n: '02', kicker: 'Warm whites only',
        title: 'No cool whites.',
        body: 'Every white in the house should have a warm undertone — cream, linen, chalk. Cool whites read clinical against natural wood and stone. Sample on the actual wall before committing.',
      },
      {
        n: '03', kicker: 'Patina is the point',
        title: 'Finishes that age with the house.',
        body: 'Unlacquered brass. Solid bronze. Limewash that mellows. Specify finishes that improve over a decade rather than wear out. Hardware should be heavy in the hand and worth keeping for fifty years.',
      },
      {
        n: '04', kicker: 'Shadow is light',
        title: 'Layer your lighting — never overhead alone.',
        body: 'Lamps and sconces first, recessed cans only where you need them. 2700K, always dimmed. The room should pool with warmth in the evening, not glow flat like an office.',
      },
      {
        n: '05', kicker: 'Soft geometry',
        title: 'Curves where they earn it.',
        body: 'A plaster arch into the kitchen. A radiused niche behind the tub. Curves should answer a function — a softer transition, a thicker wall, a window seat. Never decorative for its own sake.',
      },
    ],
    method: {
      '01': { name: 'Wide white oak, 9" plank', sub: 'Rubio Monocoat Pure, natural matte' },
      '02': { name: 'Slim shaker, all wood',     sub: 'Rift-cut white oak, integrated pulls' },
      '03': { name: 'Honed travertine + handmade zellige', sub: 'Tonal grout, no contrast' },
      '04': { name: 'Unlacquered brass throughout', sub: 'Matte black accent on plumbing only' },
      '05': { name: 'Swiss Coffee walls, Manchester Tan cabinets', sub: 'Terracotta in the powder bath' },
      '06': { name: 'Lime plaster + drywall returns', sub: 'Exposed beam, no baseboard at plaster transitions' },
    },
    splurgeSave: [
      ['Flooring', 'Solid white oak, wide rift-cut', 'Engineered oak, 7" plank, hardwax oil'],
      ['Cabinetry', 'Custom rift white oak, integrated pulls', 'Slim shaker in oat, brass pulls'],
      ['Countertops', 'Honed travertine slab', 'Honed quartz with light movement'],
      ['Tile', 'Handmade zellige, varied glaze', 'Cement-look porcelain, matte finish'],
      ['Lighting', 'Hand-blown alabaster pendants', 'Plaster sconces, simple flush mounts'],
      ['Hardware', 'Unlacquered brass, made-to-order', 'Antique brass-finish in secondary baths'],
    ],
    motif: 'organic',
  },

  european: {
    key: 'european',
    name: 'European Modern',
    code: 'EM',
    eyebrow: 'The old-world style',
    moodboard: 'assets/moodboards/european.png',
    tagline: 'Understated. Effortless. Old-world soul with a modern edit.',
    description:
      "European Modern carries the patience of an older house — honed marble that\u2019s been touched a thousand times, oak that\u2019s mellowed, plaster walls with a hand to them — and pairs it with the restraint of a modern plan. Quietly elegant. Beauty that doesn\u2019t announce itself.",
    theme: {
      '--ground':    '#EFE9DC',  // oyster
      '--ground-2':  '#E5DDCB',
      '--surface':   '#F6F1E4',  // chalk cream
      '--neutral':   '#C9C0AE',  // mushroom
      '--neutral-2': '#9E8B66',  // antique brass
      '--accent':    '#4F5A48',  // muted forest
      '--accent-2':  '#7E8473',  // sage olive
      '--accent-3':  '#6E665A',  // warm taupe
      '--ink':       '#2E2D29',  // soft charcoal
      '--ink-soft':  '#4A4842',
      '--stone':     '#7A7568',
      '--line':      '#D6CFBC',
      '--line-2':    '#B6AC92',
    },
    palette: [
      { name: 'Oyster',          code: 'BM White Sand',      hex: '#EFE9DC', role: 'Walls' },
      { name: 'Mushroom',        code: 'BM Edgecomb Gray',   hex: '#C9C0AE', role: 'Neutral' },
      { name: 'Warm Taupe',      code: 'BM Bennington Gray', hex: '#6E665A', role: 'Trim' },
      { name: 'Antique Brass',   code: 'Unlacquered, aged',  hex: '#9E8B66', role: 'Metal' },
      { name: 'Muted Forest',    code: 'BM Hunter Green',    hex: '#4F5A48', role: 'Accent' },
      { name: 'Soft Charcoal',   code: 'BM Iron Mountain',   hex: '#2E2D29', role: 'Contrast' },
    ],
    fits: [
      'Honed Calacatta or limestone, lots of it',
      'Hand-trowelled lime plaster and limewash',
      'Pickled or natural European white oak',
      'Antique unlacquered brass — aged, never polished',
      'Arched openings, arched mirrors, arched niches',
      'Vintage art and one antique per room',
      'Boucl\u00E9, linen, undyed wool',
      'Black-framed steel windows, slim mullions',
    ],
    doesntFit: [
      'Cool gray or stark white paint',
      'Glossy lacquered finishes',
      'Heavy ornate millwork or Victorian detail',
      'Trendy of-the-moment finishes',
      'Polished chrome or shiny nickel',
      'Heavy red-toned woods (cherry, mahogany)',
      'Open shelving styled like a magazine',
      'Recessed cans as the only ceiling light',
    ],
    dna: [
      {
        n: '01', kicker: 'Restraint over reach',
        title: 'Beauty that doesn\u2019t announce itself.',
        body: 'European Modern earns its elegance by holding back. Honed marble, not polished. Aged brass, not bright. A single vintage chair instead of a styled vignette. The room feels considered because nothing in it is shouting.',
      },
      {
        n: '02', kicker: 'Old-world references',
        title: 'Borrow from older buildings, edit ruthlessly.',
        body: 'Arched openings. Plaster reveal trim. A limestone fireplace that reads three hundred years old. Take one or two old-world moves per room and pair them with modern proportions — never both at once.',
      },
      {
        n: '03', kicker: 'Patina is the point',
        title: 'Specify finishes that age, not finishes that wear out.',
        body: 'Unlacquered brass mellows from yellow to honey to bronze over a decade. Honed marble develops a worn lustre where you set things down. Lime plaster softens. The house should look better in year five than in year one.',
      },
      {
        n: '04', kicker: 'Warm whites with depth',
        title: 'No cool whites, ever.',
        body: 'Oyster, cream, chalk — wall colours with the warmth of candle-light. Pair them with a darker warm trim (Bennington Gray, soft taupe) so the eye reads tone, not contrast. Cool whites collapse every other warm material in the room.',
      },
      {
        n: '05', kicker: 'Layered texture',
        title: 'Soft surfaces do half the work.',
        body: 'Boucl\u00E9 stools, linen drapery, undyed wool rugs, washed-cotton bedding. The hard finishes are restrained — the textiles are what give the room its hush. Avoid synthetics; they read flat under raking light.',
      },
    ],
    method: {
      '01': { name: 'European white oak, 8" plank', sub: 'Pickled or natural matte — softened, not raw' },
      '02': { name: 'Slim shaker or inset, painted', sub: 'Oyster perimeter, Warm Taupe island' },
      '03': { name: 'Honed Calacatta + limestone', sub: 'Tonal grout, mitred edges, marble run up the wall' },
      '04': { name: 'Antique unlacquered brass + soft black', sub: 'Brass on plumbing, black on hardware' },
      '05': { name: 'Oyster walls, Mushroom cabinetry', sub: 'Muted Forest in the office or library' },
      '06': { name: 'Plaster reveal trim, arched openings', sub: 'Steel windows, 8\u2032 paneled interior doors' },
    },
    splurgeSave: [
      ['Flooring',    'Reclaimed European oak, wide plank',           'Engineered white oak, pickled finish'],
      ['Cabinetry',   'Custom inset shaker, hand-painted',            'Slim shaker, sprayed in Oyster + Warm Taupe'],
      ['Countertops', 'Honed Calacatta slab, run up the wall',        'Quartz with restrained vein, mitred edge'],
      ['Tile',        'Honed limestone or marble, large format',      'Marble-look porcelain in secondary baths'],
      ['Lighting',    'Vintage chandelier + plaster sconces',         'Plaster sconces only, ceiling kept quiet'],
      ['Hardware',    'Unlacquered brass, made-to-order',             'Antique brass-finish, one consistent line'],
    ],
    motif: 'arch',
  },
};

const STYLE_LIST = Object.values(STYLES);

window.STYLES = STYLES;
window.STYLE_LIST = STYLE_LIST;
