import axios, { AxiosResponse } from "axios";

const baseURL = "https://api.spotify.com/v1/";
const accessToken =
  "Bearer BQB9EI1X6TQm9vMXYxkFaoZPUBmLrd82x7eDzoTfWPg7lxJjjnxorj_PHPFf6S5UGgT-P0LzwIwEGkM9llIX1_RnuBivPDQ7a-5ITuPu0BhZ1o_uxlk";

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
