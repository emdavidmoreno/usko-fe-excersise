import { Story } from "@storybook/react";
import PurchaseFilter from "./PurchaseFilter";
import { OPTIONS } from "../../utils/constants";

export default {
  component: PurchaseFilter,
};

export const DateAscPurchaseFilter: Story = (args) =>(
  <div className="flex w-full md:w-1/2 mx-auto">
    <PurchaseFilter
       changeSorting={() => {}}
       sortBy={OPTIONS[0].value}
      />
  </div>
) ;

export const DateDescPurchaseFilter: Story = (args) =>(
  <div className="flex w-full md:w-1/2 mx-auto">
    <PurchaseFilter
       changeSorting={() => {}}
       sortBy={OPTIONS[1].value}
      />
  </div>
) ;