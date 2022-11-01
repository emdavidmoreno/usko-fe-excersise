import { Story } from "@storybook/react";
import NavigationList from "./NavigationList";

export default {
  component: NavigationList,
};

export const DisabledPrevNavigationList: Story = (args) =>(
  <div className="flex w-full md:w-1/2 mx-auto">
    <NavigationList
        page={0}
        updatePage={()=>{}}
        isPrevDisabled={true}
        isNextDisabled={false}
      />
  </div>
) ;

export const DisabledNextNavigationList: Story = (args) =>(
  <div className="flex w-full md:w-1/2 mx-auto">
    <NavigationList
       page={0}
       updatePage={()=>{}}
       isPrevDisabled={false}
       isNextDisabled={true}
      />
  </div>
) ;

export const EnabledBothNavigationList: Story = (args) =>(
  <div className="flex w-full md:w-1/2 mx-auto">
    <NavigationList
       page={0}
       updatePage={()=>{}}
       isPrevDisabled={false}
       isNextDisabled={false}
      />
  </div>
) ;