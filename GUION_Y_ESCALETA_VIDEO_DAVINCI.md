# GUION TÉCNICO, ESCALETA Y PAUTA DE MONTAJE EN DAVINCI RESOLVE
## PROYECTO DE INVESTIGACIÓN: ECONOMÍA MUNDIAL (CURSO 2026-2027)
### UNIVERSITAT POLITÈCNICA DE VALÈNCIA | DOBLE GRADO EN ADE + INGENIERÍA INFORMÁTICA

> **DOCUMENTO TÉCNICO OFICIAL DE PRODUCCIÓN AUDIOVISUAL**  
> **Informe Base Oficial:** *Public Procurement, Trade and Industrial Policies: Supporting National Priorities* (OCDE, 2026).  
> **Duración Total Exacta:** 15 minutos y 00 segundos (900,00 segundos | 54.000 frames a 60 fps).  
> **Cumplimiento Normativo Expreso:** Diapositiva 4 del PPT Oficial (*"10% Vídeo – El alumnado aparece y explica el contenido del proyecto"*).  
> **Equipo de Investigación y Producción (Grupo 14):**  
> * **Manuel Romero Álvarez (MR):** Marco Macroeconómico, Descentralización Fiscal, Ruptura Doctrinal y Medidas Directas (Escenas 1-19, 48 + Tomas TC-01, TC-02, TC-03, TC-08).  
> * **Jorge Cañete Morató (JC):** Subsidios Distorsionantes, Criterios Sanitarios/Ambientales, Cadenas Globales de Valor y Costes del Reshoring (Escenas 20-35, 49 + Tomas TC-01, TC-04, TC-05, TC-08).  
> * **Aleksandr Globa (AG):** Friend-Shoring, Trampa Burocrática, Marco Multilateral OMC GPA, Instrumento IPI, Sentencia Kolin y e-Procurement (Escenas 36-47, 50 + Tomas TC-01, TC-06, TC-07, TC-08).  

---

## 1. ARQUITECTURA TÉCNICA DEL PROYECTO EN DAVINCI RESOLVE STUDIO 19

### 1.1. Configuración de Timeline y Color Management
* **Resolución Máster:** 1920 × 1080 Full HD (16:9) / 3840 × 2160 UHD.
* **Velocidad de Cuadro (Frame Rate):** 60.00 fps (garantiza máxima fluidez en animaciones web interactivas CSS/JS a 60 Hz y paneos de cámara).
* **Color Science:** DaVinci YRGB Color Managed.
* **Color Processing Mode:** SDR / Rec.709.
* **Output Color Space:** Rec.709 Gamma 2.4 (estándar broadcast para reproducción en proyectores de aula y pantallas digitales).
* **Audio Sample Rate:** 48.000 kHz / 24-bit PCM Broadcast Wave.
* **Target Loudness de Masterización:** -14 LUFS integrados (tolerancia ±0.5 LUFS), True Peak máx: -1.0 dBFS (norma EBU R128 / YouTube / reproductor web).

### 1.2. Mapeo de Pistas en la Timeline de Edición (Edit Page)
```text
PISTAS DE VÍDEO (Video Tracks):
├── V4: [LOWER THIRDS / RÓTULOS]    ➔ Identificación institucional UPV, nombres y roles de los ponentes, citas normativas y badges.
├── V3: [B-ROLL 50 ESCENAS HTML]    ➔ Captura 60fps a resolución nativa del reproductor interactivo con animaciones de datos y contadores.
├── V2: [INSERT / PIP / OVERLAYS]   ➔ Recuadros secundarios Picture-in-Picture, comparativas visuales, logos OCDE/UPV y marcos técnicos.
└── V1: [CÁMARA REAL MULTI-ORADOR] ➔ Grabación frontal a cámara (busto parlante) de Manuel Romero, Jorge Cañete y Aleksandr Globa.

PISTAS DE AUDIO (Fairlight Audio Tracks):
├── A1: [VOZ DIRECTA CÁMARA]        ➔ Diálogo a cámara captado con micrófonos inalámbricos de solapa (lavalier cardioide).
├── A2: [VOZ EN OFF (VOICEOVER)]    ➔ Locución de estudio grabada limpia para las 50 micro-escenas HTML.
├── A3: [SFX / FOLEY AUDIO]         ➔ Efectos sonoros de interfaz: 'woosh' de cambio de tarjeta (-18 dB), clicks numéricos (-24 dB).
└── A4: [BGM / MÚSICA AMBIENTAL]    ➔ Banda sonora corporativa/cinemática minimalista (Neo-Classical / Minimalist Electronic).
                                      Sidechain Ducking activado por A1/A2 en Fairlight: -14 dBFS (fondo libre) ➔ -24 dBFS (con voz).
```

### 1.3. Pautas de Cadencia, Fairlight Audio y Protocolo de Transiciones
1. **Cadencia Expositiva:** 130 a 140 palabras por minuto. Ritmo sereno, académico y de máxima claridad fonética. Las cifras cuantitativas se enuncian con pausa previa de 0.2s para coincidir con la llegada al valor final del contador en pantalla.
2. **Procesamiento de Voz en Fairlight:**
   * *High-Pass Filter:* Corte en 80 Hz (18 dB/oct) para erradicar ruidos mecánicos de sala.
   * *Ecualizador Paramétrico (EQ):* Reducción de resonancias nasales en 450 Hz (-2 dB), realce de presencia en 3.5 kHz (+2.5 dB) y apertura de aire en 10 kHz (+1.5 dB).
   * *Compresión Vocal:* Ratio 3:1, Attack 15 ms, Release 120 ms, Knee suave. Normalización de picos vocales a -6.0 dBFS.
   * *De-Esser:* Atenuación focalizada en 6.2 kHz con reducción máxima de 4.0 dB.
   * *Fairlight Sidechain Ducking:* Compresor en pista A4 disparado por el bus de diálogo (A1 + A2) con ataque de 20 ms y release de 350 ms.
3. **Gramática Visual de Transiciones:**
   * *Corte Directo (Straight Cut):* Empleado en el paso de plano a cámara a escena B-roll para mantener la inercia del argumento sin pausas muertas.
   * *Cross Dissolve (14 frames / ~0.23 s):* Empleado en el interior de los bloques entre diapositivas conceptuales complementarias.
   * *Dip to Black (24 frames / 0.40 s):* Empleado únicamente en las transiciones de relevo entre ponentes para marcar el cambio de bloque temático.

---

## 2. ESCALETA GENERAL Y MINUTAJE INTEGRAL (00:00 - 15:00 | 900 SEGUNDOS)

La presentación se distribuye de manera rigurosa y equitativa entre los tres integrantes del Grupo 14, cumpliendo la normativa de la UPV:
* **Manuel Romero Álvarez (MR):** Intervención inicial, Contexto Macro, Descentralización Territorial y Medidas Directas (Escenas 1 a 19 + 2 tomas de cámara dedicadas + apertura grupal).
* **Jorge Cañete Morató (JC):** Subsidios Distorsionantes, Barreras Sanitarias/Verdes, Cadenas Globales de Valor y Costes del Reshoring (Escenas 20 a 35 + 2 tomas de cámara dedicadas).
* **Aleksandr Globa (AG):** Friend-Shoring, Trampa Burocrática, Marco Multilateral OMC GPA, Instrumento IPI, Sentencia Kolin y e-Procurement (Escenas 36 a 47 + 2 tomas de cámara dedicadas).
* **Intervención Conjunta Final (G14):** Síntesis final, recomendaciones de política económica y despedida institucional (Escenas 48 a 50 + cierre grupal a cámara).

| Código | Tipo de Unidad | Minutaje | Timecode DaVinci (60 fps) | Dur. | Orador / Rol | Pistas Activas | Núcleo Temático y Argumental |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **TC-01** | `[TOMA CÁMARA GRUPAL 1]` | 00:00 - 00:35 | `00:00:00:00 - 00:00:35:00` | 35 s | G14 (Manuel, Jorge, Aleksandr) | V1, V4, A1, A4 | Apertura institucional, presentación del equipo y formulación del dilema geopolítico. |
| **EH-01** | `[ESCENA HTML 1]` | 00:35 - 00:47 | `00:00:35:00 - 00:00:47:00` | 12 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Título Cinemático: Ficha Oficial del Informe OCDE 2026. |
| **EH-02** | `[ESCENA HTML 2]` | 00:47 - 00:59 | `00:00:47:00 - 00:00:59:00` | 12 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Demanda Agregada Mundial: $11 billones anuales en compras públicas. |
| **EH-03** | `[ESCENA HTML 3]` | 00:59 - 01:11 | `00:00:59:00 - 00:01:11:00` | 12 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Impacto en Economías Avanzadas: 13% del PIB y 29% del gasto público en la OCDE. |
| **EH-04** | `[ESCENA HTML 4]` | 01:11 - 01:23 | `00:01:11:00 - 00:01:23:00` | 12 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | La Ruptura de Paradigma: Del mínimo coste contable a la seguridad estratégica. |
| **TC-02** | `[TOMA CÁMARA MANEL 2]` | 01:23 - 01:48 | `00:01:23:00 - 00:01:48:00` | 25 s | MR (Manuel a cámara) | V1, V4, A1, A4 | La Paradoja Subnacional y la Ruptura Doctrinal: Gobernanza multinivel y fragmentación. |
| **EH-05** | `[ESCENA HTML 5]` | 01:48 - 02:01 | `00:01:48:00 - 00:02:01:00` | 13 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Descentralización Territorial: 62,5% ejecutado fuera del gobierno central. |
| **EH-06** | `[ESCENA HTML 6]` | 02:01 - 02:14 | `00:02:01:00 - 00:02:14:00` | 13 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Reparto Territorial del Gasto: 62,5% subnacional vs 37,5% gobierno central. |
| **EH-07** | `[ESCENA HTML 7]` | 02:14 - 02:27 | `00:02:14:00 - 00:02:27:00` | 13 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Gasto en Sanidad Pública: El sector prioritario supera el 30% del gasto total. |
| **EH-08** | `[ESCENA HTML 8]` | 02:27 - 02:41 | `00:02:27:00 - 00:02:41:00` | 14 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Colisión de Paradigmas: Principio de no discriminación OMC vs Soberanía estratégica. |
| **EH-09** | `[ESCENA HTML 9]` | 02:41 - 02:54 | `00:02:41:00 - 00:02:54:00` | 13 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Los Shocks Catalizadores: COVID-19, Guerra de Ucrania y tensiones en Taiwán. |
| **EH-10** | `[ESCENA HTML 10]` | 02:54 - 03:07 | `00:02:54:00 - 00:03:07:00` | 13 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | La Compra como Palanca: Política industrial impulsada desde el lado de la demanda. |
| **EH-11** | `[ESCENA HTML 11]` | 03:07 - 03:20 | `00:03:07:00 - 00:03:20:00` | 13 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | El Arsenal de Medidas: Taxonomía oficial OCDE entre medidas directas e indirectas. |
| **TC-03** | `[TOMA CÁMARA MANEL 3]` | 03:20 - 03:42 | `00:03:20:00 - 00:03:42:00` | 22 s | MR (Manuel a cámara) | V1, V4, A1, A4 | El Giro Neomercantilista de Demanda: Exclusión legal y escalada del contenido nacional. |
| **EH-12** | `[ESCENA HTML 12]` | 03:42 - 03:56 | `00:03:42:00 - 00:03:56:00` | 14 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Buy American Act en EE.UU.: Exigencia del 65% de insumos domésticos en 2024. |
| **EH-13** | `[ESCENA HTML 13]` | 03:56 - 04:10 | `00:03:56:00 - 00:04:10:00` | 14 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Escalada Proteccionista en EE.UU.: Aumento progresivo fijado hacia el 75% en 2029. |
| **EH-14** | `[ESCENA HTML 14]` | 04:10 - 04:24 | `00:04:10:00 - 00:04:24:00` | 14 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Trayectoria del Buy American: Evolución porcentual 55% (2022) ➔ 65% (2024) ➔ 75% (2029). |
| **EH-15** | `[ESCENA HTML 15]` | 04:24 - 04:38 | `00:04:24:00 - 00:04:38:00` | 14 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | BABA Act 2021: 100% de fabricación nacional en acero, hierro y materiales básicos. |
| **EH-16** | `[ESCENA HTML 16]` | 04:38 - 04:52 | `00:04:38:00 - 00:04:52:00` | 14 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Plan México 2025: Endurecimiento al 65% de contenido local para frenar a Asia. |
| **EH-17** | `[ESCENA HTML 17]` | 04:52 - 05:06 | `00:04:52:00 - 00:05:06:00` | 14 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Doble Incentivo en México: 65% de cuota nacional obligatoria más 15% de margen de precio. |
| **EH-18** | `[ESCENA HTML 18]` | 05:06 - 05:19 | `00:05:06:00 - 00:05:19:00` | 13 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | Recargo a Importaciones: Australia Occidental y el recargo del 20% a bienes foráneos. |
| **EH-19** | `[ESCENA HTML 19]` | 05:19 - 05:34 | `00:05:19:00 - 00:05:34:00` | 15 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | El Debate en la Unión Europea: Tensión entre el enfoque Draghi/Francia y Finlandia/Nórdicos. |
| **TC-04** | `[TOMA CÁMARA JORGE 1]` | 05:34 - 05:59 | `00:05:34:00 - 00:05:59:00` | 25 s | JC (Jorge a cámara) | V1, V4, A1, A4 | Transición al Bloque 2: Distorsión de Subsidios Estatales y Barreras Encubiertas. |
| **EH-20** | `[ESCENA HTML 20]` | 05:59 - 06:13 | `00:05:59:00 - 00:06:13:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | Subsidios Estatales en China: $231.000 millones inyectados al sector automotriz. |
| **EH-21** | `[ESCENA HTML 21]` | 06:13 - 06:27 | `00:06:13:00 - 00:06:27:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | El Gigante Ferroviario CRRC: Más de $1.000 millones anuales en ayudas directas. |
| **EH-22** | `[ESCENA HTML 22]` | 06:27 - 06:41 | `00:06:27:00 - 00:06:41:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | Precios Predatorios en Europa: Bajas temerarias del -25% frente a Alstom y Siemens. |
| **EH-23** | `[ESCENA HTML 23]` | 06:41 - 06:55 | `00:06:41:00 - 00:06:55:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | El Mito Ecológico: Por qué comprar local no reduce necesariamente la huella ambiental. |
| **EH-24** | `[ESCENA HTML 24]` | 06:55 - 07:10 | `00:06:55:00 - 00:07:10:00` | 15 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | La Paradoja de Emisiones: Invernadero calefactado local vs importación marítima eficiente. |
| **EH-25** | `[ESCENA HTML 25]` | 07:10 - 07:24 | `00:07:10:00 - 00:07:24:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | Fármacos Esenciales Críticos: 299 medicamentos bajo alerta máxima de la EMA. |
| **EH-26** | `[ESCENA HTML 26]` | 07:24 - 07:38 | `00:07:24:00 - 00:07:38:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | Dependencia en Antibióticos: Amoxicilina y principios activos concentrados al 80% en Asia. |
| **EH-27** | `[ESCENA HTML 27]` | 07:38 - 07:52 | `00:07:38:00 - 00:07:52:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | Net-Zero Industry Act: Umbral comunitario del 50% para activar compras estratégicas. |
| **EH-28** | `[ESCENA HTML 28]` | 07:52 - 08:06 | `00:07:52:00 - 00:08:06:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | Compra Pública de Innovación: 94% de uso en la OCDE e internacionalización empresarial. |
| **TC-05** | `[TOMA CÁMARA JORGE 2]` | 08:06 - 08:31 | `00:08:06:00 - 00:08:31:00` | 25 s | JC (Jorge a cámara) | V1, V4, A1, A4 | Cadenas Globales de Valor y la Evidencia Empírica: El coste real del reshoring forzado. |
| **EH-29** | `[ESCENA HTML 29]` | 08:31 - 08:45 | `00:08:31:00 - 00:08:45:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | Cadenas Globales de Valor: La naturaleza modular y transfronteriza de la producción moderna. |
| **EH-30** | `[ESCENA HTML 30]` | 08:45 - 08:59 | `00:08:45:00 - 00:08:59:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | Composición del Comercio Global: 70% en bienes intermedios frente a 30% en bienes finales. |
| **EH-31** | `[ESCENA HTML 31]` | 08:59 - 09:13 | `00:08:59:00 - 00:09:13:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | La Falacia del Producto Doméstico: Inexistencia de bienes complejos 100% nacionales. |
| **EH-32** | `[ESCENA HTML 32]` | 09:13 - 09:28 | `00:09:13:00 - 00:09:28:00` | 15 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | Coste del Reshoring Forzado: Simulación de Arriola et al. (OCDE): desplome comercial del -18%. |
| **EH-33** | `[ESCENA HTML 33]` | 09:28 - 09:42 | `00:09:28:00 - 00:09:42:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | Destrucción del PIB Global: Contracción permanente del -5% en la renta mundial per cápita. |
| **EH-34** | `[ESCENA HTML 34]` | 09:42 - 09:56 | `00:09:42:00 - 00:09:56:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | Pérdida Asimétrica de PIB: El severo coste en economías abiertas (Canadá -13,1%, UK -12,2%). |
| **EH-35** | `[ESCENA HTML 35]` | 09:56 - 10:11 | `00:09:56:00 - 00:10:11:00` | 15 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | La Falacia de la Resiliencia: La autarquía amplifica la vulnerabilidad ante shocks locales. |
| **TC-06** | `[TOMA CÁMARA ALEKSANDR 1]` | 10:11 - 10:36 | `00:10:11:00 - 00:10:36:00` | 25 s | AG (Aleksandr a cámara) | V1, V4, A1, A4 | Transición al Bloque 3: Friend-Shoring, la Trampa Burocrática y la Asimetría Multilateral. |
| **EH-36** | `[ESCENA HTML 36]` | 10:36 - 10:50 | `00:10:36:00 - 00:10:50:00` | 14 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | El Coste del Friend-Shoring: Fragmentación en bloques geopolíticos y pérdida de eficiencia. |
| **EH-37** | `[ESCENA HTML 37]` | 10:50 - 11:05 | `00:10:50:00 - 00:11:05:00` | 15 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | La Trampa Burocrática: Bosio, Djankov, Glaeser y Shleifer (AER 2022) y la capacidad estatal. |
| **EH-38** | `[ESCENA HTML 38]` | 11:05 - 11:19 | `00:11:05:00 - 00:11:19:00` | 14 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | Evidencia Empírica Global: Muestra cuantitativa de 187 países evaluados en AER. |
| **EH-39** | `[ESCENA HTML 39]` | 11:19 - 11:33 | `00:11:19:00 - 00:11:33:00` | 14 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | El Límite del GPA de la OMC: El club cerrado de 48 economías firmantes vs el resto del mundo. |
| **EH-40** | `[ESCENA HTML 40]` | 11:33 - 11:47 | `00:11:33:00 - 00:11:47:00` | 14 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | Los Grandes Emergentes: Por qué China, India y Brasil no ratifican el GPA. |
| **TC-07** | `[TOMA CÁMARA ALEKSANDR 2]` | 11:47 - 12:09 | `00:11:47:00 - 00:12:09:00` | 22 s | AG (Aleksandr a cámara) | V1, V4, A1, A4 | La Respuesta Geopolítica Europea: Del Instrumento IPI a la Jurisprudencia Kolin. |
| **EH-41** | `[ESCENA HTML 41]` | 12:09 - 12:23 | `00:12:09:00 - 00:12:23:00` | 14 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | El Instrumento IPI Europeo: Reglamento UE 2022/1031 de reciprocidad obligatoria. |
| **EH-42** | `[ESCENA HTML 42]` | 12:23 - 12:37 | `00:12:23:00 - 00:12:37:00` | 14 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | Sanciones del Instrumento IPI: Penalización del 50% en puntuación o exclusión automática. |
| **EH-43** | `[ESCENA HTML 43]` | 12:37 - 12:52 | `00:12:37:00 - 00:12:52:00` | 15 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | Sentencia Kolin del TJUE: C-652/22 y la pérdida de tutela judicial para países sin tratado. |
| **EH-44** | `[ESCENA HTML 44]` | 12:52 - 13:06 | `00:12:52:00 - 00:13:06:00` | 14 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | El Nuevo Mapa Legal de Licitación: Socios cubiertos por GPA vs Terceros países desprotegidos. |
| **EH-45** | `[ESCENA HTML 45]` | 13:06 - 13:20 | `00:13:06:00 - 00:13:20:00` | 14 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | El Déficit de Evaluación: Solo el 23% evalúa impacto económico ex-post y el 10% impacto ambiental. |
| **EH-46** | `[ESCENA HTML 46]` | 13:20 - 13:34 | `00:13:20:00 - 00:13:34:00` | 14 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | Auditoría del Gasto en la OCDE: Ausencia de metodologías para auditar el sobrecoste público. |
| **EH-47** | `[ESCENA HTML 47]` | 13:34 - 13:48 | `00:13:34:00 - 00:13:48:00` | 14 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | Digitalización e-Procurement: Implantación masiva de plataformas únicas (96% de la OCDE). |
| **EH-48** | `[ESCENA HTML 48]` | 13:48 - 14:02 | `00:13:48:00 - 00:14:02:00` | 14 s | MR (Manuel en off) | V3, V4, A2, A3, A4 | El Efecto Democratizador: Plataformas digitales, concurrencia de PYMEs y reducción de colusión. |
| **EH-49** | `[ESCENA HTML 49]` | 14:02 - 14:16 | `00:14:02:00 - 00:14:16:00` | 14 s | JC (Jorge en off) | V3, V4, A2, A3, A4 | El Gran Dilema Global: La encrucijada estratégica documentada por la OCDE. |
| **EH-50** | `[ESCENA HTML 50]` | 14:16 - 14:30 | `00:14:16:00 - 00:14:30:00` | 14 s | AG (Aleksandr en off) | V3, V4, A2, A3, A4 | Síntesis Final y Créditos Académicos: Presentación oficial del Grupo 14 para la UPV. |
| **TC-08** | `[TOMA CÁMARA GRUPAL 3]` | 14:30 - 15:00 | `00:14:30:00 - 00:15:00:00` | 30 s | G14 (Manuel, Jorge, Aleksandr) | V1, V4, A1, A4 | Toma de Cámara Grupal Final: Conclusiones conjuntas, balance crítico y despedida oficial. |

**TOTAL ACUMULADO:** Exactamente **15 minutos y 00 segundos** (900,00 s | 54.000 frames).

---

## 3. GUION INTEGRAL PALABRA POR PALABRA Y GUÍA DE MONTAJE ESCENA A ESCENA

---

### [TC-01] - TOMA CÁMARA GRUPAL 1: Apertura Institucional y Planteamiento del Dilema Geoeconómico
* **Posición en Timeline:** `00:00 - 00:35` (Duración: 35 segundos | Frames: 0 a 2.100).
* **Timecode DaVinci (60 fps):** `00:00:00:00 - 00:00:35:00`.
* **Tipo de Plano:** Plano general medio conjunto (los tres integrantes encuadrados uniformemente, Manuel en el centro, Jorge a su derecha y Aleksandr a su izquierda, postura erguida, iluminación frontal de tres puntos, fondo neutro institucional con iluminación cenital suave).
* **Pistas DaVinci Activas:**
  * **V1:** Toma de cámara real conjunta (Sony FX3 / A7IV 4K 60p, 35mm f/2.8).
  * **V4:** Lower Third animado a partir de `00:05` (*"Grupo 14 • Doble Grado ADE + Informática | Universitat Politècnica de València"*).
  * **A1:** Pista de audio directo (3 micrófonos de solapa inalámbricos sincronizados en submezcla estéreo calibrada a -6 dBFS).
  * **A4:** BGM pista ambiental en Fairlight con Sidechain Ducking a -24 dBFS.
* **Transiciones:** Fade In desde negro (18 frames) al inicio. Corte directo a `EH-01` en `00:35`.

#### Guión Textual Íntegro (Word-for-Word):
> **Manuel Romero Álvarez (MR):**  
> *"Hola a todos y bienvenidos. Mi nombre es Manuel Romero Álvarez y, junto a mis compañeros Jorge Cañete Morató y Aleksandr Globa, conformamos el Grupo 14 de la asignatura de Economía Mundial en el Doble Grado de ADE e Ingeniería Informática de la Universitat Politècnica de València.*  
> 
> *Durante décadas, la contratación pública fue interpretada como un mero procedimiento administrativo guiado por el principio de eficiencia contable y mínima distorsión comercial. Sin embargo, el reciente informe de la OCDE de 2026 revela un punto de inflexión histórico."* [Pausa 0.5s]  
> 
> **Jorge Cañete Morató (JC):**  
> *"En la actualidad, los Estados están reconvirtiendo sus presupuestos de compra en la principal trinchera de su política industrial, buscando reubicar cadenas productivas y blindar su autonomía ante crisis geopolíticas."* [Pausa 0.5s]  
> 
> **Aleksandr Globa (AG):**  
> *"Pero esta intervención masiva choca frontalmente contra las normas del comercio internacional. A lo largo de esta presentación, desglosaremos la evidencia empírica, los costes económicos reales del proteccionismo y el nuevo mapa legal de la contratación pública global."*

---

### [EH-01] - ESCENA HTML 1: Título Cinemático y Ficha Oficial del Informe OCDE 2026
* **Posición en Timeline:** `00:35 - 00:47` (Duración: 12 segundos | Frames: 2.100 a 2.820).
* **Timecode DaVinci (60 fps):** `00:00:35:00 - 00:00:47:00`.
* **Tipo de Elemento:** B-roll dinámico capturado a 60 fps del reproductor web interactivo.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), V4 (Badge institucional), A2 (Voz en off de Manuel), A3 (SFX interfaz: 'woosh' en 00:35:10), A4 (BGM ducked a -24 dBFS).
* **Elementos Visuales:** Tarjeta atómica central con animación stagger-in, badge dorado *"Informe Oficial OCDE 2026"*, título tipográfico de alto contraste: *Contratación Pública, Comercio y Política Industrial*, con píldoras de datos institucionales.
* **Transiciones:** Corte directo desde `TC-01`. Cross Dissolve (14 frames) hacia `EH-02`.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Comenzamos analizando el documento de referencia publicado por la Organización para la Cooperación y el Desarrollo Económicos en 2026: 'Public Procurement, Trade and Industrial Policies: Supporting National Priorities'. Una investigación cuantitativa exhaustiva sobre cómo las compras del Estado están redefiniendo el comercio global."*

---

### [EH-02] - ESCENA HTML 2: Demanda Agregada Mundial ($11 Billones de Dólares)
* **Posición en Timeline:** `00:47 - 00:59` (Duración: 12 segundos | Frames: 2.820 a 3.540).
* **Timecode DaVinci (60 fps):** `00:00:47:00 - 00:00:59:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con animación numérica y gráfico de volumen.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'click-pop' numérico en 00:49:00 al alcanzar el valor 11), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Contador numérico animado que escala de 0 a 11 con prefijo '$' y sufijo 'Billones de Dólares', barra de progreso con gradiente ámbar y etiqueta descriptiva de demanda agregada mundial anual.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Para dimensionar la magnitud macroeconómica de este fenómeno, observemos la cifra agregada mundial: los gobiernos destinan anualmente once billones de dólares a la contratación pública.* [Pausa 0.5s] *Hablamos del mayor comprador individual del planeta, capaz de crear, transformar o colapsar mercados industriales enteros con sus pliegos de licitación."*

---

### [EH-03] - ESCENA HTML 3: Impacto en las Economías Avanzadas (13% PIB y 29% Gasto Público)
* **Posición en Timeline:** `00:59 - 01:11` (Duración: 12 segundos | Frames: 3.540 a 4.260).
* **Timecode DaVinci (60 fps):** `00:00:59:00 - 00:01:11:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con comparativa visual en dos columnas métricas.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'double click' en animación métrica), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Doble tarjeta comparativa: Columna izquierda con contador animado al 13% (*"Del PIB medio de los países de la OCDE"*), columna derecha con contador animado al 29% (*"Del Gasto Público Total agregado"*).
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"En los países miembros de la OCDE, la compra pública representa en promedio el trece por ciento del Producto Interior Bruto y absorbe el veintinueve por ciento del gasto público total.* [Pausa 0.5s] *Casi un tercio de cada euro o dólar administrado por el Estado transita obligatoriamente a través de concursos públicos."*

---

### [EH-04] - ESCENA HTML 4: La Ruptura de Paradigma: Del Coste Mínimo a la Seguridad Nacional
* **Posición en Timeline:** `01:11 - 01:23` (Duración: 12 segundos | Frames: 4.260 a 4.980).
* **Timecode DaVinci (60 fps):** `00:01:11:00 - 00:01:23:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con diagrama de transición doctrinal y flecha dinámica.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'whoosh' en el cambio de paradigma), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Bloque conceptual izquierdo en tono sobrio (*"Paradigma Clásico: Minimización del coste contable y libre concurrencia"*) enlazado mediante vector animado hacia bloque derecho destacado en gradiente (*"Nuevo Paradigma Neomercantilista: Soberanía productiva, política industrial y seguridad nacional"*).
* **Transiciones:** Cross Dissolve de entrada (14 frames) y corte directo hacia `TC-02` en `01:23`.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Esta masa presupuestaria ha desatado un cambio doctrinario sin precedentes. La directriz clásica de adjudicar al precio más bajo en un mercado global abierto está siendo sustituida por imperativos de autonomía estratégica, descarbonización y fomento de campeones nacionales."*

---

### [TC-02] - TOMA CÁMARA MANEL 2: La Paradoja Subnacional y la Ruptura Doctrinal
* **Posición en Timeline:** `01:23 - 01:48` (Duración: 25 segundos | Frames: 4.980 a 6.480).
* **Timecode DaVinci (60 fps):** `00:01:23:00 - 00:01:48:00`.
* **Tipo de Plano:** Plano medio (busto) de Manuel Romero Álvarez, mirada directa a cámara, gesticulación contenida y formal, fondo neutro con iluminación institucional.
* **Pistas DaVinci Activas:**
  * **V1:** Toma a cámara de Manuel.
  * **V4:** Lower Third animado en `01:25` (*"Manuel Romero Álvarez • Macroeconomía y Descentralización Fiscal"*).
  * **A1:** Micrófono de solapa (A1 activo a -6 dBFS).
  * **A4:** BGM a -24 dBFS.
* **Transiciones:** Corte directo desde `EH-04`. Corte directo hacia `EH-05` en `01:48`.

#### Guión Textual Íntegro (Manuel Romero Álvarez):
> *"Cuando analizamos la estructura interna de este gasto, nos encontramos con una paradoja institucional de primer orden: la inmensa mayoría de las decisiones de compra no se toman en los ministerios de las capitales, sino a nivel descentralizado por ayuntamientos, regiones y entes hospitalarios.*  
> 
> *Esta fragmentación complica extraordinariamente el control del gasto y expone a los Estados a incumplir sus propios compromisos comerciales internacionales. Veamos la distribución territorial exacta documentada por la OCDE."*

---

### [EH-05] - ESCENA HTML 5: Descentralización Territorial: El 62,5% Subnacional
* **Posición en Timeline:** `01:48 - 02:01` (Duración: 13 segundos | Frames: 6.480 a 7.260).
* **Timecode DaVinci (60 fps):** `00:01:48:00 - 00:02:01:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con contador porcentual y gráfico de tarta estilizado.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'click-pop' al alcanzar 62,5%), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Gran indicador central que escala al 62,5% con la leyenda *"Nivel Subnacional: Ejecutado por gobiernos autonómicos, provinciales y municipios"*.
* **Transiciones:** Corte directo desde `TC-02`. Cross Dissolve (14 frames) hacia `EH-06`.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"En los países de la OCDE, un abrumador sesenta y dos coma cinco por ciento del gasto público en contratación es administrado fuera del gobierno central. Miles de administraciones locales toman a diario decisiones que impactan directamente sobre las cadenas de suministro globales."*

---

### [EH-06] - ESCENA HTML 6: Reparto Territorial del Gasto: 62,5% Subnacional vs 37,5% Central
* **Posición en Timeline:** `02:01 - 02:14` (Duración: 13 segundos | Frames: 7.260 a 8.040).
* **Timecode DaVinci (60 fps):** `00:02:01:00 - 00:02:14:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con barras comparativas horizontales animadas.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'bar-fill' simultáneo), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Barra superior animada al 62,5% en verde esmeralda (*"Administraciones Subnacionales"*); barra inferior al 37,5% en azul petróleo (*"Gobierno Central / Federal"*).
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Frente al treinta y siete coma cinco por ciento que retiene la administración central, el bloque subnacional ejerce la primacía absoluta. Esto genera una severa asimetría en la supervisión de acuerdos multilaterales como el GPA de la OMC, donde muchas regiones no están vinculadas formalmente."*

---

### [EH-07] - ESCENA HTML 7: Gasto en Sanidad Pública: El Sector Prioritario (>30%)
* **Posición en Timeline:** `02:14 - 02:27` (Duración: 13 segundos | Frames: 8.040 a 8.820).
* **Timecode DaVinci (60 fps):** `00:02:14:00 - 00:02:27:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con métrica sanitaria destacada y pulso cardíaco animado.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'heartbeat-synth' sutil), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Contador animado a `>30%` con tag *"Sector Salud y Equipamiento Médico"*, secundado por desglose de suministros farmacéuticos y servicios hospitalarios.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Sectorialmente, la sanidad pública representa por sí sola más del treinta por ciento de toda la contratación de los países avanzados. Los sistemas de salud se han consolidado como el mayor cliente individual de la industria tecnológica y farmacéutica internacional."*

---

### [EH-08] - ESCENA HTML 8: Colisión de Paradigmas: Principio de Eficiencia vs Doctrina de Seguridad
* **Posición en Timeline:** `02:27 - 02:41` (Duración: 14 segundos | Frames: 8.820 a 9.660).
* **Timecode DaVinci (60 fps):** `00:02:27:00 - 00:02:41:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con tabla analítica de confrontación doctrinal.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'whoosh' metálico), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Comparativa en dos columnas: Columna A (*"OMC y Régimen GPA: Principio de no discriminación, trato nacional y eficiencia de mercado"*); Columna B (*"Geopolítica Actual: Resiliencia de oferta, reservas estratégicas y subsidios dirigidos"*).
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Aquí radica la colisión de doctrinas: el marco multilateral de la OMC defiende la no discriminación y el máximo valor por el dinero público; en contraste, la doctrina geoeconómica contemporánea subordina la eficiencia a la seguridad del suministro y al control soberano."*

---

### [EH-09] - ESCENA HTML 9: Los Shocks Catalizadores: COVID-19, Guerra en Ucrania y Taiwán
* **Posición en Timeline:** `02:41 - 02:54` (Duración: 13 segundos | Frames: 9.660 a 10.440).
* **Timecode DaVinci (60 fps):** `00:02:41:00 - 00:02:54:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con línea temporal de tres impactos secuenciales.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX de alerta suave secuencial), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Tres nodos cronológicos que se activan sucesivamente: 1) *"Pandemia COVID-19: Colapso de material sanitario"*; 2) *"Invasión de Ucrania: Crisis energética e insumos críticos"*; 3) *"Tensiones en el Estrecho de Taiwán: Amenaza a semiconductores"*.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Este cambio radical no surgió en el vacío. Tres shocks encadenados lo precipitaron: la pandemia expuso la vulnerabilidad de suministros médicos, la guerra en Ucrania demostró los riesgos de la dependencia energética, y las tensiones en Taiwán encendieron las alarmas sobre los microchips avanzados."*

---

### [EH-10] - ESCENA HTML 10: La Compra como Palanca: Política Industrial Impulsada por la Demanda
* **Posición en Timeline:** `02:54 - 03:07` (Duración: 13 segundos | Frames: 10.440 a 11.220).
* **Timecode DaVinci (60 fps):** `00:02:54:00 - 00:03:07:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con diagrama de flujo de política económica.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'chime' ascendente), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Esquema teórico que ilustra el cambio metodológico: de subvencionar la oferta (subsidios tradicionales a I+D) a garantizar la demanda (contratos públicos plurianuales a precios garantizados).
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Como respuesta teórica, los gobiernos han descubierto que la política industrial más potente no es subsidiar la oferta, sino asegurar la demanda. Al garantizar contratos de compra a largo plazo, el Estado elimina el riesgo comercial para las empresas que invierten en tecnologías críticas."*

---

### [EH-11] - ESCENA HTML 11: El Arsenal de Medidas: Clasificación Oficial de la OCDE
* **Posición en Timeline:** `03:07 - 03:20` (Duración: 13 segundos | Frames: 11.220 a 12.000).
* **Timecode DaVinci (60 fps):** `00:03:07:00 - 00:03:20:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con taxonomía estructurada en dos paneles.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX de despliegue de menús), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Panel izquierdo destacado: *"Capítulo 2.1: Medidas Directas (Contenido Local, Preferencias de Precio, Cuotas Reservadas)"*; Panel derecho: *"Capítulo 2.2: Medidas Indirectas (Normas Técnicas, Estándares de Carbono, Criterios de Resiliencia)"*.
* **Transiciones:** Cross Dissolve de entrada y corte directo hacia `TC-03` en `03:20`.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"El Capítulo Dos del informe de la OCDE estructura este arsenal intervencionista en dos grandes vertientes: las medidas directas, que discriminan abiertamente según el origen del producto; y las medidas indirectas, que erigen barreras regulatorias bajo justificaciones ecológicas o sanitarias."*

---

### [TC-03] - TOMA CÁMARA MANEL 3: El Giro Neomercantilista de Demanda y la Escalada de Contenido Nacional
* **Posición en Timeline:** `03:20 - 03:42` (Duración: 22 segundos | Frames: 12.000 a 13.320).
* **Timecode DaVinci (60 fps):** `00:03:20:00 - 00:03:42:00`.
* **Tipo de Plano:** Plano medio corto (busto) de Manuel Romero Álvarez, tono enfático y riguroso.
* **Pistas DaVinci Activas:**
  * **V1:** Toma a cámara de Manuel.
  * **V4:** Lower Third animado en `03:22` (*"Manuel Romero Álvarez • Barreras Arancelarias y Contenido Local"*).
  * **A1:** Micrófono de solapa (A1 activo a -6 dBFS).
  * **A4:** BGM a -24 dBFS.
* **Transiciones:** Corte directo desde `EH-11`. Corte directo hacia `EH-12` en `03:42`.

#### Guión Textual Íntegro (Manuel Romero Álvarez):
> *"Entramos de lleno en las medidas directas. El ejemplo más agresivo lo protagoniza Estados Unidos a través de la escalada legislativa del Buy American Act y la ley BABA de infraestructuras.*  
> 
> *Pero no es un fenómeno aislado: economías emergentes como México o estados en Oceanía están elevando drásticamente sus exigencias de contenido nacional, blindando sus industrias locales frente a la competencia internacional."*

---

### [EH-12] - ESCENA HTML 12: Buy American Act en EE.UU.: Exigencia del 65% de Insumos Locales en 2024
* **Posición en Timeline:** `03:42 - 03:56` (Duración: 14 segundos | Frames: 13.320 a 14.160).
* **Timecode DaVinci (60 fps):** `00:03:42:00 - 00:03:56:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con mapa de Estados Unidos y medidor circular al 65%.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'gauge-meter' en subida rápida), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Dial semicircular animado que alcanza el 65% con sello del Gobierno Federal de EE.UU. y texto legal: *"Federal Acquisition Regulation (FAR): Requisito de Componentes Nacionales en Compras Federales (2024)"*.
* **Transiciones:** Corte directo desde `TC-03`. Cross Dissolve (14 frames) hacia `EH-13`.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Bajo la administración estadounidense, el umbral obligatorio de componentes de fabricación nacional para acceder a contratos federales se ha elevado en 2024 hasta el sesenta y cinco por ciento del coste total de los bienes manufacturados."*

---

### [EH-13] - ESCENA HTML 13: Escalada Proteccionista en EE.UU.: Senda Progresiva al 75% en 2029
* **Posición en Timeline:** `03:56 - 04:10` (Duración: 14 segundos | Frames: 14.160 a 15.000).
* **Timecode DaVinci (60 fps):** `00:03:56:00 - 00:04:10:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con gráfico de escalones legislativos temporales.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'step-sound' en cada hito), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Escalera cronológica que muestra el incremento fijado por decreto: 65% en 2024 escalando gradualmente hasta alcanzar el 75% obligatorio en 2029, con alerta de exclusión a suministradores foráneos.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Y el endurecimiento continúa. La normativa estipula que este umbral alcanzará de forma obligatoria el setenta y cinco por ciento en 2029, cerrando de forma casi infranqueable el mayor mercado de contratación federal del mundo."*

---

### [EH-14] - ESCENA HTML 14: Trayectoria del Buy American: De 55% a 65% y 75%
* **Posición en Timeline:** `04:10 - 04:24` (Duración: 14 segundos | Frames: 15.000 a 15.840).
* **Timecode DaVinci (60 fps):** `00:04:10:00 - 00:04:24:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con comparativa tripartita en barras verticales.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX de triple incremento numérico), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Tres columnas con valores comparados: 2022 (Nivel previo histórico: 55%), 2024 (Nivel vigente actual: 65%), 2029 (Meta legislativa vinculante: 75%).
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"En apenas siete años, Estados Unidos habrá incrementado en veinte puntos porcentuales la exigencia de contenido local: pasando del cincuenta y cinco por ciento tradicional al setenta y cinco por ciento, desafiando abiertamente el espíritu del Acuerdo sobre Contratación Pública de la OMC."*

---

### [EH-15] - ESCENA HTML 15: BABA Act 2021: 100% de Acero y Hierro en Obras Públicas
* **Posición en Timeline:** `04:24 - 04:38` (Duración: 14 segundos | Frames: 15.840 a 16.680).
* **Timecode DaVinci (60 fps):** `00:04:24:00 - 00:04:38:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con medidor al 100% y gráfica de viga de acero.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'clink' metálico contundente), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Cifra al 100% en color dorado con badge: *"Build America, Buy America Act (BABA)"*. Leyenda: *"Todos los procesos de fundición y laminado de hierro, acero y materiales de construcción deben realizarse exclusivamente en territorio de EE.UU."*
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"A esto se suma la ley BABA de 2021 para infraestructura financiada con fondos federales: exige un cien por cien de producción nacional para todo el hierro, acero y materiales básicos. Si un puente se construye con fondos federales, ni un solo tornillo puede proceder del exterior."*

---

### [EH-16] - ESCENA HTML 16: Plan México 2025: Endurecimiento al 65% de Contenido Local
* **Posición en Timeline:** `04:38 - 04:52` (Duración: 14 segundos | Frames: 16.680 a 17.520).
* **Timecode DaVinci (60 fps):** `00:04:38:00 - 00:04:52:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con mapa de México y vector de sustitución de importaciones.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'swipe' lateral), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Mapa de Norteamérica con vector que frena importaciones asiáticas y resalta el salto en la cuota de contenido nacional mexicano del 50% previo al 65% estipulado en el Plan México 2025.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"En América Latina, el Gobierno mexicano ha lanzado su Plan México 2025, elevando el requisito de contenido doméstico del cincuenta al sesenta y cinco por ciento en licitaciones estatales. El objetivo declarado es sustituir las importaciones procedentes de Asia por proveeduría nacional."*

---

### [EH-17] - ESCENA HTML 17: Doble Incentivo en México: 65% Contenido + 15% Margen en Precio
* **Posición en Timeline:** `04:52 - 05:06` (Duración: 14 segundos | Frames: 17.520 a 18.360).
* **Timecode DaVinci (60 fps):** `00:04:52:00 - 00:05:06:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con doble tarjeta de incentivos combinados (+).
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'cash-register' digital muy sutil), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Ecuación visual animada: *"65% Contenido Local Obligatorio"* `+` *"15% Margen de Preferencia en Precio para Oferentes Mexicanos"* `=` *"Blindaje Competitivo Total frente al Exterior"*.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"México combina además este umbral del sesenta y cinco por ciento con un margen de preferencia en precio de hasta el quince por ciento. Esto significa que una empresa local puede ganar la licitación incluso si su oferta resulta un quince por ciento más cara que la extranjera."*

---

### [EH-18] - ESCENA HTML 18: Directiva UE 2014/25: Excepción del Artículo 85
* **Posición en Timeline:**  (Duración: 13 segundos | Frames: 18.360 a 19.140).
* **Timecode DaVinci (60 fps):** .
* **Tipo de Elemento:** B-roll dinámico HTML con cláusula legal de excepción del 50%.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'legal gavel' sutil), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Escudo institucional de la UE y distintivo del Artículo 85 de la Directiva 2014/25/UE: *"Posibilidad de rechazar ofertas en sectores especiales (agua, energía, transportes) cuando más del 50% de los bienes procedan de países sin reciprocidad con la UE"*.
* **Animación en HTML:** La tarjeta legal entra con fundido limpio desde fondo blanco puro, el porcentaje del 50% resalta con tono terracota dinámico.
* **Música y Audio:** La locución de Manuel desgrana la protección estratégica europea en servicios esenciales.
* **Transición de Salida:** Espera de 1 segundo en fondo blanco puro antes de enlazar con la escena 19.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"En la Unión Europea, aunque no existe un 'Buy European' formal, la Directiva 2014/25 permite en su artículo 85 rechazar ofertas en sectores de agua, energía y transporte cuando más del cincuenta por ciento de los productos provengan de países sin acuerdos de reciprocidad comercial con el mercado comunitario."*

### [EH-19] - ESCENA HTML 19: Preferencias de Precio Local: Ontario BOBI y Compre Argentino
* **Posición en Timeline:**  (Duración: 15 segundos | Frames: 19.140 a 20.040).
* **Timecode DaVinci (60 fps):** .
* **Tipo de Elemento:** B-roll dinámico HTML con barras comparativas de márgenes de precio local.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX de balanceo y clic), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Comparativa de bonificaciones de precio en licitaciones: Ontario BOBI Act en Canadá (+10%), Ley Compre Argentino 27.437 (8% general y 15% para PYMEs), y reserva federal estadounidense de 10.000$ a 250.000$.
* **Animación en HTML:** Gráfica de barras de preferencias de precio creciendo suavemente en pantalla sobre fondo blanco puro.
* **Música y Audio:** Cierre del primer bloque de medidas proteccionistas directas.
* **Transición de Salida:** Mantenimiento de fondo blanco limpio de 1 segundo para enlazar con la presentación de Jorge Cañete.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Otros países aplican ventajas directas en precio: Canadá bonifica con un diez por ciento a proveedores locales en Ontario bajo la ley BOBI; Argentina concede entre un ocho y un quince por ciento de margen bajo la Ley Compre Argentino; y Estados Unidos reserva en exclusiva a pequeñas empresas los contratos federales de hasta doscientos cincuenta mil dólares."*

### [EH-20] - ESCENA HTML 20: Subsidios Estatales en China: $231.000 Millones en Automoción
* **Posición en Timeline:** `05:59 - 06:13` (Duración: 14 segundos | Frames: 21.540 a 22.380).
* **Timecode DaVinci (60 fps):** `00:05:59:00 - 00:06:13:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con animación numérica y desglose de ayudas públicas.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX 'click-pop' numérico en $231 Mil M), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Contador que escala a `$231 Mil Millones` (*"Subsidios del Estado Chino a la Cadena de Vehículos Eléctricos entre 2009 y 2023 - Fuente: CSIS / OCDE 2026"*).
* **Transiciones:** Corte directo desde `TC-04`. Cross Dissolve (14 frames) hacia `EH-21`.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"El paradigma de la distorsión global radica en China. Investigaciones cuantitativas recogidas por la OCDE constatan que entre 2009 y 2023, Pekín canalizó más de doscientos treinta y un mil millones de dólares en ayudas públicas directas a su sector de automoción eléctrica."*

---

### [EH-21] - ESCENA HTML 21: El Gigante Ferroviario CRRC: Más de $1.000 Millones Anuales en Ayudas
* **Posición en Timeline:** `06:13 - 06:27` (Duración: 14 segundos | Frames: 22.380 a 23.220).
* **Timecode DaVinci (60 fps):** `00:06:13:00 - 00:06:27:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con gráfico de tren de alta velocidad y flujo financiero.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX de silbato/tren digital sutil), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Silueta de tren de alta velocidad con indicador superior: `>$1.000 Millones / año` en transferencias presupuestarias del Estado a CRRC (China Railway Rolling Stock Corporation).
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"En el sector del transporte masivo, la corporación estatal de ferrocarriles CRRC absorbe anualmente más de mil millones de dólares en subsidios gubernamentales, permitiéndole licitar en el extranjero con márgenes inasumibles para la industria privada occidental."*

---

### [EH-22] - ESCENA HTML 22: Distorsión de Precios: El Caso CRRC en Rumanía (2019)
* **Posición en Timeline:**  (Duración: 14 segundos | Frames: 23.220 a 24.060).
* **Timecode DaVinci (60 fps):** .
* **Tipo de Elemento:** B-roll dinámico HTML con desglose del concurso ferroviario de Rumanía.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX metálico de alerta), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Gráfico del contrato de 957 millones de euros para 80 trenes regionales en Rumanía: precio ponderaba el 80% en los pliegos; la oferta de CRRC resultó un -25% más baja que Alstom y Siemens debido al respaldo estatal masivo de Pekín.
* **Animación en HTML:** Comparativa de barras con descenso del 25% en la oferta subvencionada frente a los fabricantes europeos.
* **Música y Audio:** Tono analítico y riguroso de Jorge Cañete.
* **Transición de Salida:** Pausa limpia de 1 segundo en blanco antes del siguiente bloque.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"Un caso emblemático documentado por la OCDE ocurrió en Rumanía en 2019: en una licitación de novecientos cincuenta y siete millones de euros para ochenta trenes donde el precio pesaba un ochenta por ciento, CRRC presentó una oferta un veinticinco por ciento más barata que Siemens o Alstom gracias al respaldo estatal de Pekín, distorsionando por completo la competencia."*

### [EH-23] - ESCENA HTML 23: El Mito Ecológico: Por Qué Comprar Local No Equivale a Ser Verde
* **Posición en Timeline:** `06:41 - 06:55` (Duración: 14 segundos | Frames: 24.060 a 24.900).
* **Timecode DaVinci (60 fps):** `00:06:41:00 - 00:06:55:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con diagrama de ciclo de vida del producto (LCA).
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX 'leaf-rustle' sintético), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Tarjeta analítica que desglosa el impacto ambiental: la fase de transporte transoceánico representa menos del 5% al 10% de la huella total, mientras que los métodos de generación de energía y eficiencia de producción dominan el 90% restante.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"Pero las barreras no siempre son abiertas; a menudo se camuflan bajo exigencias medioambientales. El informe de la OCDE desmitifica formalmente la creencia de que 'comprar en proximidad' garantice una menor huella ecológica: el transporte marítimo representa solo una fracción mínima del CO2 total."*

---

### [EH-24] - ESCENA HTML 24: La Paradoja de Emisiones: Invernadero Local Calefactado vs Importación Eficiente
* **Posición en Timeline:** `06:55 - 07:10` (Duración: 15 segundos | Frames: 24.900 a 25.800).
* **Timecode DaVinci (60 fps):** `00:06:55:00 - 00:07:10:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con comparativa gráfica de huella de carbono (4x).
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX de chimenea industrial y barco), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Comparativa de emisiones en ciclo de vida: Gráfico de barras que demuestra que producir tomates en un invernadero local del norte de Europa calentado con gas genera cuatro veces más CO2 por kilo que transportarlos en buque mercante desde regiones de cultivo solar óptimo.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"El análisis del ciclo de vida prueba que cultivar flores o vegetales en invernaderos locales del norte de Europa calentados con gas emite cuatro veces más carbono que importarlos por mar desde países con radiación solar natural. Forzar el aprovisionamiento local bajo retórica ecológica puede resultar contraproducente para el clima."*

---

### [EH-25] - ESCENA HTML 25: Fármacos Esenciales Críticos: 299 Medicamentos bajo Alerta Máxima de la EMA
* **Posición en Timeline:** `07:10 - 07:24` (Duración: 14 segundos | Frames: 25.800 a 26.640).
* **Timecode DaVinci (60 fps):** `00:07:10:00 - 00:07:24:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con contador numérico y frasco de medicina bajo alarma.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX de monitor médico y pitido suave), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Contador que alcanza la cifra `299` con rótulo oficial: *"Medicamentos Esenciales en Riesgo Crítico de Desabastecimiento (Agencia Europea de Medicamentos - EMA / Critical Medicines Act 2025)"*.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"En el ámbito sanitario, la vulnerabilidad es crítica y real. La Agencia Europea de Medicamentos mantiene doscientos noventa y nueve principios activos esenciales bajo alerta roja por una concentración extrema de proveedores fuera del territorio comunitario."*

---

### [EH-26] - ESCENA HTML 26: Dependencia en Antibióticos: Amoxicilina y Principios Activos al 80% en Asia
* **Posición en Timeline:** `07:24 - 07:38` (Duración: 14 segundos | Frames: 26.640 a 27.480).
* **Timecode DaVinci (60 fps):** `00:07:24:00 - 00:07:38:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con mapa de dependencia farmacéutica Asia-Europa.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX 'warning-pulse'), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Contador animado al 80% centrado sobre China e India: *"80% de los Principios Activos Farmacéuticos (APIs) de Antibióticos Críticos como la Amoxicilina proceden exclusivamente de fábricas asiáticas"*.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"En antibióticos básicos como la amoxicilina, más del ochenta por ciento de la materia prima mundial se fabrica en solo dos países: China e India. Cualquier interrupción en las rutas marítimas amenazaría el colapso operativo inmediato de los hospitales europeos."*

---

### [EH-27] - ESCENA HTML 27: Net-Zero Industry Act: Umbral Comunitario del 50%
* **Posición en Timeline:** `07:38 - 07:52` (Duración: 14 segundos | Frames: 27.480 a 28.320).
* **Timecode DaVinci (60 fps):** `00:07:38:00 - 00:07:52:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con escudo de la Unión Europea y cláusula de salvaguardia.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX de candado de seguridad cerrando), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Emblema de la UE con texto del Reglamento (UE) 2024/1735 (Net-Zero Industry Act): Barra medidora al 50% que activa automáticamente salvaguardias obligatorias de diversificación y resiliencia en licitaciones de energías renovables.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"Para contrarrestar esta fragilidad, la Unión Europea aprobó el Reglamento 'Net-Zero Industry Act'. Cuando un país tercero suministra más del cincuenta por ciento de una tecnología verde crítica, los contratos públicos imponen criterios obligatorios de resiliencia y diversificación que penalizan a ese suministrador."*

---

### [EH-28] - ESCENA HTML 28: Compra Pública de Innovación: 94% de Uso en la OCDE e Internacionalización
* **Posición en Timeline:** `07:52 - 08:06` (Duración: 14 segundos | Frames: 28.320 a 29.160).
* **Timecode DaVinci (60 fps):** `00:07:52:00 - 00:08:06:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con doble indicador de efectividad económica.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX 'success-bell' doble), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Doble tarjeta métrica animada: Indicador A (*"94% de Países de la OCDE aplican activamente Compra Pública de Innovación"*); Indicador B (*"95% de las Empresas Adjudicatarias acceden exitosamente a mercados de exportación internacional"*).
* **Transiciones:** Cross Dissolve de entrada y corte directo hacia `TC-05` en `08:06`.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"Existe, no obstante, una palanca virtuosa documentada por la OCDE: la Compra Pública de Innovación. Utilizada ya por el noventa y cuatro por ciento de los Estados avanzados, el noventa y cinco por ciento de las empresas que logran contratos innovadores consiguen exportar sus productos a escala global."*

---

### [TC-05] - TOMA CÁMARA JORGE 2: Cadenas Globales de Valor y la Evidencia Empírica: El Coste del Reshoring
* **Posición en Timeline:** `08:06 - 08:31` (Duración: 25 segundos | Frames: 29.160 a 30.660).
* **Timecode DaVinci (60 fps):** `00:08:06:00 - 00:08:31:00`.
* **Tipo de Plano:** Plano medio (busto) de Jorge Cañete Morató, tono riguroso y didáctico.
* **Pistas DaVinci Activas:**
  * **V1:** Toma a cámara de Jorge.
  * **V4:** Lower Third animado en `08:08` (*"Jorge Cañete Morató • Modelización Empírica y Cadenas Globales de Valor"*).
  * **A1:** Micrófono de solapa (A1 activo a -6 dBFS).
  * **A4:** BGM ducked a -24 dBFS.
* **Transiciones:** Corte directo desde `EH-28`. Corte directo hacia `EH-29` en `08:31`.

#### Guión Textual Íntegro (Jorge Cañete Morató):
> *"Llegamos al corazón analítico del informe de la OCDE: ¿es económicamente viable repatriar la producción industrial para abastecer las compras del Estado? La teoría económica del comercio internacional y la modelización empírica demuestran de forma tajante que no.*  
> 
> *La producción manufacturera moderna ya no se estructura en factorías aisladas, sino en Cadenas Globales de Valor fragmentadas en docenas de países. Analicemos los datos."*

---

### [EH-29] - ESCENA HTML 29: Cadenas Globales de Valor: La Naturaleza Modular de la Producción Moderna
* **Posición en Timeline:** `08:31 - 08:45` (Duración: 14 segundos | Frames: 30.660 a 31.500).
* **Timecode DaVinci (60 fps):** `00:08:31:00 - 00:08:45:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con mapa de nodos interconectados por Cadenas Globales.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX de conexión en red global), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Red neuronal de comercio mundial que conecta centros de diseño, extracción de minerales raros, ensamblaje y logística de distribución internacional.
* **Transiciones:** Corte directo desde `TC-05`. Cross Dissolve (14 frames) hacia `EH-30`.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"El comercio contemporáneo responde al modelo de fragmentación productiva internacional. Un producto industrial avanzado no 'se fabrica' en un solo país: se diseña en una región, utiliza software de otra y ensambla componentes de múltiples continentes."*

---

### [EH-30] - ESCENA HTML 30: Composición del Comercio Global: 70% Insumos Intermedios vs 30% Bienes Finales
* **Posición en Timeline:** `08:45 - 08:59` (Duración: 14 segundos | Frames: 31.500 a 32.340).
* **Timecode DaVinci (60 fps):** `00:08:45:00 - 00:08:59:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con gráfico de distribución de flujos comerciales.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX 'pie-slice' y datos), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Gran proporción gráfica: Barra dominante del 70% en color azul petróleo (*"Bienes Intermedios: Insumos, Piezas y Maquinaria"*); Barra secundaria del 30% en oro cobrizo (*"Bienes Finales de Consumo Directo"*).
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"Los datos de la OCDE son contundentes: el setenta por ciento del comercio transfronterizo mundial no son bienes terminados, sino bienes intermedios, piezas y componentes que cruzan las fronteras una y otra vez antes de conformar el producto final."*

---

### [EH-31] - ESCENA HTML 31: La Falacia del Producto Doméstico: Inexistencia de Bienes 100% Nacionales
* **Posición en Timeline:** `08:59 - 09:13` (Duración: 14 segundos | Frames: 32.340 a 33.180).
* **Timecode DaVinci (60 fps):** `00:08:59:00 - 00:09:13:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con desglose esquemático de un microchip o turbina.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX de desmontaje técnico), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Icono de componente tecnológico con etiqueta de advertencia técnica: *"No existe ningún equipo de alta tecnología cien por cien doméstico. Exigir fabricación local pura bloquea el acceso a insumos especializados y dispara los costes de los propios fabricantes nacionales."*
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"Esto desmonta la falacia del producto doméstico. No existe ningún escáner médico, tren o turbina eólica puramente nacional. Cuando un pliego exige un contenido local excesivo, lo único que logra es asfixiar a los propios fabricantes internos, privándoles de insumos críticos."*

---

### [EH-32] - ESCENA HTML 32: Coste del Reshoring Forzado: Caída del -18% en el Comercio Mundial
* **Posición en Timeline:** `09:13 - 09:28` (Duración: 15 segundos | Frames: 33.180 a 34.080).
* **Timecode DaVinci (60 fps):** `00:09:13:00 - 00:09:28:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con simulación cuantitativa del modelo METRO de la OCDE.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX de desplome financiero / caída de línea), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Indicador rojo en contracción acelerada: `"-18% Colapso del Comercio Internacional"`. Subtítulo: *"Simulación Empírica de Equilibrio General Computable (CGE) - Arriola, Kowalski y van Tongeren (OCDE, 2020 / 2026)"*.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"¿Cuál es el coste de forzar el reshoring mediante compras públicas? La simulación de equilibrio general de Arriola y colaboradores para la OCDE concluye que una relocalización generalizada provocaría una contracción catastrófica del dieciocho por ciento en el comercio mundial."*

---

### [EH-33] - ESCENA HTML 33: Destrucción del PIB Global: Contracción Permanente del -5%
* **Posición en Timeline:** `09:28 - 09:42` (Duración: 14 segundos | Frames: 34.080 a 34.920).
* **Timecode DaVinci (60 fps):** `00:09:28:00 - 00:09:42:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con medidor de contracción de renta per cápita.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX 'negative-impact'), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Cifra animada en rojo carmesí: `"-5,0% Destrucción Permanente del Producto Interior Bruto Global"`. Gráfico de pérdida irrecuperable de bienestar del consumidor y destrucción de eficiencia asignativa.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"El impacto sobre la riqueza global sería devastador: una pérdida irreversible del cinco por ciento del Producto Interior Bruto mundial. La ruptura de la especialización internacional y las economías de escala empobrecería masivamente a consumidores y contribuyentes."*

---

### [EH-34] - ESCENA HTML 34: Pérdida Asimétrica de PIB: El Severo Coste en Economías Abiertas
* **Posición en Timeline:** `09:42 - 09:56` (Duración: 14 segundos | Frames: 34.920 a 35.760).
* **Timecode DaVinci (60 fps):** `00:09:42:00 - 00:09:56:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con gráfico de barras horizontal comparando países.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX de tres descensos secuenciales), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Tres barras de pérdida de PIB: Canadá en primer lugar con `-13,1%`, Reino Unido en segundo lugar con `-12,2%`, y Media de la OCDE en `-5,0%`.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"Este coste se distribuye de forma trágicamente asimétrica: las economías abiertas y medianas pagan el precio más alto. Canadá perdería un trece coma uno por ciento de su PIB, y el Reino Unido un doce coma dos por ciento, multiplicando por más de dos la media mundial."*

---

### [EH-35] - ESCENA HTML 35: La Falacia de la Resiliencia: La Autarquía Amplifica la Vulnerabilidad
* **Posición en Timeline:** `09:56 - 10:11` (Duración: 15 segundos | Frames: 35.760 a 36.660).
* **Timecode DaVinci (60 fps):** `00:09:56:00 - 00:10:11:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con balanza de estabilidad económica y conclusión empírica.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX de fractura de engranaje), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Conclusión del modelo empírico: *"La Autarquía es Más Vulnerable: Al cercenar las redes exteriores, un shock climático, energético o productivo local deja a la administración pública sin capacidad de aprovisionamiento alternativo."*
* **Transiciones:** Cross Dissolve de entrada y Dip to Black (24 frames) hacia `TC-06` en `10:11`.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"Y la paradoja final demostrada por la OCDE es que la autarquía no aumenta la resiliencia: la destruye. Al desconectarse del comercio mundial, cuando ocurre un desastre o paro industrial interno, el Estado queda desprovisto de alternativas de aprovisionamiento. Ahora Aleksandr Globa analizará la trampa burocrática y el marco institucional."*

### [TC-06] - TOMA CÁMARA ALEKSANDR 1: Transición al Bloque 3: Friend-Shoring, Trampa Burocrática y Asimetría Multilateral
* **Posición en Timeline:** `10:11 - 10:36` (Duración: 25 segundos | Frames: 36.660 a 38.160).
* **Timecode DaVinci (60 fps):** `00:10:11:00 - 00:10:36:00`.
* **Tipo de Plano:** Plano medio (busto) de Aleksandr Globa, mirada fija a objetivo con aplomo analítico y autoridad institucional, iluminación de tres puntos sobre fondo neutro.
* **Pistas DaVinci Activas:**
  * **V1:** Toma a cámara de Aleksandr.
  * **V4:** Lower Third animado en `10:13` (*"Aleksandr Globa • Gobernanza Institucional y Derecho Internacional del Comercio"*).
  * **A1:** Micrófono de solapa (A1 activo a -6 dBFS).
  * **A4:** BGM ducked a -24 dBFS.
* **Transiciones:** Fade In desde negro (12 frames) tras Dip to Black. Corte directo hacia `EH-36` en `10:36`.

#### Guión Textual Íntegro (Aleksandr Globa):
> *"Muchas gracias, Jorge. Frente a la evidencia de los costes del proteccionismo cerrado, las cancillerías occidentales proponen como alternativa el 'friend-shoring': restringir las compras públicas exclusivamente a países aliados.*  
> 
> *Sin embargo, la literatura económica y los datos del FMI y la OCDE advierten de que la fragmentación del planeta en bloques geopolíticos no elimina los sobrecostes. Y lo que es más grave: genera una trampa burocrática institucional de la que muy pocos Estados consiguen salir airosos."*

---

### [EH-36] - ESCENA HTML 36: El Coste del Friend-Shoring: Fragmentación en Bloques Geopolíticos
* **Posición en Timeline:** `10:36 - 10:50` (Duración: 14 segundos | Frames: 38.160 a 39.000).
* **Timecode DaVinci (60 fps):** `00:10:36:00 - 00:10:50:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con mapa mundial fracturado en dos bloques comerciales.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX de fractura geoeconómica / sismo sintético), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Planisferio dividido en dos esferas geoeconómicas con etiqueta métrica del FMI / Javorcik et al.: *"-4,6% a -5,0% Pérdida Adicional de PIB Mundial debida a la fragmentación del comercio en bloques geopolíticos cerrados"*.
* **Transiciones:** Corte directo desde `TC-06`. Cross Dissolve (14 frames) hacia `EH-37`.

#### Guión de Locución en Off (Aleksandr Globa):
> *"El friend-shoring divide el comercio mundial en trincheras ideológicas. Estudios de Javorcik y economistas del Fondo Monetario Internacional estiman que fragmentar la contratación en bloques cerrados reduce el PIB global en hasta un cinco por ciento adicional por pura ineficiencia productiva."*

---

### [EH-37] - ESCENA HTML 37: Teoría del Comercio Internacional: Sobrecoste del Proteccionismo
* **Posición en Timeline:**  (Duración: 15 segundos | Frames: 39.000 a 39.900).
* **Timecode DaVinci (60 fps):** .
* **Tipo de Elemento:** B-roll dinámico HTML con los fundamentos teóricos del comercio y sobrecoste fiscal.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX 'chart tick'), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Pilares teóricos de David Ricardo (Ventaja Comparativa), Teorema Heckscher-Ohlin y Modelo Gravitacional, enfrentados a la estimación empírica de Deltas y Evenett: sobrecoste del +15% al +30% por marginar la competencia foránea.
* **Animación en HTML:** Diagrama conceptual animado con tipografía Archivo y cifras numéricas en JetBrains Mono.
* **Música y Audio:** Aleksandr Globa argumenta con la literatura económica fundamental de la asignatura.
* **Transición de Salida:** Pausa de 1 segundo en fondo blanco puro antes de la escena 38.

#### Guión de Locución en Off (Aleksandr Globa):
> *"La teoría del comercio internacional —desde David Ricardo y Heckscher-Ohlin hasta los modelos gravitacionales— demuestra que restringir el acceso a compras públicas destruye bienestar. Autores como Evenett cifran entre un quince y un treinta por ciento el sobrecoste fiscal que asume el contribuyente al forzar la contratación de oferentes locales menos eficientes."*

### [EH-38] - ESCENA HTML 38: Primer Caso IPI: Reglamento de Ejecución UE 2025/1197
* **Posición en Timeline:**  (Duración: 14 segundos | Frames: 39.900 a 40.740).
* **Timecode DaVinci (60 fps):** .
* **Tipo de Elemento:** B-roll dinámico HTML con el sello del Reglamento sancionador IPI en dispositivos médicos.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX 'stamp' institucional), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Documento oficial de la Comisión Europea: Reglamento de Ejecución (UE) 2025/1197 (junio de 2025). Exclusión de operadores chinos en contratos hospitalarios superiores a 5 millones de euros tras constatar discriminación en el 87% de licitaciones sanitarias chinas.
* **Animación en HTML:** Aparición del sello de veto del IPI con tipografía Archivo y porcentajes en JetBrains Mono sobre fondo blanco limpio.
* **Música y Audio:** Aleksandr destaca la primera aplicación sancionadora en la historia del comercio de la UE.
* **Transición de Salida:** Transición limpia con 1 segundo de fondo blanco puro.

#### Guión de Locución en Off (Aleksandr Globa):
> *"La Unión Europea activó por primera vez su Instrumento de Contratación Internacional mediante el Reglamento de Ejecución 2025/1197. Tras constatar que el ochenta y siete por ciento de las licitaciones en China discriminaban a fabricantes europeos de dispositivos médicos, Bruselas vetó a las empresas chinas en contratos hospitalarios superiores a cinco millones de euros."*

### [EH-39] - ESCENA HTML 39: El Límite del GPA de la OMC: 22 Partes y 49 Miembros
* **Posición en Timeline:**  (Duración: 14 segundos | Frames: 40.740 a 41.580).
* **Timecode DaVinci (60 fps):** .
* **Tipo de Elemento:** B-roll dinámico HTML con gráfica de cobertura multilateral en la OMC.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX 'radar ping'), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Diagrama circular de miembros de la OMC: 22 partes cubren formalmente a 49 miembros (la UE y sus 27 Estados como una sola parte), frente a tres cuartas partes de la OMC que no son signatarios, abriendo un mercado de 1,7 billones de USD anuales.
* **Animación en HTML:** Gráfico de anillo interactivo con proporción de miembros firmantes vs países fuera del GPA.
* **Música y Audio:** Aleksandr expone los límites del multilateralismo en compras públicas.
* **Transición de Salida:** 1 segundo de retención sobre fondo blanco antes de la escena 40.

#### Guión de Locución en Off (Aleksandr Globa):
> *"El Acuerdo sobre Contratación Pública de la OMC es un pacto plurilateral que solo cuenta con veintidós partes contratantes, representando a cuarenta y nueve miembros de la OMC. Aunque abre un mercado anual de uno coma siete billones de dólares, casi tres cuartas partes de los países de la OMC permanecen voluntariamente fuera de sus compromisos."*

### [EH-40] - ESCENA HTML 40: Los Grandes Emergentes: Por Qué China, India y Brasil No Firman el GPA
* **Posición en Timeline:** `11:33 - 11:47` (Duración: 14 segundos | Frames: 41.580 a 42.420).
* **Timecode DaVinci (60 fps):** `00:11:33:00 - 00:11:47:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con mapa de grandes emergentes del Sur Global.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX de escudo institucional / bloqueo), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Mapa del Sur Global con focos luminosos sobre China, India, Brasil, Indonesia y Sudáfrica. Etiqueta destacada: *"Ausencias Estratégicas: Los gigantes emergentes se niegan a firmar el GPA para preservar la contratación como instrumento soberano de desarrollo industrial"*.
* **Transiciones:** Cross Dissolve de entrada y corte directo hacia `TC-07` en `11:47`.

#### Guión de Locución en Off (Aleksandr Globa):
> *"Los grandes motores del Sur Global —como China, India o Brasil— se niegan a ratificar el GPA precisamente para conservar sus licitaciones estatales como una palanca soberana protegida para impulsar a sus empresas locales."*

---

### [TC-07] - TOMA CÁMARA ALEKSANDR 2: La Respuesta Geopolítica Europea: Del Instrumento IPI a la Jurisprudencia Kolin
* **Posición en Timeline:** `11:47 - 12:09` (Duración: 22 segundos | Frames: 42.420 a 43.740).
* **Timecode DaVinci (60 fps):** `00:11:47:00 - 00:12:09:00`.
* **Tipo de Plano:** Plano medio corto (busto) de Aleksandr Globa, tono riguroso y resolutivo ante cámara.
* **Pistas DaVinci Activas:**
  * **V1:** Toma a cámara de Aleksandr.
  * **V4:** Lower Third animado en `11:49` (*"Aleksandr Globa • Jurisprudencia del TJUE y Reciprocidad Comercial"*).
  * **A1:** Micrófono de solapa (A1 activo a -6 dBFS).
  * **A4:** BGM ducked a -24 dBFS.
* **Transiciones:** Corte directo desde `EH-40`. Corte directo hacia `EH-41` en `12:09`.

#### Guión Textual Íntegro (Aleksandr Globa):
> *"Ante esta asimetría flagrante —donde las empresas de países terceros licitaban libremente en Europa mientras sus propios mercados permanecían cerrados a nuestras empresas—, la Unión Europea ha roto su tradicional pasividad.*  
> 
> *A través del nuevo Instrumento de Contratación Internacional y de una sentencia histórica del Tribunal de Justicia de la Unión Europea, Bruselas ha inaugurado una nueva era de reciprocidad coercitiva."*

---

### [EH-41] - ESCENA HTML 41: El Instrumento IPI Europeo: Reglamento (UE) 2022/1031 de Reciprocidad
* **Posición en Timeline:** `12:09 - 12:23` (Duración: 14 segundos | Frames: 43.740 a 44.580).
* **Timecode DaVinci (60 fps):** `00:12:09:00 - 00:12:23:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con estandarte legal del IPI de la Unión Europea.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX de martillo judicial digital), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Documento oficial animado: *"Reglamento (UE) 2022/1031 del Parlamento Europeo y del Consejo (International Procurement Instrument - IPI)"*. Píldora: *"Mecanismo vinculante de reciprocidad para desbloquear licitaciones en terceros países"*.
* **Transiciones:** Corte directo desde `TC-07`. Cross Dissolve (14 frames) hacia `EH-42`.

#### Guión de Locución en Off (Aleksandr Globa):
> *"En 2022 entró en vigor el Instrumento de Contratación Internacional de la Unión Europea. Un mecanismo coercitivo diseñado para sancionar y excluir a licitadores extranjeros cuyos países mantengan barreras discriminatorias contra empresas europeas."*

---

### [EH-42] - ESCENA HTML 42: Sanciones del Instrumento IPI: Penalización del 50% o Exclusión Automática
* **Posición en Timeline:** `12:23 - 12:37` (Duración: 14 segundos | Frames: 44.580 a 45.420).
* **Timecode DaVinci (60 fps):** `00:12:23:00 - 00:12:37:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con doble tarjeta de penalizaciones sancionadoras.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX 'penalty-whistle' y sello rojo), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Dos opciones de penalización comunitaria: Opción 1 en rojo: *"-50% de Penalización en Puntuación Técnica/Económica"* O Opción 2: *"Exclusión Automática de Licitaciones Superiores a 15 Millones de Euros"*.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Aleksandr Globa):
> *"Las sanciones del IPI son severas: la Comisión Europea puede imponer un ajuste a la baja de hasta el cincuenta por ciento en la puntuación de la oferta extranjera, o directamente vetar su participación en concursos de obras de más de quince millones de euros."*

---

### [EH-43] - ESCENA HTML 43: Sentencia Kolin del TJUE: Asunto C-652/22 y la Pérdida de Tutela Judicial
* **Posición en Timeline:** `12:37 - 12:52` (Duración: 15 segundos | Frames: 45.420 a 46.320).
* **Timecode DaVinci (60 fps):** `00:12:37:00 - 00:12:52:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con balanza de la justicia europea y número de sentencia.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX 'gavel-strike' solemne), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Frontispicio del Tribunal de Justicia de la Unión Europea con rotulación en letras doradas: *"Sentencia de la Gran Sala del TJUE de febrero de 2024: Asunto C-652/22 (Kolin Inşaat Turizm v. Državna komisija)"*. Fallo vinculante: *"Los operadores económicos de terceros países sin acuerdo internacional de compras con la UE no disfrutan de Trato Nacional ni legitimación procesal activa ante los tribunales europeos"*.
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Aleksandr Globa):
> *"Este blindaje se ha consolidado definitivamente con la histórica Sentencia Kolin del Tribunal de Justicia de la Unión Europea, en febrero de 2024: el Tribunal dictaminó que las empresas de países que no han firmado el GPA carecen por completo de derecho de recurso para impugnar su exclusión de una licitación comunitaria."*

---

### [EH-44] - ESCENA HTML 44: El Nuevo Mapa Legal de Licitación: Socios GPA vs Terceros Desprotegidos
* **Posición en Timeline:** `12:52 - 13:06` (Duración: 14 segundos | Frames: 46.320 a 47.160).
* **Timecode DaVinci (60 fps):** `00:12:52:00 - 00:13:06:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con mapa jurídico comparativo de estatus legal.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX de bifurcación de datos), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Dos regímenes jurídicos diferenciados: Grupo Verde (*"Países Cubiertos por el GPA o Tratados Bilaterales: Principio de Trato Nacional, acceso no discriminatorio y tutela judicial efectiva garantizada"*); Grupo Ámbar/Rojo (*"Terceros Países sin Acuerdo: Acceso discrecional, exclusión sin derecho a indemnización ni recurso judicial"*).
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Aleksandr Globa):
> *"Nace así un mapa legal binario: los socios amparados por el GPA gozan de plenas garantías jurídicas y trato nacional; mientras que los proveedores del resto del mundo quedan jurídicamente indefensos a merced de la discrecionalidad política de los gobiernos europeos."*

---

### [EH-45] - ESCENA HTML 45: El Déficit de Evaluación: Solo el 23% Mide el Impacto Económico Ex-Post
* **Posición en Timeline:** `13:06 - 13:20` (Duración: 14 segundos | Frames: 47.160 a 48.000).
* **Timecode DaVinci (60 fps):** `00:13:06:00 - 00:13:20:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con dos medidores circulares de auditoría del gasto.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX 'warning-meter' sutil), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Doble métrica de control público en la OCDE: Indicador 1 animado al `23%` (*"Países de la OCDE que Evalúan el Impacto Económico Real Ex-Post de sus Compras Públicas"*); Indicador 2 animado a solo el `10%` (*"Países que Evalúan el Impacto Ambiental o Social Real"*).
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Aleksandr Globa):
> *"A pesar de este activismo regulatorio, la OCDE alerta de un gravísimo déficit de gobernanza: solo el veintitrés por ciento de los países miembros evalúa el impacto económico real de sus compras públicas una vez adjudicadas, y apenas el diez por ciento mide los resultados ambientales o sociales."*

---

### [EH-46] - ESCENA HTML 46: Auditoría del Gasto en la OCDE: Ausencia de Metodologías de Sobrecoste
* **Posición en Timeline:** `13:20 - 13:34` (Duración: 14 segundos | Frames: 48.000 a 48.840).
* **Timecode DaVinci (60 fps):** `00:13:20:00 - 00:13:34:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con balance contable y señal de alerta fiscal.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX de cálculo contable y timbre), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Tarjeta analítica de gobernanza basada en evidencia: *"Tres de cada cuatro administraciones públicas en la OCDE carecen de metodologías para cuantificar el sobrecoste derivado de exigir criterios de preferencia nacional o ambiental en sus licitaciones."*
* **Transiciones:** Cross Dissolve (14 frames) de entrada y salida.

#### Guión de Locución en Off (Aleksandr Globa):
> *"En la práctica, los Estados están implementando políticas industriales multimillonarias a ciegas, sin auditar qué prima de sobrecoste está soportando el contribuyente ni medir si los objetivos estratégicos se han alcanzado con éxito."*

---

### [EH-47] - ESCENA HTML 47: Digitalización e-Procurement: 98% de Adopción en la OCDE
* **Posición en Timeline:**  (Duración: 14 segundos | Frames: 48.840 a 49.680).
* **Timecode DaVinci (60 fps):** .
* **Tipo de Elemento:** B-roll dinámico HTML con contador numérico gigante al 98% (39 de 40 países).
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX 'digital success chime'), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Contador central que asciende hasta el **98%** con etiqueta de datos: *"39 de 40 países miembros de la OCDE publican toda la información de compras en plataformas electrónicas únicas centralizadas"*.
* **Animación en HTML:** Contador gigante animado con tipografía Archivo y barra de progreso al 98% sobre fondo blanco puro.
* **Música y Audio:** Aleksandr presenta la digitalización como la palanca democratizadora para pymes y proveedores extranjeros.
* **Transición de Salida:** Pausa limpia de 1 segundo sobre fondo blanco antes de la escena 48.

#### Guión de Locución en Off (Aleksandr Globa):
> *"La digitalización es hoy el mayor antídoto contra la fragmentación: la encuesta oficial de la OCDE confirma que treinta y nueve de cuarenta países miembros —un rotundo noventa y ocho por ciento— publican obligatoriamente toda su información de compras en plataformas electrónicas únicas, democratizando el acceso para pymes y empresas transfronterizas."*

### [EH-48] - ESCENA HTML 48: El Efecto Democratizador: Plataformas Digitales, Concurrencia y PYMEs (98%)
* **Posición en Timeline:** `13:48 - 14:02` (Duración: 14 segundos | Frames: 49.680 a 50.520).
* **Timecode DaVinci (60 fps):** `00:13:48:00 - 00:14:02:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con diagrama de ecosistema PYME y concurrencia abierta.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Manuel), A3 (SFX 'network-grow' expansivo), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Ecosistema digital pro-competitivo: Icono de PYMEs expandiéndose con la métrica: *"PYMEs: 98% del Tejido Empresarial en la OCDE"*. Subtítulo: *"La estandarización digital y los datos abiertos reducen drásticamente las barreras de entrada y previenen la colusión oligopólica"*.
* **Transiciones:** Cross Dissolve (14 frames) hacia `EH-49`.

#### Guión de Locución en Off (Manuel Romero Álvarez):
> *"Como destacamos en nuestra investigación, el e-procurement democratiza la contratación. Al suprimir barreras burocráticas, facilita el acceso a las pequeñas y medianas empresas —que componen el noventa y ocho por ciento de la economía— y rompe las redes clientelares tradicionales."*

---

### [EH-49] - ESCENA HTML 49: El Gran Dilema Global: La Encrucijada Estratégica Documentada por la OCDE
* **Posición en Timeline:** `14:02 - 14:16` (Duración: 14 segundos | Frames: 50.520 a 51.360).
* **Timecode DaVinci (60 fps):** `00:14:02:00 - 00:14:16:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con bifurcación de dos caminos estratégicos globales.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Jorge), A3 (SFX de bifurcación y decisión crítica), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Dos sendas divergentes: Senda A en rojo (*"Ruta Proteccionista: Autarquía, contracción del -18% en el comercio y fragilidad ante shocks"*); Senda B en verde esmeralda (*"Ruta Recomendada por la OCDE: Resiliencia abierta, diversificación inteligente de cadenas, reciprocidad y auditoría estricta de costes"*).
* **Transiciones:** Cross Dissolve (14 frames) hacia `EH-50`.

#### Guión de Locución en Off (Jorge Cañete Morató):
> *"Nos encontramos, por tanto, ante una encrucijada global: ceder a la tentación de la autarquía proteccionista —destruyendo el comercio y la eficiencia mundial—; o transitar hacia una resiliencia abierta basada en la diversificación de proveedores internacionales y la reciprocidad comercial."*

---

### [EH-50] - ESCENA HTML 50: Síntesis Final y Créditos Académicos: Grupo 14 • Universitat Politècnica de València
* **Posición en Timeline:** `14:16 - 14:30` (Duración: 14 segundos | Frames: 51.360 a 52.200).
* **Timecode DaVinci (60 fps):** `00:14:16:00 - 00:14:30:00`.
* **Tipo de Elemento:** B-roll dinámico HTML con créditos institucionales académicos del proyecto.
* **Pistas DaVinci Activas:** V3 (B-roll HTML), A2 (Voz en off de Aleksandr), A3 (SFX 'chord-resolve' armónico final), A4 (BGM a -24 dBFS).
* **Elementos Visuales:** Tarjeta institucional de honor: Logotipo de la Universitat Politècnica de València, Departamento de Economía y Ciencias Sociales, Grado en ADE e Informática. Nombres de los tres investigadores: Manuel Romero Álvarez, Jorge Cañete Morató y Aleksandr Globa.
* **Transiciones:** Cross Dissolve de entrada y corte directo hacia `TC-08` en `14:30`.

#### Guión de Locución en Off (Aleksandr Globa):
> *"Esta investigación sintetiza el esfuerzo analítico del Grupo 14 para la asignatura de Economía Mundial de la Universidad Politécnica de Valencia, combinando el rigor del modelo macroeconómico con la evidencia empírica más actualizada de la OCDE."*

---

### [TC-08] - TOMA CÁMARA GRUPAL 3: Balance Conclusivo, Recomendaciones de Política Económica y Cierre
* **Posición en Timeline:** `14:30 - 15:00` (Duración: 30 segundos | Frames: 52.200 a 54.000).
* **Timecode DaVinci (60 fps):** `00:14:30:00 - 00:15:00:00`.
* **Tipo de Plano:** Plano general medio conjunto (los tres integrantes encuadrados uniformemente, Manuel en el centro, Jorge a la derecha, Aleksandr a la izquierda, tono solemne, convincente y académico).
* **Pistas DaVinci Activas:**
  * **V1:** Toma a cámara conjunta de los tres alumnos.
  * **V4:** Lower Third final animado en `14:32` (*"Grupo 14 • Manuel Romero | Jorge Cañete | Aleksandr Globa • UPV 2026/2027"*).
  * **A1:** Pista de audio directo a -6 dBFS.
  * **A4:** BGM subiendo en Fairlight a -14 dBFS tras las últimas palabras de Aleksandr en `14:55` hasta el fade out final en `15:00`.
* **Transiciones:** Corte directo desde `EH-50`. Fade Out a negro (24 frames) entre `14:58` y `15:00:00`.

#### Guión Textual Íntegro (Word-for-Word):
> **Manuel Romero Álvarez (MR):**  
> *"En conclusión, la contratación pública no puede concebirse como un fin proteccionista en sí mismo. Su empleo como palanca de política industrial solo está justificado si corrige fallos de mercado reales y promueve la innovación sin aislar a la economía.* [Pausa 0.5s]  
> 
> **Jorge Cañete Morató (JC):**  
> *"La relocalización forzada es una quimera empírica que impoverece a las naciones. La verdadera seguridad estratégica no consiste en cerrarse al exterior, sino en diversificar activamente nuestras Cadenas Globales de Valor.* [Pausa 0.5s]  
> 
> **Aleksandr Globa (AG):**  
> *"Gobernanza basada en datos, reciprocidad multilateral y evaluación estricta ex-post: ese es el camino que marca la OCDE para conciliar el comercio internacional y la soberanía del siglo XXI.*  
> 
> *Muchas gracias por su atención y quedamos a su entera disposición para la defensa oral del proyecto."*

---

## 4. PROTOCOLO DE GRABACIÓN EN SET, IDENTIDAD VISUAL Y CHECKLIST DE EXPORTACIÓN DAVINCI

### 4.1. Protocolo de Set y Actuación ante Cámara para los 3 Alumnos
1. **Vestimenta y Presencia Institucional:**
   * Camisa o americana lisa en tonos sobrios (azul marino, gris carbón, blanco o negro). Evitar tramas milrayas o cuadros pequeños que puedan generar efecto moiré en el sensor digital de la cámara.
2. **Iluminación de Tres Puntos (Three-Point Lighting Setup):**
   * *Key Light (Luz Principal):* Softbox LED frontal a 45 grados de los oradores con temperatura fijada a 5600 K (luz día) y CRI > 95.
   * *Fill Light (Luz de Relleno):* Panel LED difuso a -2 EV en el lado opuesto para suavizar sombras faciales.
   * *Backlight / Hair Light:* Spot cenital trasero cenital para separar a los ponentes del fondo y generar profundidad escénica.
3. **Pauta Vocal y Comunicación No Verbal:**
   * Contacto visual directo y constante con el objetivo de la cámara (lente fija a la altura de los ojos).
   * Postura erguida, manos visibles sobre mesa o gesticulación contenida a la altura del pecho.
   * Pausas breves de 0.5 segundos marcadas en el guion para otorgar peso a las afirmaciones nucleares y sincronizar con los rótulos de V4.

### 4.2. Checklist de Exportación Máster en DaVinci Resolve Studio 19 (Deliver Page)
* **Pestaña Video:**
  * Format: `MP4` (o `QuickTime`).
  * Video Codec: `H.264` (perfil High) o `H.265 (HEVC)` 10-bit.
  * Resolution: `1920 × 1080 Full HD` (Timeline nativa 60.00 fps).
  * Quality / Bitrate: Restrict to `28.000 Kbps` (VBR 2 pases con 'Optimized Media' activo para evitar pérdidas por compresión en degradados y fuentes finas).
  * Encoding Profile: `High`.
  * Advanced Settings: Marcar *"Force debayer to highest quality"* y *"Force sizing to highest quality"*.
* **Pestaña Audio:**
  * Audio Codec: `AAC` (o Linear PCM si se selecciona QuickTime).
  * Data Rate: `320 Kbps`.
  * Sample Rate: `48.000 kHz` estéreo.
* **Pestaña Fairlight Master Compliance:**
  * Comprobar que el medidor integrado de Loudness marque exactamente `-14.0 LUFS` (tolerancia máxima de ±0.5 LUFS) con True Peak inferior a `-1.0 dBFS`.
* **Verificación de Duración de Timeline:**
  * Primer frame útil de audio/vídeo: `00:00:00:00`.
  * Último frame de fundido a negro: `00:15:00:00` exactos (Frame 54.000).

---

> **FIN DEL DOCUMENTO TÉCNICO DE PRODUCCIÓN AUDIOVISUAL**  
> *Grupo 14 • Grado en ADE + Grado en Ingeniería Informática • Universitat Politècnica de València*
