import http from "./http";

export const getSearchQuotes = async (query) => {
  const { data } = await http.get("/search/quotes",{
    query,
  })
  return data;
}

export const getSearchAuthors = async (query) => {
  const { data } = await http.get("/search/authors", {
    query,
  })
  return data;
}