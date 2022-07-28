# leaflet-parsimap-tile

![Screen Shoot](https://cdn.parsimap.ir/packages-image/leaflet-parsimap-tile.png)

This project is provided a leaflet tile via parsimap tile service, this plugin
is able the MapView to show raster tiles.

The package can be installed through following npm

`npm install @parsimap/leaflet-parsimap-tile`

or

`yarn add @parsimap/leaflet-parsimap-tile`

The JavaScript and CSS files should be placed into the HTML file header.

```html
<link
  href="https://cdn.parsimap.ir/third-party/leaflet/v1.7.1/mapbox-gl.css"
  rel="stylesheet"
/>
```

The Parsimap tiles will be displayed if the parsiamp-tile plugin is added to the body tag and a valid [PMI_MAP_TOKEN](https://account.parsimap.ir/token-registration) is requested to use.

```js
import L from "leaflet";
import "leaflet-parsimap-tile"

const map = new L.Map('map', {
  center: [35.7575, 51.41],
  zoom: 6,
});

L.parsimapTileLayer('parsimap-streets-v11-raster', {
  key: 'PMI_MAP_TOKEN',
}).addTo(map);
```
