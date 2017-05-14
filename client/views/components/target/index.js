import React from 'react';
import { Button } from '@blueprintjs/core';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Link } from 'react-router';
import style from './target.css';
import colors from './colors';


const getCountName = (props, countId) => {
  const count = props.myCounts.counts.find((count) => count._id === countId);

  return count && count.countName;
};


const getData = (props) => {
  const remainder = { name: 'Остаток', value: props.target.sum, fill: '#ccc' };
  const result = [];
  props.target.attachments.forEach((attachment, index) => {
    remainder.value -= attachment.value;
    result.push({
      name: getCountName(props, attachment.count),
      value: Number(attachment.value),
      fill: colors[index % colors.length],
    });
  });

  if (remainder.value > 0) {
    result.push(remainder);
  }
  return result;
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
          data={data}
          innerRadius={90}
        >
          {data.map((entry) => <Cell fill={entry.fill} />)}
        </Pie>
        <Tooltip />
      </PieChart>
      <Link to={`/targets/${props.target._id}`}>{props.target.targetName}</Link>
    </div>
  );
};
