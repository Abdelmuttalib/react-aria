import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Tabs as ReactAriaTabs,
  TabList as ReactAriaTabList,
  Tab as ReactAriaTab,
  TabPanel as ReactAriaTabPanel,
  TabsProps as ReactAriaTabsProps,
  TabListProps as ReactAriaTabListProps,
  TabProps as ReactAriaTabProps,
  TabPanelProps as ReactAriaTabPanelProps,
  TabRenderProps as ReactAriaTabRenderProps,
} from "react-aria-components";

const Tabs = ReactAriaTabs;

const TabList = React.forwardRef<
  React.ElementRef<typeof ReactAriaTabList>,
  React.ComponentPropsWithoutRef<typeof ReactAriaTabList>
>(({ className, ...props }, ref) => (
  <ReactAriaTabList
    ref={ref}
    className={cn(
      // "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      "bg-accent-hover",
      "rounded",
      "p-1",
      "flex gap-2",
      "data-[orientation=vertical]:flex-col",
      className
    )}
    {...props}
  />
));

TabList.displayName = "TabList";

const TabPanel = React.forwardRef<
  React.ElementRef<typeof ReactAriaTabPanel>,
  React.ComponentPropsWithoutRef<typeof ReactAriaTabPanel>
>(({ className, ...props }, ref) => (
  <ReactAriaTabPanel
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 text-foreground",
      className
    )}
    {...props}
  />
));

TabPanel.displayName = "TabPanel";

const Tab = React.forwardRef<
  React.ElementRef<typeof ReactAriaTab>,
  React.ComponentPropsWithoutRef<typeof ReactAriaTab>
>(({ className, ...props }, ref) => (
  <ReactAriaTab
    ref={ref}
    className={cn(
      // "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      "bg-accent-hover text-foreground-lighter",
      "px-2 py-1",
      "rounded",
      "border border-transparent",
      "focus:ring-1 focus:ring-primary focus-visible:ring-1 focus-visible:ring-primary",
      "data-[selected=true]:bg-background data-[selected=true]:text-foreground data-[selected=true]:shadow-sm data-[selected=true]:border-gray-300",
      className
    )}
    {...props}
  />
));

Tab.displayName = "Tab";

export { Tabs, TabList, Tab, TabPanel };

function getClassName(which: string) {
  switch (which) {
    case "list": {
      return cn(
        "bg-accent-hover",
        "rounded",
        "p-1",
        "flex gap-2",
        "data-[orientation=vertical]:flex-col"
      );
    }
    case "tab": {
      return cn(
        "bg-accent-hover text-foreground-lighter",
        "px-2 py-1",
        "rounded",
        "focus:ring-1 focus:ring-primary focus-visible:ring-1 focus-visible:ring-primary",
        "data-[selected=true]:bg-background data-[selected=true]:text-foreground"
      );
    }
  }
}

export function Tabs2() {
  return (
    <ReactAriaTabs>
      <ReactAriaTabList
        aria-label="History of Ancient Rome"
        className={getClassName("list")}
      >
        <ReactAriaTab id="FoR" className={getClassName("tab")}>
          Founding of Rome
        </ReactAriaTab>
        <ReactAriaTab id="MaR" className={getClassName("tab")}>
          Monarchy and Republic
        </ReactAriaTab>
        <ReactAriaTab id="Emp" className={getClassName("tab")}>
          Empire
        </ReactAriaTab>
      </ReactAriaTabList>
      <ReactAriaTabPanel id="FoR">
        Arma virumque cano, Troiae qui primus ab oris.
      </ReactAriaTabPanel>
      <ReactAriaTabPanel id="MaR">
        Senatus Populusque Romanus.
      </ReactAriaTabPanel>
      <ReactAriaTabPanel id="Emp">Alea jacta est.</ReactAriaTabPanel>
    </ReactAriaTabs>
  );
}
