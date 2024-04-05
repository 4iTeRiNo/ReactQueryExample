import { ChangeEvent } from 'react';
import styles from './SelectApi.module.css';

interface SelectApiProps {
  option: JSX.Element[];
  value: string;
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectApi = ({ option, value, handleChange }: SelectApiProps) => {
  return (
    <select className={styles.select} value={value} onChange={handleChange}>
      {option}
    </select>
  );
};
export default SelectApi;
