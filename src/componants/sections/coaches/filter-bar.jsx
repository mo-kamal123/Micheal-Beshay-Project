import FilterOptions from "./filter-options"

const FilterBar = () => {
  return (
    <div className="w-[70%] m-auto my-10 flex flex-col gap-5 ">
        <p className="text-main font-bold">Filter</p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
        <FilterOptions type={'Rate'} options={['Rate from 5 to 4 ','Rate from 4 to 3 ','Rate from 3 to 1 ']}/>
        <FilterOptions type={'Rate'} options={['Rate from 5 to 4 ','Rate from 4 to 3 ','Rate from 3 to 1 ']}/>
        <FilterOptions type={'Rate'} options={['Rate from 5 to 4 ','Rate from 4 to 3 ','Rate from 3 to 1 ']}/>
        </div>
    </div>
  )
}

export default FilterBar