/* ==========================================================================
   ENGINE.JS - RETRO-MINIMALIST PRESENTATION & PLAYBACK ENGINE
   Grupo 14: Economía Mundial (UPV) | OECD 2026 Presentation Engine
   Diseñado para tema claro, limpio, sin barra de progreso ni subtítulos,
   con soporte total de autoplay, atajos H (grabar), F (fullscreen) y flechas.
   ========================================================================== */

class MotionGraphicsPlayer {
  constructor(scenes, options = {}) {
    this.scenes = scenes;
    this.currentIndex = 0;
    this.isPlaying = false;
    this.isRecordingClean = false;
    this.isTransitioning = false;
    this.sceneElapsedMs = 0;
    this.tickInterval = 50; // ms
    this.timer = null;
    this.cursorTimeout = null;

    // DOM Elements Cache
    this.stage = document.getElementById('player-stage');
    this.viewport = document.getElementById('player-viewport');
    this.curtain = document.getElementById('blackout-curtain');
    this.sceneContent = document.getElementById('scene-content-area');
    this.categoryEl = document.getElementById('scene-category-pill');
    this.titleEl = document.getElementById('scene-title');
    this.subtitleEl = document.getElementById('scene-subtitle');
    this.speakerAvatar = document.getElementById('speaker-avatar');
    this.speakerName = document.getElementById('speaker-name');
    this.speakerRole = document.getElementById('speaker-role');
    this.sceneCounter = document.getElementById('scene-counter-display');
    this.progressBar = document.getElementById('scene-progress-fill');
    this.kineticContainer = document.getElementById('kinetic-caption-track');
    this.playPauseBtn = document.getElementById('btn-play-pause');
    this.playPauseIcon = document.getElementById('play-pause-icon');
    this.autoplayDot = document.getElementById('autoplay-dot');
    this.autoplayText = document.getElementById('autoplay-status-text');
    this.timelineDotsContainer = document.getElementById('timeline-dots-container');

    // Scrubber & Step Navigation Cache (45-55 micro-escenas)
    this.scrubberNav = document.getElementById('hud-scrubber-nav');
    this.hudStepCurr = document.getElementById('hud-step-curr');
    this.hudStepTotal = document.getElementById('hud-step-total');
    this.scrubberRailWrapper = document.getElementById('hud-scrubber-rail-wrapper');
    this.scrubberRail = document.getElementById('hud-scrubber-rail');
    this.scrubberFill = document.getElementById('hud-scrubber-fill');
    this.scrubberThumb = document.getElementById('hud-scrubber-thumb');
    this.scrubberTooltip = document.getElementById('hud-scrubber-tooltip');
    this.isScrubbing = false;

    this.init();
  }

  init() {
    this.setupResponsiveScaling();
    this.setupPaletteSystem();
    this.setupScrubber();
    this.renderTimelineDots();
    this.bindKeyboardShortcuts();
    this.bindMouseInactivity();
    this.loadScene(0, false);
  }

  // --- DEFINICIÓN DE PALETAS CROMÁTICAS DE ALTA LEGIBILIDAD ---
  static get PALETTES() {
    return [
      {
        id: '0',
        name: 'Retro Vintage',
        subtitle: 'Petróleo & Terracota (Original)',
        gradient: 'linear-gradient(135deg, #274C56 0%, #3E8E7E 50%, #D96C2C 100%)'
      },
      {
        id: '1',
        name: 'Tropical Sorbet',
        subtitle: 'Pastel Retro / Turquesa & Frambuesa',
        gradient: 'linear-gradient(135deg, #225159 0%, #57C7D0 50%, #CC75A7 100%)'
      },
      {
        id: '2',
        name: 'Matcha & Sakura',
        subtitle: 'Spring Meadow / Matcha & Sakura',
        gradient: 'linear-gradient(135deg, #1E3F2E 0%, #B7D687 50%, #F6BCDC 100%)'
      },
      {
        id: '3',
        name: 'Autumn Plum',
        subtitle: 'Terracota a Ciruela Intenso',
        gradient: 'linear-gradient(135deg, #250033 0%, #C66624 50%, #E18338 100%)'
      },
      {
        id: '4',
        name: 'Caramelo & Ámbar',
        subtitle: 'Monocromático Tostado & Ocre',
        gradient: 'linear-gradient(135deg, #765317 0%, #D1A259 50%, #E3BD81 100%)'
      },
      {
        id: '5',
        name: 'Swiss Editorial',
        subtitle: 'Navy & Vermilion Suizo',
        gradient: 'linear-gradient(135deg, #1A365D 0%, #D64527 50%, #2A6F5B 100%)'
      }
    ];
  }

  // --- SISTEMA DINÁMICO DE PALETAS (0 A 5) ---
  setupPaletteSystem() {
    this.palettes = MotionGraphicsPlayer.PALETTES;
    this.currentPalette = '0';
    this.paletteToastTimeout = null;

    try {
      const saved = localStorage.getItem('g14_active_palette') || localStorage.getItem('em_active_palette');
      if (saved !== null && ['0','1','2','3','4','5'].includes(saved)) {
        this.currentPalette = saved;
      }
    } catch (e) {}

    // Cachear elementos de UI de paleta
    this.palettePicker = document.getElementById('hud-palette-picker');
    this.paletteNameDisplay = document.getElementById('palette-name-display');
    this.paletteSwatchesStrip = document.getElementById('palette-swatches-strip');
    this.paletteToast = document.getElementById('palette-toast');
    this.paletteToastBadge = document.getElementById('palette-toast-badge');
    this.paletteToastName = document.getElementById('palette-toast-name');

    // Inicializar strip de botones con circulitos de muestra
    this.renderPaletteSwatches();

    // Vincular botón selector si existe
    const cycleBtn = document.getElementById('btn-palette-cycle');
    if (cycleBtn) {
      cycleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.cyclePalette();
      });
    }

    this.setPalette(this.currentPalette, false);
  }

  renderPaletteSwatches() {
    if (!this.paletteSwatchesStrip) return;
    this.paletteSwatchesStrip.innerHTML = '';

    this.palettes.forEach(p => {
      const btn = document.createElement('button');
      btn.className = `palette-swatch-btn ${p.id === this.currentPalette ? 'active' : ''}`;
      btn.setAttribute('data-palette', p.id);
      btn.title = `Paleta ${p.id}: ${p.name} (${p.subtitle})`;
      btn.innerHTML = `<span class="swatch-preview" style="background: ${p.gradient};"></span>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.setPalette(p.id, true);
      });
      this.paletteSwatchesStrip.appendChild(btn);
    });
  }

  setPalette(paletteId, showNotice = true) {
    this.currentPalette = String(paletteId);
    document.documentElement.setAttribute('data-palette', this.currentPalette);
    if (document.body) {
      document.body.setAttribute('data-palette', this.currentPalette);
    }

    try {
      localStorage.setItem('g14_active_palette', this.currentPalette);
      localStorage.setItem('em_active_palette', this.currentPalette);
    } catch (e) {}

    // Actualizar nombre visible en el HUD
    const paletteInfo = this.palettes ? this.palettes.find(p => p.id === this.currentPalette) : null;
    if (this.paletteNameDisplay && paletteInfo) {
      this.paletteNameDisplay.textContent = paletteInfo.name;
    }

    // Actualizar botones swatch en el HUD
    if (this.paletteSwatchesStrip) {
      this.paletteSwatchesStrip.querySelectorAll('.palette-swatch-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-palette') === this.currentPalette);
      });
    }

    // Actualizar otros botones de paleta si existiesen
    document.querySelectorAll('.palette-pill-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-palette') === this.currentPalette);
    });

    // Mostrar aviso visual discreto tipo toast
    if (showNotice && paletteInfo) {
      this.showPaletteToast(paletteInfo);
    }
  }

  cyclePalette() {
    const currentNum = parseInt(this.currentPalette || '0', 10);
    const next = (currentNum + 1) % (this.palettes ? this.palettes.length : 6);
    this.setPalette(String(next), true);
  }

  showPaletteToast(paletteInfo) {
    if (!this.paletteToast) {
      this.paletteToast = document.getElementById('palette-toast');
      this.paletteToastBadge = document.getElementById('palette-toast-badge');
      this.paletteToastName = document.getElementById('palette-toast-name');
    }
    if (!this.paletteToast) return;

    if (this.paletteToastBadge) {
      this.paletteToastBadge.textContent = `PALETA ${paletteInfo.id}`;
    }
    if (this.paletteToastName) {
      this.paletteToastName.textContent = paletteInfo.name;
    }

    this.paletteToast.classList.add('show');
    clearTimeout(this.paletteToastTimeout);
    this.paletteToastTimeout = setTimeout(() => {
      if (this.paletteToast) {
        this.paletteToast.classList.remove('show');
      }
    }, 1500);
  }

  // --- ESCALADO RESPONSIVO PROPORCIONAL 16:9 NATIVO ---
  setupResponsiveScaling() {
    const handleResize = () => {
      if (!this.stage) return;
      const targetW = 1920;
      const targetH = 1080;
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      const scale = Math.min(winW / targetW, winH / targetH);
      this.stage.style.transform = `scale(${scale})`;
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    handleResize();
  }

  // --- NAVEGADOR DE PASOS Y MINI-TRACK SCRUBBER (45-55 ESCENAS) ---
  setupScrubber() {
    // Si no está en el DOM, crearlo automáticamente para retrocompatibilidad total
    if (!this.scrubberNav) {
      const pill = document.querySelector('.timeline-control-pill');
      if (pill) {
        const navDiv = document.createElement('div');
        navDiv.className = 'hud-scrubber-nav';
        navDiv.id = 'hud-scrubber-nav';
        navDiv.innerHTML = `
          <div class="hud-step-indicator" id="hud-step-indicator" title="Escena Actual / Total">
            <span class="hud-step-curr" id="hud-step-curr">01</span>
            <span class="hud-step-sep">/</span>
            <span class="hud-step-total" id="hud-step-total">${String(this.scenes.length).padStart(2, '0')}</span>
          </div>
          <div class="hud-scrubber-rail-wrapper" id="hud-scrubber-rail-wrapper" title="Arrastra o haz clic para saltar entre escenas">
            <div class="hud-scrubber-rail" id="hud-scrubber-rail">
              <div class="hud-scrubber-fill" id="hud-scrubber-fill"></div>
              <div class="hud-scrubber-thumb" id="hud-scrubber-thumb"></div>
            </div>
            <div class="hud-scrubber-tooltip" id="hud-scrubber-tooltip">Escena 01</div>
          </div>
        `;
        if (this.timelineDotsContainer) {
          pill.insertBefore(navDiv, this.timelineDotsContainer);
          this.timelineDotsContainer.style.display = 'none';
        } else {
          pill.appendChild(navDiv);
        }
        this.scrubberNav = navDiv;
        this.hudStepCurr = document.getElementById('hud-step-curr');
        this.hudStepTotal = document.getElementById('hud-step-total');
        this.scrubberRailWrapper = document.getElementById('hud-scrubber-rail-wrapper');
        this.scrubberRail = document.getElementById('hud-scrubber-rail');
        this.scrubberFill = document.getElementById('hud-scrubber-fill');
        this.scrubberThumb = document.getElementById('hud-scrubber-thumb');
        this.scrubberTooltip = document.getElementById('hud-scrubber-tooltip');
      }
    }

    if (!this.scrubberRailWrapper) return;

    const calculateTarget = (e) => {
      const rect = this.scrubberRail.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const targetIdx = Math.round(ratio * (this.scenes.length - 1));
      return { ratio, targetIdx };
    };

    const updateTooltip = (ratio, targetIdx) => {
      if (!this.scrubberTooltip) return;
      const scene = this.scenes[targetIdx];
      if (scene) {
        const num = String(targetIdx + 1).padStart(2, '0');
        const shortTitle = scene.title ? (scene.title.length > 26 ? scene.title.substring(0, 24) + '...' : scene.title) : `Escena ${num}`;
        this.scrubberTooltip.textContent = `${num} • ${shortTitle}`;
        this.scrubberTooltip.style.left = `${ratio * 100}%`;
      }
    };

    this.scrubberRailWrapper.addEventListener('click', (e) => {
      const { targetIdx } = calculateTarget(e);
      if (targetIdx !== this.currentIndex) {
        this.loadScene(targetIdx, true);
      }
    });

    this.scrubberRailWrapper.addEventListener('mousedown', (e) => {
      this.isScrubbing = true;
      const { targetIdx } = calculateTarget(e);
      if (targetIdx !== this.currentIndex) {
        this.loadScene(targetIdx, true);
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (this.isScrubbing && this.scrubberRail) {
        const { ratio, targetIdx } = calculateTarget(e);
        updateTooltip(ratio, targetIdx);
        if (targetIdx !== this.currentIndex) {
          this.loadScene(targetIdx, false);
        }
      } else if (this.scrubberRailWrapper && this.scrubberRailWrapper.matches(':hover') && this.scrubberRail) {
        const { ratio, targetIdx } = calculateTarget(e);
        updateTooltip(ratio, targetIdx);
      }
    });

    window.addEventListener('mouseup', () => {
      if (this.isScrubbing) {
        this.isScrubbing = false;
      }
    });
  }

  // --- RENDERIZADO DE PUNTOS DE LA LÍNEA TEMPORAL (OPCIONAL / COMPATIBLE) ---
  renderTimelineDots() {
    if (!this.timelineDotsContainer) return;
    // Si hay más de 20 escenas, ocultar dots tradicionales y priorizar el scrubber track
    if (this.scenes.length > 20) {
      this.timelineDotsContainer.style.display = 'none';
      return;
    }
    this.timelineDotsContainer.innerHTML = '';
    this.scenes.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.className = `timeline-dot ${idx === this.currentIndex ? 'active' : ''}`;
      dot.title = `Ir a Escena ${idx + 1}`;
      dot.addEventListener('click', () => {
        if (this.currentIndex !== idx) this.loadScene(idx, true);
      });
      this.timelineDotsContainer.appendChild(dot);
    });
  }

  // --- ACTUALIZACIÓN SINCRONIZADA DEL HUD TRACK Y SCRUBBER ---
  updateHUDTrack() {
    const total = this.scenes.length;
    const current = this.currentIndex;
    const currentFormatted = String(current + 1).padStart(2, '0');
    const totalFormatted = String(total).padStart(2, '0');

    // Actualizar contador del Top HUD
    if (this.sceneCounter) {
      this.sceneCounter.textContent = `${currentFormatted} / ${totalFormatted}`;
    }

    // Actualizar indicador de paso del Bottom HUD
    if (this.hudStepCurr) this.hudStepCurr.textContent = currentFormatted;
    if (this.hudStepTotal) this.hudStepTotal.textContent = totalFormatted;

    // Actualizar scrubber rail fill y thumb
    const progressPct = (total > 1) ? (current / (total - 1)) * 100 : 100;
    if (this.scrubberFill) this.scrubberFill.style.width = `${progressPct}%`;
    if (this.scrubberThumb) this.scrubberThumb.style.left = `${progressPct}%`;

    // Actualizar dots tradicionales si estuviesen visibles
    if (this.timelineDotsContainer && this.timelineDotsContainer.style.display !== 'none') {
      const dots = this.timelineDotsContainer.querySelectorAll('.timeline-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === current);
      });
    }
  }

  updateTimelineDots() {
    this.updateHUDTrack();
  }

  // --- CARGA Y TRANSICIÓN LIMPIA DE ESCENAS (PAUSA DE ~1S CON SOLO EL FONDO BLANCO LIMPIO) ---
  loadScene(index, withFade = true) {
    if (this.isTransitioning) return;
    if (index < 0 || index >= this.scenes.length) return;

    if (withFade) {
      this.isTransitioning = true;

      // 1. Desvanecer suavemente hacia el fondo blanco puro limpio (~300ms)
      if (this.curtain) {
        this.curtain.classList.add('active');
      }

      setTimeout(() => {
        // 2. Limpiar el contenido anterior para dejar visible ÚNICAMENTE el fondo limpio
        if (this.sceneContent) this.sceneContent.innerHTML = '';
        if (this.titleEl) this.titleEl.textContent = '';
        if (this.subtitleEl) this.subtitleEl.textContent = '';
        if (this.categoryEl) this.categoryEl.textContent = '';

        // Mantener la pantalla limpia con solo el fondo durante ~850-900ms ("un segundo")
        setTimeout(() => {
          // 3. Cargar la nueva escena y sincronizar HUD
          this.applySceneData(index);
          this.resetSceneTimer();
          this.updateHUDTrack();

          // 4. Iniciar transición limpia hacia la nueva diapo con animación suave
          requestAnimationFrame(() => {
            if (this.curtain) {
              this.curtain.classList.remove('active');
            }

            // Permitir que la animación suave de entrada se complete
            setTimeout(() => {
              this.isTransitioning = false;
            }, 450);
          });
        }, 850);
      }, 300);
    } else {
      this.applySceneData(index);
      this.resetSceneTimer();
      this.updateHUDTrack();
    }
  }

  applySceneData(index) {
    this.currentIndex = index;
    const scene = this.scenes[index];

    // Ocultar permanentemente la etiqueta de BLOQUE X NOMBRE
    if (this.categoryEl) {
      this.categoryEl.textContent = '';
      this.categoryEl.style.display = 'none';
      if (this.categoryEl.parentElement) {
        this.categoryEl.parentElement.style.display = 'none';
      }
    }

    // Reactivar animación suave en la cabecera de la diapo
    const headerEl = document.querySelector('.scene-header');
    if (headerEl) {
      headerEl.classList.remove('stagger-in');
      void headerEl.offsetWidth; // Forzar reflow para reiniciar keyframe
      headerEl.classList.add('stagger-in');
    }

    if (this.titleEl) {
      this.titleEl.textContent = scene.title || '';
      this.titleEl.className = `scene-title-large ${scene.titleGradient || 'text-gradient-indigo'}`;
    }
    if (this.subtitleEl) {
      this.subtitleEl.textContent = scene.subtitle || '';
    }

    // Actualizar orador
    if (this.speakerAvatar) this.speakerAvatar.textContent = scene.speaker ? scene.speaker.initials : 'G14';
    if (this.speakerName) this.speakerName.textContent = scene.speaker ? scene.speaker.name : '';
    if (this.speakerRole) this.speakerRole.textContent = scene.speaker ? scene.speaker.role : '';

    // Renderizar cuerpo de la escena (flotante directamente sobre el fondo limpio)
    if (this.sceneContent) {
      this.sceneContent.innerHTML = scene.renderContent ? scene.renderContent() : '';
    }

    // Disparar animaciones numéricas y barras de datos con cadencia suave
    setTimeout(() => {
      this.animateCounters();
      this.animateBars();
    }, 80);
  }

  // --- ANIMACIÓN DE CONTADORES NUMÉRICOS INCREMENTALES (SNAPPY 650ms) ---
  animateCounters() {
    if (!this.sceneContent) return;
    const counterElements = this.sceneContent.querySelectorAll('.counter-val');
    counterElements.forEach(el => {
      const rawTarget = el.dataset.target;
      const target = parseFloat(rawTarget);
      if (isNaN(target)) return;

      const decimals = rawTarget.includes('.') ? (rawTarget.split('.')[1] || '').length : 0;
      const duration = 650; // ms - dinámico y ágil para micro-escenas
      const startTime = performance.now();
      const isNegative = target < 0;
      const absTarget = Math.abs(target);

      const updateCount = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentVal = easeProgress * absTarget;

        el.textContent = (isNegative ? '-' : '') + (decimals > 0 ? currentVal.toFixed(decimals) : Math.round(currentVal));

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          el.textContent = (isNegative ? '-' : '') + (decimals > 0 ? absTarget.toFixed(decimals) : absTarget);
        }
      };

      requestAnimationFrame(updateCount);
    });
  }

  // --- ANIMACIÓN DE BARRAS DE DATOS EN GRÁFICAS ---
  animateBars() {
    if (!this.sceneContent) return;
    const bars = this.sceneContent.querySelectorAll('.animated-bar, .pure-chart-fill, .micro-chart-bar-fill');
    bars.forEach(bar => {
      const targetWidth = bar.style.getPropertyValue('--target-width') || bar.getAttribute('data-width') || '100%';
      bar.style.width = '0%';
      requestAnimationFrame(() => {
        setTimeout(() => {
          bar.style.width = targetWidth;
        }, 30);
      });
    });
  }

  // --- RELOJ Y PROGRESO DE AUTOPLAY (SIN BARRA DE PROGRESO NI SUBTÍTULOS) ---
  resetSceneTimer() {
    this.sceneElapsedMs = 0;
    if (this.progressBar) {
      this.progressBar.style.width = '0%';
    }
  }

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.startPlayback();
    } else {
      this.pausePlayback();
    }
  }

  startPlayback() {
    this.isPlaying = true;
    if (this.playPauseIcon) this.playPauseIcon.textContent = '⏸';
    if (this.autoplayDot) this.autoplayDot.classList.remove('paused');
    if (this.autoplayText) this.autoplayText.textContent = 'AUTOPLAY ACTIVO';

    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.isTransitioning) return;
      const scene = this.scenes[this.currentIndex];
      const durationMs = (scene.duration || 15) * 1000;

      this.sceneElapsedMs += this.tickInterval;

      // Si existe algún elemento de barra residual en el DOM, sincronizarlo sin errores
      if (this.progressBar) {
        const progressRatio = Math.min(this.sceneElapsedMs / durationMs, 1);
        this.progressBar.style.width = `${progressRatio * 100}%`;
      }

      if (this.sceneElapsedMs >= durationMs) {
        if (this.currentIndex < this.scenes.length - 1) {
          this.loadScene(this.currentIndex + 1, true);
        } else {
          // Última escena completada
          this.pausePlayback();
        }
      }
    }, this.tickInterval);
  }

  pausePlayback() {
    this.isPlaying = false;
    clearInterval(this.timer);
    if (this.playPauseIcon) this.playPauseIcon.textContent = '▶';
    if (this.autoplayDot) this.autoplayDot.classList.add('paused');
    if (this.autoplayText) this.autoplayText.textContent = 'PAUSADO';
  }

  nextScene() {
    if (this.currentIndex < this.scenes.length - 1) {
      this.loadScene(this.currentIndex + 1, true);
    }
  }

  prevScene() {
    if (this.currentIndex > 0) {
      this.loadScene(this.currentIndex - 1, true);
    }
  }

  // --- MODO GRABACIÓN LIMPIA (ZERO UI - TECLA H) ---
  toggleCleanRecordingMode() {
    this.isRecordingClean = !this.isRecordingClean;
    if (this.stage) {
      this.stage.classList.toggle('recording-clean-mode', this.isRecordingClean);
    }
    if (this.viewport) {
      this.viewport.classList.toggle('recording-clean-mode', this.isRecordingClean);
    }
  }

  // --- FULLSCREEN NATIVO (16:9 - TECLA F) ---
  toggleFullscreen() {
    if (!document.fullscreenElement) {
      if (this.viewport && this.viewport.requestFullscreen) {
        this.viewport.requestFullscreen();
      } else if (this.viewport && this.viewport.webkitRequestFullscreen) {
        this.viewport.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // --- CONTROL DE INACTIVIDAD DEL RATÓN ---
  bindMouseInactivity() {
    window.addEventListener('mousemove', () => {
      if (this.viewport) this.viewport.style.cursor = 'default';
      clearTimeout(this.cursorTimeout);
      this.cursorTimeout = setTimeout(() => {
        if (this.isPlaying || this.isRecordingClean) {
          if (this.viewport) this.viewport.style.cursor = 'none';
        }
      }, 2500);
    });
  }

  // --- ATAJOS DE TECLADO COMPLETOS PARA MICRO-ESCENAS ---
  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      switch (e.code) {
        case 'Space':
        case 'KeyK':
          e.preventDefault();
          this.togglePlayPause();
          break;
        case 'ArrowRight':
        case 'KeyL':
          e.preventDefault();
          this.nextScene();
          break;
        case 'ArrowLeft':
        case 'KeyJ':
          e.preventDefault();
          this.prevScene();
          break;
        case 'Home':
          e.preventDefault();
          this.loadScene(0, true);
          break;
        case 'End':
          e.preventDefault();
          this.loadScene(this.scenes.length - 1, true);
          break;
        case 'PageUp':
          e.preventDefault();
          this.loadScene(Math.max(0, this.currentIndex - 5), true);
          break;
        case 'PageDown':
          e.preventDefault();
          this.loadScene(Math.min(this.scenes.length - 1, this.currentIndex + 5), true);
          break;
        case 'KeyF':
          e.preventDefault();
          this.toggleFullscreen();
          break;
        case 'KeyH':
          e.preventDefault();
          this.toggleCleanRecordingMode();
          break;
        case 'KeyP':
          e.preventDefault();
          this.cyclePalette();
          break;
        case 'Digit1': case 'Digit2': case 'Digit3': case 'Digit4':
        case 'Digit5': case 'Digit6': case 'Digit7': case 'Digit8':
        case 'Digit9': {
          const sceneNum = parseInt(e.key, 10) - 1;
          if (sceneNum < this.scenes.length) {
            this.loadScene(sceneNum, true);
          }
          break;
        }
        case 'Digit0': {
          if (this.scenes.length >= 10) {
            this.loadScene(9, true);
          }
          break;
        }
      }
    });
  }
}

// Inicialización automática tras cargar el DOM
window.addEventListener('DOMContentLoaded', () => {
  if (typeof SCENES_DATA !== 'undefined') {
    window.playerInstance = new MotionGraphicsPlayer(SCENES_DATA);
  }
});
