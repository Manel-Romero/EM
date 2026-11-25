# -*- coding: utf-8 -*-
import os
import json

# ==============================================================================
# 50 MICRO-ESCENAS ULTRA-MINIMALISTAS (GRUPO 14 - UPV)
# OECD (2026) Public Procurement, Trade and Industrial Policies
# Diseñadas como impactos visuales atómicos de 4 a 8 segundos.
# Paleta: #F6E2B3, #E7A84E, #D96C2C, #3E8E7E, #274C56 sobre fondo blanco.
# ==============================================================================

G14 = {"name": "Grupo 14", "role": "Presentación Conjunta (UPV)", "initials": "G14"}
MR = {"name": "Manuel Romero Álvarez", "role": "Macroeconomía y Medidas Directas", "initials": "MR"}
JC = {"name": "Jorge Cañete Morató", "role": "Cadenas Globales y Subsidios", "initials": "JC"}
AG = {"name": "Aleksandr Globa", "role": "Marco Legal y Gobernanza", "initials": "AG"}

scenes = [
    # -------------------------------------------------------------
    # INTRODUCCIÓN GENERAL (ESCENAS 1 - 4)
    # -------------------------------------------------------------
    # 1. TÍTULO CINEMÁTICO (Tipo D)
    {
        "id": "scene-1",
        "category": "PANORAMA GLOBAL",
        "title": "Contratación Pública, Comercio y Política Industrial",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "OECD (2026) • Supporting National Priorities",
        "speaker": G14,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 2. PODER DE COMPRA GLOBAL (Tipo A)
    {
        "id": "scene-2",
        "category": "DEMANDA AGREGADA",
        "title": "Demanda Agregada Mundial",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Gasto anual mundial estimado entre 11 y 13 billones de dólares",
        "speaker": G14,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Demanda Agregada Global</span>
          <div class="micro-number-hero">
            <span class="micro-number-unit" style="font-size: 80px; color: var(--color-primary);">$</span>
            <span class="micro-number-val counter-val" data-target="11">0</span>
            <span class="micro-number-unit" style="font-size: 70px; color: var(--color-secondary);">–13 Billones</span>
          </div>
          <p class="micro-number-label">Gasto público anual en compras gubernamentales en todo el mundo</p>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 3. PESO EN EL PIB Y GASTO PÚBLICO (Tipo C)
    {
        "id": "scene-3",
        "category": "IMPACTO MACROECONÓMICO",
        "title": "Impacto en las Economías Avanzadas",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "12,7% del PIB en 2023 (13% de media) y un tercio del gasto público",
        "speaker": G14,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-val counter-val" data-target="12.7">0</span>
              <span class="micro-number-unit">%</span>
            </div>
            <p class="micro-number-label">Del PIB de la OCDE (2023; media 13%)</p>
          </div>
          <div class="micro-vs-pill">VS</div>
          <div class="micro-contrast-box right">
            <div class="micro-number-hero">
              <span class="micro-number-val accent-terracotta counter-val" data-target="33">0</span>
              <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
            </div>
            <p class="micro-number-label">Del Gasto Público Consolidado (≈1/3)</p>
          </div>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 4. CAMBIO DE PARADIGMA (Tipo D)
    {
        "id": "scene-4",
        "category": "CAMBIO DE PARADIGMA",
        "title": "La Ruptura de Paradigma",
        "titleGradient": "text-gradient-amber",
        "subtitle": "De la minimización del coste contable a la soberanía geopolítica",
        "speaker": G14,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # -------------------------------------------------------------
    # PARTE 1: MARCO MACROECONÓMICO Y GIRO GEOPOLÍTICO (ESCENAS 5 - 19)
    # -------------------------------------------------------------
    # 5. DESCENTRALIZACIÓN TERRITORIAL (Tipo A)
    {
        "id": "scene-5",
        "category": "DESCENTRALIZACIÓN FISCAL",
        "title": "Descentralización Territorial",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Porcentaje ejecutado fuera del gobierno central",
        "speaker": MR,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 6. REPARTO DEL GASTO SUBNACIONAL VS CENTRAL (Tipo B)
    {
        "id": "scene-6",
        "category": "DISTRIBUCIÓN DEL GASTO",
        "title": "Reparto Territorial del Gasto",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Dificultad de supervisión en tratados comerciales",
        "speaker": MR,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 7. GASTO SANITARIO (Tipo A)
    {
        "id": "scene-7",
        "category": "SECTOR SANITARIO",
        "title": "Gasto en Sanidad Pública",
        "titleGradient": "text-gradient-rose",
        "subtitle": "El sector prioritario de mayor cuantía en compras públicas",
        "speaker": MR,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 8. DOCTRINA DE EFICIENCIA VS SEGURIDAD (Tipo E)
    {
        "id": "scene-8",
        "category": "DOCTRINA Y DILEMAS",
        "title": "Colisión de Paradigmas",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "El dilema central del comercio internacional",
        "speaker": MR,
        "duration": 7,
        "content": """
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
        """,
        "subtitles": []
    },

    # 9. DISRUPCIONES GLOBALES (Tipo D)
    {
        "id": "scene-9",
        "category": "SHOCKS GLOBALES",
        "title": "Los Shocks Catalizadores",
        "titleGradient": "text-gradient-amber",
        "subtitle": "Tres crisis consecutivas que transformaron la política económica",
        "speaker": MR,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Disrupciones de Suministro</span>
          <h2 class="micro-type-d-statement" style="font-size: 54px; margin: 20px 0;">
            <span style="color: var(--color-primary);">COVID-19</span>
            <span class="micro-type-d-arrow">➔</span>
            <span class="accent-highlight">Crisis Ucrania</span>
            <span class="micro-type-d-arrow">➔</span>
            <span class="accent-sage">Tensiones China</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Riesgo extremo de desabastecimiento en insumos y reactivación neomercantilista
          </div>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 10. POLÍTICA INDUSTRIAL DE DEMANDA (Tipo D)
    {
        "id": "scene-10",
        "category": "POLÍTICA INDUSTRIAL",
        "title": "La Compra como Palanca",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "El Estado genera mercados asegurados para sectores estratégicos",
        "speaker": MR,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 11. TAXONOMÍA MEDIDAS DIRECTAS VS INDIRECTAS (Tipo E)
    {
        "id": "scene-11",
        "category": "ARSENAL DE MEDIDAS",
        "title": "El Arsenal de Medidas",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Clasificación oficial de intervenciones según la OCDE",
        "speaker": MR,
        "duration": 7,
        "content": """
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
        """,
        "subtitles": []
    },

    # 12. BUY AMERICAN ACT (Tipo A)
    {
        "id": "scene-12",
        "category": "BUY AMERICAN ACT",
        "title": "Buy American Act en EE.UU.",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Umbral mínimo legal de componentes locales en 2024",
        "speaker": MR,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 13. BUY AMERICAN 65% A 75% (Tipo D)
    {
        "id": "scene-13",
        "category": "ESCALADA PROTECCIONISTA",
        "title": "Escalada Proteccionista en EE.UU.",
        "titleGradient": "text-gradient-amber",
        "subtitle": "La senda legislativa de endurecimiento comercial",
        "speaker": MR,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 14. EVOLUCIÓN HISTÓRICA BAA (Tipo B)
    {
        "id": "scene-14",
        "category": "TRAYECTORIA LEGISLATIVA",
        "title": "Trayectoria del Buy American",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Evolución porcentual del umbral exigido",
        "speaker": MR,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 15. BABA ACT 100% ACERO (Tipo A)
    {
        "id": "scene-15",
        "category": "BABA ACT 2021",
        "title": "BABA Act: Infraestructura Federal",
        "titleGradient": "text-gradient-rose",
        "subtitle": "Build America, Buy America Act (2021)",
        "speaker": MR,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 16. PLAN MÉXICO 2025 (Tipo D)
    {
        "id": "scene-16",
        "category": "PLAN MÉXICO 2025",
        "title": "Plan México 2025",
        "titleGradient": "text-gradient-amber",
        "subtitle": "Estrategia de sustitución de importaciones asiáticas",
        "speaker": MR,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 17. MÉXICO: CONTENIDO VS PREFERENCIA PRECIO (Tipo C)
    {
        "id": "scene-17",
        "category": "INCENTIVOS LOCALES",
        "title": "Doble Incentivo en México",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Reserva de cuota y ventaja en precio para oferentes locales",
        "speaker": MR,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 18. DIRECTIVA UE 2014/25 ART. 85 (>50%) (Tipo A)
    {
        "id": "scene-18",
        "category": "DIRECTIVA UE 2014/25",
        "title": "Excepción del Artículo 85",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Sectores de agua, energía, transportes y servicios postales",
        "speaker": MR,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Directiva 2014/25/UE • Art. 85</span>
          <div class="micro-number-hero">
            <span class="micro-number-unit" style="font-size: 80px; color: var(--color-primary);">&gt;</span>
            <span class="micro-number-val counter-val" data-target="50">0</span>
            <span class="micro-number-unit">%</span>
          </div>
          <p class="micro-number-label">Umbral de productos de terceros países que permite rechazar la oferta</p>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 19. PREFERENCIAS DE PRECIO: ONTARIO BOBI Y ARGENTINA (Tipo C)
    {
        "id": "scene-19",
        "category": "PREFERENCIAS DE PRECIO",
        "title": "Bonificaciones de Precio Local",
        "titleGradient": "text-gradient-amber",
        "subtitle": "Ontario BOBI (Canadá) y Ley Compre Argentino (Ley 27.437)",
        "speaker": MR,
        "duration": 7,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-val counter-val" data-target="10">0</span>
              <span class="micro-number-unit">%</span>
            </div>
            <p class="micro-number-label">Ontario BOBI (Canadá): Ventaja a firmas locales</p>
          </div>
          <div class="micro-vs-pill">&amp;</div>
          <div class="micro-contrast-box right">
            <div class="micro-number-hero">
              <span class="micro-number-val accent-terracotta counter-val" data-target="15">0</span>
              <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
            </div>
            <p class="micro-number-label">Argentina Ley 27.437: 8% general y hasta 15% PYMEs</p>
          </div>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # -------------------------------------------------------------
    # PARTE 2: CADENAS GLOBALES DE VALOR Y RESHORING (ESCENAS 20 - 35)
    # -------------------------------------------------------------
    # 20. SUBSIDIOS VEHÍCULOS ELÉCTRICOS CHINA (Tipo A)
    {
        "id": "scene-20",
        "category": "SUBSIDIOS ESTATALES",
        "title": "Subsidios Estatales en China",
        "titleGradient": "text-gradient-rose",
        "subtitle": "CSIS (OCDE): Subsidios públicos a vehículos eléctricos (2009-2023)",
        "speaker": JC,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Distorsión Global de Precios</span>
          <div class="micro-number-hero">
            <span class="micro-number-unit" style="font-size: 80px; color: var(--color-accent-1);">$</span>
            <span class="micro-number-val accent-terracotta counter-val" data-target="230.9">0</span>
            <span class="micro-number-unit" style="font-size: 70px; color: var(--color-accent-1);">Mil M</span>
          </div>
          <p class="micro-number-label">230.900 millones $ a fabricantes chinos (CSIS / OCDE; 45.000 M$ en 2023)</p>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 21. SUBSIDIOS CRRC FERROCARRIL (Tipo A)
    {
        "id": "scene-21",
        "category": "SUBSIDIOS FERROVIARIOS",
        "title": "El Gigante Ferroviario CRRC",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Base MAGIC OCDE (2020-2024): Subsidios masivos al sector ferroviario",
        "speaker": JC,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-2-rgb), 0.18); color: var(--color-accent-2);">Sector Ferroviario • Base MAGIC OCDE</span>
          <div class="micro-number-hero">
            <span class="micro-number-unit" style="font-size: 80px; color: var(--color-primary);">&gt;$</span>
            <span class="micro-number-val counter-val" data-target="1000">0</span>
            <span class="micro-number-unit" style="font-size: 60px; color: var(--color-secondary);">M / año</span>
          </div>
          <p class="micro-number-label">Subvenciones anuales a fabricantes chinos como CRRC para licitar en el exterior</p>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 22. CASO CRRC EN RUMANÍA (957 M€ / 80% PRECIO) (Tipo C)
    {
        "id": "scene-22",
        "category": "DISTORSIÓN DE PRECIOS",
        "title": "Caso CRRC en Rumanía (2019)",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Impacto real de los subsidios en concursos públicos de la UE",
        "speaker": JC,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-val counter-val" data-target="957">0</span>
              <span class="micro-number-unit">M€</span>
            </div>
            <p class="micro-number-label">Contrato Ferroviario Ganado por CRRC</p>
          </div>
          <div class="micro-vs-pill">CON</div>
          <div class="micro-contrast-box right">
            <div class="micro-number-hero">
              <span class="micro-number-val accent-terracotta counter-val" data-target="80">0</span>
              <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
            </div>
            <p class="micro-number-label">Peso del Criterio Precio en la Puntuación</p>
          </div>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 23. MITO DE CADENAS CORTAS (Tipo D)
    {
        "id": "scene-23",
        "category": "IMPACTO AMBIENTAL",
        "title": "El Mito Ecológico",
        "titleGradient": "text-gradient-amber",
        "subtitle": "Desmontando la falacia de la huella de transporte local",
        "speaker": JC,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 24. INVERNADERO VS IMPORTACIÓN (Tipo E)
    {
        "id": "scene-24",
        "category": "HUELLA DE CARBONO",
        "title": "La Paradoja de Emisiones",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Comparativa de eficiencia en ciclos de vida de producto",
        "speaker": JC,
        "duration": 7,
        "content": """
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
        """,
        "subtitles": []
    },

    # 25. 299 FÁRMACOS ESENCIALES (Tipo A)
    {
        "id": "scene-25",
        "category": "AUTONOMÍA SANITARIA",
        "title": "Fármacos Esenciales Críticos",
        "titleGradient": "text-gradient-rose",
        "subtitle": "Critical Medicines Act de la Comisión Europea (2025)",
        "speaker": JC,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-primary-rgb), 0.12); color: var(--color-primary);">Agencia Europea de Medicamentos</span>
          <div class="micro-number-hero">
            <span class="micro-number-val counter-val" data-target="299">0</span>
          </div>
          <p class="micro-number-label">Medicamentos esenciales bajo alerta por dependencia extrema</p>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 26. AMOXICILINA 65% CHINA (Tipo D)
    {
        "id": "scene-26",
        "category": "CADENAS CRÍTICAS",
        "title": "Dependencia en Antibióticos",
        "titleGradient": "text-gradient-amber",
        "subtitle": "Vulnerabilidad estratégica del sistema sanitario comunitario",
        "speaker": JC,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Principio Activo Esencial</span>
          <h2 class="micro-type-d-statement" style="font-size: 58px; margin: 20px 0;">
            Amoxicilina: <span class="accent-highlight">65%</span> de China
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Hasta el 80% en otros fármacos críticos (Agencia Europea de Medicamentos)
          </div>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 27. NET-ZERO INDUSTRY ACT 50% (Tipo A)
    {
        "id": "scene-27",
        "category": "TRANSICIÓN VERDE",
        "title": "Net-Zero Industry Act",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Reglamento UE 2024/1735 sobre tecnologías limpias",
        "speaker": JC,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 28. COMPRA PÚBLICA DE INNOVACIÓN Y PATENTES (Tipo C)
    {
        "id": "scene-28",
        "category": "INNOVACIÓN PÚBLICA",
        "title": "Patentes y Exportación (Aghion et al.)",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Estudio en Francia (1995-2012) citado en el informe de la OCDE",
        "speaker": JC,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-val accent-sage counter-val" data-target="95">0</span>
              <span class="micro-number-unit" style="color: var(--color-secondary);">%</span>
            </div>
            <p class="micro-number-label">Empresas con patentes que exportan (Francia)</p>
          </div>
          <div class="micro-vs-pill">➔</div>
          <div class="micro-contrast-box right" style="padding: 16px;">
            <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1); margin-bottom: 8px;">Aviso OCDE</span>
            <p style="font-size: 15px; line-height: 1.35; color: var(--color-ink-light); margin: 0;">
              La compra pública fortalece la competitividad, pero su vínculo causal directo con exportaciones no está formalmente demostrado.
            </p>
          </div>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 29. 70% BIENES INTERMEDIOS (Tipo A)
    {
        "id": "scene-29",
        "category": "CADENAS GLOBALES",
        "title": "Cadenas Globales de Valor",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Estructura productiva real del comercio contemporáneo",
        "speaker": JC,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 30. DONUT BIENES INTERMEDIOS VS FINALES (Tipo B)
    {
        "id": "scene-30",
        "category": "INSUMOS INTERMEDIOS",
        "title": "Composición del Comercio Global",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Insumos intermedios frente a productos finales terminados",
        "speaker": JC,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 31. NINGÚN BIEN 100% NACIONAL (Tipo D)
    {
        "id": "scene-31",
        "category": "PRODUCTO DOMÉSTICO",
        "title": "La Falacia del Producto Doméstico",
        "titleGradient": "text-gradient-amber",
        "subtitle": "Imposibilidad física del aislamiento productivo en tecnología",
        "speaker": JC,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 32. CAÍDA COMERCIO -18% (Tipo A)
    {
        "id": "scene-32",
        "category": "COSTE DEL RESHORING",
        "title": "Coste del Reshoring Forzado",
        "titleGradient": "text-gradient-rose",
        "subtitle": "Simulaciones cuantitativas de la OCDE (Arriola et al., 2020)",
        "speaker": JC,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 33. DESTRUCCIÓN PIB -5% (Tipo A)
    {
        "id": "scene-33",
        "category": "IMPACTO EN EL PIB",
        "title": "Destrucción del PIB Global",
        "titleGradient": "text-gradient-rose",
        "subtitle": "Pérdida irreversible de renta per cápita mundial",
        "speaker": JC,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 34. CAÍDA PIB CANADÁ Y UK (Tipo B)
    {
        "id": "scene-34",
        "category": "PÉRDIDA ASIMÉTRICA",
        "title": "Pérdida de PIB por Países",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Impacto asimétrico del reshoring en economías abiertas",
        "speaker": JC,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 35. AUTARQUÍA = MAYOR VULNERABILIDAD (Tipo D)
    {
        "id": "scene-35",
        "category": "RESILIENCIA ECONÓMICA",
        "title": "La Falacia de la Resiliencia",
        "titleGradient": "text-gradient-amber",
        "subtitle": "Por qué la economía autárquica sufre mayores shocks",
        "speaker": JC,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # -------------------------------------------------------------
    # PARTE 3: GOBERNANZA, RECIPROCIDAD Y DIGITALIZACIÓN (ESCENAS 36 - 47)
    # -------------------------------------------------------------
    # 36. FRIEND-SHORING -0.6% A -4.6% (Tipo A)
    {
        "id": "scene-36",
        "category": "FRIEND-SHORING",
        "title": "El Coste del Friend-Shoring",
        "titleGradient": "text-gradient-rose",
        "subtitle": "Javorcik et al. (2023): Costes económicos de la fragmentación en bloques",
        "speaker": AG,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-2-rgb), 0.18); color: var(--color-accent-2);">Fragmentación Geoeconómica</span>
          <div class="micro-number-hero">
            <span class="micro-number-unit" style="font-size: 60px; color: var(--color-accent-1);">-0,6% a</span>
            <span class="micro-number-val accent-terracotta counter-val" data-target="4.6">0</span>
            <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
          </div>
          <p class="micro-number-label">Pérdida de PIB mundial a medio plazo por división en dos bloques comerciales</p>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 37. SOBRECOSTE DE CUOTAS LOCALES (Tipo C)
    {
        "id": "scene-37",
        "category": "TEORÍA DEL COMERCIO",
        "title": "Sobrecoste del Proteccionismo",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Ricardo, Heckscher-Ohlin y Modelo Gravitacional de Comercio",
        "speaker": AG,
        "duration": 7,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-unit" style="color: var(--color-accent-1);">+</span>
              <span class="micro-number-val accent-terracotta counter-val" data-target="15">0</span>
              <span class="micro-number-unit" style="color: var(--color-accent-1);">–30%</span>
            </div>
            <p class="micro-number-label">Sobrecoste de contratación por cuotas de contenido local</p>
          </div>
          <div class="micro-vs-pill">VS</div>
          <div class="micro-contrast-box right" style="padding: 16px;">
            <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary); margin-bottom: 8px;">Aranceles Encubiertos</span>
            <p style="font-size: 15px; line-height: 1.35; color: var(--color-ink-light); margin: 0;">
              Destrucción de ventajas comparativas (Ricardo) y desconexión tecnológica de la industria nacional.
            </p>
          </div>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 38. PRIMER CASO IPI: DISPOSITIVOS MÉDICOS (Tipo D)
    {
        "id": "scene-38",
        "category": "PRIMER CASO IPI",
        "title": "Reglamento de Ejecución UE 2025/1197",
        "titleGradient": "text-gradient-rose",
        "subtitle": "Primera aplicación sancionadora del IPI en la historia comunitaria",
        "speaker": AG,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Primer Veto IPI • Junio 2025</span>
          <h2 class="micro-type-d-statement" style="font-size: 52px; margin: 20px 0;">
            Exclusión de <span class="accent-highlight">Material Médico Chino</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Tras investigación (abril 2024 - enero 2025) por falta de reciprocidad de Pekín
          </div>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 39. GPA: 22 PARTES Y 49 MIEMBROS OMC (Tipo C)
    {
        "id": "scene-39",
        "category": "ACUERDO ACP / GPA",
        "title": "El Límite del GPA de la OMC",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Acuerdo plurilateral: 22 partes cubren a 49 miembros de la OMC",
        "speaker": AG,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-contrast-grid">
          <div class="micro-contrast-box left">
            <div class="micro-number-hero">
              <span class="micro-number-val counter-val" data-target="49">0</span>
            </div>
            <p class="micro-number-label">Miembros OMC Cubiertos (22 Partes)</p>
          </div>
          <div class="micro-vs-pill">VS</div>
          <div class="micro-contrast-box right">
            <div class="micro-number-hero">
              <span class="micro-number-unit" style="color: var(--color-accent-1);">≈</span>
              <span class="micro-number-val accent-terracotta counter-val" data-target="75">0</span>
              <span class="micro-number-unit" style="color: var(--color-accent-1);">%</span>
            </div>
            <p class="micro-number-label">Miembros de la OMC Fuera del GPA (~3/4)</p>
          </div>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 40. BRICS FUERA DEL GPA (Tipo D)
    {
        "id": "scene-40",
        "category": "SUR GLOBAL",
        "title": "Los Grandes Emergentes",
        "titleGradient": "text-gradient-amber",
        "subtitle": "Por qué las mayores economías del Sur Global no firman el GPA",
        "speaker": AG,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 41. IPI APERTURA CONDICIONAL (Tipo D)
    {
        "id": "scene-41",
        "category": "INSTRUMENTO IPI",
        "title": "El Instrumento IPI Europeo",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Reglamento UE 2022/1031 de Contratación Internacional",
        "speaker": AG,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 42. SANCIONES IPI: -50% O EXCLUSIÓN (Tipo C)
    {
        "id": "scene-42",
        "category": "PENALIZACIONES IPI",
        "title": "Sanciones del Instrumento IPI",
        "titleGradient": "text-gradient-rose",
        "subtitle": "El régimen sancionador de la Comisión Europea",
        "speaker": AG,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 43. SENTENCIA KOLIN TJUE (Tipo D)
    {
        "id": "scene-43",
        "category": "SENTENCIA KOLIN",
        "title": "Sentencia Kolin del TJUE",
        "titleGradient": "text-gradient-amber",
        "subtitle": "Asunto C-652/22 (22 de octubre de 2024): Precedente legal histórico",
        "speaker": AG,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-accent-1-rgb), 0.14); color: var(--color-accent-1);">Jurisprudencia Vinculante TJUE (22/10/2024)</span>
          <h2 class="micro-type-d-statement" style="font-size: 60px; margin: 20px 0;">
            Sin Tratado <span class="micro-type-d-arrow">➔</span> <span class="accent-highlight">Sin Recurso Legal</span>
          </h2>
          <div class="micro-pill-point" style="font-size: 18px;">
            Licitadores de países sin GPA carecen de tutela judicial para invocar directivas de la UE
          </div>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # 44. DOBLE ESTÁNDAR JURÍDICO (Tipo E)
    {
        "id": "scene-44",
        "category": "MAPA LEGAL",
        "title": "El Nuevo Mapa Legal de Licitación",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Diferenciación estricta entre socios comerciales y terceros",
        "speaker": AG,
        "duration": 7,
        "content": """
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
        """,
        "subtitles": []
    },

    # 45. EVALUACIÓN 23% VS 10% (Tipo C)
    {
        "id": "scene-45",
        "category": "DÉFICIT DE EVALUACIÓN",
        "title": "El Déficit de Evaluación",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "La falta de medición de costes reales en los países de la OCDE",
        "speaker": AG,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 46. GRÁFICA EVALUACIÓN DE COMPRAS (Tipo B)
    {
        "id": "scene-46",
        "category": "AUDITORÍA DEL GASTO",
        "title": "Evaluación Empírica en la OCDE",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Porcentaje de administraciones que auditan los sobrecostes",
        "speaker": AG,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 47. 98% E-PROCUREMENT (Tipo A)
    {
        "id": "scene-47",
        "category": "DIGITALIZACIÓN",
        "title": "Digitalización e-Procurement",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "39 de 40 países encuestados (98%) publican en portales centrales",
        "speaker": AG,
        "duration": 6,
        "content": """
      <div class="micro-stage-center stagger-in delay-2">
        <div class="micro-card-atomic">
          <span class="micro-tag" style="background: rgba(var(--color-secondary-rgb), 0.14); color: var(--color-secondary);">Transparencia y Eficiencia</span>
          <div class="micro-number-hero">
            <span class="micro-number-val accent-sage counter-val" data-target="98">0</span>
            <span class="micro-number-unit" style="color: var(--color-secondary);">%</span>
          </div>
          <p class="micro-number-label">39 de 40 países con plataformas centrales en línea (e-procurement)</p>
        </div>
      </div>
        """,
        "subtitles": []
    },

    # -------------------------------------------------------------
    # CONCLUSIÓN Y BALANCE FINAL (G14) (ESCENAS 48 - 50)
    # -------------------------------------------------------------
    # 48. DIGITALIZACIÓN Y CONCURRENCIA (Tipo D)
    {
        "id": "scene-48",
        "category": "TRANSPARENCIA Y PYMES",
        "title": "El Efecto Democratizador",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Impacto de la tecnología digital en la transparencia",
        "speaker": G14,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    },

    # 49. AUTARQUÍA VS RESILIENCIA (Tipo E)
    {
        "id": "scene-49",
        "category": "DILEMA ESTRATÉGICO",
        "title": "El Gran Dilema Global",
        "titleGradient": "text-gradient-amber",
        "subtitle": "La encrucijada estratégica documentada por la OCDE",
        "speaker": G14,
        "duration": 7,
        "content": """
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
        """,
        "subtitles": []
    },

    # 50. CIERRE INSTITUCIONAL (Tipo D)
    {
        "id": "scene-50",
        "category": "SÍNTESIS FINAL",
        "title": "Economía Mundial • UPV",
        "titleGradient": "text-gradient-indigo",
        "subtitle": "Grado en ADE + INF / MAT • Curso 2026-2027",
        "speaker": G14,
        "duration": 6,
        "content": """
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
        """,
        "subtitles": []
    }
]

# ==============================================================================
# GENERACIÓN DE SCENES-DATA.JS Y STANDALONE.HTML
# ==============================================================================

js_content = """/* ==========================================================================
   SCENES-DATA.JS - 50 MICRO-ESCENAS ULTRA-MINIMALISTAS (GRUPO 14 - UPV)
   OECD (2026) Public Procurement, Trade and Industrial Policies
   Paleta: #F6E2B3, #E7A84E, #D96C2C, #3E8E7E, #274C56 sobre fondo blanco.
   ========================================================================== */

const SCENES_DATA = [
"""

for i, sc in enumerate(scenes):
    content_escaped = sc['content'].strip()
    subs_formatted = json.dumps(sc['subtitles'], ensure_ascii=False, indent=6)
    sep = ",\n\n" if i < len(scenes) - 1 else "\n"
    js_content += f"""  // --- ESCENA {i+1}: {sc['id'].upper()} ---
  {{
    id: {json.dumps(sc['id'])},
    category: {json.dumps(sc['category'])},
    title: {json.dumps(sc['title'])},
    titleGradient: {json.dumps(sc['titleGradient'])},
    subtitle: {json.dumps(sc['subtitle'])},
    speaker: {json.dumps(sc['speaker'], ensure_ascii=False)},
    duration: {sc['duration']},
    renderContent: () => `
{content_escaped}
    `,
    subtitles: {subs_formatted}
  }}{sep}"""

js_content += "];\n"

scenes_file = "/home/manel/UPV/INF-ADE/2-curso/EM/video-player/js/scenes-data.js"
with open(scenes_file, "w", encoding="utf-8") as f:
    f.write(js_content)
print(f"Generated {scenes_file} with {len(scenes)} scenes successfully.")

# Now update standalone.html
base_dir = "/home/manel/UPV/INF-ADE/2-curso/EM/video-player"
theme_css = open(f"{base_dir}/css/theme.css", "r", encoding="utf-8").read()
motion_css = open(f"{base_dir}/css/motion.css", "r", encoding="utf-8").read()
components_css = open(f"{base_dir}/css/components.css", "r", encoding="utf-8").read()
engine_js = open(f"{base_dir}/js/engine.js", "r", encoding="utf-8").read()

standalone_html = f"""<!DOCTYPE html>
<html lang="es" data-font="0">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grupo 14 • Contratación Pública y Comercio Internacional (OECD 2026)</title>

  <!-- Google Fonts: Sora, Space Grotesk, Archivo, Plus Jakarta Sans, JetBrains Mono, Syne, Outfit -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@600;700;800;900&display=swap" rel="stylesheet">

  <style>
{theme_css}
{motion_css}
{components_css}
  </style>
</head>
<body>

  <!-- Viewport Principal a Pantalla Completa -->
  <div class="player-viewport" id="player-viewport">

    <!-- Capa de Fundido a Negro Suave (Fade to Black) -->
    <div class="blackout-curtain" id="blackout-curtain"></div>

    <!-- Escenario 16:9 Nativo Cinematográfico -->
    <main class="player-stage" id="player-stage">

      <!-- Orbes de Luz Ambiental con Desenfocado Suave Vintage -->
      <div class="ambient-orb ambient-orb-1"></div>
      <div class="ambient-orb ambient-orb-2"></div>
      <div class="ambient-orb ambient-orb-3"></div>

      <!-- BARRA SUPERIOR (TOP HUD) -->
      <header class="hud-top">
        <div class="brand-pill">
          <div class="brand-dot"></div>
          <div>
            <span class="brand-title">Economía Mundial</span>
            <span class="brand-subtitle" style="margin-left: 8px;">Grupo 14</span>
          </div>
        </div>

        <!-- Selector Rápido de Paletas en el HUD -->
        <div class="palette-picker-pill" id="hud-palette-picker" title="Cambiar Paleta Cromática (Atajo: Tecla P)">
          <span class="palette-picker-label">PALETA:</span>
          <button class="palette-pill-btn active" data-palette="0" title="Paleta 0: Retro Actual" onclick="window.playerInstance.setPalette('0')">
            <span class="palette-dot-preview" style="background: linear-gradient(135deg, #274C56, #3E8E7E, #D96C2C);"></span>
            <span>0</span>
          </button>
          <button class="palette-pill-btn" data-palette="1" title="Paleta 1: Neo-Teal & Mauve" onclick="window.playerInstance.setPalette('1')">
            <span class="palette-dot-preview" style="background: linear-gradient(135deg, #57C7D0, #CC75A7, #E5A37A);"></span>
            <span>1</span>
          </button>
          <button class="palette-pill-btn" data-palette="2" title="Pastel Garden" onclick="window.playerInstance.setPalette('2')">
            <span class="palette-dot-preview" style="background: linear-gradient(135deg, #9DE7C4, #B7D687, #F6BCDC);"></span>
            <span>2</span>
          </button>
          <button class="palette-pill-btn" data-palette="3" title="Paleta 3: Crimson & Ochre" onclick="window.playerInstance.setPalette('3')">
            <span class="palette-dot-preview" style="background: linear-gradient(135deg, #250033, #6A0A08, #E18338);"></span>
            <span>3</span>
          </button>
          <button class="palette-pill-btn" data-palette="4" title="Paleta 4: Warm Bronze" onclick="window.playerInstance.setPalette('4')">
            <span class="palette-dot-preview" style="background: linear-gradient(135deg, #765317, #B37E3E, #D1A259);"></span>
            <span>4</span>
          </button>
          <button class="palette-pill-btn" data-palette="5" title="Paleta 5: Swiss Editorial" onclick="window.playerInstance.setPalette('5')">
            <span class="palette-dot-preview" style="background: linear-gradient(135deg, #1A365D, #D64527, #2A6F5B);"></span>
            <span>5</span>
          </button>
        </div>

        <!-- Selector Rápido de Fuentes en el HUD (Atajo: Tecla F) -->
        <div class="font-picker-pill" id="hud-font-picker" title="Cambiar Fuente Tipográfica (Atajo: Tecla F)">
          <button class="font-picker-label-btn" id="btn-font-cycle" title="Ciclar fuente tipográfica (Tecla F)" onclick="window.playerInstance.cycleFont()">
            <span class="key-kbd" style="font-size: 10px; padding: 1px 5px; margin-right: 4px;">F</span>
            <span class="font-picker-label">FUENTE:</span>
            <span class="font-name-display" id="font-name-display">Archivo</span>
          </button>
          <div class="font-presets-strip" id="font-presets-strip">
            <button class="font-pill-btn active" data-font="0" title="Archivo: Grotesca suiza contundente (DEFAULT)" onclick="window.playerInstance.setFont('0')">Archivo</button>
            <button class="font-pill-btn" data-font="1" title="Sora: Geométrica ancha & limpia" onclick="window.playerInstance.setFont('1')">Sora</button>
            <button class="font-pill-btn" data-font="2" title="Space Grotesk: Editorial tech" onclick="window.playerInstance.setFont('2')">Space</button>
            <button class="font-pill-btn" data-font="3" title="Plus Jakarta Sans: Moderna y neutra" onclick="window.playerInstance.setFont('3')">Jakarta</button>
            <button class="font-pill-btn" data-font="4" title="Syne: Display retro" onclick="window.playerInstance.setFont('4')">Syne</button>
          </div>
        </div>

        <!-- Pastilla del Ponente Activo -->
        <div class="speaker-pill" id="speaker-pill-container">
          <div class="speaker-avatar" id="speaker-avatar">G14</div>
          <div class="speaker-info">
            <span class="speaker-name" id="speaker-name">Manuel, Jorge y Aleksandr</span>
            <span class="speaker-role" id="speaker-role">Presentación Conjunta</span>
          </div>
        </div>

        <!-- Metadatos de la Escena -->
        <div class="scene-meta-pill">
          <span>ESCENA</span>
          <span class="meta-scene-num" id="scene-counter-display">01 / 50</span>
          <div class="meta-divider"></div>
          <span style="color: var(--color-secondary); font-weight: 700;">1080p 60fps</span>
        </div>
      </header>

      <!-- ÁREA CENTRAL DE LA ESCENA DINÁMICA -->
      <section class="scene-container">
        <!-- Cabecera de la Escena Actual -->
        <div class="scene-header stagger-in delay-1">
          <h1 class="scene-title-large text-gradient-indigo" id="scene-title">
            Contratación Pública, Comercio y Política Industrial
          </h1>
          <p class="scene-subtitle-lead" id="scene-subtitle">
            OECD (2026) • Supporting National Priorities
          </p>
        </div>

        <!-- Contenido Inyectado Dinámicamente -->
        <div id="scene-content-area" style="min-height: 520px;"></div>
      </section>

      <!-- Notificación Flotante Discreta de Cambio de Paleta (Tecla P) -->
      <div class="palette-toast" id="palette-toast" aria-live="polite">
        <span class="palette-toast-badge" id="palette-toast-badge">PALETA 0</span>
        <span class="palette-toast-name" id="palette-toast-name">Retro Vintage</span>
      </div>

      <!-- Notificación Flotante Discreta de Cambio de Fuente (Tecla F) -->
      <div class="palette-toast font-toast" id="font-toast" aria-live="polite">
        <span class="palette-toast-badge font-toast-badge" id="font-toast-badge">FUENTE 0</span>
        <span class="palette-toast-name font-toast-name" id="font-toast-name">Archivo</span>
        <span class="font-toast-desc" id="font-toast-desc">Grotesca suiza contundente (DEFAULT)</span>
      </div>

      <!-- BARRA INFERIOR (BOTTOM HUD & RECORDING CONTROLS) -->
      <footer class="hud-bottom">
        
        <!-- Controles de Navegación y Línea de Tiempo -->
        <div class="timeline-control-pill">
          <button class="btn-icon-hud" id="btn-prev" title="Escena Anterior (Flecha Izquierda)" onclick="window.playerInstance.prevScene()">
            ◀
          </button>
          <button class="btn-icon-hud primary" id="btn-play-pause" title="Reproducir / Pausar (Barra Espaciadora)" onclick="window.playerInstance.togglePlayPause()">
            <span id="play-pause-icon">▶</span>
          </button>
          <button class="btn-icon-hud" id="btn-next" title="Siguiente Escena (Flecha Derecha)" onclick="window.playerInstance.nextScene()">
            ▶
          </button>

          <!-- Navegador de Pasos / Mini-Track Scrubber para 45-55 Escenas -->
          <div class="hud-scrubber-nav" id="hud-scrubber-nav">
            <div class="hud-step-indicator" id="hud-step-indicator" title="Escena Actual / Total">
              <span class="hud-step-curr" id="hud-step-curr">01</span>
              <span class="hud-step-sep">/</span>
              <span class="hud-step-total" id="hud-step-total">50</span>
            </div>
            <div class="hud-scrubber-rail-wrapper" id="hud-scrubber-rail-wrapper" title="Arrastra o haz clic para saltar entre escenas">
              <div class="hud-scrubber-rail" id="hud-scrubber-rail">
                <div class="hud-scrubber-fill" id="hud-scrubber-fill"></div>
                <div class="hud-scrubber-thumb" id="hud-scrubber-thumb"></div>
              </div>
              <div class="hud-scrubber-tooltip" id="hud-scrubber-tooltip">Escena 01</div>
            </div>
          </div>

          <!-- Indicadores de Escenas Opcionales (Dots) -->
          <div class="timeline-dots" id="timeline-dots-container" style="display: none;"></div>

          <!-- Estado de Autoplay -->
          <div class="autoplay-status">
            <div class="autoplay-dot paused" id="autoplay-dot"></div>
            <span id="autoplay-status-text">PAUSADO</span>
          </div>
        </div>

        <!-- Herramientas y Atajos para Grabación de Pantalla -->
        <div class="hud-recording-tools">
          <div class="tool-pill-btn" onclick="window.playerInstance.cycleFont()" title="Cambiar familia tipográfica (Atajo: Tecla F)">
            <span class="key-kbd">F</span>
            <span>Fuente</span>
          </div>

          <div class="tool-pill-btn" onclick="window.playerInstance.toggleCleanRecordingMode()" title="Ocultar toda la interfaz para grabar la pantalla limpiamente (Atajo: Tecla H)">
            <span class="key-kbd">H</span>
            <span>Modo Grabación Limpia</span>
          </div>

          <div class="tool-pill-btn" onclick="window.playerInstance.toggleFullscreen()" title="Pantalla completa para grabación a 1080p (Atajo: Tecla M o Doble Clic)">
            <span class="key-kbd">M</span>
            <span>Pantalla Completa</span>
          </div>
        </div>
      </footer>

    </main>
  </div>

  <script>
{js_content}
{engine_js}
  </script>
</body>
</html>
"""

standalone_file = "/home/manel/UPV/INF-ADE/2-curso/EM/video-player/standalone.html"
with open(standalone_file, "w", encoding="utf-8") as f:
    f.write(standalone_html)
print(f"Generated {standalone_file} successfully.")

# Also generate root index.html and root video_player.html
root_index_file = "/home/manel/UPV/INF-ADE/2-curso/EM/index.html"
with open(root_index_file, "w", encoding="utf-8") as f:
    f.write(standalone_html)
print(f"Generated root {root_index_file} successfully.")

root_video_file = "/home/manel/UPV/INF-ADE/2-curso/EM/video_player.html"
with open(root_video_file, "w", encoding="utf-8") as f:
    f.write(standalone_html)
print(f"Generated root {root_video_file} successfully.")
