# 02A — Motion Hero Foundation

Este ZIP reemplaza la portada actual por el primer bloque de la nueva reconstrucción.

Incluye:

- partículas Canvas sin dependencias externas;
- profundidad y movimiento según el cursor;
- widget de Try-On funcional;
- comparador before/after;
- selector de looks;
- controles visuales;
- anillos y escáner animados;
- tres widgets demostrativos;
- assets temporales centralizados.

Los assets se sustituyen desde:

`src/config/experience-assets.ts`

No se agregaron todavía Three.js, GSAP o Motion. Este primer bloque crea una base
rápida y compilable sin aumentar el bundle. Esas tecnologías se integrarán por
etapas donde aporten valor real.
