import { Tab } from 'interfaces';
import { FC, useState } from 'react';

import {
  TabsContent,
  TabsControl,
  TabWrapper,
  TabsControlContent,
} from './style';

export interface TabLayoutProps {
  tabs: Tab[];
  title?: string;
  start?: number;
}

const TabLayout: FC<TabLayoutProps> = ({ tabs, title, start = 0 }) => {
  const [currentTab, setCurrentTab] = useState<number>(tabs[start] ? start : 0);

  const changeTab = (index: number) => {
    window.scrollTo(0, 0);
    setCurrentTab(index);
  };
  return (
    <>
      <TabsControl data-cy="tabs">
        {title && <h2>{title}</h2>}
        <TabsControlContent>
          {tabs.map((tab, index) => (
            <TabWrapper
              key={index}
              onClick={() => changeTab(index)}
              selected={currentTab == index}
              data-cy="tab"
            >
              <p>{tab.title}</p>
            </TabWrapper>
          ))}
        </TabsControlContent>
      </TabsControl>
      <TabsContent>{tabs[currentTab].content}</TabsContent>
    </>
  );
};

export default TabLayout;
