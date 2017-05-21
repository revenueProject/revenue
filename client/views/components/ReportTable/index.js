import React from 'react';
import style from './reportTable.css';

const columns = [
  { key: 'date', value: 'Дата' },
  { key: 'action', value: 'Действие' },
  { key: 'sum', value: 'Сумма' },
  { key: 'comment', value: 'Комментарий' },
  { key: 'count', value: 'Счет' },
];

export default (props) => {
  const logs = props.logs;
  return (
    <table className={style.logTable}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th className={style.columnTitle} key={column.key}>{column.value}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log._id}>
            {columns.map((column) => (
              <th className={style.cell} key={`${log._id}_${column.key}`}>{log[column.key]}</th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

