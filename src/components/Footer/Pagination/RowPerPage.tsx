import { Dispatch, SetStateAction, useState } from 'react';
import select from '../../../assets/icons/down.svg';
import styles from './Pagination.module.css';

interface RowPerPageProps {
  rowsTable: number[];
  rows: number;
  setRows: Dispatch<SetStateAction<number>>;
}

const RowPerPage = ({ rowsTable, rows, setRows }: RowPerPageProps) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.rowsWrap}>
      {'Rows per page:'}
      <div className={styles.dropdown}>
        <div
          onClick={() => {
            setOpen(!isOpen);
          }}
          className={styles.dropdownBtn}
        >
          {rows}
          <img src={select} alt="select" />
        </div>
        <div
          className={styles.dropdownContent}
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          {rowsTable.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setRows(item);
                setOpen(!isOpen);
              }}
              className={styles.item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RowPerPage;
