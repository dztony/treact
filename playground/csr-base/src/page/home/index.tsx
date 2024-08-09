import React, { useState } from 'react';
import css from './index.module.scss';
import Icon from '@/asset/icon.jpg';
import { printLog } from '@/utils/common.ts';

function Home() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(pre => pre + 2);
    printLog();
  }

  return (
    <div className={css.home}>
      Home page after modify - 99999

      <div>
        <button onClick={handleAdd}>增加 2</button>
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
