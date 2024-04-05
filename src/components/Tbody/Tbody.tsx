import styles from './Tbody.module.css';
import useTable from '../../hooks/useTable';
import CheckValueString from './CheckValueString';
import { useContext } from 'react';
import { stateContext } from '../../StateContext';

interface TbodyProps {
  rows: number;
  page: number;
}

const Tbody = ({ rows, page }: TbodyProps) => {
  const data = useContext(stateContext);
  const { slice } = useTable(data, page, rows);

  return (
    <>
      <div className={styles.tbody}>
        {slice.map((item, index) => {
          const columns = Object.values(item);

          return (
            <div key={index} className={styles.rows}>
              {columns.map((column, index) => {
                return (
                  <div className={styles.value} key={index}>
                    <CheckValueString value={column} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tbody;
