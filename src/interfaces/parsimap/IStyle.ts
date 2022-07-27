type ParsimapTokenStatusType = 'OK' | 'UNAUTHORIZED'

interface IParsimapToken {
  value: string
  status: ParsimapTokenStatusType
}

interface IStyleMetadata {
  'parsimap:token': IParsimapToken
}

interface IStyleSource {
  tiles: string[]
  attribution: string
}

interface IStyleSources {
  [p: string]: IStyleSource
}

export default interface IStyle {
  attributions: string
  sources: IStyleSources
  metadata: IStyleMetadata
}
