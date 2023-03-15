export interface CustomerSearch {
    searchType: CustomerSearchType
}

export interface UsernameSearch extends CustomerSearch {
    username: string
}

export interface NameSearch extends CustomerSearch {
    firstName: string
    lastName: string
}

export interface PassportSearch extends CustomerSearch {
    passport: string
}

export enum CustomerSearchType {
    NAME_SEARCH,
    PASSPORT_SEARCH,
    USER_SEARCH
}