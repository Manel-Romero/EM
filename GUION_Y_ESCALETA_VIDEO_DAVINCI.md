# GUION INTEGRAL, ESCALETA AUDIOVISUAL Y HOJA DE RUTA DE MONTAJE (DAVINCI RESOLVE)
## Proyecto de Economía Mundial (Curso 2026-2027) | Grado en ADE + INF / MAT (UPV)
**Grupo 14:** Manuel Romero Álvarez, Jorge Cañete Morató, Aleksandr Globa  
**Presentador en Cámara y Narrador Principal:** Manuel Romero Álvarez  
**Documento Base:** OECD (2026). *Public Procurement, Trade and Industrial Policies: Supporting National Priorities*. OECD Publishing, Paris.  
**Profesor Evaluador:** Ferran J. Portilla Salas (`fjporsal@upv.es`) | **Coordinador:** Norat Roig-Tierno  

---

## 1. ESPECIFICACIONES TÉCNICAS DE PRODUCCIÓN Y MONTAJE

### 1.1. Arquitectura de Pistas en DaVinci Resolve (Timeline Master 1080p / 4K 24fps)
Para un acabado cinematográfico, dinámico y rigurosamente académico, la línea de tiempo en DaVinci Resolve debe estructurarse en las siguientes pistas independientes:

```
PISTAS DE VÍDEO:
├── V4: [TÍTULOS / LOWER THIRDS] ➔ Rótulos identificativos, cifras destacadas (Callouts) y subtítulos sincronizados.
├── V3: [B-ROLL MOTION GRAPHICS] ➔ Grabación de pantalla a 60 fps de las 20 Escenas HTML dinámicas.
├── V2: [INSERT / PIP / OVERLAYS] ➔ Transiciones alfa, marcos institucionales y gráficos secundarios.
└── V1: [CÁMARA REAL MANEL] ➔ Grabación en plano medio / busto parlante de Manuel con fondo neutro/iluminación 3 puntos.

PISTAS DE AUDIO:
├── A1: [VOZ DIRECTA CÁMARA] ➔ Pista de audio del micrófono de solapa / condensador de Manuel en tomas a cámara.
├── A2: [VOZ EN OFF (VOICEOVER)] ➔ Locución grabada en estudio/ambiente silencioso para las escenas HTML de B-roll.
├── A3: [SFX / FOLEY AUDIO] ➔ Efectos sutiles (woosh de transiciones, clicks de datos digitales, pops de cifras, typing).
└── A4: [BGM / MÚSICA AMBIENTAL] ➔ Pista musical corporativa/cinemática de bajo tempo (Ducking automático a -22 dB bajo voz).
```

### 1.2. Protocolo de Transiciones y Estilo de Edición
* **Corte directo (Straight Cut):** Se utiliza para la alternancia rápida entre Manuel a cámara y las escenas de B-roll cuando la frase continúa sin interrupción, dinamizando el ritmo narrativo.
* **Fundido encadenado (Cross Dissolve de 12 a 18 frames):** Empleado entre bloques temáticos conceptuales o cuando se cambia de perspectiva analítica.
* **Fundido a negro (Dip to Black de 24 frames):** Empleado exclusivamente en los límites entre los grandes bloques macroeconómicos (Apertura, Bloque Teórico, Bloque Empírico y Cierre).
* **Tratamiento del Color (Color Grading en DaVinci):** Curva de contraste limpio, balance de blancos frío (temperatura ~5500K) con saturación sobria y realce de tonos azules y ámbar institucionales coherentes con la paleta de la OCDE.
* **Subtitulado:** Fuente sans-serif de alta legibilidad (Inter o Roboto), texto blanco con reborde fino negro y sombra proyectada sutil, centrado en el tercio inferior.

---

## 2. ESCALETA GENERAL Y MINUTAJE ESTIMADO

* **Duración total estimada:** 15 minutos y 45 segundos (945 segundos).
* **Estructura modular:** 6 Tomas de Cámara Real (`[TOMA CÁMARA MANEL]`) intercaladas con 20 Escenas Dinámicas de B-roll HTML (`[ESCENA HTML 1]` a `[ESCENA HTML 20]`).

| Código de Escena | Tipo de Toma / Elemento | Minutaje Acumulado | Duración | Núcleo Temático y Argumental |
| :--- | :--- | :---: | :---: | :--- |
| **TC-01** | `[TOMA CÁMARA MANEL 1]` | 00:00 - 00:45 | 45 s | Presentación personal, bienvenida académica y gancho geopolítico. |
| **EH-01** | `[ESCENA HTML 1]` | 00:45 - 01:15 | 30 s | Título cinemático y ficha técnica oficial OCDE 2026. |
| **EH-02** | `[ESCENA HTML 2]` | 01:15 - 01:50 | 35 s | La magnitud macroeconómica: 13% del PIB y 11 billones $ mundiales. |
| **EH-03** | `[ESCENA HTML 3]` | 01:50 - 02:25 | 35 s | La paradoja subnacional (62,5%) y el gasto sanitario (>30%). |
| **TC-02** | `[TOMA CÁMARA MANEL 2]` | 02:25 - 02:55 | 30 s | Del coste mínimo a la seguridad: La colisión de paradigmas. |
| **EH-04** | `[ESCENA HTML 4]` | 02:55 - 03:30 | 35 s | El giro neomercantilista: Shocks de oferta (COVID, Ucrania, Taiwán). |
| **EH-05** | `[ESCENA HTML 5]` | 03:30 - 04:05 | 35 s | Taxonomía de medidas directas: El arsenal proteccionista. |
| **EH-06** | `[ESCENA HTML 6]` | 04:05 - 04:45 | 40 s | Requisitos de Contenido Nacional (DCR): Buy American y Plan México. |
| **EH-07** | `[ESCENA HTML 7]` | 04:45 - 05:20 | 35 s | Márgenes de preferencia en precio y el debate europeo (Draghi vs Finlandia). |
| **EH-08** | `[ESCENA HTML 8]` | 05:20 - 06:00 | 40 s | Distorsión por subsidios exteriores: China ($230.900M) y CRRC. |
| **TC-03** | `[TOMA CÁMARA MANEL 3]` | 06:00 - 06:30 | 30 s | Las barreras invisibles: Alerta ante el proteccionismo verde y sanitario. |
| **EH-09** | `[ESCENA HTML 9]` | 06:30 - 07:05 | 35 s | Medidas indirectas y el mito ecológico de las "cadenas cortas". |
| **EH-10** | `[ESCENA HTML 10]` | 07:05 - 07:45 | 40 s | Soberanía estratégica: Net-Zero Industry Act y los 299 fármacos esenciales. |
| **EH-11** | `[ESCENA HTML 11]` | 07:45 - 08:20 | 35 s | Compra Pública de Innovación (CPI): Éxito exportador en la OCDE. |
| **TC-04** | `[TOMA CÁMARA MANEL 4]` | 08:20 - 08:50 | 30 s | La dura realidad empírica: Cadenas Globales de Valor y modelización. |
| **EH-12** | `[ESCENA HTML 12]` | 08:50 - 09:30 | 40 s | La estructura del comercio moderno: El 70% son bienes intermedios. |
| **EH-13** | `[ESCENA HTML 13]` | 09:30 - 10:15 | 45 s | Simulación de Arriola et al. (OCDE): Caída del -18% en comercio y -5% en PIB. |
| **EH-14** | `[ESCENA HTML 14]` | 10:15 - 10:55 | 40 s | La falacia de la autarquía y el Friend-shoring: Pérdida de diversificación. |
| **EH-15** | `[ESCENA HTML 15]` | 10:55 - 11:35 | 40 s | La trampa burocrática: Bosio, Djankov, Glaeser y Shleifer (AER 2022). |
| **TC-05** | `[TOMA CÁMARA MANEL 5]` | 11:35 - 12:05 | 30 s | La trinchera legal internacional: ¿Hacia una guerra comercial abierta? |
| **EH-16** | `[ESCENA HTML 16]` | 12:05 - 12:45 | 40 s | El límite del ACP/GPA de la OMC: El club cerrado de 48 economías. |
| **EH-17** | `[ESCENA HTML 17]` | 12:45 - 13:25 | 40 s | El nuevo IPI de la UE (Reglamento 2022/1031): Reciprocidad y penalización. |
| **EH-18** | `[ESCENA HTML 18]` | 13:25 - 14:05 | 40 s | La Sentencia Kolin del TJUE (C-652/22): Vía libre a la exclusión sin recurso. |
| **EH-19** | `[ESCENA HTML 19]` | 14:05 - 14:40 | 35 s | El déficit de gobernanza: Solo el 23% evalúa el impacto económico real. |
| **EH-20** | `[ESCENA HTML 20]` | 14:40 - 15:15 | 35 s | E-procurement y plataformas digitales: Transparencia y PYMEs (98%). |
| **TC-06** | `[TOMA CÁMARA MANEL 6]` | 15:15 - 16:00 | 45 s | Conclusión ejecutiva, balance crítico y despedida final. |

---

## 3. GUIÓN DETALLADO PALABRA POR PALABRA Y GUÍA DE MONTAJE ESCENA A ESCENA

---

### [TOMA CÁMARA MANEL 1] - Introducción, Saludo y el Dilema Global
* **Posición en Timeline:** `00:00 - 00:45` (Duración: 45 segundos).
* **Tipo de Plano:** Plano medio corto (busto), encuadre centrado, mirada fija a objetivo con aplomo y autoridad académica.
* **Pista DaVinci:** Pista V1 activa. Lower third en V4 a partir de `00:05` (*"Manuel Romero Álvarez | Grupo 14 - Economía Mundial UPV"*).
* **Transición de Entrada:** Fade In desde negro (12 frames).
* **Transición de Salida:** Corte directo hacia `[ESCENA HTML 1]` al pronunciar la palabra *"prioridades"*.

#### Guión Textual de Manuel a Cámara:
> *"Hola a todos y bienvenidos. Mi nombre es Manuel Romero Álvarez y, en nombre del Grupo 14 —que formo junto a mis compañeros Jorge Cañete y Aleksandr Globa—, presentamos hoy nuestro proyecto de investigación para la asignatura de Economía Mundial del Grado en ADE y Ciencia de Datos en la Universidad Politécnica de Valencia.*  
> 
> *Durante décadas, la compra pública se consideró un simple proceso administrativo: comprar al precio más bajo posible respetando la libre concurrencia internacional. Sin embargo, el reciente informe de la OCDE de 2026 demuestra que nos encontramos ante un giro radical. Hoy, los gobiernos de todo el mundo están convirtiendo sus presupuestos de compras en la principal trinchera de su política industrial y de su seguridad nacional.*  
> 
> *Pero, ¿qué ocurre cuando la soberanía de los Estados choca frontalmente contra las normas del comercio internacional? Analicemos este conflicto estructural."*

---

### [ESCENA HTML 1] - Título Cinemático y Ficha Oficial del Proyecto
* **Posición en Timeline:** `00:45 - 01:15` (Duración: 30 segundos).
* **Tipo de Elemento:** B-roll dinámico grabado de pantalla en resolución nativa 1920x1080 / 4K.
* **Pista DaVinci:** Pista V3 (B-roll HTML). Pista A2 (Voz en off de Manuel grabada limpia).
* **Efectos Visuales en HTML:** Animación de apertura con el logotipo oficial de la OCDE, partículas de datos globales, tipografía elegante serif/sans-serif y tarjeta de identificación del informe: *Public Procurement, Trade and Industrial Policies: Supporting National Priorities (OECD, 2026)*.
* **Transición de Entrada:** Corte directo desde `TC-01`.
* **Transición de Salida:** Cross Dissolve (18 frames) hacia `EH-02`.

#### Subtítulos en Pantalla (V4):
```
OECD (2026) | Public Procurement, Trade and Industrial Policies
Grupo 14: Manuel Romero Álvarez, Jorge Cañete Morató, Aleksandr Globa
Economía Mundial | Universidad Politécnica de Valencia
```

#### Locución en Off (Manuel Romero):
> *"El documento clave de nuestra investigación es el informe oficial publicado por la OCDE en 2026: 'Public Procurement, Trade and Industrial Policies: Supporting National Priorities'. Un análisis exhaustivo de más de noventa páginas que evalúa cómo las grandes potencias intentan reindustrializarse utilizando la demanda pública, y cuáles son los graves costes colaterales que esta fragmentación impone sobre las cadenas globales de valor."*

---

### [ESCENA HTML 2] - La Magnitud Macroeconómica: 13% del PIB y 11 Billones de $
* **Posición en Timeline:** `01:15 - 01:50` (Duración: 35 segundos).
* **Tipo de Elemento:** B-roll Motion Graphic interactivo.
* **Pista DaVinci:** Pista V3 activa. Pista A2 con locución en off. Pista A3 con efectos de sonido de conteo ascendente acelerado (*digital counter ticking*).
* **Efectos Visuales en HTML:** 
  1. Contador digital que sube de 0 a **13,0% del PIB**.
  2. Contador secundario en color dorado que llega a **11 Billones de Dólares (Trillion USD)**.
  3. Gráfico circular animado mostrando que la contratación representa el **29,1% del gasto público total** de las administraciones de la OCDE.
* **Transición de Entrada:** Cross Dissolve.
* **Transición de Salida:** Corte directo hacia `EH-03`.

#### Subtítulos en Pantalla (V4):
```
13% DEL PIB DE MEDIA EN PAÍSES OCDE
11 BILLONES DE DÓLARES ANUALES EN EL MUNDO
~29% DEL GASTO PÚBLICO GUBERNAMENTAL TOTAL
```

#### Locución en Off (Manuel Romero):
> *"Para entender la trascendencia de este debate debemos mirar primero a los números. En los países de la OCDE, la contratación pública representa, en promedio, nada menos que el 13% del Producto Interior Bruto. A nivel mundial, estamos hablando de un volumen astronómico: más de 11 billones de dólares anuales.*  
> 
> *Prácticamente uno de cada tres euros que gasta cualquier administración pública se canaliza a través de contratos de compras, infraestructuras y suministros. Quien controla este flujo de capital, tiene el poder de moldear mercados enteros."*

---

### [ESCENA HTML 3] - La Paradoja Subnacional (62,5%) y el Gasto Sanitario
* **Posición en Timeline:** `01:50 - 02:25` (Duración: 35 segundos).
* **Tipo de Elemento:** B-roll de infografía animada y mapa de distribución competencial.
* **Pista DaVinci:** Pista V3 (B-roll HTML).
* **Efectos Visuales en HTML:** 
  - Gráfico de tarta dividido: 37,5% Gobierno Central vs. **62,5% Administraciones Subnacionales** (Comunidades Autónomas, Landers, Estados federados y Ayuntamientos).
  - Efecto de pulso en un hospital estilizado: **>30% del gasto en compras públicas corresponde al sector salud**.
  - Etiqueta de alerta: *"Vulnerabilidad de supervisión en tratados comerciales internacionales"*.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `[TOMA CÁMARA MANEL 2]`.

#### Subtítulos en Pantalla (V4):
```
62,5% DEL GASTO EJECUTADO A NIVEL SUBNACIONAL (CCAA Y MUNICIPIOS)
SECTOR SANITARIO: CONCENTRA MÁS DEL 30% DE LA CONTRATACIÓN PÚBLICA
COMPLEJIDAD CRÍTICA PARA AUDITAR NORMAS DE COMERCIO INTERNACIONAL
```

#### Locución en Off (Manuel Romero):
> *"Sin embargo, existe un obstáculo invisible: el 62,5% de este gasto no lo ejecuta el Estado central, sino las administraciones subnacionales: gobiernos regionales, autonomías y ayuntamientos. Esto hace que auditar el cumplimiento de los tratados de libre comercio sea una auténtica pesadilla regulatoria.*  
> 
> *Además, su impacto es asimétrico: el sector sanitario acapara por sí solo más del 30% de las licitaciones públicas, convirtiendo los fármacos y la tecnología médica en el epicentro de las tensiones comerciales."*

---

### [TOMA CÁMARA MANEL 2] - La Gran Colisión: Eficiencia vs. Soberanía Estratégica
* **Posición en Timeline:** `02:25 - 02:55` (Duración: 30 segundos).
* **Tipo de Plano:** Plano medio con ligero reencuadre o zoom digital suave (105%) en DaVinci para enfatizar el dramatismo argumental.
* **Pista DaVinci:** Pista V1 activa. Pista A1 con audio de Manuel.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `[ESCENA HTML 4]`.

#### Guión Textual de Manuel a Cámara:
> *"Y aquí es donde estalla el conflicto. Durante décadas, la doctrina del GATT y de la Organización Mundial del Comercio se basó en una premisa incuestionable: el principio de no discriminación y la búsqueda de la eficiencia económica, el llamado 'Value for Money'. Las licitaciones debían abrirse al postor más competitivo del planeta, fuese nacional o extranjero.*  
> 
> *Pero en los últimos cinco años, el tablero geopolítico se ha roto en mil pedazos. Hemos pasado de la eficiencia al dogma de la soberanía estratégica. Veamos por qué."*

---

### [ESCENA HTML 4] - El Giro Neomercantilista: Shocks de Oferta
* **Posición en Timeline:** `02:55 - 03:30` (Duración: 35 segundos).
* **Tipo de Elemento:** B-roll de línea temporal dinámica y mapas de tensión geopolítica.
* **Pista DaVinci:** Pista V3 (B-roll HTML). Pista A2 (Locución en off).
* **Efectos Visuales en HTML:** 
  - Tres hitos sincronizados: 1) Crisis de mascarillas y chips en COVID-19 (2020), 2) Invasión rusa de Ucrania y chantaje energético (2022), 3) Carrera por los semiconductores y minerales críticos entre EE.UU. y China (2024-2026).
  - Gráfico de vector conceptual: De *"Just-in-Time"* (Eficiencia de costes) a *"Just-in-Case"* (Seguridad de suministro).
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Cross Dissolve (18 frames) hacia `EH-05`.

#### Subtítulos en Pantalla (V4):
```
CRISIS SUCESIVAS: PANDEMIA COVID-19 ➔ GUERRA EN UCRANIA ➔ DISRUPCIÓN DE CHIPS
TRANSICIÓN DOCTRINAL: DE LA MINIMIZACIÓN DE COSTES A LA RESILIENCIA ESTRATÉGICA
POLÍTICA INDUSTRIAL ORIENTADA POR LA DEMANDA (DEMAND-SIDE INDUSTRIAL POLICY)
```

#### Locución en Off (Manuel Romero):
> *"La pandemia de COVID-19 demostró que no se pueden salvar vidas si dependes de un único país para importar mascarillas o respiradores. La guerra en Ucrania evidenció la debilidad energética europea, y el ascenso tecnológico de China encendió todas las alarmas en Washington y Bruselas.*  
> 
> *Ante estos shocks, los gobiernos han resucitado la política industrial desde la demanda: utilizar los presupuestos públicos para forzar la producción interna de bienes estratégicos, cueste lo que cueste."*

---

### [ESCENA HTML 5] - Taxonomía de Medidas Directas: El Arsenal Proteccionista
* **Posición en Timeline:** `03:30 - 04:05` (Duración: 35 segundos).
* **Tipo de Elemento:** B-roll de cuadrante analítico interactivo (Taxonomía OCDE).
* **Pista DaVinci:** Pista V3 (B-roll HTML). Pista A3 con sfx de despliegue de módulos UI (*whoosh / glass cards*).
* **Efectos Visuales en HTML:** 
  - Matriz con 4 bloques interactivos destacados:
    1. Requisitos de Contenido Nacional (DCR).
    2. Márgenes de Preferencia en Precio.
    3. Contratos Reservados a PYMEs (*Set-Asides*).
    4. Subsidios y Exclusiones de Seguridad Nacional.
* **Transición de Entrada:** Cross Dissolve.
* **Transición de Salida:** Corte directo hacia `EH-06`.

#### Subtítulos en Pantalla (V4):
```
TAXONOMÍA OCDE: MEDIDAS DIRECTAS EN CONTRATACIÓN PÚBLICA
1. REQUISITOS DE CONTENIDO LOCAL (DCR) | 2. MÁRGENES DE PREFERENCIA EN PRECIO
3. CONTRATOS RESERVADOS (SET-ASIDES) | 4. EXCLUSIONES POR SEGURIDAD Y SUBSIDIOS
```

#### Locución en Off (Manuel Romero):
> *"El capítulo dos del informe de la OCDE clasifica el arsenal de medidas directas que los países están aplicando para blindar sus mercados. Se trata de mecanismos legales explícitos que discriminan a las empresas extranjeras.*  
> 
> *Hablamos de cuatro grandes familias: requisitos obligatorios de contenido nacional, bonificaciones de precio en la evaluación, contratos reservados exclusivamente a empresas locales y exclusiones por motivos de seguridad nacional. Analicemos los casos más agresivos."*

---

### [ESCENA HTML 6] - Requisitos de Contenido Local (DCR): Del Buy American al Plan México
* **Posición en Timeline:** `04:05 - 04:45` (Duración: 40 segundos).
* **Tipo de Elemento:** B-roll con infografía comparativa internacional de leyes DCR.
* **Pista DaVinci:** Pista V3 (B-roll HTML).
* **Efectos Visuales en HTML:** 
  - Barra de progreso animada de Estados Unidos: *Buy American Act* pasando del **55% al 65% en 2024** y proyectando el **75% para 2029**.
  - Sello *Build America, Buy America* (BABA): **100% de acero, hierro y materiales en infraestructuras federales**.
  - Tarjeta de México: Reforma del *Plan México 2025*, elevando el umbral al **65% de componentes locales**.
  - Tarjeta de Ucrania: **40% de contenido local en maquinaria para 2028**.
  - Cláusula UE: *Artículo 85 Directiva 2014/25/UE* (rechazo de ofertas con >50% de insumos de países sin acuerdo).
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `EH-07`.

#### Subtítulos en Pantalla (V4):
```
EE.UU. BUY AMERICAN ACT: 65% CONTENIDO LOCAL EN 2024 ➔ 75% EN 2029
BUILD AMERICA, BUY AMERICA ACT (BABA): 100% HIERRO Y ACERO DOMÉSTICO
MÉXICO (PLAN 2025): 65% EXIGIDO | ART. 85 DIRECTIVA 2014/25/UE: RECHAZO >50%
```

#### Locución en Off (Manuel Romero):
> *"El ejemplo más paradigmático lo encontramos en Estados Unidos. La administración estadounidense elevó en 2024 el umbral del histórico 'Buy American Act' al 65% de componentes fabricados en suelo nacional, y alcanzará el 75% en 2029. Es más, su ley de infraestructuras exige que el 100% del hierro y el acero subvencionado sea estadounidense.*  
> 
> *Pero no están solos: México reformó su marco legal en su 'Plan México 2025' exigiendo un 65% de integración nacional, Ucrania escalará al 40% en maquinaria en 2028, y en la Unión Europea, el artículo 85 de la directiva de sectores especiales permite rechazar ofertas si más del 50% de sus componentes provienen de países sin tratado recíproco."*

---

### [ESCENA HTML 7] - Márgenes de Preferencia en Precio y el Debate Europeo
* **Posición en Timeline:** `04:45 - 05:20` (Duración: 35 segundos).
* **Tipo de Elemento:** B-roll de simulación de licitación pública con ventaja artificial de precio.
* **Pista DaVinci:** Pista V3 (B-roll HTML).
* **Efectos Visuales en HTML:** 
  - Simulación gráfica de dos ofertas: Empresa extranjera licita a 100€; Empresa local licita a 110€.
  - Se aplica el margen de preferencia (+10% en Ontario o +20% en Western Australia) y la empresa local gana la adjudicación a pesar de ser más cara.
  - Balanza europea: Propuesta de "Preferencia Europea" (Informe Draghi 2024 / Clean Industrial Deal) frente a la objeción formal de Finlandia (2025): *"Restringir licitadores reducirá la competencia y disparará el coste fiscal"*.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `EH-08`.

#### Subtítulos en Pantalla (V4):
```
MÁRGENES DE PREFERENCIA EN PRECIO: ONTARIO (+10%) | AUSTRALIA OCCIDENTAL (+20%)
DEBATE EN LA UE: INFORME DRAGHI (2024) PIDE PREFERENCIA COMUNITARIA
ADVERTENCIA DE FINLANDIA (2025): DISPARO DEL GASTO PÚBLICO Y PÉRDIDA DE COMPETENCIA
```

#### Locución en Off (Manuel Romero):
> *"Otra herramienta directa son los márgenes de preferencia en precio. Consisten en otorgar ventajas en la puntuación a las ofertas locales: un 10% en Ontario, hasta un 15% en Argentina o un recargo punitivo del 20% a los bienes importados en Australia Occidental.*  
> 
> *En Europa, el informe Draghi de 2024 propuso instaurar una 'Preferencia Europea' para compras estratégicas. Sin embargo, economías abiertas y rigurosas como Finlandia ya han advertido formalmente a la Comisión: cerrar el mercado destruye la competencia y obligará a los contribuyentes a pagar precios inflados."*

---

### [ESCENA HTML 8] - Distorsión por Subsidios Exteriores: China ($230.900M) y CRRC
* **Posición en Timeline:** `05:20 - 06:00` (Duración: 40 segundos).
* **Tipo de Elemento:** B-roll con gráficos industriales de impacto comparativo.
* **Pista DaVinci:** Pista V3 (B-roll HTML).
* **Efectos Visuales en HTML:** 
  - Cifra destacada: **230.900 Millones de $** invertidos por el Estado chino en su industria del vehículo eléctrico entre 2009 y 2023.
  - Gráfico de la corporación ferroviaria china CRRC recibiendo **más de 1.000 millones de $ anuales en subvenciones directas**.
  - Comparativa de licitación en Europa: CRRC ofertando con una baja temeraria del **25% frente a los fabricantes europeos Alstom y Siemens**.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `[TOMA CÁMARA MANEL 3]`.

#### Subtítulos en Pantalla (V4):
```
CHINA: 230.900 MILLONES DE $ EN SUBSIDIOS A VEHÍCULOS ELÉCTRICOS (2009-2023)
CRRC (GIGANTE FERROVIARIO): >1.000 M$ ANUALES EN AYUDAS ESTATALES DIRECTAS
PRECIOS PREDATORIOS: BAJAS DEL 25% FRENTE A FIRMAS EUROPEAS EN LICITACIONES
```

#### Locución en Off (Manuel Romero):
> *"Y el dilema se agrava cuando entran en juego los subsidios extranjeros masivos. El informe de la OCDE documenta cómo el gobierno de Pekín inyectó casi doscientos treinta y un mil millones de dólares en subsidios directos a su industria de automoción limpia.*  
> 
> *El caso más flagrante es el gigante estatal ferroviario CRRC, que recibe más de mil millones de dólares anuales en ayudas públicas. Con este respaldo, acudió a concursos en Europa con ofertas hasta un 25% más baratas que Alstom o Siemens, forzando a la Comisión Europea a intervenir por competencia desleal."*

---

### [TOMA CÁMARA MANEL 3] - Las Barreras Invisibles: Criterios Verdes y de Seguridad
* **Posición en Timeline:** `06:00 - 06:30` (Duración: 30 segundos).
* **Tipo de Plano:** Plano medio corto de Manuel, tono analítico, ceño reflexivo, gesto explicativo con las manos.
* **Pista DaVinci:** Pista V1 activa. Pista A1 con audio de Manuel.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `[ESCENA HTML 9]`.

#### Guión Textual de Manuel a Cámara:
> *"Pero las medidas directas son solo la punta del iceberg. Existe una categoría mucho más sutil y sofisticada: las medidas indirectas. Son cláusulas técnicas, exigencias de sostenibilidad ambiental, seguridad nacional o innovación que, sobre el papel, persiguen objetivos legítimos e intachables.*  
> 
> *Sin embargo, la OCDE lanza una seria advertencia: si estas normas no se diseñan con un rigor científico absoluto, se convierten en barreras no arancelarias encubiertas que bloquean artificialmente el comercio internacional. Veámoslo."*

---

### [ESCENA HTML 9] - Medidas Indirectas y el Mito Ecológico de las "Cadenas Cortas"
* **Posición en Timeline:** `06:30 - 07:05` (Duración: 35 segundos).
* **Tipo de Elemento:** B-roll de animación infográfica de huella de carbono y ciclo de vida.
* **Pista DaVinci:** Pista V3 (B-roll HTML). Pista A2 (Locución en off).
* **Efectos Visuales en HTML:** 
  - Dato: El **100% de los países de la OCDE aplica criterios de compra pública verde**.
  - Mito desmentido con animación: Transporte marítimo eficiente (<5% de emisiones totales) vs. Invernadero local con calefacción de gas en invierno nórdico.
  - Conclusión técnica OCDE: *"Proximidad geográfica no garantiza menor huella ambiental"*.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `EH-10`.

#### Subtítulos en Pantalla (V4):
```
EL 100% DE PAÍSES OCDE APLICA CRITERIOS DE COMPRA PÚBLICA VERDE
EL MITO DEL KM 0: EL TRANSPORTE SOLO SUPONE UNA FRACCIÓN MENOR DE EMISIONES
CALENTAR UN INVERNADERO LOCAL CONTAMINA MÁS QUE IMPORTAR DESDE CLIMAS CÁLIDOS
```

#### Locución en Off (Manuel Romero):
> *"El cien por cien de los países de la OCDE ya exige criterios ecológicos en sus compras públicas. Pero el informe de 2026 desmonta con datos un mito muy extendido: el mito de las 'cadenas cortas' o de la proximidad geográfica.*  
> 
> *En la mayoría de los productos agrícolas e industriales, el transporte marítimo representa menos del 10% de las emisiones totales del ciclo de vida. Calentar un invernadero local con combustibles fósiles durante el invierno europeo emite muchísimo más CO2 que importar tomates cultivados al sol desde el norte de África. Comprar local no es forzosamente más ecológico."*

---

### [ESCENA HTML 10] - Soberanía Estratégica: Net-Zero Act y 299 Fármacos Esenciales
* **Posición en Timeline:** `07:05 - 07:45` (Duración: 40 segundos).
* **Tipo de Elemento:** B-roll dinámico con iconos médicos y de tecnologías limpias.
* **Pista DaVinci:** Pista V3 (B-roll HTML).
* **Efectos Visuales en HTML:** 
  - *Net-Zero Industry Act (Reglamento UE 2024/1735)*: Umbral de dependencia del **50%** activa criterios de resiliencia obligatorios.
  - *Critical Medicines Act (Comisión Europea, 2025)*: Alerta sobre el **80% de la amoxicilina dependiente de principios activos chinos**.
  - Catálogo de los **299 medicamentos esenciales de la EMA** priorizados en la contratación sanitaria comunitaria.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `EH-11`.

#### Subtítulos en Pantalla (V4):
```
NET-ZERO INDUSTRY ACT (REGLAMENTO UE 2024/1735): RESILIENCIA OBLIGATORIA SI DEPENDENCIA >50%
CRITICAL MEDICINES ACT (2025): PRIORIZACIÓN DE LOS 299 FÁRMACOS ESENCIALES DE LA EMA
ALERTA CRÍTICA: EL 80% DE LA AMOXICILINA EUROPEA DEPENDE DE PRINCIPIOS ACTIVOS DE CHINA
```

#### Locución en Off (Manuel Romero):
> *"Donde la justificación cobra máxima fuerza es en la soberanía tecnológica y sanitaria. El nuevo Reglamento 'Net-Zero Industry Act' de la Unión Europea introduce criterios obligatorios de resiliencia si un país tercero suministra más del 50% de una tecnología verde crítica.*  
> 
> *Y en sanidad, la Comisión Europea ha impulsado la 'Critical Medicines Act' de 2025 tras constatar un dato aterrador: el 80% de los principios activos para producir amoxicilina provienen exclusivamente de China. La Unión priorizará en los hospitales a los fabricantes que produzcan en suelo europeo los 299 fármacos esenciales catalogados por la Agencia Europea del Medicamento."*

---

### [ESCENA HTML 11] - Compra Pública de Innovación (CPI): Palanca de Productividad
* **Posición en Timeline:** `07:45 - 08:20` (Duración: 35 segundos).
* **Tipo de Elemento:** B-roll con diagramas de flujo y casos de éxito en I+D.
* **Pista DaVinci:** Pista V3 (B-roll HTML).
* **Efectos Visuales en HTML:** 
  - Métrica OCDE: El **94% de países utiliza Compra Pública Precomercial (PCP) y de Tecnología Innovadora (PPI)**.
  - Estudio de caso en Francia: **95% de las empresas que obtuvieron patentes a través de compras públicas se convirtieron en exportadoras regulares**.
  - Ecuación conceptual: Demanda pública temprana ➔ Escala industrial ➔ Competitividad global.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `[TOMA CÁMARA MANEL 4]`.

#### Subtítulos en Pantalla (V4):
```
EL 94% DE PAÍSES OCDE UTILIZA COMPRA PÚBLICA DE INNOVACIÓN (PCP Y PPI)
CASO FRANCIA: EL 95% DE FIRMAS CON PATENTES POR COMPRA PÚBLICA SE CONVIERTEN EN EXPORTADORAS
LA DEMANDA PÚBLICA COMO MOTOR DE VENTAJA COMPARATIVA TECNOLÓGICA
```

#### Locución en Off (Manuel Romero):
> *"Existe, no obstante, una medida indirecta altamente virtuosa: la Compra Pública de Innovación, empleada por el 94% de los países de la OCDE. En lugar de subsidiar a fondo perdido, el Estado actúa como cliente pionero y exige soluciones tecnológicas que aún no existen en el mercado.*  
> 
> *El informe destaca el caso de Francia, donde el 95% de las empresas que desarrollaron patentes a través de licitaciones públicas de innovación acabaron transformándose en exportadoras consolidadas en el mercado internacional."*

---

### [TOMA CÁMARA MANEL 4] - La Realidad Empírica: Cadenas Globales de Valor
* **Posición en Timeline:** `08:20 - 08:50` (Duración: 30 segundos).
* **Tipo de Plano:** Plano medio cerrado, tono serio y riguroso. Manuel se apoya en datos para cuestionar la retórica política habitual.
* **Pista DaVinci:** Pista V1 activa. Pista A1 con audio de Manuel.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `[ESCENA HTML 12]`.

#### Guión Textual de Manuel a Cámara:
> *"Llegamos al núcleo analítico del informe: el capítulo tres. Los discursos políticos suelen prometer que relocalizar fábricas y cerrar fronteras traerá prosperidad y empleo seguro. Suena bien en campaña electoral.*  
> 
> *Pero cuando sometemos esas promesas a los modelos econométricos de la OCDE y a la realidad empírica de las Cadenas Globales de Valor, la teoría se derrumba. ¿Por qué exigir un 100% de producción nacional puede empobrecer a un país? Veámoslo en el gráfico."*

---

### [ESCENA HTML 12] - La Estructura del Comercio: El 70% son Bienes Intermedios
* **Posición en Timeline:** `08:50 - 09:30` (Duración: 40 segundos).
* **Tipo de Elemento:** B-roll con animación interactiva de una cadena global de valor.
* **Pista DaVinci:** Pista V3 (B-roll HTML). Pista A2 (Locución en off).
* **Efectos Visuales en HTML:** 
  - Gráfico de donut gigante animado: **70% Bienes Intermedios** (componentes, chips, sensores, cableado) vs. 30% Bienes Finales terminados.
  - Despiece de un tren de alta velocidad o escáner hospitalario: Las piezas cruzan fronteras nacionales hasta 6 veces antes del ensamblaje definitivo.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `EH-13`.

#### Subtítulos en Pantalla (V4):
```
EL 70% DEL COMERCIO MUNDIAL CORRESPONDE A BIENES INTERMEDIOS
CADENAS GLOBALES DE VALOR FRAGMENTADAS E INTERCONECTADAS
LOS COMPONENTES DE INFRAESTRUCTURAS PÚBLICAS CRUZAN MÚLTIPLES FRONTERAS
```

#### Locución en Off (Manuel Romero):
> *"El primer error de los defensores del proteccionismo es ignorar cómo se fabrica en el siglo XXI. Alrededor del 70% de todo el comercio mundial no son bienes finales, sino bienes intermedios: materias primas refinadas, microprocesadores, componentes electrónicos y aleaciones de acero.*  
> 
> *Cualquier infraestructura pública moderna —un hospital, una línea de alta velocidad o un centro de datos— incorpora miles de piezas que cruzan fronteras varias veces. Exigir que todo sea nacional paraliza los proyectos y dispara los costes."*

---

### [ESCENA HTML 13] - Simulación de Arriola et al. (OCDE): El Alto Coste del Reshoring
* **Posición en Timeline:** `09:30 - 10:15` (Duración: 45 segundos).
* **Tipo de Elemento:** B-roll de dashboard macroeconómico con curvas y gráficos de barras de impacto del modelo OCDE.
* **Pista DaVinci:** Pista V3 (B-roll HTML). Pista A3 con sfx de caída bursátil o advertencia roja (*subtle warning tone*).
* **Efectos Visuales en HTML:** 
  - Simulación de Arriola et al. (2020) proyectada en pantalla:
    - **Caída del Comercio Mundial: -18%**.
    - **Destrucción del PIB Global: > -5%**.
    - Impacto territorial severo: **Canadá (-13,1% del PIB)**, **Reino Unido (-12,2% del PIB)**, **Unión Europea (-6,5% del PIB)**.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `EH-14`.

#### Subtítulos en Pantalla (V4):
```
SIMULACIÓN OCDE (ARRIOLA ET AL., 2020): IMPACTO DE LA RELOCALIZACIÓN FORZOSA (RESHORING)
COMERCIO MUNDIAL: CONTRACCIÓN BRUTAL DEL -18%
PIB GLOBAL: DESTRUCCIÓN SUPERIOR AL -5% | CANADÁ: -13,1% | REINO UNIDO: -12,2%
```

#### Locución en Off (Manuel Romero):
> *"Y esto no es una hipótesis teórica: está cuantificado. El informe de la OCDE recoge las simulaciones econométricas del equipo de Arriola y colaboradores. Si los países cerrasen sus licitaciones públicas para forzar un 'reshoring' o relocalización doméstica total, el comercio mundial se desplomaría un 18%.*  
> 
> *La caída del Producto Interior Bruto global superaría el 5%. Economías integradas pagarían un precio ruinoso: el PIB de Canadá caería un 13,1% y el de Reino Unido un 12,2%. La autarquía no crea riqueza, la destruye masivamente."*

---

### [ESCENA HTML 14] - La Falacia de la Autarquía y el Friend-Shoring
* **Posición en Timeline:** `10:15 - 10:55` (Duración: 40 segundos).
* **Tipo de Elemento:** B-roll de animación de simulación de shock estocástico (shocks simétricos vs. asimétricos).
* **Pista DaVinci:** Pista V3 (B-roll HTML).
* **Efectos Visuales en HTML:** 
  - Comparativa de resiliencia: País diversificado globalmente (absorbe shocks alternando proveedores) vs. País cerrado (sufre parada total ante sequías, huelgas o crisis locales).
  - Bloque sobre *Friend-Shoring* (Javorcik et al., 2023): Fragmentación en bloques geopolíticos resta entre un **0,6% y un 4,6% adicional de PIB mundial**.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `EH-15`.

#### Subtítulos en Pantalla (V4):
```
EL MITO DE LA RESILIENCIA AUTÁRQUICA: CONCENTRAR RIESGOS EN LUGAR DE MITIGARLOS
UN PAÍS CERRADO CARECE DE PROVEEDORES ALTERNATIVOS ANTE SHOCKS LOCALES
FRIEND-SHORING (JAVORCIK ET AL., 2023): PÉRDIDA ADICIONAL DE ENTRE 0,6% Y 4,6% DEL PIB
```

#### Locución en Off (Manuel Romero):
> *"La gran falacia que desmonta la OCDE es que la autarquía aporte resiliencia. Todo lo contrario. Diversificar proveedores a través del comercio internacional actúa exactamente como un seguro: si un terremoto, una sequía o una huelga paraliza una fábrica local, puedes comprar en el mercado exterior.*  
> 
> *El país cerrado se queda sin suministro. Y dividir el mundo en bloques de países amigos —el llamado 'Friend-shoring'—, según demostraron Javorcik y su equipo en 2023, provocaría una pérdida evitable de hasta un 4,6% del PIB global."*

---

### [ESCENA HTML 15] - La Trampa Burocrática: Bosio, Djankov, Glaeser y Shleifer (AER 2022)
* **Posición en Timeline:** `10:55 - 11:35` (Duración: 40 segundos).
* **Tipo de Elemento:** B-roll de scatter plot académico y evidencia empírica en 187 países.
* **Pista DaVinci:** Pista V3 (B-roll HTML). Pista A2 (Locución en off).
* **Efectos Visuales en HTML:** 
  - Cita destacada: *Bosio, Djankov, Glaeser & Shleifer (2022), American Economic Review*.
  - Gráfico de dispersión: En países con baja capacidad institucional, la discrecionalidad y las cláusulas industriales aumentan exponencialmente los sobrecostes (15-30%) y los índices de corrupción.
  - Conclusión: *"La política industrial sofisticada solo funciona con alta excelencia técnica burocrática"*.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `[TOMA CÁMARA MANEL 5]`.

#### Subtítulos en Pantalla (V4):
```
EVIDENCIA AER 2022 (BOSIO, DJANKOV, GLAESER Y SHLEIFER EN 187 PAÍSES)
REGULACIONES COMPLEJAS DISPARAN LA CORRUPCIÓN EN ADMINISTRACIONES DÉBILES
RIESGO REAL: SOBRECOSTES PRESUPUESTARIOS DE ENTRE EL 15% Y EL 30%
```

#### Locución en Off (Manuel Romero):
> *"Y a esto se añade una advertencia de la mejor literatura científica. El estudio histórico de Bosio, Glaeser y Shleifer, publicado en el 'American Economic Review' en 2022 analizando 187 países, demuestra que imponer requisitos industriales complejos a funcionarios públicos con baja capacitación técnica dispara la ineficiencia y la corrupción.*  
> 
> *La compra estratégica solo genera valor en administraciones excepcionalmente profesionalizadas; en el resto, solo produce retrasos, sobrecostes de hasta el 30% y captura de rentas por empresas protegidas."*

---

### [TOMA CÁMARA MANEL 5] - La Trinchera Legal: Gobernanza y Reciprocidad
* **Posición en Timeline:** `11:35 - 12:05` (Duración: 30 segundos).
* **Tipo de Plano:** Plano medio de Manuel, gesto enérgico. Conecta la teoría económica con la batalla jurídica real.
* **Pista DaVinci:** Pista V1 activa. Pista A1 con audio de Manuel.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `[ESCENA HTML 16]`.

#### Guión Textual de Manuel a Cámara:
> *"Ante este escenario de tensiones desatadas, ¿qué dicen las leyes y los tratados internacionales? ¿Estamos desamparados o existen reglas de juego?*  
> 
> *La respuesta es compleja. El sistema multilateral del Acuerdo sobre Contratación Pública de la OMC se ha quedado pequeño, y potencias como la Unión Europea han decidido pasar al contraataque con nuevos instrumentos de castigo y sentencias judiciales revolucionarias. Entremos en el terreno normativo."*

---

### [ESCENA HTML 16] - El Límite del GPA/OMC: El Club Cerrado de 48 Economías
* **Posición en Timeline:** `12:05 - 12:45` (Duración: 40 segundos).
* **Tipo de Elemento:** B-roll de mapa político mundial interactivo del GPA (Acuerdo sobre Contratación Pública de la OMC).
* **Pista DaVinci:** Pista V3 (B-roll HTML).
* **Efectos Visuales en HTML:** 
  - Países cubiertos iluminados en azul brillante: **48 miembros de la OMC** (EE.UU., UE, Japón, Canadá, Corea del Sur, Reino Unido).
  - Grandes ausentes parpadeando en rojo/ámbar: **China, India, Brasil, Indonesia, Sudáfrica**.
  - Etiqueta de diagnóstico: *"El GPA es un club plurilateral; las economías emergentes rehúsan adherirse para mantener sus compras reservadas"*.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `EH-17`.

#### Subtítulos en Pantalla (V4):
```
ACUERDO SOBRE CONTRATACIÓN PÚBLICA (ACP / GPA) DE LA OMC: SÓLO 48 MIEMBROS
PRINCIPIOS: TRATO NACIONAL Y NO DISCRIMINACIÓN MUTUA
GRANDES AUSENTES: CHINA, INDIA Y BRASIL BLOQUEAN EL ACCESO A SUS LICITACIONES
```

#### Locución en Off (Manuel Romero):
> *"En la cúspide teórica del sistema se encuentra el Acuerdo sobre Contratación Pública de la OMC, el ACP o GPA. Este tratado garantiza la no discriminación y el trato nacional entre sus firmantes.*  
> 
> *¿Cuál es su talón de Aquiles? Que solo cubre a 48 miembros, casi todos países desarrollados. Gigantes como China, India o Brasil nunca se han sumado, manteniendo sus mercados públicos blindados para sus empresas nacionales mientras aprovechan la apertura de los mercados occidentales."*

---

### [ESCENA HTML 17] - El Nuevo IPI de la UE (Reglamento 2022/1031): Reciprocidad
* **Posición en Timeline:** `12:45 - 13:25` (Duración: 40 segundos).
* **Tipo de Elemento:** B-roll con infografía interactiva de la Comisión Europea y el mecanismo IPI.
* **Pista DaVinci:** Pista V3 (B-roll HTML). Pista A2 (Locución en off).
* **Efectos Visuales en HTML:** 
  - Logotipo del Instrumento de Contratación Internacional (IPI - Reglamento UE 2022/1031).
  - Algoritmo de penalización técnica: Ajuste punitivo de hasta un **50% de la puntuación técnica** (o 100% en licitaciones a precio) o exclusión directa de las empresas infractoras.
  - Caso real en marcha: **Investigación abierta por la UE contra China en tecnología médica**.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `EH-18`.

#### Subtítulos en Pantalla (V4):
```
INSTRUMENTO DE CONTRATACIÓN INTERNACIONAL (IPI - REGLAMENTO UE 2022/1031)
APERTURA ESTRATÉGICA CONDICIONAL: SANCIÓN DE HASTA EL 50% EN NOTA TÉCNICA
INVESTIGACIÓN FORMAL EN MARCHA: EXPEDIENTE CONTRA CHINA EN DISPOSITIVOS MÉDICOS
```

#### Locución en Off (Manuel Romero):
> *"Cansada de esta asimetría, la Unión Europea aprobó el Instrumento de Contratación Internacional, el IPI, en vigor desde el Reglamento 2022/1031. Como explica la experta Kam Dawar, no es un instrumento proteccionista, sino una palanca de apertura forzada.*  
> 
> *Si un país discrimina a las empresas europeas, Bruselas abre una investigación y, si no hay acuerdo, castiga a sus contratistas con un recorte de hasta el 50% en su puntuación técnica o la exclusión total. De hecho, la Comisión ya ha iniciado este procedimiento contra China en el sector de tecnología médica."*

---

### [ESCENA HTML 18] - La Sentencia Kolin del TJUE (C-652/22): Vía Libre a la Exclusión
* **Posición en Timeline:** `13:25 - 14:05` (Duración: 40 segundos).
* **Tipo de Elemento:** B-roll de animación jurisprudencial con la balanza de la justicia europea.
* **Pista DaVinci:** Pista V3 (B-roll HTML).
* **Efectos Visuales en HTML:** 
  - Cartel de la sentencia: *TJUE - Caso Kolin Insaat (C-652/22, sentencia dictada en 2024)*.
  - Flujo de decisión jurídica de las entidades adjudicadoras europeas:
    1. ¿El licitador es de un país con acuerdo GPA o Tratado UE? ➔ NO.
    2. Veredicto del TJUE: **Carece de derecho de acceso al mercado interior**.
    3. Consecuencia legal: **No puede exigir igualdad de trato ni recurrir la exclusión ante los tribunales comunitarios**.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `EH-19`.

#### Subtítulos en Pantalla (V4):
```
JURISPRUDENCIA HISTÓRICA: SENTENCIA KOLIN (C-652/22, TJUE 2024)
LICITADORES SIN TRATADO INTERNACIONAL CARECEN DE DERECHO DE ACCESO GARANTIZADO
NO PUEDEN INVOCAR IGUALDAD DE TRATO NI TIENEN LEGITIMACIÓN PARA RECURRIR EXCLUSIONES
```

#### Locución en Off (Manuel Romero):
> *"A este marco legal se suma un auténtico terremoto jurisprudencial: la histórica Sentencia Kolin de 2024 del Tribunal de Justicia de la Unión Europea.*  
> 
> *El TJUE dictaminó que aquellas empresas radicadas en países que no hayan firmado el GPA ni un tratado de libre comercio con la UE carecen por completo de derecho de acceso al mercado interior. Una administración europea puede excluirlas de plano, y dichas empresas no pueden apelar al principio de no discriminación ni recurrir su expulsión ante los tribunales europeos."*

---

### [ESCENA HTML 19] - El Déficit de Gobernanza: Solo el 23% Evalúa el Impacto Real
* **Posición en Timeline:** `14:05 - 14:40` (Duración: 35 segundos).
* **Tipo de Elemento:** B-roll con gráficos de diagnóstico de la OCDE sobre políticas públicas.
* **Pista DaVinci:** Pista V3 (B-roll HTML). Pista A2 (Locución en off).
* **Efectos Visuales en HTML:** 
  - Gráfico de barras horizontales animado (OECD Survey 2024):
    - Países que evalúan impacto económico: **Apenas el 23%**.
    - Países que evalúan impacto ambiental o social: **Solo el 10%**.
  - Sello de advertencia institucional: *"La mayoría de políticas industriales en compras públicas se aplican a ciegas sin medir el sobrecoste para el contribuyente"*.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Corte directo hacia `EH-20`.

#### Subtítulos en Pantalla (V4):
```
DÉFICIT DE EVALUACIÓN EMPÍRICA (DATOS OCDE 2024/2026):
SOLO EL 23% DE LOS PAÍSES MIDE EL IMPACTO ECONÓMICO DE SUS MEDIDAS
APENAS EL 10% EVALÚA EL IMPACTO AMBIENTAL O SOCIAL EX-POST
```

#### Locución en Off (Manuel Romero):
> *"Y ante todo este despliegue de intervencionismo, ¿saben los gobiernos si sus políticas funcionan de verdad? El informe de la OCDE revela un dato demoledor: solo el 23% de los países evalúa formalmente el impacto económico real de sus compras públicas.*  
> 
> *Y apenas un 10% audita el impacto ecológico o social. Los gobiernos gastan miles de millones protegiendo industrias domésticas sin contrastar si el sobreprecio pagado por los ciudadanos ha generado verdadera productividad o simple ineficiencia."*

---

### [ESCENA HTML 20] - E-Procurement y Plataformas Digitales: Transparencia y PYMEs
* **Posición en Timeline:** `14:40 - 15:15` (Duración: 35 segundos).
* **Tipo de Elemento:** B-roll de animación de plataformas digitales integradas de compras.
* **Pista DaVinci:** Pista V3 (B-roll HTML).
* **Efectos Visuales en HTML:** 
  - Cifra destacada: **El 98% de los países de la OCDE cuenta con portales únicos de e-procurement**.
  - Reducción de asimetría informativa: Eliminación de licitaciones con un único postor (*single-bidding drop*).
  - Inclusión de PYMEs mediante datos abiertos, interoperabilidad y simplificación administrativa.
* **Transición de Entrada:** Corte directo.
* **Transición de Salida:** Fade Out / Corte directo hacia `[TOMA CÁMARA MANEL 6]`.

#### Subtítulos en Pantalla (V4):
```
EL 98% DE PAÍSES OCDE CUENTA CON PORTALES CENTRALIZADOS DE E-PROCUREMENT
REDUCCIÓN DRÁSTICA DE BARRERAS INFORMATIVAS Y DE LICITACIONES CON POSTOR ÚNICO
LA DIGITALIZACIÓN COMO VERDADERA PALANCA DE COMPETENCIA Y PARTICIPACIÓN PYME
```

#### Locución en Off (Manuel Romero):
> *"La recomendación más contundente de la OCDE para conciliar prioridades no pasa por levantar muros comerciales, sino por acelerar la digitalización. Hoy, el 98% de los países miembros ya opera con portales centralizados de 'e-procurement'.*  
> 
> *Hacer los pliegos totalmente públicos y transparentes reduce drásticamente las licitaciones desiertas o con un solo postor, abarata los costes de acceso para las pequeñas empresas y evita las barreras no arancelarias encubiertas."*

---

### [TOMA CÁMARA MANEL 6] - Conclusión Ejecutiva, Balance Crítico y Despedida
* **Posición en Timeline:** `15:15 - 16:00` (Duración: 45 segundos).
* **Tipo de Plano:** Plano medio con encuadre institucional, contacto visual directo y seguro.
* **Pista DaVinci:** Pista V1 activa. Música de fondo en A4 crescendo suave.
* **Transición de Entrada:** Corte directo desde `EH-20`.
* **Transición de Salida:** Fade out a negro de audio y vídeo (24 frames) tras los créditos de cierre.

#### Guión Textual de Manuel a Cámara:
> *"A modo de conclusión ejecutiva, el informe de la OCDE de 2026 nos deja una lección incuestionable para la política económica: utilizar el 13% del PIB en contratación pública para alcanzar la soberanía estratégica es una aspiración legítima, pero pretender lograrla mediante la autarquía y el 'reshoring' forzoso es un gravísimo error económico.*  
> 
> *La evidencia demuestra que el proteccionismo destruye comercio, destruye PIB y reduce la resiliencia ante crisis inesperadas. La verdadera seguridad no consiste en encerrarse, sino en diversificar de forma inteligente las cadenas globales, evaluar con datos el sobrecoste presupuestario y garantizar la reciprocidad comercial bajo el imperio de la ley.*  
> 
> *Muchas gracias por su atención en nombre del Grupo 14 de Economía Mundial. Quedamos a su entera disposición para el debate y las preguntas."*

---

## 4. GUÍA PRÁCTICA DE RODAJE Y MONTAJE EN DAVINCI RESOLVE STUDIO

### 4.1. Grabación de las Tomas de Cámara Real (`[TOMA CÁMARA MANEL]`)
1. **Configuración de Cámara:** 
   - Resolución: 4K UHD (3840x2160) o 1080p a 24fps.
   - Perfil de imagen: Logarítmico (recuperación de rango dinámico) o perfil neutro contrastado con balance manual a 5500K.
   - Óptica: Distancia focal recomendada de 35mm a 50mm (f/2.0 o f/2.8 para desenfoque suave del fondo).
2. **Microfonía:** 
   - Micrófono de solapa (lavalier) colocado en el esternón a 15-20 cm de la boca o micrófono de cañón (shotgun) cenital fuera de plano.
   - Grabar siempre 15 segundos de "ruido ambiente" de la sala vacía para aplicar el *Voice Isolation* nativo de DaVinci Resolve Studio con máxima precisión.
3. **Teleprompter / Apuntes:**
   - Colocar el guión textual palabra por palabra justo al nivel de la lente de la cámara para asegurar contacto visual natural y fluido con el espectador.

### 4.2. Captura y Procesamiento del B-Roll HTML (`[ESCENA HTML 1-20]`)
1. **Grabación de Pantalla (Screen Capture):**
   - Utilizar OBS Studio o grabador nativo a 60 fps con bitrate constante (mínimo 25.000 kbps, codec NVENC / ProRes / DNxHR).
   - Ocultar barras de desplazamiento (`overflow: hidden`), interfaz del navegador (`F11` pantalla completa) y cursor del ratón.
2. **Sincronización en DaVinci Resolve:**
   - Colocar los clips de B-roll en la pista `V3`.
   - Ajustar la velocidad del clip (*Retime Controls*) o insertar cortes dinámicos para sincronizar con precisión milimétrica las apariciones de datos con la voz en off grabada en la pista `A2`.
3. **Subtítulos y Rótulos:**
   - Emplear el panel *Subtitles* de DaVinci o generadores de texto con fusión gráfica en la pista `V4`.

### 4.3. Mezcla de Audio y Sound Design (Fairlight)
1. **Pista A1 (Voz Manuel Cámara) y A2 (Voz en Off):**
   - Aplicar ecualizador paramétrico de 4 bandas (corte de graves en 80 Hz, realce suave en 3.5 kHz para claridad, atenuación en 500 Hz para evitar sonido a caja).
   - Compresor óptico (Ratio 3:1, Attack 15ms, Release 120ms) y limitador a -1 dB True Peak.
2. **Pista A3 (SFX):**
   - Nivel equilibrado entre -14 dB y -18 dB para enriquecer las transiciones visuales sin competir con la locución.
3. **Pista A4 (Música):**
   - Configurar *Fairlight Sidechain Ducking*: la música se reproduce a -14 dB en introducciones y baja automáticamente a -24 dB cuando Manuel habla.

---
*Fin del documento de producción y escaleta. Optimizado para el Grupo 14 (Economía Mundial - UPV, Curso 2026-2027).*
