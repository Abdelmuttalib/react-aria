import React from "react";
import { Breadcrumb, Breadcrumbs } from "@/registry/default/ui/breadcrumbs";

export const BreadcrumbsDemo = (args: any) => (
  <Breadcrumbs {...args}>
    <Breadcrumb href="#">Home</Breadcrumb>
    <Breadcrumb href="#">React Aria</Breadcrumb>
    <Breadcrumb>Breadcrumbs</Breadcrumb>
  </Breadcrumbs>
);
