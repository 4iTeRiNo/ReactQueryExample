import { Dispatch, SetStateAction } from 'react';
import styles from './Pagination.module.css';
import right from '../../../assets/icons/right.svg';
import left from '../../../assets/icons/left.svg';

interface PaginationProps {
  setPage: Dispatch<SetStateAction<number>>;
  page: number;
  range: number[];
}

const Pagination = ({ setPage, page, range }: PaginationProps) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={page === 1}
        className={styles.button}
        onClick={() => setPage(page - 1)}
      >
        <img className={styles.icon} src={left} width="16px" alt="icon" />
      </button>
      {`${page}/${range.length}`}
      <button
        disabled={page === range.length}
        className={styles.button}
        onClick={() => setPage(page + 1)}
      >
        <img className={styles.icon} src={right} width="16px" alt="icon" />
      </button>
    </div>
  );
};
export default Pagination;
