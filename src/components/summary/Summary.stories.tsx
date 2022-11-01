// Button.stories.tsx
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import Summary from "./Summary";

import purchases from '../../mock-data/purchases.json';
import { SummaryProps } from "../../utils/models";
const selected = purchases[5];

export default {
  component: Summary,
};

export const Primary: Story = (args:SummaryProps) =>(
  <div className="flex w-full md:w-1/2 mx-auto">
    <Summary {...args} />
  </div>
) ;
Primary.args = {
  leftLabel: 'left Label',
  rightLabel: 'right Label',
  leftValue: '$10',
  rightValue: '$20',
};