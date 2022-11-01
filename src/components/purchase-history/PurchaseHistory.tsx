import React, { FC } from 'react';

import { Purchase } from '../../utils/models';
import PurchaseFilter from '../purchase-filter/PurchaseFilter';
import PurchaseList from '../purchase-list/PurchaseList';
import Summary from '../summary/Summary';

import purchases from '../../mock-data/purchases.json'
import { SingleValue } from 'react-select';

const PurchaseHistory: FC = () => {

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
  }>): void => {}

  return (
    <div className="flex flex-col w-full">
       <h1 className="flex mx-auto text-2xl font-bold h-12">Purchase history</h1>
       <Summary
        leftLabel={'Customer Since: '} 
        leftValue={getFirstPurchaseDate()} 
        rightLabel={'Total Spent: '}
        rightValue={getTotalPurchaseSpent()}
      />
      <PurchaseFilter changeSorting={changeSorting} sortBy={'date_asc'} />
      <PurchaseList purchases={purchases} />
    </div>
  );
};

export default PurchaseHistory;