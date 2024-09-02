import React from "react";
import { Form } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { DateRangePicker } from "@/registry/default/ui/date-range-picker";

export const DateRangePickerDemo = (args: any) => (
  <DateRangePicker
    {...{
      label: "Trip dates",
    }}
  />
);

export const DateRangePickerValidationDemo = (args: any) => (
  <Form className="flex flex-col gap-2 items-start">
    <DateRangePicker
      {...{
        label: "Trip dates",
        isRequired: true,
      }}
    />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);
