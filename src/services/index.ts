import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const BASE_URL = "BURL";
const CARD_DB_URL = "CDBURL";

export const baseAPI: AxiosInstance = axios.create({
  timeout: 1000,
  baseURL: BASE_URL,
});

export const cardDBAPI: AxiosInstance = axios.create({
  baseURL: CARD_DB_URL,
});
