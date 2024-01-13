import React, { useState, useEffect } from "react";

const HookEffect = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("UseEffect Called");
    document.title = `React Meta Title ${count}`;
  }, [count]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    }
    getData();
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      {data.map((item) => (
        <li key={Math.random()}>{item.title}</li>
      ))}
    </div>
  );
};

export default HookEffect;
