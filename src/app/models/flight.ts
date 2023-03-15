export interface Flight {
    id: number
    origin: number
    destination: number
    departureTime: Date
    arrivalTime: Date
    seatsAvailable: number
    seatCost: number
    flightNumber: string
}