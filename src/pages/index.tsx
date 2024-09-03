import ThemeSwitcher, { ThemeColorSelect2 } from "@/components/theme";
import { Button } from "@/components/ui/button";
import { GradientBackground } from "@/components/ui/gradient";
import { Input } from "@/components/ui/input-1";
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Head from "next/head";
import { ReactNode, useState } from "react";

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

import { useForm, SubmitHandler } from "react-hook-form";

import { z } from "zod";

const waitlistFormSchema = z.object({
  email: z.string().email(),
});

type FormSchema = z.infer<typeof waitlistFormSchema>;

export function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function onSubmit(formData: FormSchema) {
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Thanks for subscribing!");
        setSuccess(true);
        reset();
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const { register, handleSubmit, reset } = useForm();

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

                  <div>
                    {!success ? (
                      <form
                        // @ts-ignore
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col gap-y-4"
                      >
                        <div>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...register("email", {
                              required: true,
                            })}
                            disabled={isSubmitting}
                          />
                        </div>
                        <Button
                          type="submit"
                          isLoading={isSubmitting}
                          isDisabled={isSubmitting || success}
                        >
                          Join waitlist
                        </Button>
                      </form>
                    ) : (
                      <div>
                        <p className="text-foreground-light text-sm">
                          {message}
                        </p>
                      </div>
                    )}
                    {!success && message && (
                      <div className="mt-2">
                        <p className="text-foreground-light text-sm">
                          {message}
                        </p>
                      </div>
                    )}
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

// function ComponentsPreview() {
//   return (
//     <div className="space-y-7">
//       <BreadcrumbsDemo />

//       <AlertDialogDemo />
//       {/* breadcrumbs */}
//       {/* checkbox */}
//       <div className="space-7 flex gap-x-4 w-full">
//         <CheckboxGroupDemo />
//         <ListBoxDisabledItemsDemo />
//       </div>
//       <div className="space-7 flex gap-x-4">
//         <ComboBoxDemo />
//         <ComboBoxDisabledItemsDemo />
//         <ComboBoxSectionsDemo />
//       </div>
//       <div className="space-7 flex gap-x-4">
//         {/* date field */}
//         <DateFieldDemo />
//         {/* date picker */}
//         <DatePickerDemo />
//         {/* date range picker */}
//         <DateRangePickerDemo />
//       </div>
//       {/* form */}

//       {/* link */}
//       <LinkDemo />
//       {/* menu */}
//       <div className="space-7">
//         <MenuSubmenuDemo />
//       </div>
//       {/* meter */}
//       <MeterDemo />
//       {/* number field */}
//       <NumberFieldDemo />
//       {/* popover */}
//       <PopoverDemo />
//       {/* progress bar */}
//       <ProgressBarDemo />
//       {/* radio group */}
//       <RadioGroupDemo />
//       {/* range calendar */}
//       <RangeCalendarDemo />
//       {/* search field */}
//       <SearchFieldDemo />
//       {/* search field */}
//       <SearchFieldDemo />
//       {/* select */}
//       <SelectDemo />
//       <SelectDisabledItemsDemo />
//       <SelectSectionsDemo />
//       {/* slider */}
//       <SliderDemo />
//       {/* switch */}
//       <SwitchDemo />
//       {/* table */}
//       <TableDemo />
//       {/* tabs */}
//       <TabsDemo />
//       {/* tag group */}
//       <TagGroupDemo />
//       {/* text field */}
//       <TextFieldDemo />
//       {/* time field */}
//       <TimeFieldDemo />
//       {/* toggle button */}
//       <ToggleButtonDemo />
//       {/* toolbar */}
//       <ToolbarDemo2 orientation="horizontal" />
//     </div>
//   );
// }

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
