import React from "react";
import { Form } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { Checkbox, CheckboxGroup } from "@/registry/default/ui/checkbox";

export function CheckboxGroupDemo() {
  return (
    <CheckboxGroup
      {...{
        label: "Cities",
        isDisabled: false,
        isRequired: false,
        description: "",
      }}
    >
      <>
        <Checkbox value="sf">San Francisco</Checkbox>
        <Checkbox value="ny">New York</Checkbox>
        <Checkbox value="sydney">Sydney</Checkbox>
        <Checkbox value="london">London</Checkbox>
        <Checkbox value="tokyo">Tokyo</Checkbox>
      </>
    </CheckboxGroup>
  );
}

export const CheckboxGroupValidationDemo = (args: any) => (
  <Form className="flex flex-col gap-2 items-start">
    <CheckboxGroup
      {...{
        isRequired: true,
        label: "Terms",
        isDisabled: false,
        description: "",
      }}
    >
      <>
        <Checkbox value="sf">Accept Terms and Conditions</Checkbox>
      </>
    </CheckboxGroup>
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);
