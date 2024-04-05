import React from 'react';
import styles from './SearchInput.module.css';

interface SearchProps {
  onChange: (value: string) => void;
}

const Search = ({ onChange }: SearchProps) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <form autoCapitalize="on" className={styles.searchForm}>
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}></label>
        <input
          id="search"
          className={styles.text}
          type="text"
          name="input"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
    </form>
  );
};

export default Search;
