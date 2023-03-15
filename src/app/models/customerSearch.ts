export interface CustomerSearch {
    searchType: CustomerSearchType
    firstName?: string
    lastName?: string
    passport?: string
    username?: string
}

export enum CustomerSearchType {
    NAME_SEARCH,
    PASSPORT_SEARCH,
    USER_SEARCH
}