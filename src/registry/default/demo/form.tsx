import React from "react";
import { Button } from "@/registry/default/ui/button";
import { DateField } from "@/registry/default/ui/date-field";
import { Form } from "@/registry/default/ui/form";
import { TextField } from "@/registry/default/ui/text-field";

export const FormDemo = () => (
  <Form>
    <TextField label="Email" name="email" type="email" isRequired />
    <DateField label="Birth date" isRequired />
    <div className="flex gap-2">
      <Button type="submit">Submit</Button>
      <Button type="reset" variant="secondary">
        Reset
      </Button>
    </div>
  </Form>
);
