import React, { FC, useContext } from 'react';
import dayjs from 'dayjs';
import _ from 'underscore';
import { useNavigate } from "react-router-dom";

import { Purchase } from '../../utils/models';
import PurchaseFilter from '../purchase-filter/PurchaseFilter';
import PurchaseList from '../purchase-list/PurchaseList';
import Summary from '../summary/Summary';

import { SingleValue } from 'react-select';
import { AppContext } from '../../data/context';
import { ACTIONS, ASC, DESC, PAGE_SIZE } from '../../utils/constants';
import NavigationList from '../navigation-list/NavigationList';

interface TSortingFunctions {
  date: (list: Purchase[]) => Purchase[],
  title: (list: Purchase[]) => Purchase[],
  unit_price: (list: Purchase[]) => Purchase[],
}

const dataOption = {
  date_asc: {sortBy: 'date', direction: ASC},
  date_desc: {sortBy: 'date', direction: DESC},
  title_asc: {sortBy: 'title', direction: ASC},
  title_desc: {sortBy: 'title', direction: DESC},
  unit_price_asc: {sortBy: 'unit_price', direction: ASC},
  unit_price_desc: {sortBy: 'unit_price', direction: DESC},
}

const sortingFunctions: TSortingFunctions = {
  date: (list: Purchase[]) => _.sortBy(list, (o: Purchase) => dayjs(o.order_date).millisecond()),
  title: (list: Purchase[]) =>_.sortBy(list, ['title']),
  unit_price: (list: Purchase[]) => _.sortBy(list, (o: Purchase) => parseFloat(o.unit_price.split('$')[1])),
}

const PurchaseHistory: FC = () => {
  const {state, dispatch} = useContext(AppContext);
  const navigate = useNavigate();
  const { purchases } = state

  const getFirstPurchaseDate = (): string => {
    const sortedList = purchases.sort(
      (a: Purchase, b: Purchase) => new Date(a.order_date).getTime() - new Date(b.order_date).getTime()
    )
    return sortedList[0].order_date
  }

  const getTotalPurchaseSpent = (): string => {
    const totalSpent: number = purchases.reduce((accumulator: number, purchase: Purchase) => {
      const priceNumber = Number(purchase.unit_price.replace(/[^0-9.-]+/g,""));
      const quantity = +purchase.quantity
      return accumulator + quantity * priceNumber;
    }, 0);
    return `$${totalSpent.toFixed(2)}`
  } 

  const changeSorting = (option: SingleValue<{
      value: string;
      label: string;
  }>) => {
    dispatch({
      type: ACTIONS.CHANGE_SORT_BY,
      payload: option?.value
    })
  }

  const sortedPurchases = ():Purchase[] => {
    const {direction, sortBy} = dataOption[state.sortBy as keyof typeof dataOption ];
    const func: (list: Purchase[]) => Purchase[] = sortingFunctions[sortBy as keyof TSortingFunctions]
    return direction === ASC? func(state.purchases) : func(state.purchases).reverse(); 
  }

  const paginatedPurchases = (list: Purchase[]) => {
    const skipCount = state.page * PAGE_SIZE;
    return _.first( _.rest(list, skipCount), PAGE_SIZE);
  }

  const updatePage = (page: number) => {
    dispatch({
      type: ACTIONS.CHANGE_PAGE,
      payload: page,
    })
  }

  const selectPurchase = (purchase:Purchase) => {
    dispatch({
      type: ACTIONS.SELECT_PURCHASE,
      payload: purchase,
    });
    navigate('/details');
  }

  const purchasesToDisplay = () => paginatedPurchases(sortedPurchases())


  return (
    <div className="flex flex-col w-full">
       <h1 className="flex mx-auto text-2xl font-bold h-12">Purchase history</h1>
       <Summary
        leftLabel={'Customer Since: '} 
        leftValue={getFirstPurchaseDate()} 
        rightLabel={'Total Spent: '}
        rightValue={getTotalPurchaseSpent()}
      />
      <PurchaseFilter 
        changeSorting={changeSorting} 
        sortBy={state.sortBy}
      />
      <PurchaseList 
        selectPurchase={selectPurchase}
        purchases={purchasesToDisplay()} 
      />
      <NavigationList 
        page={state.page}
        updatePage={updatePage}
        isPrevDisabled={state.page === 0}
        isNextDisabled={((state.page + 1) * PAGE_SIZE) > state.purchases.length}
      />
    </div>
  );
};

export default PurchaseHistory;