/* ==========================================================================
   SCENES-DATA.JS - 50 MICRO-ESCENAS ULTRA-MINIMALISTAS (GRUPO 14 - UPV)
   OECD (2026) Public Procurement, Trade and Industrial Policies
   Paleta: #F6E2B3, #E7A84E, #D96C2C, #3E8E7E, #274C56 sobre fondo blanco.
   ========================================================================== */

const SCENES_DATA = [
  // --- ESCENA 1: SCENE-1 ---
  {
    id: "scene-1",
    category: "PANORAMA GLOBAL",
    title: "Contrataci\u00f3n P\u00fablica, Comercio y Pol\u00edtica Industrial",
    titleGradient: "text-gradient-indigo",
    subtitle: "OECD (2026) \u2022 Supporting National Priorities",
    speaker: {"name": "Equipo de Investigación", "role": "Presentación General", "initials": "EM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: var(--color-surface-tint); color: var(--color-primary);">Informe Oficial OCDE 2026</span>
          <h1 class="micro-type-d-statement" style="font-size: 58px; margin: 18px 0;">
            Contratación Pública, <span class="accent-highlight">Comercio</span> y <span class="accent-sage">Política Industrial</span>
          </h1>
          <div style="display: flex; gap: 14px; margin-top: 14px;">
            <span class="micro-pill-point" style="font-size: 16px;">OECD Public Procurement Report 2026</span>
            <span class="micro-pill-point" style="font-size: 16px;">Comercio y Política Industrial</span>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 2: SCENE-2 ---
  {
    id: "scene-2",
    category: "DEMANDA AGREGADA",
    title: "Demanda Agregada Mundial",
    titleGradient: "text-gradient-indigo",
    subtitle: "Volumen anual del mercado de contrataci\u00f3n p\u00fablica en el mundo",
    speaker: {"name": "Equipo de Investigación", "role": "Presentación General", "initials": "EM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Demanda Agregada Global</span>
          <div class="micro-number-hero">
            <span class="micro-number-unit" style="font-size: 80px; color: var(--color-primary);">$</span>
            <span class="micro-number-val counter-val" data-target="11">0</span>
            <span class="micro-number-unit" style="font-size: 70px; color: var(--color-secondary);">Billones</span>
          </div>
          <p class="micro-number-label">Gasto público anual en compras gubernamentales</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 3: SCENE-3 ---
  {
    id: "scene-3",
    category: "IMPACTO MACROECON\u00d3MICO",
    title: "Impacto en las Econom\u00edas Avanzadas",
    titleGradient: "text-gradient-indigo",
    subtitle: "Media oficial en los pa\u00edses miembros de la OCDE",
    speaker: {"name": "Equipo de Investigación", "role": "Presentación General", "initials": "EM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-val counter-val" data-target="13">0</span>
              <span class="micro-number-unit">%</span>
            </div>
            <p class="micro-number-label">Del PIB de la OCDE</p>
          </div>
          <div class="micro-vs-pill">VS</div>
          <div class="micro-contrast-box right">
            <div class="micro-number-hero">
              <span class="micro-number-val accent-terracotta counter-val" data-target="29">0</span>
              <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
            </div>
            <p class="micro-number-label">Del Gasto Público Total</p>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 4: SCENE-4 ---
  {
    id: "scene-4",
    category: "CAMBIO DE PARADIGMA",
    title: "La Ruptura de Paradigma",
    titleGradient: "text-gradient-amber",
    subtitle: "De la minimizaci\u00f3n del coste contable a la soberan\u00eda geopol\u00edtica",
    speaker: {"name": "Equipo de Investigación", "role": "Presentación General", "initials": "EM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Giro Neomercantilista</span>
          <h2 class="micro-type-d-statement" style="margin: 20px 0;">
            <span style="color: var(--color-primary);">Coste Mínimo</span>
            <span class="micro-type-d-arrow">➔</span>
            <span class="accent-highlight">Seguridad Nacional</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px; margin-top: 10px;">
            OECD (2026): El nuevo rol geopolítico de la compra estatal
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 5: SCENE-5 ---
  {
    id: "scene-5",
    category: "DESCENTRALIZACI\u00d3N FISCAL",
    title: "Descentralizaci\u00f3n Territorial",
    titleGradient: "text-gradient-indigo",
    subtitle: "Porcentaje ejecutado fuera del gobierno central",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary);">Nivel Subnacional</span>
          <div class="micro-number-hero">
            <span class="micro-number-val accent-sage counter-val" data-target="62.5">0</span>
            <span class="micro-number-unit">%</span>
          </div>
          <p class="micro-number-label">Ejecutado por regiones, provincias y municipios</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 6: SCENE-6 ---
  {
    id: "scene-6",
    category: "DISTRIBUCI\u00d3N DEL GASTO",
    title: "Reparto Territorial del Gasto",
    titleGradient: "text-gradient-indigo",
    subtitle: "Dificultad de supervisi\u00f3n en tratados comerciales",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: var(--color-surface-tint); color: var(--color-primary); margin-bottom: 28px;">Gobiernos OCDE</span>
          <div class="micro-chart-bars">
            <div class="micro-chart-bar-item">
              <div class="micro-chart-bar-header">
                <span>Administraciones Subnacionales (Regiones / Municipios)</span>
                <span class="micro-chart-bar-val" style="color: var(--color-secondary);">62,5%</span>
              </div>
              <div class="micro-chart-bar-track">
                <div class="micro-chart-bar-fill animated-bar" style="--target-width: 62.5%; background: var(--color-secondary);"></div>
              </div>
            </div>
            <div class="micro-chart-bar-item">
              <div class="micro-chart-bar-header">
                <span>Gobierno Central o Federal</span>
                <span class="micro-chart-bar-val" style="color: var(--color-primary);">37,5%</span>
              </div>
              <div class="micro-chart-bar-track">
                <div class="micro-chart-bar-fill animated-bar" style="--target-width: 37.5%; background: var(--color-primary);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 7: SCENE-7 ---
  {
    id: "scene-7",
    category: "SECTOR SANITARIO",
    title: "Gasto en Sanidad P\u00fablica",
    titleGradient: "text-gradient-rose",
    subtitle: "El sector prioritario de mayor cuant\u00eda en compras p\u00fablicas",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Sector Sanitario</span>
          <div class="micro-number-hero">
            <span class="micro-number-unit" style="font-size: 90px; color: var(--color-accent-1);">&gt;</span>
            <span class="micro-number-val accent-terracotta counter-val" data-target="30">0</span>
            <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
          </div>
          <p class="micro-number-label">Del gasto total de contratación pública en la OCDE</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 8: SCENE-8 ---
  {
    id: "scene-8",
    category: "DOCTRINA Y DILEMAS",
    title: "Colisi\u00f3n de Paradigmas",
    titleGradient: "text-gradient-indigo",
    subtitle: "El dilema central del comercio internacional",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 7,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-type-e-grid">
          <div class="micro-type-e-card theme-sage">
            <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary);">OMC • ACP / GPA</span>
            <h3 class="micro-type-e-title">Doctrina de Eficiencia</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Trato Nacional Sin Fronteras</div>
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Máximo Valor por Dinero</div>
            </div>
          </div>
          <div class="micro-type-e-card theme-terracotta">
            <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Geopolítica Actual</span>
            <h3 class="micro-type-e-title">Doctrina de Seguridad</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon arrow">➔</span> Soberanía Industrial Local</div>
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> Reservas de Mercado Nacional</div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 9: SCENE-9 ---
  {
    id: "scene-9",
    category: "SHOCKS GLOBALES",
    title: "Los Shocks Catalizadores",
    titleGradient: "text-gradient-amber",
    subtitle: "Tres crisis consecutivas que transformaron la pol\u00edtica econ\u00f3mica",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Disrupciones de Suministro</span>
          <h2 class="micro-type-d-statement" style="font-size: 58px; margin: 20px 0;">
            <span style="color: var(--color-primary);">COVID-19</span>
            <span class="micro-type-d-arrow">➔</span>
            <span class="accent-highlight">Guerra Ucrania</span>
            <span class="micro-type-d-arrow">➔</span>
            <span class="accent-sage">Taiwán</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Riesgo extremo de desabastecimiento en insumos críticos
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 10: SCENE-10 ---
  {
    id: "scene-10",
    category: "POL\u00cdTICA INDUSTRIAL",
    title: "La Compra como Palanca",
    titleGradient: "text-gradient-indigo",
    subtitle: "El Estado genera mercados asegurados para sectores estrat\u00e9gicos",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: var(--color-surface-tint); color: var(--color-primary);">Nuevo Enfoque Teórico</span>
          <h2 class="micro-type-d-statement" style="margin: 18px 0;">
            Política Industrial <span class="accent-highlight">desde la Demanda</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Garantía estatal de compra para impulsar tecnologías verdes y estratégicas
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 11: SCENE-11 ---
  {
    id: "scene-11",
    category: "ARSENAL DE MEDIDAS",
    title: "El Arsenal de Medidas",
    titleGradient: "text-gradient-indigo",
    subtitle: "Clasificaci\u00f3n oficial de intervenciones seg\u00fan la OCDE",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 7,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-type-e-grid">
          <div class="micro-type-e-card theme-terracotta">
            <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Capítulo 2.1</span>
            <h3 class="micro-type-e-title">Medidas Directas</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> Contenido Nacional (DCRs)</div>
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> Preferencias de Precio Local</div>
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> Contratos Reservados a PYMEs</div>
            </div>
          </div>
          <div class="micro-type-e-card theme-mustard">
            <span class="micro-tag" style="background: rgba(var(--color-accent-2-rgb), 0.18); color: var(--color-accent-2);">Capítulo 2.2</span>
            <h3 class="micro-type-e-title">Medidas Indirectas</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon arrow">➔</span> Compras Verdes / Cadenas Cortas</div>
              <div class="micro-pill-point"><span class="micro-pill-icon arrow">➔</span> Soberanía Tecnológica y Cloud</div>
              <div class="micro-pill-point"><span class="micro-pill-icon arrow">➔</span> Compra Pública de Innovación</div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 12: SCENE-12 ---
  {
    id: "scene-12",
    category: "BUY AMERICAN ACT",
    title: "Buy American Act en EE.UU.",
    titleGradient: "text-gradient-indigo",
    subtitle: "Umbral m\u00ednimo legal de componentes locales en 2024",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Estados Unidos 2024</span>
          <div class="micro-number-hero">
            <span class="micro-number-val counter-val" data-target="65">0</span>
            <span class="micro-number-unit">%</span>
          </div>
          <p class="micro-number-label">Insumos nacionales obligatorios en compras federales</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 13: SCENE-13 ---
  {
    id: "scene-13",
    category: "ESCALADA PROTECCIONISTA",
    title: "Escalada Proteccionista en EE.UU.",
    titleGradient: "text-gradient-amber",
    subtitle: "La senda legislativa de endurecimiento comercial",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Requisito de Contenido Nacional</span>
          <h2 class="micro-type-d-statement" style="margin: 20px 0;">
            Buy American: <span style="color: var(--color-primary);">65%</span>
            <span class="micro-type-d-arrow">➔</span>
            <span class="accent-highlight">75% en 2029</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Cierre progresivo del mayor mercado federal del planeta
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 14: SCENE-14 ---
  {
    id: "scene-14",
    category: "TRAYECTORIA LEGISLATIVA",
    title: "Trayectoria del Buy American",
    titleGradient: "text-gradient-indigo",
    subtitle: "Evoluci\u00f3n porcentual del umbral exigido",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: var(--color-surface-tint); color: var(--color-primary); margin-bottom: 28px;">Umbral BAA</span>
          <div class="micro-chart-bars">
            <div class="micro-chart-bar-item">
              <div class="micro-chart-bar-header">
                <span>Año 2022 (Nivel Histórico Previo)</span>
                <span class="micro-chart-bar-val" style="color: var(--color-secondary);">55%</span>
              </div>
              <div class="micro-chart-bar-track">
                <div class="micro-chart-bar-fill animated-bar" style="--target-width: 55%; background: var(--color-secondary);"></div>
              </div>
            </div>
            <div class="micro-chart-bar-item">
              <div class="micro-chart-bar-header">
                <span>Año 2024 (Umbral Actual Vigente)</span>
                <span class="micro-chart-bar-val" style="color: var(--color-accent-2);">65%</span>
              </div>
              <div class="micro-chart-bar-track">
                <div class="micro-chart-bar-fill animated-bar" style="--target-width: 65%; background: var(--color-accent-2);"></div>
              </div>
            </div>
            <div class="micro-chart-bar-item">
              <div class="micro-chart-bar-header">
                <span>Año 2029 (Exigencia Legal Fijada)</span>
                <span class="micro-chart-bar-val" style="color: var(--color-accent-1);">75%</span>
              </div>
              <div class="micro-chart-bar-track">
                <div class="micro-chart-bar-fill animated-bar" style="--target-width: 75%; background: var(--color-accent-1);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 15: SCENE-15 ---
  {
    id: "scene-15",
    category: "BABA ACT 2021",
    title: "BABA Act: Infraestructura Federal",
    titleGradient: "text-gradient-rose",
    subtitle: "Build America, Buy America Act (2021)",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Acero, Hierro y Materiales</span>
          <div class="micro-number-hero">
            <span class="micro-number-val accent-terracotta counter-val" data-target="100">0</span>
            <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
          </div>
          <p class="micro-number-label">Fabricación nacional obligatoria en obras subvencionadas</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 16: SCENE-16 ---
  {
    id: "scene-16",
    category: "PLAN M\u00c9XICO 2025",
    title: "Plan M\u00e9xico 2025",
    titleGradient: "text-gradient-amber",
    subtitle: "Estrategia de sustituci\u00f3n de importaciones asi\u00e1ticas",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-2-rgb), 0.18); color: var(--color-accent-2);">América Latina</span>
          <h2 class="micro-type-d-statement" style="font-size: 60px; margin: 20px 0;">
            Plan México: <span class="accent-highlight">65%</span> Contenido Local
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Elevado desde el 50% previo para blindar la industria nacional
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 17: SCENE-17 ---
  {
    id: "scene-17",
    category: "INCENTIVOS LOCALES",
    title: "Doble Incentivo en M\u00e9xico",
    titleGradient: "text-gradient-indigo",
    subtitle: "Reserva de cuota y ventaja en precio para oferentes locales",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-val counter-val" data-target="65">0</span>
              <span class="micro-number-unit">%</span>
            </div>
            <p class="micro-number-label">Contenido Nacional Obligatorio</p>
          </div>
          <div class="micro-vs-pill">+</div>
          <div class="micro-contrast-box right">
            <div class="micro-number-hero">
              <span class="micro-number-val accent-terracotta counter-val" data-target="15">0</span>
              <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
            </div>
            <p class="micro-number-label">Margen de Preferencia en Precio</p>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 18: SCENE-18 ---
  {
    id: "scene-18",
    category: "ARANCELES Y RECARGOS",
    title: "Recargo a Importaciones",
    titleGradient: "text-gradient-indigo",
    subtitle: "Pol\u00edticas de penalizaci\u00f3n a bienes for\u00e1neos en Ocean\u00eda",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Australia Occidental</span>
          <div class="micro-number-hero">
            <span class="micro-number-val counter-val" data-target="20">0</span>
            <span class="micro-number-unit">%</span>
          </div>
          <p class="micro-number-label">Recargo evaluativo sobre bienes importados en licitaciones</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 19: SCENE-19 ---
  {
    id: "scene-19",
    category: "DEBATE EN LA UE",
    title: "El Debate en la Uni\u00f3n Europea",
    titleGradient: "text-gradient-amber",
    subtitle: "Tensi\u00f3n pol\u00edtica interna en el mercado comunitario",
    speaker: {"name": "Marco Macroeconómico", "role": "Política y Soberanía", "initials": "MM"},
    duration: 7,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-type-e-grid">
          <div class="micro-type-e-card theme-terracotta">
            <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Francia • Informe Draghi</span>
            <h3 class="micro-type-e-title">Preferencia Europea</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Buy European prioritario</div>
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Subsidio a campeones industriales</div>
            </div>
          </div>
          <div class="micro-type-e-card theme-sage">
            <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary);">Finlandia • Nórdicos</span>
            <h3 class="micro-type-e-title">Mercado Concurrente</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon arrow">➔</span> Alerta formal ante el sobrecoste fiscal</div>
              <div class="micro-pill-point"><span class="micro-pill-icon arrow">➔</span> Protección de la libre concurrencia</div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 20: SCENE-20 ---
  {
    id: "scene-20",
    category: "SUBSIDIOS ESTATALES",
    title: "Subsidios Estatales en China",
    titleGradient: "text-gradient-rose",
    subtitle: "Apoyo p\u00fablico masivo a la cadena de automoci\u00f3n (2009-2023)",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Distorsión Global de Precios</span>
          <div class="micro-number-hero">
            <span class="micro-number-unit" style="font-size: 80px; color: var(--color-accent-1);">$</span>
            <span class="micro-number-val accent-terracotta counter-val" data-target="231">0</span>
            <span class="micro-number-unit" style="font-size: 70px; color: var(--color-accent-1);">Mil M</span>
          </div>
          <p class="micro-number-label">Subsidios acumulados de China a vehículos eléctricos</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 21: SCENE-21 ---
  {
    id: "scene-21",
    category: "SUBSIDIOS FERROVIARIOS",
    title: "El Gigante Ferroviario CRRC",
    titleGradient: "text-gradient-indigo",
    subtitle: "Ayudas directas permanentes de la administraci\u00f3n china",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-2-rgb), 0.18); color: var(--color-accent-2);">Sector Ferroviario</span>
          <div class="micro-number-hero">
            <span class="micro-number-unit" style="font-size: 80px; color: var(--color-primary);">&gt;$</span>
            <span class="micro-number-val counter-val" data-target="1000">0</span>
            <span class="micro-number-unit" style="font-size: 60px; color: var(--color-secondary);">M / año</span>
          </div>
          <p class="micro-number-label">Subvenciones anuales a CRRC para ofertar en el exterior</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 22: SCENE-22 ---
  {
    id: "scene-22",
    category: "DISTORSI\u00d3N DE PRECIOS",
    title: "Precios Predatorios en Europa",
    titleGradient: "text-gradient-indigo",
    subtitle: "Distorsi\u00f3n de licitaciones p\u00fablicas por empresas subsidiadas",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-val counter-val" data-target="100">0</span>
            </div>
            <p class="micro-number-label">Precio Coste Europeo (Alstom / Siemens)</p>
          </div>
          <div class="micro-vs-pill">VS</div>
          <div class="micro-contrast-box right">
            <div class="micro-number-hero">
              <span class="micro-number-val accent-terracotta counter-val" data-target="75">0</span>
            </div>
            <p class="micro-number-label">Oferta Subsidiada (-25% Baja Temeraria)</p>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 23: SCENE-23 ---
  {
    id: "scene-23",
    category: "IMPACTO AMBIENTAL",
    title: "El Mito Ecol\u00f3gico",
    titleGradient: "text-gradient-amber",
    subtitle: "Desmontando la falacia de la huella de transporte local",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary);">Evidencia Empírica OCDE</span>
          <h2 class="micro-type-d-statement" style="font-size: 72px; margin: 20px 0;">
            Comprar Local <span class="accent-highlight">≠</span> Ser Verde
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            El transporte marítimo representa solo una mínima fracción del CO2
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 24: SCENE-24 ---
  {
    id: "scene-24",
    category: "HUELLA DE CARBONO",
    title: "La Paradoja de Emisiones",
    titleGradient: "text-gradient-indigo",
    subtitle: "Comparativa de eficiencia en ciclos de vida de producto",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 7,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-type-e-grid">
          <div class="micro-type-e-card theme-terracotta">
            <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Producción Local Térmica</span>
            <h3 class="micro-type-e-title">Invernadero Calentado</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> Consumo intensivo de gas o fuel</div>
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> Huella de carbono 4 veces superior</div>
            </div>
          </div>
          <div class="micro-type-e-card theme-sage">
            <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary);">Comercio Internacional</span>
            <h3 class="micro-type-e-title">Importación Solar</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Cultivo natural en climas cálidos</div>
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Menor impacto de carbono total</div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 25: SCENE-25 ---
  {
    id: "scene-25",
    category: "AUTONOM\u00cdA SANITARIA",
    title: "F\u00e1rmacos Esenciales Cr\u00edticos",
    titleGradient: "text-gradient-rose",
    subtitle: "Critical Medicines Act de la Comisi\u00f3n Europea (2025)",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Agencia Europea de Medicamentos</span>
          <div class="micro-number-hero">
            <span class="micro-number-val counter-val" data-target="299">0</span>
          </div>
          <p class="micro-number-label">Medicamentos esenciales bajo alerta por dependencia extrema</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 26: SCENE-26 ---
  {
    id: "scene-26",
    category: "CADENAS CR\u00cdTICAS",
    title: "Dependencia en Antibi\u00f3ticos",
    titleGradient: "text-gradient-amber",
    subtitle: "Vulnerabilidad estrat\u00e9gica del sistema sanitario comunitario",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Principio Activo Esencial</span>
          <h2 class="micro-type-d-statement" style="font-size: 64px; margin: 20px 0;">
            Amoxicilina: <span class="accent-highlight">80%</span> Depende de China
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Riesgo inminente de colapso hospitalario ante shocks geopolíticos
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 27: SCENE-27 ---
  {
    id: "scene-27",
    category: "TRANSICI\u00d3N VERDE",
    title: "Net-Zero Industry Act",
    titleGradient: "text-gradient-indigo",
    subtitle: "Reglamento UE 2024/1735 sobre tecnolog\u00edas limpias",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-2-rgb), 0.18); color: var(--color-accent-2);">Salvaguardia de Diversificación</span>
          <div class="micro-number-hero">
            <span class="micro-number-val accent-mustard counter-val" data-target="50">0</span>
            <span class="micro-number-unit" style="color: var(--color-accent-2);">%</span>
          </div>
          <p class="micro-number-label">Umbral de dependencia exterior que activa reservas obligatorias</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 28: SCENE-28 ---
  {
    id: "scene-28",
    category: "INNOVACI\u00d3N P\u00daBLICA",
    title: "Compra P\u00fablica de Innovaci\u00f3n",
    titleGradient: "text-gradient-indigo",
    subtitle: "Transformaci\u00f3n industrial documentada por la OCDE",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-val counter-val" data-target="94">0</span>
              <span class="micro-number-unit">%</span>
            </div>
            <p class="micro-number-label">Países OCDE usan compra de innovación</p>
          </div>
          <div class="micro-vs-pill">➔</div>
          <div class="micro-contrast-box right">
            <div class="micro-number-hero">
              <span class="micro-number-val accent-sage counter-val" data-target="95">0</span>
              <span class="micro-number-unit" style="color: var(--color-secondary);">%</span>
            </div>
            <p class="micro-number-label">Adjudicatarias se vuelven exportadoras regulares</p>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 29: SCENE-29 ---
  {
    id: "scene-29",
    category: "CADENAS GLOBALES",
    title: "Cadenas Globales de Valor",
    titleGradient: "text-gradient-indigo",
    subtitle: "Estructura productiva real del comercio contempor\u00e1neo",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Comercio Global Interconectado</span>
          <div class="micro-number-hero">
            <span class="micro-number-val counter-val" data-target="70">0</span>
            <span class="micro-number-unit">%</span>
          </div>
          <p class="micro-number-label">Del comercio mundial corresponde a bienes intermedios</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 30: SCENE-30 ---
  {
    id: "scene-30",
    category: "INSUMOS INTERMEDIOS",
    title: "Composici\u00f3n del Comercio Global",
    titleGradient: "text-gradient-indigo",
    subtitle: "Insumos intermedios frente a productos finales terminados",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: var(--color-surface-tint); color: var(--color-primary); margin-bottom: 24px;">Flujos Transfronterizos</span>
          <div class="micro-donut-wrapper">
            <svg class="micro-donut-svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="38" fill="transparent" stroke="var(--bg-surface-2)" stroke-width="18"/>
              <circle cx="50" cy="50" r="38" fill="transparent" stroke="var(--color-primary)" stroke-width="18"
                      stroke-dasharray="167.1 238.8" stroke-dashoffset="0"/>
              <circle cx="50" cy="50" r="38" fill="transparent" stroke="var(--color-accent-2)" stroke-width="18"
                      stroke-dasharray="71.6 238.8" stroke-dashoffset="-167.1"/>
            </svg>
            <div class="micro-donut-legend">
              <div class="micro-donut-legend-item">
                <span class="micro-donut-dot" style="background: var(--color-primary);"></span>
                <span><strong>70%</strong> Bienes Intermedios (Insumos y Componentes)</span>
              </div>
              <div class="micro-donut-legend-item">
                <span class="micro-donut-dot" style="background: var(--color-accent-2);"></span>
                <span><strong>30%</strong> Bienes Finales Terminados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 31: SCENE-31 ---
  {
    id: "scene-31",
    category: "PRODUCTO DOM\u00c9STICO",
    title: "La Falacia del Producto Dom\u00e9stico",
    titleGradient: "text-gradient-amber",
    subtitle: "Imposibilidad f\u00edsica del aislamiento productivo en tecnolog\u00eda",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Evidencia Técnica</span>
          <h2 class="micro-type-d-statement" style="font-size: 64px; margin: 20px 0;">
            No existe ningún bien complejo <span class="accent-highlight">100% nacional</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Exigir producción local encarece los insumos de la propia industria interna
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 32: SCENE-32 ---
  {
    id: "scene-32",
    category: "COSTE DEL RESHORING",
    title: "Coste del Reshoring Forzado",
    titleGradient: "text-gradient-rose",
    subtitle: "Simulaciones cuantitativas de la OCDE (Arriola et al., 2020)",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Colapso del Comercio</span>
          <div class="micro-number-hero">
            <span class="micro-number-val accent-terracotta counter-val" data-target="-18">0</span>
            <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
          </div>
          <p class="micro-number-label">Caída proyectada del comercio mundial ante una relocalización obligatoria</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 33: SCENE-33 ---
  {
    id: "scene-33",
    category: "IMPACTO EN EL PIB",
    title: "Destrucci\u00f3n del PIB Global",
    titleGradient: "text-gradient-rose",
    subtitle: "P\u00e9rdida irreversible de renta per c\u00e1pita mundial",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Pérdida Neta de Riqueza</span>
          <div class="micro-number-hero">
            <span class="micro-number-val accent-terracotta counter-val" data-target="-5">0</span>
            <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
          </div>
          <p class="micro-number-label">Destrucción permanente del producto interior bruto global</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 34: SCENE-34 ---
  {
    id: "scene-34",
    category: "P\u00c9RDIDA ASIM\u00c9TRICA",
    title: "P\u00e9rdida de PIB por Pa\u00edses",
    titleGradient: "text-gradient-indigo",
    subtitle: "Impacto asim\u00e9trico del reshoring en econom\u00edas abiertas",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1); margin-bottom: 24px;">Arriola et al. (OCDE)</span>
          <div class="micro-chart-bars">
            <div class="micro-chart-bar-item">
              <div class="micro-chart-bar-header">
                <span>Canadá (Alta Integración Externa)</span>
                <span class="micro-chart-bar-val" style="color: var(--color-accent-1);">-13,1%</span>
              </div>
              <div class="micro-chart-bar-track">
                <div class="micro-chart-bar-fill animated-bar" style="--target-width: 85%; background: var(--color-accent-1);"></div>
              </div>
            </div>
            <div class="micro-chart-bar-item">
              <div class="micro-chart-bar-header">
                <span>Reino Unido</span>
                <span class="micro-chart-bar-val" style="color: var(--color-accent-1);">-12,2%</span>
              </div>
              <div class="micro-chart-bar-track">
                <div class="micro-chart-bar-fill animated-bar" style="--target-width: 79%; background: var(--color-accent-1);"></div>
              </div>
            </div>
            <div class="micro-chart-bar-item">
              <div class="micro-chart-bar-header">
                <span>Media Mundial</span>
                <span class="micro-chart-bar-val" style="color: var(--color-primary);">-5,0%</span>
              </div>
              <div class="micro-chart-bar-track">
                <div class="micro-chart-bar-fill animated-bar" style="--target-width: 32%; background: var(--color-primary);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 35: SCENE-35 ---
  {
    id: "scene-35",
    category: "RESILIENCIA ECON\u00d3MICA",
    title: "La Falacia de la Resiliencia",
    titleGradient: "text-gradient-amber",
    subtitle: "Por qu\u00e9 la econom\u00eda aut\u00e1rquica sufre mayores shocks",
    speaker: {"name": "Cadenas Globales de Valor", "role": "Comercio y Reshoring", "initials": "CG"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Conclusión del Modelo</span>
          <h2 class="micro-type-d-statement" style="margin: 20px 0;">
            Autarquía <span class="accent-highlight">= Mayor Vulnerabilidad</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Imposibilidad de recurrir a proveedores alternativos externos ante un shock local
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 36: SCENE-36 ---
  {
    id: "scene-36",
    category: "FRIEND-SHORING",
    title: "El Coste del Friend-Shoring",
    titleGradient: "text-gradient-rose",
    subtitle: "Impacto de la divisi\u00f3n del mundo en bloques geopol\u00edticos (Javorcik et al.)",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-2-rgb), 0.18); color: var(--color-accent-2);">Fragmentación Geoeconómica</span>
          <div class="micro-number-hero">
            <span class="micro-number-unit" style="font-size: 80px; color: var(--color-accent-1);">-</span>
            <span class="micro-number-val accent-terracotta counter-val" data-target="4.6">0</span>
            <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
          </div>
          <p class="micro-number-label">Pérdida adicional de PIB global por fragmentación en bloques cerrados</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 37: SCENE-37 ---
  {
    id: "scene-37",
    category: "TRAMPA BUROCR\u00c1TICA",
    title: "La Trampa Burocr\u00e1tica",
    titleGradient: "text-gradient-indigo",
    subtitle: "Bosio, Djankov, Glaeser y Shleifer (AER 2022)",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 7,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-type-e-grid">
          <div class="micro-type-e-card theme-sage">
            <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary);">Capacidad Alta</span>
            <h3 class="micro-type-e-title">Administración Eficaz</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Compra estratégica viable</div>
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Control estricto de sobrecostes</div>
            </div>
          </div>
          <div class="micro-type-e-card theme-terracotta">
            <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Capacidad Baja</span>
            <h3 class="micro-type-e-title">Burocracia Débil</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> Disparo del gasto ineficiente</div>
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> Mayor riesgo de captura y corrupción</div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 38: SCENE-38 ---
  {
    id: "scene-38",
    category: "EVIDENCIA EMP\u00cdRICA",
    title: "Evidencia Emp\u00edrica Global",
    titleGradient: "text-gradient-indigo",
    subtitle: "Estudio publicado en American Economic Review",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Muestra Cuantitativa Global</span>
          <div class="micro-number-hero">
            <span class="micro-number-val counter-val" data-target="187">0</span>
          </div>
          <p class="micro-number-label">Países analizados empíricamente por Bosio et al.</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 39: SCENE-39 ---
  {
    id: "scene-39",
    category: "ACUERDO ACP / GPA",
    title: "El L\u00edmite del GPA de la OMC",
    titleGradient: "text-gradient-indigo",
    subtitle: "El club restringido del comercio multilateral en compras",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-val counter-val" data-target="48">0</span>
            </div>
            <p class="micro-number-label">Países Miembros del GPA</p>
          </div>
          <div class="micro-vs-pill">VS</div>
          <div class="micro-contrast-box right">
            <div class="micro-number-hero">
              <span class="micro-number-val accent-terracotta counter-val" data-target="142">0</span>
            </div>
            <p class="micro-number-label">Países Fuera del Tratado Multilateral</p>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 40: SCENE-40 ---
  {
    id: "scene-40",
    category: "SUR GLOBAL",
    title: "Los Grandes Emergentes",
    titleGradient: "text-gradient-amber",
    subtitle: "Por qu\u00e9 las mayores econom\u00edas del Sur Global no firman el GPA",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Ausencias Estratégicas</span>
          <h2 class="micro-type-d-statement" style="font-size: 60px; margin: 20px 0;">
            <span class="accent-highlight">China, India y Brasil</span> Fuera del GPA
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Reservan su contratación estatal como instrumento soberano de desarrollo
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 41: SCENE-41 ---
  {
    id: "scene-41",
    category: "INSTRUMENTO IPI",
    title: "El Instrumento IPI Europeo",
    titleGradient: "text-gradient-indigo",
    subtitle: "Reglamento UE 2022/1031 de Contrataci\u00f3n Internacional",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary);">Mecanismo de Reciprocidad Forzada</span>
          <h2 class="micro-type-d-statement" style="margin: 20px 0;">
            IPI: <span class="accent-highlight">Apertura Condicional</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Sanciones y exclusión a empresas de países que bloquean a licitadores europeos
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 42: SCENE-42 ---
  {
    id: "scene-42",
    category: "PENALIZACIONES IPI",
    title: "Sanciones del Instrumento IPI",
    titleGradient: "text-gradient-rose",
    subtitle: "El r\u00e9gimen sancionador de la Comisi\u00f3n Europea",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-unit" style="color: var(--color-accent-1);">-</span>
              <span class="micro-number-val accent-terracotta counter-val" data-target="50">0</span>
              <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
            </div>
            <p class="micro-number-label">Penalización en Puntuación Técnica</p>
          </div>
          <div class="micro-vs-pill">O</div>
          <div class="micro-contrast-box right">
            <div class="micro-number-hero">
              <span class="micro-number-unit" style="color: var(--color-primary);">-</span>
              <span class="micro-number-val counter-val" data-target="100">0</span>
              <span class="micro-number-unit">%</span>
            </div>
            <p class="micro-number-label">Exclusión Total en Concursos por Precio</p>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 43: SCENE-43 ---
  {
    id: "scene-43",
    category: "SENTENCIA KOLIN",
    title: "Sentencia Kolin del TJUE",
    titleGradient: "text-gradient-amber",
    subtitle: "Asunto C-652/22 (2024): Precedente legal de m\u00e1ximo calado",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Jurisprudencia Vinculante</span>
          <h2 class="micro-type-d-statement" style="font-size: 60px; margin: 20px 0;">
            Sin Tratado <span class="micro-type-d-arrow">➔</span> <span class="accent-highlight">Sin Recurso Legal</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Licitadores de países sin GPA carecen de tutela judicial para impugnar exclusiones
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 44: SCENE-44 ---
  {
    id: "scene-44",
    category: "MAPA LEGAL",
    title: "El Nuevo Mapa Legal de Licitaci\u00f3n",
    titleGradient: "text-gradient-indigo",
    subtitle: "Diferenciaci\u00f3n estricta entre socios comerciales y terceros",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 7,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-type-e-grid">
          <div class="micro-type-e-card theme-sage">
            <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary);">Países Cubiertos por GPA</span>
            <h3 class="micro-type-e-title">Garantías Plenas</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Trato Nacional obligatorio</div>
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Derecho directo de recurso judicial</div>
            </div>
          </div>
          <div class="micro-type-e-card theme-terracotta">
            <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Terceros Países sin Acuerdo</span>
            <h3 class="micro-type-e-title">Acceso Condicionado</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> Posibilidad de exclusión directa</div>
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> Sin legitimación activa ante tribunales</div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 45: SCENE-45 ---
  {
    id: "scene-45",
    category: "D\u00c9FICIT DE EVALUACI\u00d3N",
    title: "El D\u00e9ficit de Evaluaci\u00f3n",
    titleGradient: "text-gradient-indigo",
    subtitle: "La falta de medici\u00f3n de costes reales en los pa\u00edses de la OCDE",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-val counter-val" data-target="23">0</span>
              <span class="micro-number-unit">%</span>
            </div>
            <p class="micro-number-label">Evalúa Impacto Económico Real</p>
          </div>
          <div class="micro-vs-pill">&amp;</div>
          <div class="micro-contrast-box right">
            <div class="micro-number-hero">
              <span class="micro-number-val accent-mustard counter-val" data-target="10">0</span>
              <span class="micro-number-unit" style="color: var(--color-accent-2);">%</span>
            </div>
            <p class="micro-number-label">Evalúa Impacto Ambiental o Social</p>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 46: SCENE-46 ---
  {
    id: "scene-46",
    category: "AUDITOR\u00cdA DEL GASTO",
    title: "Evaluaci\u00f3n Emp\u00edrica en la OCDE",
    titleGradient: "text-gradient-indigo",
    subtitle: "Porcentaje de administraciones que auditan los sobrecostes",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: var(--color-surface-tint); color: var(--color-primary); margin-bottom: 24px;">Gobernanza Basada en Evidencia</span>
          <div class="micro-chart-bars">
            <div class="micro-chart-bar-item">
              <div class="micro-chart-bar-header">
                <span>Evalúan Impacto Económico Ex-Post</span>
                <span class="micro-chart-bar-val" style="color: var(--color-secondary);">23%</span>
              </div>
              <div class="micro-chart-bar-track">
                <div class="micro-chart-bar-fill animated-bar" style="--target-width: 23%; background: var(--color-secondary);"></div>
              </div>
            </div>
            <div class="micro-chart-bar-item">
              <div class="micro-chart-bar-header">
                <span>Evalúan Impacto Ambiental o Social</span>
                <span class="micro-chart-bar-val" style="color: var(--color-accent-2);">10%</span>
              </div>
              <div class="micro-chart-bar-track">
                <div class="micro-chart-bar-fill animated-bar" style="--target-width: 10%; background: var(--color-accent-2);"></div>
              </div>
            </div>
            <div class="micro-chart-bar-item">
              <div class="micro-chart-bar-header">
                <span>Sin Medición Sistemática de Sobrecostes</span>
                <span class="micro-chart-bar-val" style="color: var(--color-accent-1);">77%</span>
              </div>
              <div class="micro-chart-bar-track">
                <div class="micro-chart-bar-fill animated-bar" style="--target-width: 77%; background: var(--color-accent-1);"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 47: SCENE-47 ---
  {
    id: "scene-47",
    category: "DIGITALIZACI\u00d3N",
    title: "Digitalizaci\u00f3n e-Procurement",
    titleGradient: "text-gradient-indigo",
    subtitle: "Implantaci\u00f3n de plataformas electr\u00f3nicas \u00fanicas de licitaci\u00f3n",
    speaker: {"name": "Gobernanza y Acuerdos", "role": "Reciprocidad y Digitalización", "initials": "GA"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary);">Transparencia y Eficiencia</span>
          <div class="micro-number-hero">
            <span class="micro-number-val accent-sage counter-val" data-target="98">0</span>
            <span class="micro-number-unit" style="color: var(--color-secondary);">%</span>
          </div>
          <p class="micro-number-label">Países OCDE con portales digitales únicos de contratación</p>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 48: SCENE-48 ---
  {
    id: "scene-48",
    category: "TRANSPARENCIA Y PYMES",
    title: "El Efecto Democratizador",
    titleGradient: "text-gradient-indigo",
    subtitle: "Impacto de la tecnolog\u00eda digital en la transparencia",
    speaker: {"name": "Equipo de Investigación", "role": "Presentación General", "initials": "EM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Efecto Pro-Competitivo</span>
          <h2 class="micro-type-d-statement" style="margin: 20px 0;">
            Más Ofertas <span class="micro-type-d-arrow">➔</span> <span class="accent-highlight">Menos Colusión</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Eliminación de costes de transacción para PYMEs y oferentes internacionales
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 49: SCENE-49 ---
  {
    id: "scene-49",
    category: "DILEMA ESTRAT\u00c9GICO",
    title: "El Gran Dilema Global",
    titleGradient: "text-gradient-amber",
    subtitle: "La encrucijada estrat\u00e9gica documentada por la OCDE",
    speaker: {"name": "Equipo de Investigación", "role": "Presentación General", "initials": "EM"},
    duration: 7,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-type-e-grid">
          <div class="micro-type-e-card theme-terracotta">
            <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Ruta Proteccionista</span>
            <h3 class="micro-type-e-title">Autarquía Cerrada</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> -18% en el comercio mundial</div>
              <div class="micro-pill-point"><span class="micro-pill-icon cross">✕</span> Mayor vulnerabilidad ante crisis</div>
            </div>
          </div>
          <div class="micro-type-e-card theme-sage">
            <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary);">Ruta OCDE 2026</span>
            <h3 class="micro-type-e-title">Resiliencia Inteligente</h3>
            <div class="micro-points-container">
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Diversificación global de suministros</div>
              <div class="micro-pill-point"><span class="micro-pill-icon check">✓</span> Evaluación rigurosa de sobrecostes</div>
            </div>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  },

  // --- ESCENA 50: SCENE-50 ---
  {
    id: "scene-50",
    category: "S\u00cdNTESIS FINAL",
    title: "Econom\u00eda Mundial \u2022 UPV",
    titleGradient: "text-gradient-indigo",
    subtitle: "Grado en ADE + INF / MAT \u2022 Curso 2026-2027",
    speaker: {"name": "Equipo de Investigación", "role": "Presentación General", "initials": "EM"},
    duration: 6,
    renderContent: () => `
<div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: var(--color-surface-tint); color: var(--color-primary);">Síntesis del Proyecto • OCDE 2026</span>
          <h2 class="micro-type-d-statement" style="font-size: 64px; margin: 20px 0;">
            Rigor Científico, <span class="accent-highlight">Datos Reales</span> y <span class="accent-sage">Evidencia</span>
          </h2>
          <div style="display: flex; gap: 14px; margin-top: 14px;">
            <span class="micro-pill-point" style="font-size: 17px;">Grado en ADE + INF / MAT</span>
            <span class="micro-pill-point" style="font-size: 17px;">Universitat Politècnica de València</span>
          </div>
        </div>
      </div>
    `,
    subtitles: []
  }
];
