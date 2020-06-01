import React, { useState, useEffect } from "react";
import axios from "axios";

function FuncFetchPost() {
  const [id, setId] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("Error :", err.message);
      });
  }, [id]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {/* <div>{posts.title}</div> */}
      {/* <ul>

   {
    posts.map(post => <li key={post.id}>{post.title}</li>)
   }
   </ul> */}
    </div>
  );
}

export default FuncFetchPost;
