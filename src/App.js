import React, { useState } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import Post from './components/Posts/Post'
import Comment from './components/Comments/Comment'
import data from './dummy-data';
const App = () => {
  const [search , setsearch] = useState('');
  const searchhandel = (e) => setsearch(e.target.value);
  console.log(search)
  return (
    <div>
        {/* search bar */}
        <SearchBar  searchhandel={searchhandel}/>
          {
            data.filter((val) =>{
             if(val.username === ""){
              return val
             }
             else if(val.username.toLowerCase().includes(search.toLowerCase())){
              return val
             }
            }).
            map((item, index) =>{
              console.log(item.likes)
             return(
                <Post 
                 like={item.likes} 
                 imageUrl={item.imageUrl} 
                 Comment={item.comments}
                 usernames={item.username}
                
                 />
             )
            })
          }
    </div>
  )
}

export default App

