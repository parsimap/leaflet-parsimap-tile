# leaflet-parsimap-tile

> A plugin that provided for “leaflet” and able to the MapView to show parsimap
> raster tiles

[![NPM](https://img.shields.io/npm/v/@parsimap/leaflet-parsimap-tile.svg)](https://www.npmjs.com/package/@parsimap/leaflet-parsimap-tile) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Screen Shot](https://cdn.parsimap.ir/packages-image/leaflet-parsimap-tile.png)


## Install
The package can be installed through following npm

```bash
npm install @parsimap/leaflet-parsimap-tile
````

or

```bash
yarn add @parsimap/leaflet-parsimap-tile
```

## Usage

The CSS file should be placed into the HTML file header.

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

## License

MIT © [Parsimap](https://github.com/parsimap)