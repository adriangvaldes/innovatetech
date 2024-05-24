/// <reference types="nativewind/types" />

interface UserCardProps {
  user: UserType;
}

interface FlatListProps {
  item: UserType;
}

interface UserType {
  photo: string;
  name: string;
  gender: Gender;
  email: string;
  birthDate: string;
  phone: string;
  nationality: string;
  address: Location;
  identification: UserId;
  id: string;
}

interface UserFetchedType {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  picture: Picture;
  nat: string;
  id: UserId;
}

type Gender = "female" | "male";

interface UserId {
  name: string;
  value: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Dob {
  date: string;
  age: number;
}

interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: string;
}

interface Name {
  title: string;
  first: string;
  last: string;
}

interface Street {
  number: number;
  name: string;
}

type CardProviderProps = {
  children: ReactNode;
};

type GenderSearch = "male" | "female";
