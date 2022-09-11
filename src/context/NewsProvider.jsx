
import axios from 'axios';
import { useState, useEffect} from 'react'
import { NewsContext } from './NewsContext'



 export const NewsProvider = ({children}) => {
  const  [category, setCategory] = useState('general');
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [totalNews, setTotalNews] = useState(0)
   
  useEffect(() => {
    const consultApi = async ()=>{
      const url = `https://newsapi.org/v2/top-headlines?
      country=us&category=${category}&apikey=${import.meta.env.VITE_API_KEY}`
      
      const {data} = await axios (url)
      
      setNews(data.articles)
      setTotalNews(data.totalResults)
      setPage(1)
    }
    consultApi()
  }, [category])

  useEffect(() => {
    const consultarAPI = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

        const { data } = await axios(url)
        setNews(data.articles)
        setTotalNews(data.totalResults)
    }
    consultarAPI()
}, [ page]) 
  
  const handleChangeCategory = e =>{
    setCategory(e.target.value);
  }
  const handleChangePage = (e, value) => {
    setPage(value)
}
 

  return (
    <NewsContext.Provider
    value={{
      category,
      handleChangeCategory,
      news,
      totalNews,
      handleChangePage,
      page,
    }}>
        {children}
    </NewsContext.Provider>
  )
}


