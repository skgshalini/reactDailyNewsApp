import React,{useState,useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';



const News = (props)=> {
   
 const   capitlizeText =(word) =>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
   

const [loading,setLoading] =useState (true)
const [page,setPage] =useState (1)
const [articles,setArticles] =useState ([])
const [totalResults,setTotalResults] =useState (0)
    const upDateNews = async() =>{
    
       
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page+1}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
        
        let data = await fetch(url);
        
        let parsedData = await data.json();
        
        setPage(page+1)
        setArticles(articles.concat(parsedData.articles))
      
    }
    
    const initRender = async()=>{
        props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    
useEffect( ()=>{
    initRender()
},[])

   const fetchMoreData = async ()=>{
       
      await upDateNews();
    }

 
        return (

            <>

                <div className="container my-3" >
                    <h2 className="text-center my-3">Daily News - Top Headlines from {capitlizeText(props.category)}</h2>
                    {loading && <Spinner/>}
                    <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
  
    hasMore={articles.length !== totalResults}
    loader={<Spinner/>}
   
  >              <div className="container py-2" >
   
                    <div div className="row" >
                        {articles.map((element) => <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />

                        </div>)}


                   </div>
                   </div>
                    
                    </InfiniteScroll>
                   
                </div>

            </>

        )
    
}
News.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'science'

}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.string,
    category: PropTypes.string

}
export default News
