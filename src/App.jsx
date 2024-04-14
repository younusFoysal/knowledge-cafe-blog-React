

import './App.css'
import Header from "./components/Header/Header.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import Bookmarks from "./components/Bookmarks/Bookmarks.jsx";
import {useState} from "react";
import blog from "./components/Blog/Blog.jsx";
import bookmark from "./components/Bookmark/Bookmark.jsx";

function App() {
    const [bookmarks, setBookmarks ] = useState([]);
    const [readingTime, setReadingTime] = useState(0)


    // Event handler
    const handleAddToBookmark = blog => {
        //console.log(blog, "from bookmark")
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    }

    const handleMarkAsRead = (id, time) => {
        console.log('marking as read', time);
        const newReadingTime = readingTime + time;
        setReadingTime(newReadingTime);

        //remove the read blog from bookmark
        //console.log("remove bookmark", id)
        const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
        setBookmarks(remainingBookmarks)

    }


  return (
      <>
          <Header></Header>
          <div className='md:flex max-w-7xl mx-auto'>
              <Blogs
                  handleAddToBookmark={handleAddToBookmark}
                  handleMarkAsRead={handleMarkAsRead}

              ></Blogs>
              <Bookmarks
                bookmarks={bookmarks}
                readingTime={readingTime}
              ></Bookmarks>
          </div>

      </>
  )
}

export default App
