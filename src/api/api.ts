import axios, { AxiosError } from "axios";
import { formatDate } from "../utils/dateUtils";

const endpointUrl = "https://randomuser.me/api/";

const api = axios.create({
  baseURL: endpointUrl,
});

export { api };

export async function fetchUsers() {
  try {
    const data = await api.get("/?nat=br&results=20");
    const usersFetched: UserFetchedType[] = data.data.results;
    return usersFetched.map(
      (user) =>
        ({
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          gender: user.gender,
          birthDate: formatDate(user.dob.date),
          photo: user.picture.medium,
        } as UserType)
    );
  } catch (err: any | AxiosError) {
    throw new Error(err);
  }
}

export async function fetchNextPage() {
  try {
    const data = await api.get(`/?page=${"2"}&nat=br&results=20`);
    const usersFetched: UserFetchedType[] = data.data.results;
    return usersFetched.map(
      (user) =>
        ({
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          gender: user.gender,
          birthDate: formatDate(user.dob.date),
          photo: user.picture.medium,
        } as UserType)
    );
  } catch (err: any | AxiosError) {
    throw new Error(err);
  }
}
