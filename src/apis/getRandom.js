import { http } from "./http"

export const getSingleRandomQuote = async () => {
  const { data } = await http.get('/random', {
    params: {
      minLength: 5,
      maxLength: 30,
    }
  });
  return data;
}

export const getRandomQuotes = async () => {
  const { data } = await http.get('/quotes/random',{
    params: {
      minLength: 5,
      maxLength: 30,
    }
  })
  return data;
}