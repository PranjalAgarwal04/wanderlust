// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const LocationType = {
  "EXOTIC": "EXOTIC",
  "NONEXOTIC": "NONEXOTIC"
};

const { HotelBooking, FlightBooking, Location, Hotel, Flight, User } = initSchema(schema);

export {
  HotelBooking,
  FlightBooking,
  Location,
  Hotel,
  Flight,
  User,
  LocationType
};