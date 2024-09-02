import { Menu, MenuCodeSnippet } from "@/components/ui/menu";
import { TabsExample, TabsExampleCodeSnippet } from "@/pages";
import { BreadcrumbsDemo } from "./default/demo/breadcrumbs";
import { ToggleButtonDemo } from "./default/demo/toggle-button";
import { CalendarDemo } from "./default/demo/calendar";
import { AlertDialogDemo } from "./default/demo/alert-dialog";
import { CheckboxGroupDemo } from "./default/demo/checkbox-group";
import { CheckboxDemo } from "./default/demo/checkbox";
import { ComboBoxDemo } from "./default/demo/combobox";
import { DateFieldDemo } from "./default/demo/date-field";
import { DatePickerDemo } from "./default/demo/date-picker";
import { DateRangePickerDemo } from "./default/demo/date-range-picker";
import { FormDemo } from "./default/demo/form";
import { GridListDemo } from "./default/demo/grid-list";
import { ListBoxDemo } from "./default/demo/list-box";
import { LinkDemo } from "./default/demo/link";
import { MenuDemo } from "./default/demo/menu";
import { MeterDemo } from "./default/demo/meter";
import { NumberFieldDemo } from "./default/demo/number-field";
import { PopoverDemo } from "./default/demo/popover";
import { RangeCalendarDemo } from "./default/demo/range-calendar";
import { ProgressBarDemo } from "./default/demo/progress-bar";
import { RadioGroupDemo } from "./default/demo/radio-group";
import { SearchFieldDemo } from "./default/demo/search-field";
import { SelectDemo } from "./default/demo/select";
import { SliderDemo } from "./default/demo/slider";
import { SwitchDemo } from "./default/demo/switch";
import { TableDemo } from "./default/demo/table";
import { TabsDemo } from "./default/demo/tabs";
import { TagGroupDemo } from "./default/demo/tag-group";
import { TextFieldDemo } from "./default/demo/text-field";
import { TimeFieldDemo } from "./default/demo/time-field";
import { ToolbarDemo } from "./default/demo/toolbar";
import { TooltipDemo } from "./default/demo/tooltip";

export const registry = {
  tabs: {
    code: TabsExampleCodeSnippet,
    demo: <TabsExample />,
  },
  menu: {
    code: MenuCodeSnippet,
    demo: <Menu />,
  },
};

export const defaultRegistry = {
  "alert-dialog": {
    code: "// Code for AlertDialog",
    demo: <AlertDialogDemo />,
  },
  breadcrumbs: { code: "// Code for Breadcrumbs", demo: <BreadcrumbsDemo /> },
  button: { code: "// Code for Button", demo: <ToggleButtonDemo /> },
  calendar: { code: "// Code for Calendar", demo: <CalendarDemo /> },
  "checkbox-group": {
    code: "// Code for CheckboxGroup",
    demo: <CheckboxGroupDemo />,
  },
  checkbox: { code: "// Code for Checkbox", demo: <CheckboxDemo /> },
  combobox: { code: "// Code for Combobox", demo: <ComboBoxDemo /> },
  "date-field": { code: "// Code for DateField", demo: <DateFieldDemo /> },
  "date-picker": { code: "// Code for DatePicker", demo: <DatePickerDemo /> },
  "date-range-picker": {
    code: "// Code for DateRangePicker",
    demo: <DateRangePickerDemo />,
  },
  form: { code: "// Code for Form", demo: <FormDemo /> },
  "grid-list": { code: "// Code for GridList", demo: <GridListDemo /> },
  link: { code: "// Code for Link", demo: <LinkDemo /> },
  "list-box": { code: "// Code for ListBox", demo: <ListBoxDemo /> },
  menu: { code: "// Code for Menu", demo: <MenuDemo /> },
  meter: { code: "// Code for Meter", demo: <MeterDemo /> },
  "number-field": {
    code: "// Code for NumberField",
    demo: <NumberFieldDemo />,
  },
  popover: { code: "// Code for Popover", demo: <PopoverDemo /> },
  "progress-bar": {
    code: "// Code for ProgressBar",
    demo: <ProgressBarDemo />,
  },
  "radio-group": { code: "// Code for RadioGroup", demo: <RadioGroupDemo /> },
  "range-calendar": {
    code: "// Code for RangeCalendar",
    demo: <RangeCalendarDemo />,
  },
  "search-field": {
    code: "// Code for SearchField",
    demo: <SearchFieldDemo />,
  },
  select: { code: "// Code for Select", demo: <SelectDemo /> },
  slider: { code: "// Code for Slider", demo: <SliderDemo /> },
  switch: { code: "// Code for Switch", demo: <SwitchDemo /> },
  table: { code: "// Code for Table", demo: <TableDemo /> },
  tabs: { code: "// Code for Tabs", demo: <TabsDemo /> },
  "tag-group": { code: "// Code for TagGroup", demo: <TagGroupDemo /> },
  "text-field": { code: "// Code for TextField", demo: <TextFieldDemo /> },
  "time-field": { code: "// Code for TimeField", demo: <TimeFieldDemo /> },
  "toggle-button": {
    code: "// Code for ToggleButton",
    demo: <ToggleButtonDemo />,
  },
  toolbar: {
    code: "// Code for Toolbar",
    demo: <ToolbarDemo orientation="vertical" />,
  },
  tooltip: { code: "// Code for Tooltip", demo: <TooltipDemo /> },
};

export const modernRegistry = {
  ...registry,
};

export const Index = {
  default: defaultRegistry,
  modern: modernRegistry,
};

// make ts type for registry
export type Registry = typeof registry;
// type for keys of registry
export type RegistryKey = keyof Registry;
