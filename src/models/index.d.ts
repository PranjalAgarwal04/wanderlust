import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum LocationType {
  EXOTIC = "EXOTIC",
  NONEXOTIC = "NONEXOTIC"
}



type EagerHotelBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HotelBooking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rooms?: number | null;
  readonly hotelName?: string | null;
  readonly checkIn?: string | null;
  readonly checkOut?: string | null;
  readonly author?: string | null;
  readonly price?: number | null;
  readonly paymentStatus?: boolean | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHotelBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HotelBooking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rooms?: number | null;
  readonly hotelName?: string | null;
  readonly checkIn?: string | null;
  readonly checkOut?: string | null;
  readonly author?: string | null;
  readonly price?: number | null;
  readonly paymentStatus?: boolean | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HotelBooking = LazyLoading extends LazyLoadingDisabled ? EagerHotelBooking : LazyHotelBooking

export declare const HotelBooking: (new (init: ModelInit<HotelBooking>) => HotelBooking) & {
  copyOf(source: HotelBooking, mutator: (draft: MutableModel<HotelBooking>) => MutableModel<HotelBooking> | void): HotelBooking;
}

type EagerFlightBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FlightBooking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly passengers?: number | null;
  readonly flightName?: string | null;
  readonly source?: string | null;
  readonly destination?: string | null;
  readonly date?: string | null;
  readonly author?: string | null;
  readonly price?: number | null;
  readonly paymentStatus?: boolean | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFlightBooking = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FlightBooking, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly passengers?: number | null;
  readonly flightName?: string | null;
  readonly source?: string | null;
  readonly destination?: string | null;
  readonly date?: string | null;
  readonly author?: string | null;
  readonly price?: number | null;
  readonly paymentStatus?: boolean | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FlightBooking = LazyLoading extends LazyLoadingDisabled ? EagerFlightBooking : LazyFlightBooking

export declare const FlightBooking: (new (init: ModelInit<FlightBooking>) => FlightBooking) & {
  copyOf(source: FlightBooking, mutator: (draft: MutableModel<FlightBooking>) => MutableModel<FlightBooking> | void): FlightBooking;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly exotic?: LocationType | keyof typeof LocationType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly exotic?: LocationType | keyof typeof LocationType | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerHotel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hotel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly price?: number | null;
  readonly roomsAvailable?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHotel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Hotel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly price?: number | null;
  readonly roomsAvailable?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Hotel = LazyLoading extends LazyLoadingDisabled ? EagerHotel : LazyHotel

export declare const Hotel: (new (init: ModelInit<Hotel>) => Hotel) & {
  copyOf(source: Hotel, mutator: (draft: MutableModel<Hotel>) => MutableModel<Hotel> | void): Hotel;
}

type EagerFlight = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Flight, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly number?: number | null;
  readonly departureDate?: string | null;
  readonly arrivalDate?: string | null;
  readonly from?: string | null;
  readonly to?: string | null;
  readonly seatsAvailable?: number | null;
  readonly price?: number | null;
  readonly route?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFlight = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Flight, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly number?: number | null;
  readonly departureDate?: string | null;
  readonly arrivalDate?: string | null;
  readonly from?: string | null;
  readonly to?: string | null;
  readonly seatsAvailable?: number | null;
  readonly price?: number | null;
  readonly route?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Flight = LazyLoading extends LazyLoadingDisabled ? EagerFlight : LazyFlight

export declare const Flight: (new (init: ModelInit<Flight>) => Flight) & {
  copyOf(source: Flight, mutator: (draft: MutableModel<Flight>) => MutableModel<Flight> | void): Flight;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly FlightBookings?: (FlightBooking | null)[] | null;
  readonly HotelBookings?: (HotelBooking | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly FlightBookings: AsyncCollection<FlightBooking>;
  readonly HotelBookings: AsyncCollection<HotelBooking>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}