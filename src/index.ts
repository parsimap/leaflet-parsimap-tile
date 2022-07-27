import ITileLayerOptions from '@interfaces/parsimap/ITileLayerOptions'
import L from './types/L'
import { StyleNameType } from './types/parsimap/StyleNameType'
import ParsimapTileLayer from './ParsimapTileLayer'

L.ParsimapTileLayer = L.Control.extend(ParsimapTileLayer)

L.parsimapTileLayer = (id: StyleNameType, options?: ITileLayerOptions) =>
  new L.ParsimapTileLayer(id, options)
