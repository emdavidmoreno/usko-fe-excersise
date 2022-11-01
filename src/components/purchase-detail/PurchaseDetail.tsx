import React, { FC, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { Purchase } from '../../utils/models';
import Summary from '../summary/Summary';

import { AppContext } from '../../data/context';
import { ACTIONS } from '../../utils/constants';

const PurchaseDetail: FC = () => {
  const {state, dispatch} = useContext(AppContext);
  const navigate = useNavigate();
  const { selected , purchases } = state

  useEffect(() => {
    if(!selected) navigateToPurchaseHistory()
  }, []);

  const navigateToPurchaseHistory = () => {
    dispatch({
      type: ACTIONS.SELECT_PURCHASE,
      payload: null,
    });
    navigate('/');
  }

  const getPurchaseHistoryOfSelectedItem = () => {
    return selected ? purchases.filter(purchase => purchase.product_url === selected?.product_url) : []
  }

  const getPurchaseSpent = (purchase: Purchase) => {
    const priceNumber = parseFloat(purchase.unit_price.split('$')[1]);
    const quantity = +purchase.quantity
    return quantity * priceNumber;
  }

  const getPurchasedTimes = () => {
    const purchasedTimes =  getPurchaseHistoryOfSelectedItem().length;
    return `${purchasedTimes} times`
  }

  const totalSpent = () => {
    const totalSpent =  getPurchaseHistoryOfSelectedItem()
    .reduce((accumulator: number, purchase: Purchase) => {     
      return accumulator + getPurchaseSpent(purchase)
    }, 0);
    return `$${totalSpent.toFixed(2)}`
  }

  return selected ? (
    <div className="flex flex-col h-screen w-full px-4">
      <div className="flex w-full justify-start mb-4">
        <button className="outline-0 border-none bg-transparent justify-start font-medium text-xl" onClick={navigateToPurchaseHistory}> Purchase History</button> 
      </div>
      <div className="flex w-full justify-center mb-4">
          <img src={selected.image_url} alt="" />
      </div>
      <div className="flex mx-auto justify-center mb-4">
          <span>{selected.title}</span>
      </div>
      <div className="flex w-full justify-center mb-4">
         <a className="text-underline text-blue-600 font-bold underline" href={selected.product_url}>View on Amazon</a>
      </div>
      <div className="flex w-full justify-center mb-4">
        <Summary 
          leftLabel={'Purchased: '} 
          leftValue={getPurchasedTimes()} 
          rightLabel={'Total Spent: '}
          rightValue={totalSpent()}
        />
      </div>
      <div className="flex w-full justify-center mb-4">
         <div className="w-full grid grid-cols-4 grid-flow-row auto-rows-max border ">
            <span className="flex justify-center items-center p-2 border border-gray-300">Quantity</span>
            <span className="flex justify-center items-center p-2 border border-gray-300">Date</span>
            <span className="flex justify-center items-center p-2 border border-gray-300">Unit Price</span>
            <span className="flex justify-center items-center p-2 border border-gray-300">Total</span>
            {getPurchaseHistoryOfSelectedItem().map((item, index) => (
              <React.Fragment key={index}>
                <span className="flex justify-center items-center p-2 border border-gray-300">{item.quantity}</span>
                <span className="flex justify-center items-center p-2 border border-gray-300">{item.order_date}</span>
                <span className="flex justify-center items-center p-2 border border-gray-300">{item.unit_price}</span>
                <span className="flex justify-center items-center p-2 border border-gray-300">{getPurchaseSpent(item)}</span>

              </React.Fragment>
            ))}
         </div>
      </div>
    </div>
  ): null
};

export default PurchaseDetail;