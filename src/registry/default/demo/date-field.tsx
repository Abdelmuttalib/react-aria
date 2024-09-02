import React from "react";
import { Form } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { DateField } from "@/registry/default/ui/date-field";

export const DateFieldDemo = (args: any) => (
  <DateField
    {...{
      label: "Event date",
    }}
  />
);

export const DateFieldValidationDemo = (args: any) => (
  <Form className="flex flex-col gap-2 items-start">
    <DateField
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
