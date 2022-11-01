import React, { FC } from 'react';

interface NavigationProps {
  page: number,
  updatePage: (page: number) => void,
  isPrevDisabled: boolean,
  isNextDisabled: boolean
}

const NavigationList: FC<NavigationProps> = ({page, updatePage, isNextDisabled, isPrevDisabled}) => {
  
  return (
    <div className="inline-flex items-center mb-8 px-4 mx-auto mt-8">
      <button 
        disabled={isPrevDisabled}
        className="flex items-center px-8 py-2 mx-2 bg-purple-600 text-white bg-purple-400 rounded-md disabled:bg-gray-100 disabled:text-gray-500"
        onClick={()=>updatePage(page - 1)}
      >
        Prev
      </button>
      <button 
        disabled={isNextDisabled}
        className="flex items-center px-8 py-2 mx-2 bg-purple-600 text-white bg-purple-400 rounded-md disabled:bg-gray-100 disabled:text-gray-500"
        onClick={()=>updatePage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default NavigationList;