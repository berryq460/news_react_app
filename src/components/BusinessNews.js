import React from 'react';
import {useState, useEffect} from "react";

function BusinessNews(props){

    
    //  console.log(props.businesslist);
  // destructured form of line 9 with post.id

  const [BusinessNews, setBusinessNews] = useState([])

  useEffect(() => {
    setBusinessNews(props.businesslist.articles);
  }, [])

  console.log(BusinessNews);

  return (
      <div className="posts">
          <ul> 
            {props.businesslist.articles.map((post, index) => {
              return <li> {post.title}</li>
            })}
          </ul>
      </div>
    )
}

export default BusinessNews;