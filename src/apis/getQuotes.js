import { http } from "./http"

export const getQuotes = async (page = 1) => {
  const { data } = await http.get('/quotes',{
    params: {
      limit: 10,
      page
    }
  })
  return data;
}

export const getQuote = async (id) => {
  const { data } = await http.get(`/quotes/${id}`)
  const { data: {results} } = await http.get(`/authors?slug=${data.authorSlug}`) 
  const authorId = results[0]?._id;
  
  if(authorId) {
    const  { data: author } = await http.get(`/authors/${authorId}`) 
    const IMAGE_BASE = 'https://images.quotable.dev/profile'
    data.thumbnail = `${IMAGE_BASE}/200/${author.slug}.jpg`
    Object.assign(data, author)
  }

  return data;  
}
