import { isValidDate } from '../../utils/IsValidDate';
import { options } from '../../types';
import styles from './Tbody.module.css';

interface CheckValueStringProps {
  value:
    | string
    | number
    | string[]
    | {
        name: string;
        url: string;
      }
    | {
        name: string;
        url: string;
      };
}

const CheckValueString = ({ value }: CheckValueStringProps) => {
  if (Array.isArray(value)) {
    return <span className={styles.content}>{value.join(' ')}</span>;
  }
  if (typeof value === 'object') {
    return (
      <div className={styles.deuce}>
        <span>{value.name}</span>
        <span>{value.url}</span>
      </div>
    );
  }
  const date = new Date(value);
  if (
    !isNaN(date.getTime()) &&
    typeof value !== 'number' &&
    isValidDate(value)
  ) {
    return (
      <span className={styles.content}>
        {new Intl.DateTimeFormat('en-US', options).format(date)}
      </span>
    );
  }

  if (value === '') {
    return <span>unknown</span>;
  }

  return <span className={styles.content}>{value}</span>;
};

export default CheckValueString;
