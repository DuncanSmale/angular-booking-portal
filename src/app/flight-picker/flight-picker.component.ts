import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Flight } from '../models/flight';
import { BetweenDateSearch, DaysToSearch, FlightSearch, FlightSearchType, OriginDestinationSearch } from '../models/flightSearch';
import { FlightsService } from '../services/flights.service';

@Component({
  selector: 'app-flight-picker',
  templateUrl: './flight-picker.component.html',
  styleUrls: ['./flight-picker.component.css']
})
export class FlightPickerComponent implements OnInit {

  @Input() flights: Flight[] = []
  @Output() flightsChange = new EventEmitter()

  searchOptions = ['DAYS', 'DATEFROM', 'ORIGINDESTINATION']

  searchMap = {
    [FlightSearchType.DAYS_TO_DEPARTURE_SEARCH]: (): DaysToSearch => { return { searchType: FlightSearchType.DAYS_TO_DEPARTURE_SEARCH, daysToDeparture: this.control.value } },
    [FlightSearchType.DEPARTURE_TIME_SEARCH]: (): BetweenDateSearch => { return { searchType: FlightSearchType.DEPARTURE_TIME_SEARCH, departureDateFrom: this.startDateControl.value, departureDateTo: this.endDateControl.value } },
    [FlightSearchType.ORIGIN_DESTINATION_SEARCH]: (): OriginDestinationSearch => { return { searchType: FlightSearchType.ORIGIN_DESTINATION_SEARCH, origin: this.origin.value, destination: this.destination.value } },
  }



  chosen = 'DAYS'

  cities = ["Johannesburg", "Capetown", "Durban", "George", "East London", "Port Elizabeth"];

  control: FormControl = new FormControl()
  origin: FormControl = new FormControl()
  destination: FormControl = new FormControl()
  startDateControl: FormControl<Date> = new FormControl()
  endDateControl: FormControl<Date> = new FormControl()

  constructor(private flightService: FlightsService) {

  }

  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe(res => {
      this.flightsChange.emit(res)
    })
  }

  search(params: FlightSearch) {
    console.log(params)
    this.flightService.searchFlights(params).subscribe(res => {
      if (res) this.flightsChange.emit(res)
      else this.flightsChange.emit([])
    })
  }

  constructSearchParams(option: string): FlightSearch {
    let searchOption = this.optionToSearch(option)
    let search: FlightSearch = this.searchMap[searchOption]();

    return search
  }

  optionToSearch(option: string) {
    if (option === 'DAYS') return FlightSearchType.DAYS_TO_DEPARTURE_SEARCH
    if (option === 'DATEFROM') return FlightSearchType.DEPARTURE_TIME_SEARCH
    if (option === 'ORIGINDESTINATION') return FlightSearchType.ORIGIN_DESTINATION_SEARCH
    return FlightSearchType.DAYS_TO_DEPARTURE_SEARCH
  }


}
