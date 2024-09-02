import React from "react";
import { Form } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import { SearchField } from "@/registry/default/ui/search-field";

export function SearchFieldDemo() {
  return (
    <SearchField
      {...{
        label: "Search",
      }}
    />
  );
}

export function SearchFieldValidationDemo() {
  return (
    <Form className="flex flex-col gap-2 items-start">
      <SearchField
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
