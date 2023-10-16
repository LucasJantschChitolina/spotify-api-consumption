import axios, { AxiosResponse } from "axios";

const baseURL = "https://api.spotify.com/v1/";
const accessToken =
  "Bearer BQBT0MxygsKGCKUVntR-UQ9TeknqXq06PJfaPZc5JLjpzPCT58B9PXtPLk-cf3Lo3UEqH-A9fqbKL3Edc4XXw0LlrfM4QFGyne-RfYzOHfqIw7LqzeM";

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
