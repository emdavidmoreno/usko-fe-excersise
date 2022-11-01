// Button.stories.tsx
import * as React from "react";
import { Meta, Story } from "@storybook/react";
import PurchaseItem from "./PurchaseItem";

import purchases from '../../mock-data/purchases.json';
const selected = purchases[5];

export default {
  component: PurchaseItem,
} as Meta;

export const Primary: Story = (args) => <PurchaseItem {...args} />;
Primary.args = {
  item: selected,
  selectPurchase: () => {}
};