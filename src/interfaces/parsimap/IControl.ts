import { Map, TileLayer } from 'leaflet'
import IStyle from '@interfaces/parsimap/IStyle'
import { StyleNameType } from '../../types/parsimap/StyleNameType'
import IControlOptions from '@interfaces/parsimap/ITileLayerOptions'
import IEventData from '@interfaces/parsimap/IEventData'

export default interface IControl {
  _map?: Map
  _style?: IStyle
  _tileLayer?: TileLayer
  options: IControlOptions

  addTo(map: Map): void

  initialize(id: StyleNameType, options?: IControlOptions): void

  fire?(type: string, eventData: IEventData): void

  _pending?(): void

  remove(): void
}
