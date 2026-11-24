# Invitación XV Años — Dania (temática disco)

## Antes de publicar, edita `js/script.js` (bloque CONFIGURACIÓN)
- `MUSIC_SRC`: archivo de música dentro de `audio/` (ya está "Here Comes The Sun"; vacío = se oculta el reproductor).
- `RSVP_WHATSAPP`: número que recibe las confirmaciones, con lada (ya configurado: `527711291686`).
- `MAPS_URL`: enlace de Google Maps exacto del Salón Rivento.

## Fotos
Se muestran en blanco y negro. Para verlas a color, en `css/style.css` cambia
`--photo-filter: grayscale(1) contrast(1.06);` por `--photo-filter: none;`

## Publicar
```
git init
git add .
git commit -m "Invitación XV Dania"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```
Luego en GitHub: Settings → Pages → Branch `main` / root.
