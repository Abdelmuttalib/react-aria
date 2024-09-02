import { DocsLayout } from "@/layout";
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

export default function DemoPage() {
  return (
    <DocsLayout>
      <div className="space-x-6 space-y-6 max-w-sm mx-auto">
        {/* alert dialog */}
        <AlertDialogDemo />
        {/* breadcrumbs */}
        <BreadcrumbsDemo />
        {/* calendar */}
        <CalendarDemo />
        {/* checkbox */}
        <CheckboxDemo />
        <CheckboxGroupDemo />
        <CheckboxGroupValidationDemo />
        {/* combobox */}
        <ComboBoxDemo />
        <ComboBoxDisabledItemsDemo />
        <ComboBoxSectionsDemo />
        <ComboBoxValidationDemo />
        {/* date field */}
        <DateFieldDemo />
        <DateFieldValidationDemo />
        {/* date picker */}
        <DatePickerDemo />
        <DatePickerValidationDemo />
        {/* date range picker */}
        <DateRangePickerDemo />
        <DateRangePickerValidationDemo />
        {/* form */}
        <FormDemo />
        {/* grid list */}
        <GridListDemo />
        <GridListDisabledItemsDemo />
        {/* list box */}
        <ListBoxDemo />
        <ListBoxDisabledItemsDemo />
        {/* link */}
        <LinkDemo />
        {/* menu */}
        <MenuDemo />
        <MenuDisabledItemsDemo />
        <MenuSectionsDemo />
        <MenuSubmenuDemo />
        {/* meter */}
        <MeterDemo />
        {/* number field */}
        <NumberFieldDemo />
        <NumberFieldValidationDemo />
        {/* popover */}
        <PopoverDemo />
        {/* progress bar */}
        <ProgressBarDemo />
        {/* radio group */}
        <RadioGroupDemo />
        <RadioGroupValidationDemo />
        {/* range calendar */}
        <RangeCalendarDemo />
        {/* search field */}
        <SearchFieldDemo />
        <SearchFieldValidationDemo />
        {/* search field */}
        <SearchFieldDemo />
        <SearchFieldValidationDemo />
        {/* select */}
        <SelectDemo />
        <SelectDisabledItemsDemo />
        <SelectSectionsDemo />
        <SelectValidationDemo />
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
        <TextFieldValidationDemo />
        {/* time field */}
        <TimeFieldDemo />
        <TimeFieldValidationDemo />
        {/* toggle button */}
        <ToggleButtonDemo />
        {/* toolbar */}
        <ToolbarDemo orientation="vertical" />
        <ToolbarDemo2 orientation="horizontal" />
        {/* <div className="dark bg-background p-20">
          <ListBoxDemo />
        </div> */}
        {/* tooltip */}
      </div>
    </DocsLayout>
  );
}
