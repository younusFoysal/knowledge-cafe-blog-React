

import './App.css'
import Header from "./components/Header/Header.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Bookmarks from "./components/Bookmarks/Bookmarks.jsx";
import {useState} from "react";
import blog from "./components/Blog/Blog.jsx";

function App() {
    const [bookmarks, setBookmarks ] = useState([]);


    // Event handler
    const handleAddToBookmark = blog => {
        //console.log(blog, "from bookmark")
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    }


  return (
      <>
          <Header></Header>
          <div className='md:flex max-w-7xl mx-auto'>
              <Blogs
                  handleAddToBookmark={handleAddToBookmark}

              ></Blogs>
              <Bookmarks
                bookmarks={bookmarks}
              ></Bookmarks>
          </div>

      </>
  )
}

export default App
