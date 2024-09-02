import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs";
import { CodeBlock, CodeBlock2 } from "@/components/code";
import { Index, registry, RegistryKey } from "@/registry";
import { highlight } from "@/lib/highlight-code";
import { MoonIcon, SunIcon } from "lucide-react";
import { ToggleButton } from "react-aria-components";
import { useStyle } from "@/hooks/use-style";

export function ComponentPreview({
  children,
  code,
  component,
}: {
  children: React.ReactNode;
  code: string;
  component: RegistryKey;
}) {
  const [style, setStyle] = useStyle();

  const tabs = ["preview", "code"];

  const [tab, setTab] = React.useState(tabs[0]);

  const componentPreview = Index[style.style][component];

  const [darkModePreview, setDarkModePreview] = React.useState(false);

  return (
    <div className="w-full h-full">
      <Tabs className="w-full">
        <TabList className="w-fit">
          {tabs.map((t) => (
            <Tab key={t} id={t} className="capitalize text-sm font-medium">
              {t}
            </Tab>
          ))}
        </TabList>

        <TabPanel
          id="preview"
          className={`relative w-full h-96 bg-background rounded border flex items-center justify-center ${
            darkModePreview ? "dark" : ""
          }`}
        >
          {/* {children} */}
          {componentPreview.demo}

          <div className="absolute top-2 right-2 flex gap-2 items-center">
            <ToggleButton
              className="p-1.5 bg-accent-hover rounded border"
              onChange={(v) => setDarkModePreview(v)}
              // checked={darkModePreview}
              isSelected={darkModePreview}
              aria-label="Toggle dark mode preview"
            >
              {darkModePreview ? (
                <MoonIcon className="w-5 h-5" />
              ) : (
                <SunIcon className="w-5 h-5" />
              )}
            </ToggleButton>
          </div>
        </TabPanel>
        <TabPanel id="code" className="w-full h-96 rounded border">
          <CodeBlock code={componentPreview.code} />
        </TabPanel>
      </Tabs>

      {/* <div className="w-full h-56 rounded bg-accent-hover">
        {tab === "preview" ? (
          <div className="w-full h-full rounded bg-accent-hover flex items-center justify-center">
            {children}
          </div>
        ) : (
          <CodeBlock code={code} />
        )}
      </div> */}
    </div>
  );
}

// function Code({ code }: { code: string }) {
//   return (
//     <pre>
//       <code>{code}</code>
//     </pre>
//   );
// }
