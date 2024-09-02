import React from "react";
import { Form } from "react-aria-components";
import { Button } from "@/registry/default/ui/button";
import {
  ComboBox,
  ComboBoxItem,
  ComboBoxSection,
} from "@/registry/default/ui/combobox";

export const ComboBoxDemo = () => (
  <ComboBox
    {...{
      label: "Ice cream flavor",
    }}
  >
    <ComboBoxItem>Chocolate</ComboBoxItem>
    <ComboBoxItem id="mint">Mint</ComboBoxItem>
    <ComboBoxItem>Strawberry</ComboBoxItem>
    <ComboBoxItem>Vanilla</ComboBoxItem>
  </ComboBox>
);

export const ComboBoxDisabledItemsDemo = () => (
  <ComboBox
    {...{
      label: "Ice cream flavor",
      disabledKeys: ["mint"],
    }}
  >
    <ComboBoxItem>Chocolate</ComboBoxItem>
    <ComboBoxItem id="mint">Mint</ComboBoxItem>
    <ComboBoxItem>Strawberry</ComboBoxItem>
    <ComboBoxItem>Vanilla</ComboBoxItem>
  </ComboBox>
);

export const ComboBoxSectionsDemo = () => (
  <ComboBox
    {...{
      label: "Preferred fruit or vegetable",
    }}
  >
    <ComboBoxSection title="Fruit">
      <ComboBoxItem id="Apple">Apple</ComboBoxItem>
      <ComboBoxItem id="Banana">Banana</ComboBoxItem>
      <ComboBoxItem id="Orange">Orange</ComboBoxItem>
      <ComboBoxItem id="Honeydew">Honeydew</ComboBoxItem>
      <ComboBoxItem id="Grapes">Grapes</ComboBoxItem>
      <ComboBoxItem id="Watermelon">Watermelon</ComboBoxItem>
      <ComboBoxItem id="Cantaloupe">Cantaloupe</ComboBoxItem>
      <ComboBoxItem id="Pear">Pear</ComboBoxItem>
    </ComboBoxSection>
    <ComboBoxSection title="Vegetable">
      <ComboBoxItem id="Cabbage">Cabbage</ComboBoxItem>
      <ComboBoxItem id="Broccoli">Broccoli</ComboBoxItem>
      <ComboBoxItem id="Carrots">Carrots</ComboBoxItem>
      <ComboBoxItem id="Lettuce">Lettuce</ComboBoxItem>
      <ComboBoxItem id="Spinach">Spinach</ComboBoxItem>
      <ComboBoxItem id="Bok Choy">Bok Choy</ComboBoxItem>
      <ComboBoxItem id="Cauliflower">Cauliflower</ComboBoxItem>
      <ComboBoxItem id="Potatoes">Potatoes</ComboBoxItem>
    </ComboBoxSection>
  </ComboBox>
);

export const ComboBoxValidationDemo = (args: any) => (
  <Form className="flex flex-col gap-2 items-start">
    <ComboBox
      {...{
        isRequired: true,
      }}
    >
      <ComboBoxItem>Chocolate</ComboBoxItem>
      <ComboBoxItem id="mint">Mint</ComboBoxItem>
      <ComboBoxItem>Strawberry</ComboBoxItem>
      <ComboBoxItem>Vanilla</ComboBoxItem>
    </ComboBox>
    <Button type="submit" variant="secondary">
      Submit
    </Button>
  </Form>
);
