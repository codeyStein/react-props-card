import "./style.css"
import Blog from "./Blog"
import blogData from "./blogData"

function App() {
  
  console.log(blogData)

  const blogCard = blogData.map(blog => {
    return <Blog 
    key={blog.id}
    blog={blog}
    />
  })

  return (
    <div className="app">

      <div className="blog--container">
        {blogCard}
      </div>

    </div>
  );
}

export default App;
