import axios, { AxiosResponse } from "axios";

const baseURL = "https://api.spotify.com/v1/";

const accessToken =
  "Bearer BQCbXKv_vsdk10VJJc2kK9eiwkPnnu70wVLvJ6Jzu0tNzAEfV97ucmEK-Cy_PvpFRzU2vjv0rLb9b1xvWNnTbPhxSQSeEnodniLyWJfk0SFlXrFgbPQ";

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: accessToken,
  },
});

type SpotifyResponse<T> = AxiosResponse<T>;

export function performSpotifyRequest<T>(
  endpoint: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params?: Record<string, any>
): Promise<SpotifyResponse<T>> {
  return axiosInstance
    .get<T>(endpoint, { params })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
}
