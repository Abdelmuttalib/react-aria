import ThemeSwitcher, { ThemeColorSelect2 } from "@/components/theme";
import { GradientBackground } from "@/components/ui/gradient";
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ReactNode } from "react";

import { AlertDialogDemo } from "@/registry/default/demo/alert-dialog";
import { BreadcrumbsDemo } from "@/registry/default/demo/breadcrumbs";
import { CalendarDemo } from "@/registry/default/demo/calendar";
import { CheckboxDemo } from "@/registry/default/demo/checkbox";
import {
  CheckboxGroupDemo,
  CheckboxGroupValidationDemo,
} from "@/registry/default/demo/checkbox-group";
import {
  ComboBoxDemo,
  ComboBoxDisabledItemsDemo,
  ComboBoxSectionsDemo,
  ComboBoxValidationDemo,
} from "@/registry/default/demo/combobox";
import {
  DateFieldDemo,
  DateFieldValidationDemo,
} from "@/registry/default/demo/date-field";
import {
  DatePickerDemo,
  DatePickerValidationDemo,
} from "@/registry/default/demo/date-picker";
import {
  DateRangePickerDemo,
  DateRangePickerValidationDemo,
} from "@/registry/default/demo/date-range-picker";
import { FormDemo } from "@/registry/default/demo/form";
import {
  GridListDemo,
  GridListDisabledItemsDemo,
} from "@/registry/default/demo/grid-list";
import { LinkDemo } from "@/registry/default/demo/link";
import {
  ListBoxDemo,
  ListBoxDisabledItemsDemo,
} from "@/registry/default/demo/list-box";
import {
  MenuDemo,
  MenuDisabledItemsDemo,
  MenuSectionsDemo,
  MenuSubmenuDemo,
} from "@/registry/default/demo/menu";
import { MeterDemo } from "@/registry/default/demo/meter";
import {
  NumberFieldDemo,
  NumberFieldValidationDemo,
} from "@/registry/default/demo/number-field";
import { PopoverDemo } from "@/registry/default/demo/popover";
import { ProgressBarDemo } from "@/registry/default/demo/progress-bar";
import {
  RadioGroupDemo,
  RadioGroupValidationDemo,
} from "@/registry/default/demo/radio-group";
import { RangeCalendarDemo } from "@/registry/default/demo/range-calendar";
import {
  SearchFieldDemo,
  SearchFieldValidationDemo,
} from "@/registry/default/demo/search-field";
import {
  SelectDemo,
  SelectDisabledItemsDemo,
  SelectSectionsDemo,
  SelectValidationDemo,
} from "@/registry/default/demo/select";
import { SliderDemo } from "@/registry/default/demo/slider";
import { SwitchDemo } from "@/registry/default/demo/switch";
import { TableDemo } from "@/registry/default/demo/table";
import { TabsDemo } from "@/registry/default/demo/tabs";
import { TagGroupDemo } from "@/registry/default/demo/tag-group";
import {
  TextFieldDemo,
  TextFieldValidationDemo,
} from "@/registry/default/demo/text-field";
import {
  TimeFieldDemo,
  TimeFieldValidationDemo,
} from "@/registry/default/demo/time-field";
import { ToggleButtonDemo } from "@/registry/default/demo/toggle-button";
import { ToolbarDemo, ToolbarDemo2 } from "@/registry/default/demo/toolbar";

const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   return (
//     <main
//       className={`relative flex h-full min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
//     >
//       <div className="fixed -z-10">
//         <div className="relative">
//           <GradientBackground />
//         </div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full bg-red-300">
//         <div>
//           <h1 className="text-4xl lg:text-6xl font-bold">React Aria UI</h1>
//           <p className="text-lg lg:text-xl">A modern React Aria UI library</p>
//         </div>
//         <div>
//           <Button>Button</Button>
//           <CheckboxDemo />
//         </div>
//       </div>
//     </main>
//   );
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>React Aria UI</title>
        <meta
          name="description"
          content="A modern, accessible, and customizable React Aria UI components. Built with react-aria-components."
        />

        <meta property="og:title" content="shadcn-ui Marketplace" />
        <meta
          property="og:description"
          content="A modern, accessible, and customizable React Aria UI components. Built with react-aria-components."
        />

        {/* keywords */}
        <meta
          name="keywords"
          content="react, aria, ui, components, react-aria-components, react-aria, react-aria-ui, react-aria-ui-kit, react-aria-ui-components, react-aria-ui-kits, accessible, components, design system, tailwindcss, nextjs"
        />
      </Head>
      <main className="mb-40 space-y-40">
        <Hero />
      </main>
      {/* <main
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 min-h-screen items-center justify-between p-24 ${inter.className}`}
      >
        <div className="w-full h-full flex flex-col justify-center">
          <div>
            <h1 className="text-6xl font-semibold">
              A marketplace for shadcn-ui components kits
            </h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              voluptates, atque, quas quod, nemo quidem dolorum quibusdam
              voluptatum quia quae ipsam. Quisquam, quos. Quisquam, quos.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col">
          <div>
            <Button>Button</Button>
          </div>
        </div>
      </main> */}
    </>
  );
}

interface ContainerProps {
  children: ReactNode;
  className?: ClassValue;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-screen-2xl px-4 md:px-12 xl:px-6",
        className
      )}
    >
      {children}
    </div>
  );
}

function CheckBadgeIcon({ className }: { className?: ClassValue }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("size-6", className)}
    >
      <path
        fill-rule="evenodd"
        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[100svh] overflow-x-hidden">
      <Container className="relative isolate">
        {/* <div
          aria-hidden="true"
          className="absolute inset-0 m-auto grid h-max w-full grid-cols-2 -space-x-52 opacity-40 dark:pb-32 dark:opacity-20"
        >
          <div className="h-56 bg-gradient-to-br from-primary to-purple-400  dark:from-blue-700"></div>
          <div className="h-32 bg-gradient-to-r from-brand-400 to-brand-300  dark:to-brand-600"></div>
        </div> */}
        <GradientBackground />
        <div className="relative grid grid-cols-1 text-center z-50 justify-center justify-items-center items-center">
          <div className="relative">
            <div className="mx-auto space-y-4">
              <Typography as="h1" variant="display-lg/semibold">
                React Aria UI
              </Typography>

              <Typography
                as="p"
                variant="lg/regular"
                className="mx-auto w-full max-w-4xl text-foreground-light"
              >
                A modern, accessible, and customizable React Aria UI components.
                Built with react-aria-components. Create beautiful and
                consistent web applications with a Design System that provides a
                collection of components, styles, and guidelines.
              </Typography>
              {/* coming soon */}
              <div className="flex flex-col justify-center mx-auto items-center flex-wrap gap-x-4 gap-y-4">
                <div className="flex flex-col items-start sm:items-center gap-4">
                  <ThemeSwitcher />
                  <ThemeColorSelect2 />
                </div>
                <div className="space-y-4 max-w-sm">
                  <div className="flex items-center gap-x-1.5 rounded bg-layer-3 border px-2.5 py-2 backdrop-blur">
                    <CheckBadgeIcon className="w-5 text-foreground-500/80" />
                    <Typography
                      as="p"
                      variant="sm/regular"
                      className="whitespace-nowrap w-full text-foreground-light"
                    >
                      Powered by{" "}
                      <a
                        href="https://react-spectrum.adobe.com/react-aria/"
                        target="_blank"
                        className="text-primary-500 font-medium"
                      >
                        react-aria-components
                      </a>{" "}
                      components
                    </Typography>
                  </div>

                  <span className="dark:opacity-70 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    Coming soon...
                  </span>
                </div>

                {/* email input to register or waitlist */}
                {/* <div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full"
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function ComponentsPreview() {
  return (
    <div className="space-y-7">
      <BreadcrumbsDemo />

      <AlertDialogDemo />
      {/* breadcrumbs */}
      {/* checkbox */}
      <div className="space-7 flex gap-x-4 w-full">
        <CheckboxGroupDemo />
        <ListBoxDisabledItemsDemo />
      </div>
      <div className="space-7 flex gap-x-4">
        <ComboBoxDemo />
        <ComboBoxDisabledItemsDemo />
        <ComboBoxSectionsDemo />
      </div>
      <div className="space-7 flex gap-x-4">
        {/* date field */}
        <DateFieldDemo />
        {/* date picker */}
        <DatePickerDemo />
        {/* date range picker */}
        <DateRangePickerDemo />
      </div>
      {/* form */}

      {/* link */}
      <LinkDemo />
      {/* menu */}
      <div className="space-7">
        <MenuSubmenuDemo />
      </div>
      {/* meter */}
      <MeterDemo />
      {/* number field */}
      <NumberFieldDemo />
      {/* popover */}
      <PopoverDemo />
      {/* progress bar */}
      <ProgressBarDemo />
      {/* radio group */}
      <RadioGroupDemo />
      {/* range calendar */}
      <RangeCalendarDemo />
      {/* search field */}
      <SearchFieldDemo />
      {/* search field */}
      <SearchFieldDemo />
      {/* select */}
      <SelectDemo />
      <SelectDisabledItemsDemo />
      <SelectSectionsDemo />
      {/* slider */}
      <SliderDemo />
      {/* switch */}
      <SwitchDemo />
      {/* table */}
      <TableDemo />
      {/* tabs */}
      <TabsDemo />
      {/* tag group */}
      <TagGroupDemo />
      {/* text field */}
      <TextFieldDemo />
      {/* time field */}
      <TimeFieldDemo />
      {/* toggle button */}
      <ToggleButtonDemo />
      {/* toolbar */}
      <ToolbarDemo2 orientation="horizontal" />
    </div>
  );
}

export function TabsExample() {
  return (
    <Tabs className="w-80">
      <TabList>
        <Tab id="FoR">Tab 1</Tab>
        <Tab id="MaR">Tab 2</Tab>
        <Tab id="Emp">Tab 3</Tab>
      </TabList>

      <TabPanel id="FoR">
        Tab 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </TabPanel>
      <TabPanel id="MaR">
        Tab 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </TabPanel>
      <TabPanel id="Emp">
        Tab 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </TabPanel>
    </Tabs>
  );
}

export const TabsExampleCodeSnippet = `
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs";


function TabsExample() {
  return (
    <Tabs className="w-80">
      <TabList>
        <Tab id="FoR">Tab 1</Tab>
        <Tab id="MaR">Tab 2</Tab>
        <Tab id="Emp">Tab 3</Tab>
      </TabList>

      <TabPanel id="FoR">
        Arma virumque cano, Troiae qui primus ab oris.
      </TabPanel>
      <TabPanel id="MaR">Senatus Populusque Romanus.</TabPanel>
      <TabPanel id="Emp">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </TabPanel>
    </Tabs>
  );

}

export default TabsExample;
`;
