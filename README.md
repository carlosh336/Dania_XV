# Invitación XV Años — Dania (temática disco)

## Antes de publicar, edita `js/script.js` (bloque CONFIGURACIÓN)
- La música es `audio/cancion.mp3` (para cambiarla, reemplaza ese archivo conservando el nombre).
- `RSVP_WHATSAPP`: número que recibe las confirmaciones (ya configurado).
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

## Imágenes que puedes reemplazar
- `images/foto-01.jpg`: foto de la portada.
- `images/fondo-padres.jpg`: fondo de "Con la bendición de Dios y" (foto de la guitarra).
- `images/bola-disco.png`: bola disco usada en toda la página.
- `images/muneco-hombre.png`, `images/muneco-mujer.png` y `images/corona-plata.png`: figuras del código de vestimenta (tomadas de la imagen de referencia).
