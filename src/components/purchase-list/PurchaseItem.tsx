import { FC } from "react";

import { Purchase } from "../../utils/models";
import { getReadableDate, truncateString } from "../../utils/functions";

interface PurchaseItemProps {
  item: Purchase,
  selectPurchase: any,
}

const PurchaseItem: FC<PurchaseItemProps> = ({item, selectPurchase}) => {

  return (
    <div className="flex w-full justify-between px-2 py-4" onClick={selectPurchase}>
      <img className="w-12 h-12 rounded-full" src={item.image_url} alt="" />
      <div className="w-full flex-col mx-2">
        <span className="flex w-full text-xs mx-2 text-gray-600">{truncateString(item.title)}</span>
        <span className="flex w-full text-xs mx-2 text-gray-500">{getReadableDate(item.order_date)}</span>
      </div>
      <span className="text-sm mx-2 text-gray-600"> {item.unit_price}</span>
    </div>
  );
};

export default PurchaseItem;