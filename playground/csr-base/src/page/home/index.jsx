import React, { useState } from 'react';
import css from './index.module.scss';
import Icon from '../../asset/icon.jpg';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className={css.home}>
      Home asdfads123

      <div>
        <button onClick={() => setCount(pre => pre + 2)}>增加 2</button>
        <br />
        <button onClick={() => setCount(pre => pre - 1)}>减少 1</button>
        <div>count - {count}</div>
      </div>

      <div className={css.newDiv}>
        新增的 div 标签
      </div>

      <img src={Icon} />
    </div>
  );
}

export default Home;
