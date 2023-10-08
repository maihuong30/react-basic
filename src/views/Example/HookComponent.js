import React, { useState, useEffect } from 'react';
import postApi from '../../services/post';

function HookComponent() {
   // Sử dụng useState để khai báo trạng thái
   const [count, setCount] = useState(0);
   // Sử dụng useEffect để thực hiện các tác vụ liên quan đến side effect
   useEffect(() => {
      document.title = `Count: ${count}`;
   }, [count]); // Dependency array để chỉ chạy effect khi trạng thái count thay đổi


   // call api
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      postApi.getPost()
         .then(response => {
            setPosts(response.data)
         })
         .catch(error => {
            console.error(error);
         });

   }, [])

   return (
      <div>
         <h1>Count: {count}</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>

         <ul>
            { posts.map( post => (
              <li key={post.id}>{post.title}</li>
            ))}
         </ul>
      </div>
   );
}

export default HookComponent;
