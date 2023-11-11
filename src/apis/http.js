import axios from "axios";

export const httpInstance = axios.create({
  baseURL: "/api",
})

export const http =  {
  get: (url,params) => httpInstance.get(url, params),
  post: (url, params) => httpInstance.post(url, params)
}