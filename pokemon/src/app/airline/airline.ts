import { Flight } from "../flight/flight";

export class Airline {
    public id:string;
    public airlineName:string;
    public country:string;
    public city:string;
    public identityColor:string;
    public slogan:string;
    public flight:Flight[];
    public constructor(id:string, airlineName:string, country:string, city:string, identityColor:string, slogan:string, flight:Flight[]) {
        this.id = id;
        this.airlineName = airlineName;
        this.country = country;
        this.city = city;
        this.identityColor = identityColor;
        this.slogan = slogan;
        this.flight = flight;
    }
}
