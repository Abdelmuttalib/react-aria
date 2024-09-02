import React from "react";
import { Form } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { TextField } from "@/registry/default/ui/text-field";

export function TextFieldDemo() {
  return (
    <TextField
      {...{
        label: "Name",
      }}
    />
  );
}

export function TextFieldValidationDemo() {
  return (
    <Form className="flex flex-col gap-2 items-start">
      <TextField
        {...{
          isRequired: true,
        }}
      />
      <Button type="submit" variant="secondary">
        Submit
      </Button>
    </Form>
  );
}
