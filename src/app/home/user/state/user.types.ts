interface Name {
  title: string;
  first: string;
  last: string;
}
interface Location {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
}
interface Timezone {
  offset: string;
  description: string;
}
interface Picture {
  thumbnail: string;
  medium: string;
  large: string;
}
interface AgeOf {
  date: string;
  age: number;
}

interface User {
  name: Name;
  location: Location;
  timezone: Timezone;
  email: string;
  dob: AgeOf;
  registered: AgeOf;
  phone: string;
  cell: string;
  nat: string;
  picture: Picture;
}

export { User, Location, Picture, AgeOf, Timezone, Name };
