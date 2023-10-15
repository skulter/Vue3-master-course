import { http } from "./http";

export const getSearchQuotes = async (query) => {
  const { data } = await http.get("/search/quotes",{
    params: {
      query
    },
  })
  return data;
}

export const getSearchAuthors = async (query) => {
  const { data } = await http.get("/search/authors", {
    params: {
      query
    },
  })
  return data;
}