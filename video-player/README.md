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

## 4. Guion de las 10 Escenas Preconfiguradas

1. **Escena 1 (Portada Cinematográfica):** Presentación del Grupo 14, contextualización del informe OCDE (2026) y reparto de los 3 bloques.
2. **Escena 2 (Bloque 1 - Manuel Romero):** Magnitud macroeconómica (13% del PIB en la OCDE, $11 billones anuales, 62,5% subnacional).
3. **Escena 3 (Bloque 1 - Manuel Romero):** El choque de paradigmas (Eficiencia GATT/OMC vs. Seguridad Estratégica neomercantilista).
4. **Escena 4 (Bloque 1 - Manuel Romero):** Medidas Directas (*Buy American* 65%➔75%, Plan México) vs. Medidas Indirectas (Compras verdes, Net-Zero Industry Act).
5. **Escena 5 (Bloque 2 - Jorge Cañete):** Cadenas Globales de Valor (70% bienes intermedios, paradoja del contenido local y trade-off institucional de Bosio et al.).
6. **Escena 6 (Bloque 2 - Jorge Cañete):** La falacia del *reshoring* (Modelizaciones de Arriola et al.: caída del 18% en comercio y -5% del PIB; falsa resiliencia autárquica).
7. **Escena 7 (Bloque 2 - Jorge Cañete):** Distorsiones por subsidios extranjeros (China EV $231.000M, CRRC $1.000M/año con bajas temerarias del 25%).
8. **Escena 8 (Bloque 3 - Aleksandr Globa):** Gobernanza multilateral y reciprocidad (Límites del GPA 48 miembros, IPI de la UE 2022/1031 y Sentencia Kolin 2024).
9. **Escena 9 (Bloque 3 - Aleksandr Globa):** Diagnóstico empírico y recomendaciones (Solo 23% mide impacto económico, 98% portales e-procurement).
10. **Escena 10 (Conclusión Conjunta):** Mensaje final del Grupo 14 (Apertura recíproca, digitalización y diversificación frente al cierre comercial).

---

## 5. Instrucciones de Grabación Recomendadas para el Grupo

1. Abrir `video-player/standalone.html` o `index.html` en Google Chrome a resolución 1080p (1920x1080).
2. Presionar **`[F]`** para activar Pantalla Completa.
3. Presionar **`[H]`** para ocultar los controles de la interfaz y dejar el lienzo completamente cinematográfico.
4. Grabar la pantalla con OBS Studio o la herramienta de grabación de pantalla del sistema mientras el orador correspondiente explica su bloque de viva voz.
5. Presionar **`[→]`** o la **Barra Espaciadora** para avanzar entre escenas con suaves fundidos a negro.
