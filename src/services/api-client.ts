import { ReqConfigProps } from "../hooks/useData";

const baseUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

export enum ReqMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export default (
  endpoint: string,
  method: ReqMethod,
  signal: AbortSignal,
  requestConfig?: ReqConfigProps,
): Promise<Response> => {
  const url = new URL("/api" + endpoint, baseUrl);
  const params = {
    ...(apiKey ? { key: apiKey } : {}),
    ...(requestConfig?.params?.genres ? requestConfig?.params : {}),
  };

  url.search = new URLSearchParams(params).toString();

  return fetch(url.href, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    signal,
  });
};
