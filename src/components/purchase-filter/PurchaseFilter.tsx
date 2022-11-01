import { FC, useContext, useEffect } from 'react';
import Select, {SingleValue} from 'react-select';
import { AppContext } from '../../data/context';
import { ACTIONS } from '../../utils/constants';

interface PurchaseFilterProps {
  changeSorting: (option: SingleValue<{
      value: string;
      label: string;
  }>) => void,
  sortBy: string,
}

const options = [
  { value: 'date_asc', label: 'Purchase date asc' },
  { value: 'date_desc', label: 'Purchase date desc' },
  { value: 'title_asc', label: 'Product name asc' },
  { value: 'title_desc', label: 'Product name desc' },
  { value: 'unit_price_asc', label: 'Purchase price asc' },
  { value: 'unit_price_desc', label: 'Purchase price desc' },
]

const PurchaseFilter: FC<PurchaseFilterProps> = ({changeSorting, sortBy}) => {
  const {state, dispatch} = useContext(AppContext);
  
  useEffect(() => {
   dispatch({
    type: ACTIONS.CHANGE_PAGE,
    payload: 0,
   })
    
  }, [state.sortBy]);
  
  return (
    <div className='inline-flex w-full justify-end'>
      <label className='flex pr-2 items-center' htmlFor="filter">Sort By</label>
      <Select 
        options={options}
        value={options.find(opt => opt.value === sortBy)}
        onChange={changeSorting}
      />      
    </div>
  );
}

export default PurchaseFilter;