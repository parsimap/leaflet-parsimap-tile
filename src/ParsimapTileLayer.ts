import IControl from '@interfaces/parsimap/IControl'
import ITileLayerOptions from '@interfaces/parsimap/ITileLayerOptions'
import { Map, tileLayer } from 'leaflet'
import fetchStyle from './fetchStyle'
import { StyleNameType } from './types/parsimap/StyleNameType'
import IEventData from '@interfaces/parsimap/IEventData'

const API_TOKEN_NOT_AVAILABLE = `The api key of Parsimap is not set, if you do not have a token, you can get it through the following url.
${process.env.TOKEN_REGISTRATION_URL}`

const ParsimapTileLayer: IControl = {
  options: {},

  initialize(id: StyleNameType, options: ITileLayerOptions): void {
    this.options = options

    if (!options.key) {
      console.error(API_TOKEN_NOT_AVAILABLE)
    }

    fetchStyle.apply(this, [id])
  },

  addTo(map: Map): void {
    this._pending = (): void => {
      const eventData: IEventData = { style: this._style! }

      this._pending = undefined
      this._tileLayer?.addTo(map)

      map.fire('style.load', eventData)
    }

    if (this._tileLayer) {
      this._pending()
    }
  },

  remove() {
    this._tileLayer?.remove()
  },
}

export default ParsimapTileLayer
