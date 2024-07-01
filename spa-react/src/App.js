import React, { useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  let [posts, setPosts] = useState([
    { id: 1, title: "Hello World", body: "Welcome to learning React" },
    { id: 2, title: "Installation", body: "You have to install React" },
    { id: 3, title: "Hello World 2", body: "Welcome to learning React" },
    { id: 4, title: "Installation 2", body: "You have to install React" },
  ]);
  let incrementHandler = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };
  let deletePost = (id) => {
    let newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h3>Count - {count}</h3>
      <button onClick={incrementHandler}>Increment</button>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <button onClick={() => deletePost(post.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
