import React from "react";
import { Form } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { NumberField } from "@/registry/default/ui/number-field";

export const NumberFieldDemo = () => (
  <NumberField
    {...{
      label: "Cookies",
    }}
  />
);

export const NumberFieldValidationDemo = () => (
  <Form className="flex flex-col gap-2 items-start">
    <NumberField
      {...{
        isRequired: true,
      }}
    />
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);
