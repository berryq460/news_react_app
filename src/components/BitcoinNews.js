import React from 'react';
import {useState, useEffect} from "react";
import Data from "../services/data";
import axios from "axios";

function BitcoinNews(props){;

  let apikey = `${process.env.REACT_APP_API_KEY}`
  let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apikey}`;

      // console.log(props.newslist);
    // destructured form of line 9 with post.id

    const [BitcoinNews, setBitcoinNews] = useState([])

    // useEffect(() => {
    //   setBitcoinNews(Data.data.articles)
    // }, [])

    // console.log(BitcoinNews);

    useEffect(() => { 
      const search = async () => {
        const data = await axios.get(url)
        // console.log(data);
        setBitcoinNews(data.data.articles);
      }
      search();
      
    }, [])

    console.log(BitcoinNews);

    return (
        <div className="posts">
            <ul> 
              {BitcoinNews.map((post, index) => {
                return <li> {post.author}</li>
              })}
            </ul>
            
        </div>
      )
}

export default BitcoinNews;