import React, { FC } from 'react';
import { Purchase } from '../../utils/models';
import PurchaseItem from './PurchaseItem';

interface PurchaseListProps {
  purchases: Purchase[],
}

const PurchaseList: FC<PurchaseListProps> = ({purchases}) => {
  return (
    <div className="grid grid-cols-1 divide-y mx-6 my-4 bg-pink-50">
      {purchases.map((purchase,index) => <PurchaseItem item={purchase} key={`purchase-item-${index}`} />)}
    </div>
  )
};

export default PurchaseList;