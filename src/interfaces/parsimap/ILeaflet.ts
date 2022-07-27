import IControlOptions from '@interfaces/parsimap/ITileLayerOptions'
import ITileLayerOptions from '@interfaces/parsimap/ITileLayerOptions'
import IControl from './IControl'
import { StyleNameType } from '../../types/parsimap/StyleNameType'

export default interface ILeaflet {
  parsimapTileLayer: (id: StyleNameType, options?: ITileLayerOptions) => IControl
  ParsimapTileLayer: {
    new (id: StyleNameType, options?: IControlOptions): IControl
  }
}
