import * as L from "leaflet";

interface IControlOptions {
  key?: string;
  service?: boolean;
}

interface IEventData {
  style: IStyle;
}

type ParsimapTokenStatusType = "OK" | "UNAUTHORIZED"

interface IParsimapToken {
  value: string;
  status: ParsimapTokenStatusType;
}

interface IStyleMetadata {
  "parsimap:token": IParsimapToken;
}

interface IStyleSource {
  tiles: string[];
  attribution: string;
}

interface IStyleSources {
  [p: string]: IStyleSource;
}

interface IStyle {
  attributions: string;
  sources: IStyleSources;
  metadata: IStyleMetadata;
}

export default interface IControl {
  _map?: L.Map;
  _style?: IStyle;
  _tileLayer?: L.TileLayer;
  options: IControlOptions;

  addTo(map: L.Map): void;

  initialize(id: StyleNameType, options?: IControlOptions): void;

  fire?(type: string, eventData: IEventData): void;

  _pending?(): void;

  remove(): void;
}


type StyleNameType =
  "parsimap-streets-v11-raster"
  | "google-street-raster"

declare module 'leaflet' {
  class ParsimapTileLayer implements IControl {
    options: IControlOptions;

    constructor(styleName: StyleNameType, options: IControlOptions) {
    }

    addTo(map: Map): void;

    initialize(id: StyleNameType, options?: IControlOptions): void;

    remove(): void;

  }
}