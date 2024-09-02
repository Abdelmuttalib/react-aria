import React from "react";
import { Form } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { DatePicker } from "@/registry/default/ui/date-picker";

export const DatePickerDemo = () => (
  <DatePicker
    {...{
      label: "Event date",
    }}
  />
);

export const DatePickerValidationDemo = (args: any) => (
  <Form className="flex flex-col gap-2 items-start">
    <DatePicker
      {...{
        label: "Event date",
        isRequired: true,
      }}
    />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);
