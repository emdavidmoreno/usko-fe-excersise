// Button.stories.tsx
import { Story } from "@storybook/react";
import PurchaseItem from "./PurchaseItem";

import purchases from '../../mock-data/purchases.json';
const selected = purchases[5];

export default {
  component: PurchaseItem, 
} ;

export const Item: Story = (args) =>(
  <div className="flex w-full md:w-1/2 mx-auto flex-col border border-gray-100">
    <PurchaseItem
      item={args.item}
      selectPurchase={args.selectPurchase}
    />
  </div>
);
Item.args = {
  item: selected,
  selectPurchase: () => {}
};