import { Dispatch, SetStateAction, useContext } from 'react';

import styles from './Thead.module.css';
import { stateContext } from '../../StateContext';
import Search from '../SearchInput/SearchInput';

interface TheadProps {
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const Thead = ({ setSearchValue }: TheadProps) => {
  const data = useContext(stateContext);
  const column = Object.keys(Object.assign({}, ...data));

  return (
    <div className={styles.thead}>
      <Search onChange={setSearchValue} />

      <div className={styles.column}>
        {column.map((value, index) => (
          <span className={styles.content} key={index}>
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Thead;
