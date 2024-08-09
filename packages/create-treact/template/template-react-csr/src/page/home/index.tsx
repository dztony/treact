import React from 'react';

function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      home page 123123

      <div>
        <button onClick={() => setCount(pre => pre + 2)}>增加 +2</button>

        <br />

        <button onClick={() => setCount(pre => pre - 1)}>减少 -1</button>

        <div>
          count - {count}
        </div>
      </div>
    </div>
  );
}

export default Home;
