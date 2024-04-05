import { useEffect, useState } from 'react';
import { TResults } from '../types';

const filterData = (dataItem: TResults[] | undefined, text: string) => {
  if (dataItem)
    return dataItem.filter((item) => item?.name.toLowerCase().includes(text));
};

export const useData = (data: TResults[] | undefined, text: string) => {
  const [searchQuery, setSearchQuery] = useState<TResults[] | undefined>([]);

  useEffect(() => {
    const searchQuery = filterData(data, text);
    if (searchQuery) {
      setSearchQuery([...searchQuery]);
    }
  }, [setSearchQuery, text, data]);

  return searchQuery;
};
