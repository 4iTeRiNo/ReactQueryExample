import { ChangeEvent, useState } from 'react';
import { stateContext } from './StateContext';
import { FIRST_API_URL, SET_API_URl, rowsTable } from './constants';
import { useData } from './hooks/useData';
import { TResults } from './types';

import { useQuery } from '@tanstack/react-query';
import './App.css';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import SelectApi from './components/SelectApi/SelectApi';
import Tbody from './components/Tbody/Tbody';
import Thead from './components/Thead/Thead';
import { fetchData } from './services/data';

function App() {
  const [value, setValue] = useState(FIRST_API_URL);
  const [rows, setRows] = useState<number>(15);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  const { data, isSuccess, isError, isLoading } = useQuery<
    TResults[] | undefined
  >({
    queryFn: () => fetchData(value),

    queryKey: ['data', value],
  });

  console.log(isSuccess, data, isError, isLoading, value);

  const option = SET_API_URl.map((url, index) => (
    <option key={index}>{url}</option>
  ));

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  const contextData = useData(data, searchValue);

  return (
    <div className="App">
      <SelectApi option={option} value={value} handleChange={handleChange} />
      {isLoading && <Loader />}

      {isSuccess && data && (
        <stateContext.Provider value={contextData}>
          <div className="table">
            <Thead setSearchValue={setSearchValue} />
            <Tbody rows={rows} page={page} />
            <Footer
              page={page}
              rows={rows}
              setPage={setPage}
              setRows={setRows}
              rowsTable={rowsTable}
            />
          </div>
        </stateContext.Provider>
      )}

      {isError && <span>Error:{'Not Found'}</span>}
    </div>
  );
}

export default App;
