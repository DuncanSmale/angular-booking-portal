export interface FlightSearch {
    searchType: FlightSearchType
}

export interface DaysToSearch extends FlightSearch {
    daysToDeparture: number
}

export interface BetweenDateSearch extends FlightSearch {
    departureDateFrom: Date
    departureDateTo: Date
}

export interface OriginDestinationSearch extends FlightSearch {
    origin: string
    destination: string
}

export enum FlightSearchType {
    DAYS_TO_DEPARTURE_SEARCH,
    DEPARTURE_TIME_SEARCH,
    ORIGIN_DESTINATION_SEARCH
}