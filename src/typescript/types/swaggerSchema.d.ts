export namespace Components {
  namespace Schemas {
    /**
     * CitiesOrder
     * An enumeration.
     */
    export type CitiesOrder =
      | 'city'
      | 'country'
      | 'firstUpdated'
      | 'lastUpdated'
    /**
     * CitiesRow
     */
    export interface CitiesRow {
      /**
       * Country
       */
      country?: string
      /**
       * City
       */
      city: string
      /**
       * Count
       */
      count: number
      /**
       * Locations
       */
      locations: number
      /**
       * Firstupdated
       */
      firstUpdated: string // date-time
      /**
       * Lastupdated
       */
      lastUpdated: string // date-time
      /**
       * Parameters
       */
      parameters: string[]
    }
    /**
     * CountriesOrder
     * An enumeration.
     */
    export type CountriesOrder =
      | 'country'
      | 'firstUpdated'
      | 'lastUpdated'
      | 'locations'
      | 'count'
    /**
     * CountriesRow
     */
    export interface CountriesRow {
      /**
       * Code
       */
      code: string
      /**
       * Name
       */
      name: string
      /**
       * Locations
       */
      locations: number
      /**
       * Firstupdated
       */
      firstUpdated: string // date-time
      /**
       * Lastupdated
       */
      lastUpdated: string // date-time
      /**
       * Parameters
       */
      parameters: string[]
      /**
       * Count
       */
      count: number
      /**
       * Cities
       */
      cities: number
      /**
       * Sources
       */
      sources: number
    }
    /**
     * EntityTypes
     * An enumeration.
     */
    export type EntityTypes = 'government' | 'community' | 'research'
    /**
     * HTTPValidationError
     */
    export interface HTTPValidationError {
      /**
       * Detail
       */
      detail?: /* ValidationError */ ValidationError[]
    }
    /**
     * LocationsOrder
     * An enumeration.
     */
    export type LocationsOrder =
      | 'city'
      | 'country'
      | 'location'
      | 'sourceName'
      | 'firstUpdated'
      | 'lastUpdated'
      | 'count'
      | 'random'
    /**
     * MeasOrder
     * An enumeration.
     */
    export type MeasOrder = 'city' | 'country' | 'location' | 'datetime'
    /**
     * Meta
     */
    export interface Meta {
      /**
       * Name
       */
      name?: string
      /**
       * License
       */
      license?: string
      /**
       * Website
       */
      website?: string
      /**
       * Page
       */
      page?: number
      /**
       * Limit
       */
      limit?: number
      /**
       * Found
       */
      found?: number
    }
    /**
     * OpenAQCitiesResult
     */
    export interface OpenAQCitiesResult {
      /**
       * Meta
       */
      meta?: {
        /**
         * Name
         */
        name?: string
        /**
         * License
         */
        license?: string
        /**
         * Website
         */
        website?: string
        /**
         * Page
         */
        page?: number
        /**
         * Limit
         */
        limit?: number
        /**
         * Found
         */
        found?: number
      }
      /**
       * Results
       */
      results: /* CitiesRow */ CitiesRow[]
    }
    /**
     * OpenAQCountriesResult
     */
    export interface OpenAQCountriesResult {
      /**
       * Meta
       */
      meta?: {
        /**
         * Name
         */
        name?: string
        /**
         * License
         */
        license?: string
        /**
         * Website
         */
        website?: string
        /**
         * Page
         */
        page?: number
        /**
         * Limit
         */
        limit?: number
        /**
         * Found
         */
        found?: number
      }
      /**
       * Results
       */
      results: /* CountriesRow */ CountriesRow[]
    }
    /**
     * OpenAQParametersResult
     */
    export interface OpenAQParametersResult {
      /**
       * Meta
       */
      meta?: {
        /**
         * Name
         */
        name?: string
        /**
         * License
         */
        license?: string
        /**
         * Website
         */
        website?: string
        /**
         * Page
         */
        page?: number
        /**
         * Limit
         */
        limit?: number
        /**
         * Found
         */
        found?: number
      }
      /**
       * Results
       */
      results: /* ParametersRow */ ParametersRow[]
    }
    /**
     * OpenAQProjectsResult
     */
    export interface OpenAQProjectsResult {
      /**
       * Meta
       */
      meta?: {
        /**
         * Name
         */
        name?: string
        /**
         * License
         */
        license?: string
        /**
         * Website
         */
        website?: string
        /**
         * Page
         */
        page?: number
        /**
         * Limit
         */
        limit?: number
        /**
         * Found
         */
        found?: number
      }
      /**
       * Results
       */
      results: /* ProjectsRow */ ProjectsRow[]
    }
    /**
     * OpenAQResult
     */
    export interface OpenAQResult {
      /**
       * Meta
       */
      meta?: {
        /**
         * Name
         */
        name?: string
        /**
         * License
         */
        license?: string
        /**
         * Website
         */
        website?: string
        /**
         * Page
         */
        page?: number
        /**
         * Limit
         */
        limit?: number
        /**
         * Found
         */
        found?: number
      }
      /**
       * Results
       */
      results?: any[]
    }
    /**
     * ParametersRow
     */
    export interface ParametersRow {
      /**
       * Id
       */
      id: number
      /**
       * Name
       */
      name: string
      /**
       * Displayname
       */
      displayName: string
      /**
       * Description
       */
      description: string
      /**
       * Preferredunit
       */
      preferredUnit: string
      /**
       * Iscore
       */
      isCore?: boolean
      /**
       * Maxcolorvalue
       */
      maxColorValue?: number
    }
    /**
     * ProjectParameterDetails
     */
    export interface ProjectParameterDetails {
      /**
       * Unit
       */
      unit: string
      /**
       * Count
       */
      count: number
      /**
       * Average
       */
      average: number
      /**
       * Lastvalue
       */
      lastValue: number
      /**
       * Locations
       */
      locations: number
      /**
       * Parameter
       */
      parameter: string
      /**
       * Lastupdated
       */
      lastUpdated: string // date-time
      /**
       * Firstupdated
       */
      firstUpdated: string // date-time
      /**
       * Parameterid
       */
      parameterId: number
      /**
       * Displayname
       */
      displayName?: string
    }
    /**
     * ProjectsOrder
     * An enumeration.
     */
    export type ProjectsOrder =
      | 'id'
      | 'name'
      | 'subtitle'
      | 'firstUpdated'
      | 'lastUpdated'
    /**
     * ProjectsRow
     */
    export interface ProjectsRow {
      /**
       * Id
       */
      id: number
      /**
       * Name
       */
      name: string
      /**
       * Subtitle
       */
      subtitle: string
      /**
       * Ismobile
       */
      isMobile?: boolean
      /**
       * Isanalysis
       */
      isAnalysis?: boolean
      /**
       * Entity
       */
      entity?: string
      /**
       * Sensortype
       */
      sensorType?: string
      /**
       * Locations
       */
      locations: number
      /**
       * Locationids
       */
      locationIds: number[]
      /**
       * Countries
       */
      countries?: string[]
      /**
       * Parameters
       */
      parameters: /* ProjectParameterDetails */ ProjectParameterDetails[]
      /**
       * Bbox
       */
      bbox?: number[]
      /**
       * Measurements
       */
      measurements: number
      /**
       * Firstupdated
       */
      firstUpdated: string // date-time
      /**
       * Lastupdated
       */
      lastUpdated: string // date-time
      /**
       * Sources
       */
      sources?: any[]
    }
    /**
     * SensorTypes
     * An enumeration.
     */
    export type SensorTypes = 'reference grade' | 'low-cost sensor'
    /**
     * Sort
     * An enumeration.
     */
    export type Sort = 'asc' | 'desc'
    /**
     * SourcesOrder
     * An enumeration.
     */
    export type SourcesOrder = 'sourceName' | 'firstUpdated' | 'lastUpdated'
    /**
     * SourcesV1Order
     * An enumeration.
     */
    export type SourcesV1Order = 'name'
    /**
     * Spatial
     * An enumeration.
     */
    export type Spatial = 'country' | 'location' | 'project' | 'total'
    /**
     * Temporal
     * An enumeration.
     */
    export type Temporal =
      | 'day'
      | 'month'
      | 'year'
      | 'moy'
      | 'dow'
      | 'hour'
      | 'hod'
    /**
     * TileJSON
     * TileJSON model.
     * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
     */
    export interface TileJSON {
      /**
       * Tilejson
       */
      tilejson?: string
      /**
       * Name
       */
      name?: string
      /**
       * Description
       */
      description?: string
      /**
       * Version
       */
      version?: string
      /**
       * Attribution
       */
      attribution?: string
      /**
       * Template
       */
      template?: string
      /**
       * Legend
       */
      legend?: string
      /**
       * Scheme
       */
      scheme?: string
      /**
       * Tiles
       */
      tiles: string[]
      /**
       * Grids
       */
      grids?: string[]
      /**
       * Data
       */
      data?: string[]
      /**
       * Minzoom
       */
      minzoom?: number
      /**
       * Maxzoom
       */
      maxzoom?: number
      /**
       * Bounds
       */
      bounds?: number[]
    }
    /**
     * ValidationError
     */
    export interface ValidationError {
      /**
       * Location
       */
      loc: string[]
      /**
       * Message
       */
      msg: string
      /**
       * Error Type
       */
      type: string
    }
  }
}
declare namespace Paths {
  namespace AveragesV2GetV2AveragesGet {
    namespace Parameters {
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Date From
       */
      export type DateFrom /* Date From */ =
        | string /* date-time */
        | string /* date */
      /**
       * Date To
       */
      export type DateTo /* Date To */ =
        | string /* date-time */
        | string /* date */
      /**
       * Group
       */
      export type Group = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Location
       */
      export type Location = string[]
      /**
       * Offset
       */
      export type Offset = number
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Project
       */
      export type Project = (number | string)[]
      /**
       * Project Id
       */
      export type ProjectId = number
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
      export type Spatial = /**
       * Spatial
       * An enumeration.
       */ Components.Schemas.Spatial
      export type Temporal = /**
       * Temporal
       * An enumeration.
       */ Components.Schemas.Temporal
      /**
       * Unit
       */
      export type Unit = string[]
    }
    export interface QueryParameters {
      date_from?: /* Date From */ Parameters.DateFrom
      date_to?: /* Date To */ Parameters.DateTo
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      project_id?: /* Project Id */ Parameters.ProjectId
      project?: /* Project */ Parameters.Project
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      spatial: Parameters.Spatial
      temporal: Parameters.Temporal
      location?: /* Location */ Parameters.Location
      group?: /* Group */ Parameters.Group
    }
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace CitiesGetV2CitiesGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Entity
       */
      export type Entity = string
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * CitiesOrder
       * Order by a field
       */
      export type OrderBy = 'city' | 'country' | 'firstUpdated' | 'lastUpdated'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      order_by?: /**
       * CitiesOrder
       * Order by a field
       */
      Parameters.OrderBy
      entity?: /* Entity */ Parameters.Entity
    }
    namespace Responses {
      export type $200 = /* OpenAQCitiesResult */ Components.Schemas.OpenAQCitiesResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace CitiesGetv1V1CitiesGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Entity
       */
      export type Entity = string
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * CitiesOrder
       * Order by a field
       */
      export type OrderBy = 'city' | 'country' | 'firstUpdated' | 'lastUpdated'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      order_by?: /**
       * CitiesOrder
       * Order by a field
       */
      Parameters.OrderBy
      entity?: /* Entity */ Parameters.Entity
    }
    namespace Responses {
      export type $200 = /* OpenAQCitiesResult */ Components.Schemas.OpenAQCitiesResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace CountriesGetV1CountriesCountryIdGet {
    namespace Parameters {
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Limit
       */
      export type Limit = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * CountriesOrder
       * An enumeration.
       */
      export type OrderBy =
        | 'country'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'locations'
        | 'count'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
    }
    export interface PathParameters {
      country_id: /* Country Id */ Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
    }
    export interface QueryParameters {
      limit?: /* Limit */ Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      order_by?: /**
       * CountriesOrder
       * An enumeration.
       */
      Parameters.OrderBy
    }
    namespace Responses {
      export type $200 = /* OpenAQCountriesResult */ Components.Schemas.OpenAQCountriesResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace CountriesGetV2CountriesCountryIdGet {
    namespace Parameters {
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Limit
       */
      export type Limit = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * CountriesOrder
       * An enumeration.
       */
      export type OrderBy =
        | 'country'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'locations'
        | 'count'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
    }
    export interface PathParameters {
      country_id: /* Country Id */ Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
    }
    export interface QueryParameters {
      limit?: /* Limit */ Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      order_by?: /**
       * CountriesOrder
       * An enumeration.
       */
      Parameters.OrderBy
    }
    namespace Responses {
      export type $200 = /* OpenAQCountriesResult */ Components.Schemas.OpenAQCountriesResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace CountriesGetV2CountriesGet {
    namespace Parameters {
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Limit
       */
      export type Limit = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * CountriesOrder
       * An enumeration.
       */
      export type OrderBy =
        | 'country'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'locations'
        | 'count'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
    }
    export interface QueryParameters {
      limit?: /* Limit */ Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      order_by?: /**
       * CountriesOrder
       * An enumeration.
       */
      Parameters.OrderBy
    }
    namespace Responses {
      export type $200 = /* OpenAQCountriesResult */ Components.Schemas.OpenAQCountriesResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace CountriesGetv1V1CountriesGet {
    namespace Parameters {
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Limit
       */
      export type Limit = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * CountriesOrder
       * An enumeration.
       */
      export type OrderBy =
        | 'country'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'locations'
        | 'count'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
    }
    export interface QueryParameters {
      limit?: /* Limit */ Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      order_by?: /**
       * CountriesOrder
       * An enumeration.
       */
      Parameters.OrderBy
    }
    namespace Responses {
      export type $200 = /* OpenAQCountriesResult */ Components.Schemas.OpenAQCountriesResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace DemoV2LocationsTilesViewerGet {
    namespace Responses {
      export type $200 = string
    }
  }
  namespace FavicoFaviconIcoGet {
    namespace Responses {
      export type $200 = any
    }
  }
  namespace GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet {
    namespace Parameters {
      /**
       * Isanalysis
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       */
      export type IsMobile = boolean
      /**
       * Lastupdatedfrom
       */
      export type LastUpdatedFrom /* Lastupdatedfrom */ =
        | string /* date-time */
        | string /* date */
      /**
       * Lastupdatedto
       */
      export type LastUpdatedTo /* Lastupdatedto */ =
        | string /* date-time */
        | string /* date */
      /**
       * Location
       * limit data to location id
       */
      export type Location = number[]
      /**
       * Parameter
       */
      export type Parameter = /* Parameter */ number | string
      /**
       * Project
       */
      export type Project = number
      /**
       * X
       */
      export type X = number
      /**
       * Y
       */
      export type Y = number
      /**
       * Z
       */
      export type Z = number
    }
    export interface PathParameters {
      z: /* Z */ Parameters.Z
      x: /* X */ Parameters.X
      y: /* Y */ Parameters.Y
    }
    export interface QueryParameters {
      parameter?: /* Parameter */ Parameters.Parameter
      location?: /**
       * Location
       * limit data to location id
       */
      Parameters.Location
      lastUpdatedFrom?: /* Lastupdatedfrom */ Parameters.LastUpdatedFrom
      lastUpdatedTo?: /* Lastupdatedto */ Parameters.LastUpdatedTo
      isMobile?: /* Ismobile */ Parameters.IsMobile
      project?: /* Project */ Parameters.Project
      isAnalysis?: /* Isanalysis */ Parameters.IsAnalysis
    }
    namespace Responses {
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace GetMobiletileV2LocationsTilesMobileZXYPbfGet {
    namespace Parameters {
      /**
       * Datefrom
       */
      export type DateFrom /* Datefrom */ =
        | string /* date-time */
        | string /* date */
      /**
       * Dateto
       */
      export type DateTo /* Dateto */ =
        | string /* date-time */
        | string /* date */
      /**
       * Isanalysis
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       */
      export type IsMobile = boolean
      /**
       * Lastupdatedfrom
       */
      export type LastUpdatedFrom /* Lastupdatedfrom */ =
        | string /* date-time */
        | string /* date */
      /**
       * Lastupdatedto
       */
      export type LastUpdatedTo /* Lastupdatedto */ =
        | string /* date-time */
        | string /* date */
      /**
       * Location
       * limit data to location id
       */
      export type Location = number[]
      /**
       * Parameter
       */
      export type Parameter = /* Parameter */ number | string
      /**
       * Project
       */
      export type Project = number
      /**
       * X
       */
      export type X = number
      /**
       * Y
       */
      export type Y = number
      /**
       * Z
       */
      export type Z = number
    }
    export interface PathParameters {
      z: /* Z */ Parameters.Z
      x: /* X */ Parameters.X
      y: /* Y */ Parameters.Y
    }
    export interface QueryParameters {
      dateFrom: /* Datefrom */ Parameters.DateFrom
      dateTo: /* Dateto */ Parameters.DateTo
      parameter?: /* Parameter */ Parameters.Parameter
      location?: /**
       * Location
       * limit data to location id
       */
      Parameters.Location
      lastUpdatedFrom?: /* Lastupdatedfrom */ Parameters.LastUpdatedFrom
      lastUpdatedTo?: /* Lastupdatedto */ Parameters.LastUpdatedTo
      isMobile?: /* Ismobile */ Parameters.IsMobile
      project?: /* Project */ Parameters.Project
      isAnalysis?: /* Isanalysis */ Parameters.IsAnalysis
    }
    namespace Responses {
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace GetTileV2LocationsTilesZXYPbfGet {
    namespace Parameters {
      /**
       * Isanalysis
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       */
      export type IsMobile = boolean
      /**
       * Lastupdatedfrom
       */
      export type LastUpdatedFrom /* Lastupdatedfrom */ =
        | string /* date-time */
        | string /* date */
      /**
       * Lastupdatedto
       */
      export type LastUpdatedTo /* Lastupdatedto */ =
        | string /* date-time */
        | string /* date */
      /**
       * Location
       * limit data to location id
       */
      export type Location = number[]
      /**
       * Parameter
       */
      export type Parameter = /* Parameter */ number | string
      /**
       * Project
       */
      export type Project = number
      /**
       * X
       */
      export type X = number
      /**
       * Y
       */
      export type Y = number
      /**
       * Z
       */
      export type Z = number
    }
    export interface PathParameters {
      z: /* Z */ Parameters.Z
      x: /* X */ Parameters.X
      y: /* Y */ Parameters.Y
    }
    export interface QueryParameters {
      parameter?: /* Parameter */ Parameters.Parameter
      location?: /**
       * Location
       * limit data to location id
       */
      Parameters.Location
      lastUpdatedFrom?: /* Lastupdatedfrom */ Parameters.LastUpdatedFrom
      lastUpdatedTo?: /* Lastupdatedto */ Parameters.LastUpdatedTo
      isMobile?: /* Ismobile */ Parameters.IsMobile
      project?: /* Project */ Parameters.Project
      isAnalysis?: /* Isanalysis */ Parameters.IsAnalysis
    }
    namespace Responses {
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace LatestGetV2LatestGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Coordinates
       */
      export type Coordinates = string // ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Dumpraw
       */
      export type DumpRaw = boolean
      /**
       * EntityTypes
       * Source entity type.
       */
      export type Entity = 'government' | 'community' | 'research'
      /**
       * Has Geo
       */
      export type HasGeo = boolean
      /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       * Location is mobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Location
       */
      export type Location = (number | string)[]
      /**
       * Location Id
       */
      export type LocationId = number
      /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      export type ManufacturerName = string[]
      /**
       * Modelname
       * Model Name of Sensor
       */
      export type ModelName = string[]
      /**
       * Offset
       */
      export type Offset = number
      /**
       * LocationsOrder
       * Order by a field
       */
      export type OrderBy =
        | 'city'
        | 'country'
        | 'location'
        | 'sourceName'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'count'
        | 'random'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Radius
       */
      export type Radius = number
      /**
       * SensorTypes
       * Type of Sensor
       */
      export type SensorType = 'reference grade' | 'low-cost sensor'
      /**
       * Sort
       * Sort Direction
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourcename
       * Name of the data source
       */
      export type SourceName = string[]
      /**
       * Unit
       */
      export type Unit = string[]
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Sort Direction
       */
      Parameters.Sort
      has_geo?: /* Has Geo */ Parameters.HasGeo
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      coordinates?: /* Coordinates */ Parameters.Coordinates /* ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$ */
      radius?: /* Radius */ Parameters.Radius
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      location_id?: /* Location Id */ Parameters.LocationId
      location?: /* Location */ Parameters.Location
      order_by?: /**
       * LocationsOrder
       * Order by a field
       */
      Parameters.OrderBy
      isMobile?: /**
       * Ismobile
       * Location is mobile
       */
      Parameters.IsMobile
      isAnalysis?: /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      Parameters.IsAnalysis
      sourceName?: /**
       * Sourcename
       * Name of the data source
       */
      Parameters.SourceName
      entity?: /**
       * EntityTypes
       * Source entity type.
       */
      Parameters.Entity
      sensorType?: /**
       * SensorTypes
       * Type of Sensor
       */
      Parameters.SensorType
      modelName?: /**
       * Modelname
       * Model Name of Sensor
       */
      Parameters.ModelName
      manufacturerName?: /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      Parameters.ManufacturerName
      dumpRaw?: /* Dumpraw */ Parameters.DumpRaw
    }
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace LatestGetV2LatestLocationIdGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Coordinates
       */
      export type Coordinates = string // ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Dumpraw
       */
      export type DumpRaw = boolean
      /**
       * EntityTypes
       * Source entity type.
       */
      export type Entity = 'government' | 'community' | 'research'
      /**
       * Has Geo
       */
      export type HasGeo = boolean
      /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       * Location is mobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Location
       */
      export type Location = (number | string)[]
      /**
       * Location Id
       */
      export type LocationId = number
      /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      export type ManufacturerName = string[]
      /**
       * Modelname
       * Model Name of Sensor
       */
      export type ModelName = string[]
      /**
       * Offset
       */
      export type Offset = number
      /**
       * LocationsOrder
       * Order by a field
       */
      export type OrderBy =
        | 'city'
        | 'country'
        | 'location'
        | 'sourceName'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'count'
        | 'random'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Radius
       */
      export type Radius = number
      /**
       * SensorTypes
       * Type of Sensor
       */
      export type SensorType = 'reference grade' | 'low-cost sensor'
      /**
       * Sort
       * Sort Direction
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourcename
       * Name of the data source
       */
      export type SourceName = string[]
      /**
       * Unit
       */
      export type Unit = string[]
    }
    export interface PathParameters {
      location_id: /* Location Id */ Parameters.LocationId
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Sort Direction
       */
      Parameters.Sort
      has_geo?: /* Has Geo */ Parameters.HasGeo
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      coordinates?: /* Coordinates */ Parameters.Coordinates /* ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$ */
      radius?: /* Radius */ Parameters.Radius
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      location?: /* Location */ Parameters.Location
      order_by?: /**
       * LocationsOrder
       * Order by a field
       */
      Parameters.OrderBy
      isMobile?: /**
       * Ismobile
       * Location is mobile
       */
      Parameters.IsMobile
      isAnalysis?: /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      Parameters.IsAnalysis
      sourceName?: /**
       * Sourcename
       * Name of the data source
       */
      Parameters.SourceName
      entity?: /**
       * EntityTypes
       * Source entity type.
       */
      Parameters.Entity
      sensorType?: /**
       * SensorTypes
       * Type of Sensor
       */
      Parameters.SensorType
      modelName?: /**
       * Modelname
       * Model Name of Sensor
       */
      Parameters.ModelName
      manufacturerName?: /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      Parameters.ManufacturerName
      dumpRaw?: /* Dumpraw */ Parameters.DumpRaw
    }
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace LatestV1GetV1LatestGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Coordinates
       */
      export type Coordinates = string // ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Dumpraw
       */
      export type DumpRaw = boolean
      /**
       * EntityTypes
       * Source entity type.
       */
      export type Entity = 'government' | 'community' | 'research'
      /**
       * Has Geo
       */
      export type HasGeo = boolean
      /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       * Location is mobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Location
       */
      export type Location = (number | string)[]
      /**
       * Location Id
       */
      export type LocationId = number
      /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      export type ManufacturerName = string[]
      /**
       * Modelname
       * Model Name of Sensor
       */
      export type ModelName = string[]
      /**
       * Offset
       */
      export type Offset = number
      /**
       * LocationsOrder
       * Order by a field
       */
      export type OrderBy =
        | 'city'
        | 'country'
        | 'location'
        | 'sourceName'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'count'
        | 'random'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Radius
       */
      export type Radius = number
      /**
       * SensorTypes
       * Type of Sensor
       */
      export type SensorType = 'reference grade' | 'low-cost sensor'
      /**
       * Sort
       * Sort Direction
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourcename
       * Name of the data source
       */
      export type SourceName = string[]
      /**
       * Unit
       */
      export type Unit = string[]
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Sort Direction
       */
      Parameters.Sort
      has_geo?: /* Has Geo */ Parameters.HasGeo
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      coordinates?: /* Coordinates */ Parameters.Coordinates /* ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$ */
      radius?: /* Radius */ Parameters.Radius
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      location_id?: /* Location Id */ Parameters.LocationId
      location?: /* Location */ Parameters.Location
      order_by?: /**
       * LocationsOrder
       * Order by a field
       */
      Parameters.OrderBy
      isMobile?: /**
       * Ismobile
       * Location is mobile
       */
      Parameters.IsMobile
      isAnalysis?: /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      Parameters.IsAnalysis
      sourceName?: /**
       * Sourcename
       * Name of the data source
       */
      Parameters.SourceName
      entity?: /**
       * EntityTypes
       * Source entity type.
       */
      Parameters.Entity
      sensorType?: /**
       * SensorTypes
       * Type of Sensor
       */
      Parameters.SensorType
      modelName?: /**
       * Modelname
       * Model Name of Sensor
       */
      Parameters.ModelName
      manufacturerName?: /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      Parameters.ManufacturerName
      dumpRaw?: /* Dumpraw */ Parameters.DumpRaw
    }
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace LatestV1GetV1LatestLocationIdGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Coordinates
       */
      export type Coordinates = string // ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Dumpraw
       */
      export type DumpRaw = boolean
      /**
       * EntityTypes
       * Source entity type.
       */
      export type Entity = 'government' | 'community' | 'research'
      /**
       * Has Geo
       */
      export type HasGeo = boolean
      /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       * Location is mobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Location
       */
      export type Location = (number | string)[]
      /**
       * Location Id
       */
      export type LocationId = number
      /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      export type ManufacturerName = string[]
      /**
       * Modelname
       * Model Name of Sensor
       */
      export type ModelName = string[]
      /**
       * Offset
       */
      export type Offset = number
      /**
       * LocationsOrder
       * Order by a field
       */
      export type OrderBy =
        | 'city'
        | 'country'
        | 'location'
        | 'sourceName'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'count'
        | 'random'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Radius
       */
      export type Radius = number
      /**
       * SensorTypes
       * Type of Sensor
       */
      export type SensorType = 'reference grade' | 'low-cost sensor'
      /**
       * Sort
       * Sort Direction
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourcename
       * Name of the data source
       */
      export type SourceName = string[]
      /**
       * Unit
       */
      export type Unit = string[]
    }
    export interface PathParameters {
      location_id: /* Location Id */ Parameters.LocationId
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Sort Direction
       */
      Parameters.Sort
      has_geo?: /* Has Geo */ Parameters.HasGeo
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      coordinates?: /* Coordinates */ Parameters.Coordinates /* ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$ */
      radius?: /* Radius */ Parameters.Radius
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      location?: /* Location */ Parameters.Location
      order_by?: /**
       * LocationsOrder
       * Order by a field
       */
      Parameters.OrderBy
      isMobile?: /**
       * Ismobile
       * Location is mobile
       */
      Parameters.IsMobile
      isAnalysis?: /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      Parameters.IsAnalysis
      sourceName?: /**
       * Sourcename
       * Name of the data source
       */
      Parameters.SourceName
      entity?: /**
       * EntityTypes
       * Source entity type.
       */
      Parameters.Entity
      sensorType?: /**
       * SensorTypes
       * Type of Sensor
       */
      Parameters.SensorType
      modelName?: /**
       * Modelname
       * Model Name of Sensor
       */
      Parameters.ModelName
      manufacturerName?: /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      Parameters.ManufacturerName
      dumpRaw?: /* Dumpraw */ Parameters.DumpRaw
    }
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace LocationsGetV2LocationsGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Coordinates
       */
      export type Coordinates = string // ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Dumpraw
       */
      export type DumpRaw = boolean
      /**
       * EntityTypes
       * Source entity type.
       */
      export type Entity = 'government' | 'community' | 'research'
      /**
       * Has Geo
       */
      export type HasGeo = boolean
      /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       * Location is mobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Location
       */
      export type Location = (number | string)[]
      /**
       * Location Id
       */
      export type LocationId = number
      /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      export type ManufacturerName = string[]
      /**
       * Modelname
       * Model Name of Sensor
       */
      export type ModelName = string[]
      /**
       * Offset
       */
      export type Offset = number
      /**
       * LocationsOrder
       * Order by a field
       */
      export type OrderBy =
        | 'city'
        | 'country'
        | 'location'
        | 'sourceName'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'count'
        | 'random'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Radius
       */
      export type Radius = number
      /**
       * SensorTypes
       * Type of Sensor
       */
      export type SensorType = 'reference grade' | 'low-cost sensor'
      /**
       * Sort
       * Sort Direction
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourcename
       * Name of the data source
       */
      export type SourceName = string[]
      /**
       * Unit
       */
      export type Unit = string[]
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Sort Direction
       */
      Parameters.Sort
      has_geo?: /* Has Geo */ Parameters.HasGeo
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      coordinates?: /* Coordinates */ Parameters.Coordinates /* ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$ */
      radius?: /* Radius */ Parameters.Radius
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      location_id?: /* Location Id */ Parameters.LocationId
      location?: /* Location */ Parameters.Location
      order_by?: /**
       * LocationsOrder
       * Order by a field
       */
      Parameters.OrderBy
      isMobile?: /**
       * Ismobile
       * Location is mobile
       */
      Parameters.IsMobile
      isAnalysis?: /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      Parameters.IsAnalysis
      sourceName?: /**
       * Sourcename
       * Name of the data source
       */
      Parameters.SourceName
      entity?: /**
       * EntityTypes
       * Source entity type.
       */
      Parameters.Entity
      sensorType?: /**
       * SensorTypes
       * Type of Sensor
       */
      Parameters.SensorType
      modelName?: /**
       * Modelname
       * Model Name of Sensor
       */
      Parameters.ModelName
      manufacturerName?: /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      Parameters.ManufacturerName
      dumpRaw?: /* Dumpraw */ Parameters.DumpRaw
    }
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace LocationsGetV2LocationsLocationIdGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Coordinates
       */
      export type Coordinates = string // ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Dumpraw
       */
      export type DumpRaw = boolean
      /**
       * EntityTypes
       * Source entity type.
       */
      export type Entity = 'government' | 'community' | 'research'
      /**
       * Has Geo
       */
      export type HasGeo = boolean
      /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       * Location is mobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Location
       */
      export type Location = (number | string)[]
      /**
       * Location Id
       */
      export type LocationId = number
      /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      export type ManufacturerName = string[]
      /**
       * Modelname
       * Model Name of Sensor
       */
      export type ModelName = string[]
      /**
       * Offset
       */
      export type Offset = number
      /**
       * LocationsOrder
       * Order by a field
       */
      export type OrderBy =
        | 'city'
        | 'country'
        | 'location'
        | 'sourceName'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'count'
        | 'random'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Radius
       */
      export type Radius = number
      /**
       * SensorTypes
       * Type of Sensor
       */
      export type SensorType = 'reference grade' | 'low-cost sensor'
      /**
       * Sort
       * Sort Direction
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourcename
       * Name of the data source
       */
      export type SourceName = string[]
      /**
       * Unit
       */
      export type Unit = string[]
    }
    export interface PathParameters {
      location_id: /* Location Id */ Parameters.LocationId
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Sort Direction
       */
      Parameters.Sort
      has_geo?: /* Has Geo */ Parameters.HasGeo
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      coordinates?: /* Coordinates */ Parameters.Coordinates /* ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$ */
      radius?: /* Radius */ Parameters.Radius
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      location?: /* Location */ Parameters.Location
      order_by?: /**
       * LocationsOrder
       * Order by a field
       */
      Parameters.OrderBy
      isMobile?: /**
       * Ismobile
       * Location is mobile
       */
      Parameters.IsMobile
      isAnalysis?: /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      Parameters.IsAnalysis
      sourceName?: /**
       * Sourcename
       * Name of the data source
       */
      Parameters.SourceName
      entity?: /**
       * EntityTypes
       * Source entity type.
       */
      Parameters.Entity
      sensorType?: /**
       * SensorTypes
       * Type of Sensor
       */
      Parameters.SensorType
      modelName?: /**
       * Modelname
       * Model Name of Sensor
       */
      Parameters.ModelName
      manufacturerName?: /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      Parameters.ManufacturerName
      dumpRaw?: /* Dumpraw */ Parameters.DumpRaw
    }
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace Locationsv1GetV1LocationsGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Coordinates
       */
      export type Coordinates = string // ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Dumpraw
       */
      export type DumpRaw = boolean
      /**
       * EntityTypes
       * Source entity type.
       */
      export type Entity = 'government' | 'community' | 'research'
      /**
       * Has Geo
       */
      export type HasGeo = boolean
      /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       * Location is mobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Location
       */
      export type Location = (number | string)[]
      /**
       * Location Id
       */
      export type LocationId = number
      /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      export type ManufacturerName = string[]
      /**
       * Modelname
       * Model Name of Sensor
       */
      export type ModelName = string[]
      /**
       * Offset
       */
      export type Offset = number
      /**
       * LocationsOrder
       * Order by a field
       */
      export type OrderBy =
        | 'city'
        | 'country'
        | 'location'
        | 'sourceName'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'count'
        | 'random'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Radius
       */
      export type Radius = number
      /**
       * SensorTypes
       * Type of Sensor
       */
      export type SensorType = 'reference grade' | 'low-cost sensor'
      /**
       * Sort
       * Sort Direction
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourcename
       * Name of the data source
       */
      export type SourceName = string[]
      /**
       * Unit
       */
      export type Unit = string[]
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Sort Direction
       */
      Parameters.Sort
      has_geo?: /* Has Geo */ Parameters.HasGeo
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      coordinates?: /* Coordinates */ Parameters.Coordinates /* ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$ */
      radius?: /* Radius */ Parameters.Radius
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      location_id?: /* Location Id */ Parameters.LocationId
      location?: /* Location */ Parameters.Location
      order_by?: /**
       * LocationsOrder
       * Order by a field
       */
      Parameters.OrderBy
      isMobile?: /**
       * Ismobile
       * Location is mobile
       */
      Parameters.IsMobile
      isAnalysis?: /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      Parameters.IsAnalysis
      sourceName?: /**
       * Sourcename
       * Name of the data source
       */
      Parameters.SourceName
      entity?: /**
       * EntityTypes
       * Source entity type.
       */
      Parameters.Entity
      sensorType?: /**
       * SensorTypes
       * Type of Sensor
       */
      Parameters.SensorType
      modelName?: /**
       * Modelname
       * Model Name of Sensor
       */
      Parameters.ModelName
      manufacturerName?: /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      Parameters.ManufacturerName
      dumpRaw?: /* Dumpraw */ Parameters.DumpRaw
    }
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace Locationsv1GetV1LocationsLocationIdGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Coordinates
       */
      export type Coordinates = string // ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Dumpraw
       */
      export type DumpRaw = boolean
      /**
       * EntityTypes
       * Source entity type.
       */
      export type Entity = 'government' | 'community' | 'research'
      /**
       * Has Geo
       */
      export type HasGeo = boolean
      /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       * Location is mobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Location
       */
      export type Location = (number | string)[]
      /**
       * Location Id
       */
      export type LocationId = number
      /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      export type ManufacturerName = string[]
      /**
       * Modelname
       * Model Name of Sensor
       */
      export type ModelName = string[]
      /**
       * Offset
       */
      export type Offset = number
      /**
       * LocationsOrder
       * Order by a field
       */
      export type OrderBy =
        | 'city'
        | 'country'
        | 'location'
        | 'sourceName'
        | 'firstUpdated'
        | 'lastUpdated'
        | 'count'
        | 'random'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Radius
       */
      export type Radius = number
      /**
       * SensorTypes
       * Type of Sensor
       */
      export type SensorType = 'reference grade' | 'low-cost sensor'
      /**
       * Sort
       * Sort Direction
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourcename
       * Name of the data source
       */
      export type SourceName = string[]
      /**
       * Unit
       */
      export type Unit = string[]
    }
    export interface PathParameters {
      location_id: /* Location Id */ Parameters.LocationId
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Sort Direction
       */
      Parameters.Sort
      has_geo?: /* Has Geo */ Parameters.HasGeo
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      coordinates?: /* Coordinates */ Parameters.Coordinates /* ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$ */
      radius?: /* Radius */ Parameters.Radius
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      location?: /* Location */ Parameters.Location
      order_by?: /**
       * LocationsOrder
       * Order by a field
       */
      Parameters.OrderBy
      isMobile?: /**
       * Ismobile
       * Location is mobile
       */
      Parameters.IsMobile
      isAnalysis?: /**
       * Isanalysis
       * Data is the product of a previous analysis/aggregation and not raw measurements
       */
      Parameters.IsAnalysis
      sourceName?: /**
       * Sourcename
       * Name of the data source
       */
      Parameters.SourceName
      entity?: /**
       * EntityTypes
       * Source entity type.
       */
      Parameters.Entity
      sensorType?: /**
       * SensorTypes
       * Type of Sensor
       */
      Parameters.SensorType
      modelName?: /**
       * Modelname
       * Model Name of Sensor
       */
      Parameters.ModelName
      manufacturerName?: /**
       * Manufacturername
       * Manufacturer of Sensor
       */
      Parameters.ManufacturerName
      dumpRaw?: /* Dumpraw */ Parameters.DumpRaw
    }
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace MeasurementsGetV1V1MeasurementsGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Coordinates
       */
      export type Coordinates = string // ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Date From
       */
      export type DateFrom /* Date From */ =
        | string /* date-time */
        | string /* date */
      /**
       * Date To
       */
      export type DateTo /* Date To */ =
        | string /* date-time */
        | string /* date */
      export type Entity = /**
       * EntityTypes
       * An enumeration.
       */ Components.Schemas.EntityTypes
      /**
       * Format
       */
      export type Format = string
      /**
       * Has Geo
       */
      export type HasGeo = boolean
      /**
       * Include Fields
       */
      export type IncludeFields = string
      /**
       * Isanalysis
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Location
       */
      export type Location = (number | string)[]
      /**
       * Location Id
       */
      export type LocationId = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * MeasOrder
       * An enumeration.
       */
      export type OrderBy = 'city' | 'country' | 'location' | 'datetime'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Project
       */
      export type Project = number
      /**
       * Radius
       */
      export type Radius = number
      export type SensorType = /**
       * SensorTypes
       * An enumeration.
       */ Components.Schemas.SensorTypes
      /**
       * Sort
       * An enumeration.
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Unit
       */
      export type Unit = string[]
      /**
       * Value From
       */
      export type ValueFrom = number
      /**
       * Value To
       */
      export type ValueTo = number
    }
    export interface QueryParameters {
      format?: /* Format */ Parameters.Format
      date_from?: /* Date From */ Parameters.DateFrom
      date_to?: /* Date To */ Parameters.DateTo
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * An enumeration.
       */
      Parameters.Sort
      has_geo?: /* Has Geo */ Parameters.HasGeo
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      coordinates?: /* Coordinates */ Parameters.Coordinates /* ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$ */
      radius?: /* Radius */ Parameters.Radius
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      location_id?: /* Location Id */ Parameters.LocationId
      location?: /* Location */ Parameters.Location
      order_by?: /**
       * MeasOrder
       * An enumeration.
       */
      Parameters.OrderBy
      isMobile?: /* Ismobile */ Parameters.IsMobile
      isAnalysis?: /* Isanalysis */ Parameters.IsAnalysis
      project?: /* Project */ Parameters.Project
      entity?: Parameters.Entity
      sensorType?: Parameters.SensorType
      value_from?: /* Value From */ Parameters.ValueFrom
      value_to?: /* Value To */ Parameters.ValueTo
      include_fields?: /* Include Fields */ Parameters.IncludeFields
    }
    namespace Responses {
      export type $200 = any
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace MeasurementsGetV2MeasurementsGet {
    namespace Parameters {
      /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      export type City = string[]
      /**
       * Coordinates
       */
      export type Coordinates = string // ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Date From
       */
      export type DateFrom /* Date From */ =
        | string /* date-time */
        | string /* date */
      /**
       * Date To
       */
      export type DateTo /* Date To */ =
        | string /* date-time */
        | string /* date */
      export type Entity = /**
       * EntityTypes
       * An enumeration.
       */ Components.Schemas.EntityTypes
      /**
       * Format
       */
      export type Format = string
      /**
       * Has Geo
       */
      export type HasGeo = boolean
      /**
       * Include Fields
       */
      export type IncludeFields = string
      /**
       * Isanalysis
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Location
       */
      export type Location = (number | string)[]
      /**
       * Location Id
       */
      export type LocationId = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * MeasOrder
       * An enumeration.
       */
      export type OrderBy = 'city' | 'country' | 'location' | 'datetime'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Project
       */
      export type Project = number
      /**
       * Radius
       */
      export type Radius = number
      export type SensorType = /**
       * SensorTypes
       * An enumeration.
       */ Components.Schemas.SensorTypes
      /**
       * Sort
       * An enumeration.
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Unit
       */
      export type Unit = string[]
      /**
       * Value From
       */
      export type ValueFrom = number
      /**
       * Value To
       */
      export type ValueTo = number
    }
    export interface QueryParameters {
      format?: /* Format */ Parameters.Format
      date_from?: /* Date From */ Parameters.DateFrom
      date_to?: /* Date To */ Parameters.DateTo
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * An enumeration.
       */
      Parameters.Sort
      has_geo?: /* Has Geo */ Parameters.HasGeo
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      coordinates?: /* Coordinates */ Parameters.Coordinates /* ^-?\d{1,2}\.?\d{0,8},-?1?\d{1,2}\.?\d{0,8}$ */
      radius?: /* Radius */ Parameters.Radius
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      city?: /**
       * City
       *
       *         Limit results by a certain city or cities.
       *         (ex. ?city=Chicago or ?city=Chicago&city=Boston)
       *
       */
      Parameters.City
      location_id?: /* Location Id */ Parameters.LocationId
      location?: /* Location */ Parameters.Location
      order_by?: /**
       * MeasOrder
       * An enumeration.
       */
      Parameters.OrderBy
      isMobile?: /* Ismobile */ Parameters.IsMobile
      isAnalysis?: /* Isanalysis */ Parameters.IsAnalysis
      project?: /* Project */ Parameters.Project
      entity?: Parameters.Entity
      sensorType?: Parameters.SensorType
      value_from?: /* Value From */ Parameters.ValueFrom
      value_to?: /* Value To */ Parameters.ValueTo
      include_fields?: /* Include Fields */ Parameters.IncludeFields
    }
    namespace Responses {
      export type $200 = any
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace MfrGetV2ManufacturersGet {
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
    }
  }
  namespace MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet {
    namespace Responses {
      export type $200 = /**
       * TileJSON
       * TileJSON model.
       * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
       */ Components.Schemas.TileJSON
    }
  }
  namespace MobiletilejsonV2LocationsTilesMobileTilesJsonGet {
    namespace Responses {
      export type $200 = /**
       * TileJSON
       * TileJSON model.
       * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
       */ Components.Schemas.TileJSON
    }
  }
  namespace ModelGetV2ModelsGet {
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
    }
  }
  namespace ParametersGetV2ParametersGet {
    namespace Parameters {
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * Order By
       */
      export type OrderBy = /* Order By */ string | string | string
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourceid
       */
      export type SourceId = number[]
      /**
       * Sourcename
       */
      export type SourceName = string[]
      /**
       * Sourceslug
       */
      export type SourceSlug = string[]
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      sourceName?: /* Sourcename */ Parameters.SourceName
      sourceId?: /* Sourceid */ Parameters.SourceId
      sourceSlug?: /* Sourceslug */ Parameters.SourceSlug
      order_by?: /* Order By */ Parameters.OrderBy
    }
    namespace Responses {
      export type $200 = /* OpenAQParametersResult */ Components.Schemas.OpenAQParametersResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace ParametersGetv1V1ParametersGet {
    namespace Parameters {
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * Order By
       */
      export type OrderBy = /* Order By */ string | string | string
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourceid
       */
      export type SourceId = number[]
      /**
       * Sourcename
       */
      export type SourceName = string[]
      /**
       * Sourceslug
       */
      export type SourceSlug = string[]
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      sourceName?: /* Sourcename */ Parameters.SourceName
      sourceId?: /* Sourceid */ Parameters.SourceId
      sourceSlug?: /* Sourceslug */ Parameters.SourceSlug
      order_by?: /* Order By */ Parameters.OrderBy
    }
    namespace Responses {
      export type $200 = /* OpenAQParametersResult */ Components.Schemas.OpenAQParametersResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace PongPingGet {
    namespace Responses {
      export type $200 = any
    }
  }
  namespace ProjectsGetV2ProjectsGet {
    namespace Parameters {
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Entity
       */
      export type Entity = string
      /**
       * Isanalysis
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * ProjectsOrder
       * An enumeration.
       */
      export type OrderBy =
        | 'id'
        | 'name'
        | 'subtitle'
        | 'firstUpdated'
        | 'lastUpdated'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Project
       */
      export type Project = (number | string)[]
      /**
       * Project Id
       */
      export type ProjectId = number
      /**
       * Sensortype
       */
      export type SensorType = string
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourcename
       */
      export type SourceName = string[]
      /**
       * Unit
       */
      export type Unit = string[]
    }
    export interface QueryParameters {
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      project_id?: /* Project Id */ Parameters.ProjectId
      project?: /* Project */ Parameters.Project
      order_by?: /**
       * ProjectsOrder
       * An enumeration.
       */
      Parameters.OrderBy
      isMobile?: /* Ismobile */ Parameters.IsMobile
      isAnalysis?: /* Isanalysis */ Parameters.IsAnalysis
      entity?: /* Entity */ Parameters.Entity
      sensorType?: /* Sensortype */ Parameters.SensorType
      sourceName?: /* Sourcename */ Parameters.SourceName
    }
    namespace Responses {
      export type $200 = /* OpenAQProjectsResult */ Components.Schemas.OpenAQProjectsResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace ProjectsGetV2ProjectsProjectIdGet {
    namespace Parameters {
      /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      export type Country = string /* [a-zA-Z][a-zA-Z] */[]
      /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      export type CountryId = string // [a-zA-Z][a-zA-Z]
      /**
       * Entity
       */
      export type Entity = string
      /**
       * Isanalysis
       */
      export type IsAnalysis = boolean
      /**
       * Ismobile
       */
      export type IsMobile = boolean
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * ProjectsOrder
       * An enumeration.
       */
      export type OrderBy =
        | 'id'
        | 'name'
        | 'subtitle'
        | 'firstUpdated'
        | 'lastUpdated'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Parameter
       */
      export type Parameter = (number | string)[]
      /**
       * Parameter Id
       */
      export type ParameterId = number
      /**
       * Project
       */
      export type Project = (number | string)[]
      /**
       * Project Id
       */
      export type ProjectId = number
      /**
       * Sensortype
       */
      export type SensorType = string
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourcename
       */
      export type SourceName = string[]
      /**
       * Unit
       */
      export type Unit = string[]
    }
    export interface PathParameters {
      project_id: /* Project Id */ Parameters.ProjectId
    }
    export interface QueryParameters {
      country_id?: /**
       * Country Id
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. /US)
       *
       */
      Parameters.CountryId /* [a-zA-Z][a-zA-Z] */
      country?: /**
       * Country
       *
       *         Limit results by a certain country using two letter country code.
       *         (ex. ?country=US or ?country=US&country=MX)
       *
       */
      Parameters.Country
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      parameter_id?: /* Parameter Id */ Parameters.ParameterId
      parameter?: /* Parameter */ Parameters.Parameter
      unit?: /* Unit */ Parameters.Unit
      project?: /* Project */ Parameters.Project
      order_by?: /**
       * ProjectsOrder
       * An enumeration.
       */
      Parameters.OrderBy
      isMobile?: /* Ismobile */ Parameters.IsMobile
      isAnalysis?: /* Isanalysis */ Parameters.IsAnalysis
      entity?: /* Entity */ Parameters.Entity
      sensorType?: /* Sensortype */ Parameters.SensorType
      sourceName?: /* Sourcename */ Parameters.SourceName
    }
    namespace Responses {
      export type $200 = /* OpenAQProjectsResult */ Components.Schemas.OpenAQProjectsResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace ReadmeGetV2SourcesReadmeSlugGet {
    namespace Parameters {
      /**
       * Slug
       */
      export type Slug = string
    }
    export interface PathParameters {
      slug: /* Slug */ Parameters.Slug
    }
    namespace Responses {
      export type $200 = any
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace SourcesGetV2SourcesGet {
    namespace Parameters {
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Offset
       */
      export type Offset = number
      /**
       * SourcesOrder
       * An enumeration.
       */
      export type OrderBy = 'sourceName' | 'firstUpdated' | 'lastUpdated'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
      /**
       * Sourceid
       */
      export type SourceId = number[]
      /**
       * Sourcename
       */
      export type SourceName = string[]
      /**
       * Sourceslug
       */
      export type SourceSlug = string[]
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      sourceName?: /* Sourcename */ Parameters.SourceName
      sourceId?: /* Sourceid */ Parameters.SourceId
      sourceSlug?: /* Sourceslug */ Parameters.SourceSlug
      order_by?: /**
       * SourcesOrder
       * An enumeration.
       */
      Parameters.OrderBy
    }
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace SourcesV1GetV1SourcesGet {
    namespace Parameters {
      /**
       * Limit
       * Change the number of results returned.
       */
      export type Limit = number
      /**
       * Name
       */
      export type Name = string
      /**
       * Offset
       */
      export type Offset = number
      /**
       * SourcesV1Order
       * An enumeration.
       */
      export type OrderBy = 'name'
      /**
       * Page
       * Paginate through results.
       */
      export type Page = number
      /**
       * Sort
       * Define sort order.
       */
      export type Sort = 'asc' | 'desc'
    }
    export interface QueryParameters {
      limit?: /**
       * Limit
       * Change the number of results returned.
       */
      Parameters.Limit
      page?: /**
       * Page
       * Paginate through results.
       */
      Parameters.Page
      offset?: /* Offset */ Parameters.Offset
      sort?: /**
       * Sort
       * Define sort order.
       */
      Parameters.Sort
      name?: /* Name */ Parameters.Name
      order_by?: /**
       * SourcesV1Order
       * An enumeration.
       */
      Parameters.OrderBy
    }
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
      export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError
    }
  }
  namespace SummaryGetV2SummaryGet {
    namespace Responses {
      export type $200 = /* OpenAQResult */ Components.Schemas.OpenAQResult
    }
  }
  namespace TilejsonV2LocationsTilesTilesJsonGet {
    namespace Responses {
      export type $200 = /**
       * TileJSON
       * TileJSON model.
       * Based on https://github.com/mapbox/tilejson-spec/tree/master/2.2.0
       */ Components.Schemas.TileJSON
    }
  }
}
