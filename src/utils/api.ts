import axios, { AxiosResponse } from "axios";

const baseURL = "https://api.spotify.com/v1/";

const accessToken =
  "Bearer BQCzFNF2OS3XjYzszt214ScHkfic1BZZPTwM2nspBpnhdfYRCcyNYk2ifUzyD8cCIsXRFEhUsdShwXlh5JDvHZXVx6u1AhQR2KuUPz-gQDBnSHbTBxk";

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
