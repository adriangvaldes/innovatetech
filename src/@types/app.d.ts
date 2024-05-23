/// <reference types="nativewind/types" />

interface UserCardProps {
  user: UserType;
}

interface FlatListProps {
  item: UserType;
}

interface UserType {
  name: string;
  gender: string;
  birthDate: string;
  photo: string;
}

interface UserFetchedType {
  name: {
    title: string;
    first: string;
    last: string;
  };
  dob: { date: string };
  gender: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
