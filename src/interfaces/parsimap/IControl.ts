import { Map, TileLayer } from 'leaflet'
import IStyle from '@interfaces/parsimap/IStyle'
import { StyleIdType } from '../../types/parsimap/StyleIdType'
import IControlOptions from '@interfaces/parsimap/ITileLayerOptions'
import IEventData from '@interfaces/parsimap/IEventData'

export default interface IControl {
  _map?: Map
  _style?: IStyle
  _tileLayer?: TileLayer
  options: IControlOptions

  addTo(map: Map): void

  initialize(id: StyleIdType, options?: IControlOptions): void

  fire?(type: string, eventData: IEventData): void

  _pending?(): void

  remove(): void
}
