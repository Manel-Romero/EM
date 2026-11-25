# Reproductor de Motion Graphics Web • Grupo 14
**Asignatura:** Economía Mundial (Curso 2026-2027) | **Grado:** ADE + INF / MAT (UPV)  
**Tema:** Contratación Pública, Comercio Internacional y Políticas Industriales (*OECD 2026*)  
**Integrantes:** Manuel Romero Álvarez, Jorge Cañete Morató, Aleksandr Globa  

---

## 1. Visión General del Motor Visual

Este motor web ha sido diseñado como un sistema cinematográfico de **Motion Graphics interactivo** para la grabación de pantalla del vídeo del Grupo 14 (10% de la calificación oficial). Proporciona una estética editorial de vanguardia, 100% libre de bordes, con tipografía ancha moderna, transiciones fluidas y subtítulos dinámicos de estilo *kinetic video*.

### Principios de Diseño Implementados:
* **Zero-Borders Estricto (`border: none !important`):** La separación visual y la jerarquía se logran mediante contraste sutil de capas de superficie (`rgba(255, 255, 255, 0.035)` a `0.095`), *frosted glass* con `backdrop-filter: blur(32px)` y sombras ambientales profundas.
* **Paleta Oscura Cinematográfica:** Fondo noche terciopelo (`#06070a`, `#090b11`) con acentos vibrantes pero sobrios (índigo `#6366f1`, menta esmeralda `#10b981`, ámbar dorado `#f59e0b`, rosa coral `#f43f5e`).
* **Ultra-Redondeado Orgánico:** Radios de curvatura de `28px` (tarjetas estándar), `36px` (tarjetas hero) y pastillas *pill* de `9999px` en insignias, oradores y controles.
* **Física de Animación Cúbica:** Curva `cubic-bezier(0.16, 1, 0.3, 1)` para entradas escalonadas (*staggered entrance*), flotación suave de tarjetas y crecimiento progresivo de barras.
* **Contadores Numéricos Dinámicos:** Los datos clave (`13%`, `$11B`, `-18%`, `65%`) suben progresivamente desde cero con aceleración suave.
* **Subtítulos Kinéticos Integrados:** Barra inferior de subtítulos que resalta y anima palabra por palabra en sincronía con el avance de la escena.
* **Fundido a Negro Suave (*Fade to Black*):** Transición cinematográfica opaca entre escenas para evitar saltos bruscos durante la grabación.

---

## 2. Controles de Reproducción y Grabación de Pantalla

El reproductor incorpora atajos de teclado pensados para una grabación impecable con software de captura (OBS Studio, navegador, QuickTime, etc.):

| Tecla / Control | Acción | Descripción |
| :--- | :---: | :--- |
| **`[H]`** | **Modo Grabación Limpia** | **Oculta el 100% de los elementos de la interfaz** (cabecera, barra inferior, línea temporal y pistas de ayuda). Permite una pantalla 100% limpia sin distracciones. |
| **`[F]`** | **Pantalla Completa** | Activa la visualización nativa 16:9 en 1080p centrada. |
| **`[Espacio]`** | **Play / Pausa** | Alterna entre el avance automático programado (*autoplay*) y el avance manual. |
| **`[→]` / `[←]`** | **Siguiente / Anterior** | Navega manualmente entre las 10 escenas del informe con fundido suave. |
| **`[1]` a `[9]`, `[0]`** | **Salto Directo** | Salta directamente a las escenas 1 a 10. |
| **Inactividad de Ratón** | **Auto-hide Cursor** | Si no se mueve el ratón en 2,5 segundos durante el modo reproducción o grabación, el cursor se oculta automáticamente. |

---

## 3. Estructura de Archivos y Versiones

La carpeta contiene dos alternativas listas para usar:

```
video-player/
├── index.html              <-- Versión modular principal
├── standalone.html         <-- Versión autocontenida portátil (1 solo archivo, 0 dependencias)
├── README.md               <-- Esta guía de uso y arquitectura
├── css/
│   ├── theme.css           <-- Tokens de diseño, tipografía, paleta y canvas 16:9
│   ├── motion.css          <-- Curvas cúbicas, fade to black, kinetic captions y staggered delays
│   └── components.css      <-- Tarjetas métricas hero, pastillas orador, comparativas y HUD
└── js/
    ├── scenes-data.js      <-- Guion y datos empíricos de las 10 escenas del Grupo 14
    └── engine.js           <-- Motor de reproducción, cronómetros, atajos y animadores
```

> **Consejo de Uso:** Puedes hacer doble clic directamente en `standalone.html` para abrirlo en cualquier navegador (Google Chrome, Edge, Safari, Firefox) sin necesidad de servidor local o compilación.

---

## 4. Estructura de las 50 Micro-Escenas y Reparto por Ponentes

El motor cuenta con **50 micro-escenas atómicas** (4 a 8 segundos cada una) diseñadas para proyectarse en B-roll y sincronizarse con el guion maestro de 15 minutos en DaVinci Resolve ([`GUION_Y_ESCALETA_VIDEO_DAVINCI.md`](file:///home/manel/UPV/INF-ADE/2-curso/EM/GUION_Y_ESCALETA_VIDEO_DAVINCI.md)):

* **Apertura Institucional (G14: Manuel, Jorge y Aleksandr • Escenas 1 a 4):**
  * Título oficial OCDE (2026), demanda agregada global ($11–13 billones), peso en el PIB (12,7% en 2023) y giro neomercantilista.
* **Bloque 1: Manuel Romero Álvarez (Escenas 5 a 19 • Macroeconomía y Medidas Directas):**
  * Descentralización territorial (62,5% subnacional), peso del gasto sanitario (>30%), colisión de paradigmas (eficiencia vs seguridad), Buy American Act en EE.UU. (65%➔75% en 2029), Ley BABA (100% acero), Plan México 2025 (65% local + 15% precio), Directiva 2014/25 art. 85 (>50%) y bonificaciones (Ontario BOBI 10% y Compre Argentino 8-15%).
* **Bloque 2: Jorge Cañete Morató (Escenas 20 a 35 • Subsidios, Sanidad y Cadenas Globales):**
  * Subsidios de China en VE ($230.900M) y ferrocarril CRRC (>$1.000M/año con contrato en Rumanía de 957M€), mito ecológico (invernaderos vs transporte solar eficiente), 299 fármacos esenciales de la EMA, amoxicilina 65% de China, Net-Zero Industry Act (50%), Compra Pública de Innovación, y simulación de Arriola et al. (-18% comercio mundial, -5% PIB global, Canadá -13,1%, UK -12,2%).
* **Bloque 3: Aleksandr Globa (Escenas 36 a 47 • Marco Legal, Reciprocidad y Gobernanza):**
  * Coste del friend-shoring (-0,6% a -4,6% PIB), sobrecostes por cuotas locales (+15% a +30%), régimen del GPA (22 partes / 49 miembros vs ~75% fuera), Instrumento IPI de la UE (Reglamento 2022/1031 y veto a productos médicos chinos con Reg. 2025/1197), Sentencia Kolin del TJUE (C-652/22 de 22 de octubre de 2024), déficit de evaluación (23% económico y 10% ambiental) e implantación de e-procurement (98% de países OCDE).
* **Cierre y Síntesis Final (G14: Manuel, Jorge y Aleksandr • Escenas 48 a 50):**
  * Democratización para PYMEs, gran dilema de política comercial y conclusiones conjuntas para el tribunal evaluador.

---

## 5. Instrucciones de Grabación Recomendadas para el Grupo

1. Abrir `video-player/standalone.html` o `index.html` en Google Chrome a resolución 1080p (1920x1080).
2. Presionar **`[F]`** para activar Pantalla Completa.
3. Presionar **`[H]`** para ocultar los controles de la interfaz y dejar el lienzo completamente cinematográfico.
4. Grabar la pantalla con OBS Studio o la herramienta de grabación de pantalla del sistema mientras el orador correspondiente explica su bloque de viva voz.
5. Presionar **`[→]`** o la **Barra Espaciadora** para avanzar entre escenas con suaves fundidos a negro.
