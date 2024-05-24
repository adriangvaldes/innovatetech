import axios, { AxiosError } from "axios";
import { formatDate } from "../utils/dateUtils";

const endpointUrl = "https://randomuser.me/api/";

const api = axios.create({
  baseURL: endpointUrl,
});

export { api };

export async function fetchUsers(page = 1) {
  try {
    const data = await api.get(`/?page=${page}&nat=br&results=10&seed=abc`);
    const usersFetched: UserFetchedType[] = data.data.results;
    return usersFetched.map(
      (user) =>
        ({
          photo: user.picture.large,
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          email: user.email,
          gender: user.gender,
          birthDate: formatDate(user.dob.date),
          phone: user.phone,
          nationality: user.nat,
          address: user.location,
          identification: user.id,
          id: user.id.value,
        } as UserType)
    );
  } catch (err: any | AxiosError) {
    throw new Error(err);
  }
}
