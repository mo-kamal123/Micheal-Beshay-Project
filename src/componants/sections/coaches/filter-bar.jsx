import { useState } from 'react';
import FilterOptions from './filter-options';

const FilterBar = () => {
  const [filter, setFilter] = useState({ rate: '', gender: '', sessions: '' });

  const changeFilter = (key, option) => {
    setFilter(prev => ({ ...prev, [key]: option }));
    console.log(key, option);
  };

  return (
    <div className="w-[70%] m-auto my-10 flex flex-col gap-5 ">
      <p className="text-main font-bold">Filter</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
        <FilterOptions
          type={'Rate'}
          filter={'rate'}
          options={['Rate from 5 to 4 ', 'Rate from 4 to 3 ', 'Rate from 3 to 1 ']}
          onChange={changeFilter}
          selected={filter}
        />
        <FilterOptions
          type={'Male / Female'}
          filter={'gender'}
          options={['Male', 'Female']}
          onChange={changeFilter}
          selected={filter}
        />
        <FilterOptions
          type={'number of sessions'}
          filter={'sessions'}
          options={['0 : 10', ' 10 : 50 ', '+50 ']}
          onChange={changeFilter}
          selected={filter}
        />
      </div>
    </div>
  );
};

export default FilterBar;
