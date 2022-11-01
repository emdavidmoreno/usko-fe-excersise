import { FC, useContext, useEffect } from 'react';
import Select, {SingleValue} from 'react-select';
import { AppContext } from '../../data/context';
import { ACTIONS, OPTIONS } from '../../utils/constants';

interface PurchaseFilterProps {
  changeSorting: (option: SingleValue<{
      value: string;
      label: string;
  }>) => void,
  sortBy: string,
}

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
        options={OPTIONS}
        value={OPTIONS.find(opt => opt.value === sortBy)}
        onChange={changeSorting}
      />      
    </div>
  );
}

export default PurchaseFilter;