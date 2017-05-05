import React from 'react';
import { Button } from '@blueprintjs/core';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import style from './target.css';
import colors from './colors';


const getData = (props) => {
  const result = [];
  let sum = 0;
  props.moCounts.counts.forEach((count, index) => {
    sum += count.balance;
    result.push({
      name: count.countName,
      value: count.balance,
      colors: colors[index % colors.length],
    });
  });

  const reminder = {
    name: 'Остаток',
    value: props.target.sum - sum,
    colors: '#808080',
  };

  if (props.target.sum - sum > 0) {
    result.push(reminder);
  }

  return {
    result: result,
    reminder: props.target.sum - sum,
  };
};

const getTitle = (props, reminder) => {
  if (reminder > 0) {
    return `${props.target.targetName} (${reminder} / ${props.target.sum})`;
  }

  return `${props.target.targetName} (${props.target.sum} - Успешно)`;
};

export default (props) => {
  const data = getData(props);
  return (
    <div className={style.target}>
      <div className={style.countTools}>
        <Button onClick={() => props.deleteTarget(props.target._id)} className="icon-btn" iconName="remove" />
      </div>
      <PieChart width={310} height={310}>
        <Pie
          data={data.result}
          innerRadius={90}
        >
          {data.result.map((item) => (
            <Cell fill={item.colors} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <span className={style.title}>{getTitle(props, data.reminder)}</span>
    </div>
  );
};
