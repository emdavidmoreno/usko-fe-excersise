import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Summary from "./Summary";

export default {
  component: Summary,
};

export const DefaultSummary: Story = (args) =>(
  <div className="flex w-full md:w-1/2 mx-auto">
    <Summary
        leftLabel={args.leftLabel} 
        leftValue={args.leftValue} 
        rightLabel={args.rightLabel}
        rightValue={args.rightValue}
      />
  </div>
) ;
DefaultSummary.args = {
  leftLabel: 'Customer Since: ',
  leftValue: '09/30/14',
  rightLabel: 'Total Spent: ',
  rightValue: '$10',
};