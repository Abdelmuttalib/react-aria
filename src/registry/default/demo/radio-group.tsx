import React from "react";
import { Form } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { Radio, RadioGroup } from "@/registry/default/ui/radio-group";

export function RadioGroupDemo() {
  return (
    <RadioGroup
      {...{
        label: "Favorite sport",
        isDisabled: false,
        isRequired: false,
        description: "",
      }}
    >
      <Radio value="soccer">Soccer</Radio>
      <Radio value="baseball">Baseball</Radio>
      <Radio value="basketball">Basketball</Radio>
    </RadioGroup>
  );
}

export function RadioGroupValidationDemo() {
  return (
    <Form className="flex flex-col gap-2 items-start">
      <RadioGroup
        {...{
          isRequired: true,
        }}
      >
        <Radio value="soccer">Soccer</Radio>
        <Radio value="baseball">Baseball</Radio>
        <Radio value="basketball">Basketball</Radio>
      </RadioGroup>
      <Button type="submit" variant="secondary">
        Submit
      </Button>
    </Form>
  );
}
