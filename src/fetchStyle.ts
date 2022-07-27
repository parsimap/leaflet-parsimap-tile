import IStyle from '@interfaces/parsimap/IStyle'
import { StyleNameType } from './types/parsimap/StyleNameType'
import IControl from '@interfaces/parsimap/IControl'
import L from './types/L'

const API_TOKEN_INVALID = `The api key of Parsimap is not valid.`

export default function fetchStyle(this: IControl, id: StyleNameType): void {
  const url = new URL(process.env.BASE_API_URL!)

  url.pathname = `styles/${id}`
  url.searchParams.append('key', this.options.key!)

  if (this.options.service !== undefined) {
    url.searchParams.append('service', String(this.options.service))
  }

  fetch(url.toString())
    .then((res) => res.json())
    .then((res: IStyle) => {
      this._style = res

      const { composite } = this._style.sources
      const urlTemplate = composite.tiles[0]
      const attribution = composite.attribution

      this._tileLayer = L.tileLayer(urlTemplate, { attribution })
      this._pending?.()
    })
    .catch(handleFetchError)
}

const handleFetchError = () => {
  console.error(API_TOKEN_INVALID)
}
