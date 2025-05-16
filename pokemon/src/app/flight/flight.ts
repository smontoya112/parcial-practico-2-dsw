export class Flight {   
    private id: string;
    private departureAirport: string;
    private departureCity: string;
    private arrivalAirport: string;
    private arrivalCity: string;
    private departureTime: string;
    private flightDuration: string;
    private image: string;
    public constructor(id: string, departureAirport: string, departureCity: string, arrivalAirport: string, arrivalCity: string, departureTime: string, flightDuration: string, image: string) {    
        this.id = id;
        this.departureAirport = departureAirport;
        this.departureCity = departureCity;
        this.arrivalAirport = arrivalAirport;
        this.arrivalCity = arrivalCity;
        this.departureTime = departureTime;
        this.flightDuration = flightDuration;
        this.image = image;
    }
}
