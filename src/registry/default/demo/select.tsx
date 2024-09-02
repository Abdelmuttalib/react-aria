import React from "react";
import { Form } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import {
  Select,
  SelectItem,
  SelectSection,
} from "@/registry/default/ui/select";

export const SelectDemo = (args: any) => (
  <Select
    {...{
      label: "Ice cream flavor",
    }}
  >
    <SelectItem>Chocolate</SelectItem>
    <SelectItem id="mint">Mint</SelectItem>
    <SelectItem>Strawberry</SelectItem>
    <SelectItem>Vanilla</SelectItem>
  </Select>
);

export const SelectDisabledItemsDemo = (args: any) => (
  <Select
    {...{
      disabledKeys: ["mint"],
    }}
  >
    <SelectItem>Chocolate</SelectItem>
    <SelectItem id="mint">Mint</SelectItem>
    <SelectItem>Strawberry</SelectItem>
    <SelectItem>Vanilla</SelectItem>
  </Select>
);

export const SelectSectionsDemo = (args: any) => (
  <Select
    {...{
      label: "Preferred fruit or vegetable",
    }}
  >
    <SelectSection title="Fruit">
      <SelectItem id="Apple">Apple</SelectItem>
      <SelectItem id="Banana">Banana</SelectItem>
      <SelectItem id="Orange">Orange</SelectItem>
      <SelectItem id="Honeydew">Honeydew</SelectItem>
      <SelectItem id="Grapes">Grapes</SelectItem>
      <SelectItem id="Watermelon">Watermelon</SelectItem>
      <SelectItem id="Cantaloupe">Cantaloupe</SelectItem>
      <SelectItem id="Pear">Pear</SelectItem>
    </SelectSection>
    <SelectSection title="Vegetable">
      <SelectItem id="Cabbage">Cabbage</SelectItem>
      <SelectItem id="Broccoli">Broccoli</SelectItem>
      <SelectItem id="Carrots">Carrots</SelectItem>
      <SelectItem id="Lettuce">Lettuce</SelectItem>
      <SelectItem id="Spinach">Spinach</SelectItem>
      <SelectItem id="Bok Choy">Bok Choy</SelectItem>
      <SelectItem id="Cauliflower">Cauliflower</SelectItem>
      <SelectItem id="Potatoes">Potatoes</SelectItem>
    </SelectSection>
  </Select>
);

export const SelectValidationDemo = (args: any) => (
  <Form className="flex flex-col gap-2 items-start">
    <Select
      {...{
        isRequired: true,
      }}
    >
      <SelectItem>Chocolate</SelectItem>
      <SelectItem id="mint">Mint</SelectItem>
      <SelectItem>Strawberry</SelectItem>
      <SelectItem>Vanilla</SelectItem>
    </Select>
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);
