const DOCS_PATH = "/docs";
const COMPONENTS_PATH = "/docs/components";

function getDocsComponentPath(component: string): string {
  return `${COMPONENTS_PATH}/${component}`;
}

export const siteConfig = {
  title: "React Aria UI",
  description: "A modern React Aria UI library",

  paths: {
    docs: DOCS_PATH,
    components: {
      index: COMPONENTS_PATH,
      "alert-dialog": getDocsComponentPath("alert-dialog"),
      breadcrumbs: getDocsComponentPath("breadcrumbs"),
      button: getDocsComponentPath("button"),
      calendar: getDocsComponentPath("calendar"),
      "checkbox-group": getDocsComponentPath("checkbox-group"),
      checkbox: getDocsComponentPath("checkbox"),
      combobox: getDocsComponentPath("combobox"),
      "date-field": getDocsComponentPath("date-field"),
      "date-picker": getDocsComponentPath("date-picker"),
      "date-range-picker": getDocsComponentPath("date-range-picker"),
      form: getDocsComponentPath("form"),
      "grid-list": getDocsComponentPath("grid-list"),
      link: getDocsComponentPath("link"),
      "list-box": getDocsComponentPath("list-box"),
      menu: getDocsComponentPath("menu"),
      meter: getDocsComponentPath("meter"),
      "number-field": getDocsComponentPath("number-field"),
      popover: getDocsComponentPath("popover"),
      "progress-bar": getDocsComponentPath("progress-bar"),
      "radio-group": getDocsComponentPath("radio-group"),
      "range-calendar": getDocsComponentPath("range-calendar"),
      "search-field": getDocsComponentPath("search-field"),
      select: getDocsComponentPath("select"),
      slider: getDocsComponentPath("slider"),

      switch: getDocsComponentPath("switch"),
      table: getDocsComponentPath("table"),
      tabs: getDocsComponentPath("tabs"),
      "tag-group": getDocsComponentPath("tag-group"),
      "text-field": getDocsComponentPath("text-field"),
      "time-field": getDocsComponentPath("time-field"),
      "toggle-button": getDocsComponentPath("toggle-button"),
      toolbar: getDocsComponentPath("toolbar"),
      tooltip: getDocsComponentPath("tooltip"),
    },
    blog: "/blog",
    about: "/about",
  },
};
