import React from "react";
import Article from "./Article";

function ArticleList({posts}) {
   const eachArticle = posts.map( posts => {
      return (
          <Article key={posts.id} date={posts.date} title={posts.title} preview={posts.preview}/>
      );
        }
       )
    return (
        <div className="ArticleList">
            <main>
                {eachArticle}
            </main>
        </div>
    );
}


export default ArticleList;