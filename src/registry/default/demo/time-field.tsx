import React from "react";
import { Form } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { TimeField } from "@/registry/default/ui/time-field";

export const TimeFieldDemo = () => (
  <TimeField
    {...{
      label: "Event time",
    }}
  />
);

export const TimeFieldValidationDemo = (args: any) => (
  <Form className="flex flex-col gap-2 items-start">
    <TimeField
      {...{
        isRequired: true,
      }}
    />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);
