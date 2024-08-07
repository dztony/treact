import React, { useState } from 'react';
import css from './index.module.scss';
import { getAppName } from '@/utils/common.ts';

function Policy() {
  const [name, setName] = useState('');

  function handleOnClick() {
    const appName = getAppName();
    setName(appName);
  }

  return (
    <div className={css.policy}>
      <h3>policy page</h3>
      <div>
        待添加的内容
      </div>

      <button onClick={handleOnClick}>按钮</button>
      <div>
        当前的应用名称 - {name}
      </div>
    </div>
  );
}

export default Policy;
