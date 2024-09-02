// const fs = require("fs");
// const path = require("path");

// // Specify the directory containing the files
// const directoryPath = path.join(__dirname, "demo");

// // Function to convert PascalCase to kebab-case
// function toKebabCase(str) {
//   return str
//     .replace(/([a-z0-9])([A-Z])/g, "$1-$2") // Add a hyphen between lowercase and uppercase
//     .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2") // Handle consecutive uppercase letters
//     .toLowerCase(); // Convert to lowercase
// }

// // Function to rename files
// function renameFiles() {
//   fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//       console.error("Unable to scan directory:", err);
//       return;
//     }

//     files.forEach((file) => {
//       console.log(file);
//       // // Check if the file ends with .stories.tsx
//       // if (file.endsWith(".stories.tsx")) {
//       //   // Remove .stories and convert to kebab-case
//       //   const baseName = file.replace(".stories.tsx", "").replace(".tsx", "");

//       //   // Convert PascalCase to kebab-case
//       //   const newBaseName = toKebabCase(baseName);

//       //   // Create the new file name and keep the .tsx extension
//       //   const newFileName = `${newBaseName}.tsx`;
//       //   console.log(newFileName);

//       //   // Construct full file paths
//       //   const oldPath = path.join(directoryPath, file);
//       //   const newPath = path.join(directoryPath, newFileName);

//       //   // Rename the file
//       //   fs.rename(oldPath, newPath, (err) => {
//       //     if (err) {
//       //       console.error(`Error renaming file ${file}:`, err);
//       //     } else {
//       //       console.log(`Renamed ${file} to ${newFileName}`);
//       //     }
//       //   });
//       // }
//     });
//   });
// }

// // Run the renaming function
// // renameFiles();

// const componentNames = [
//   "alert-dialog",
//   "breadcrumbs",
//   "button",
//   "calendar",
//   "checkbox-group",
//   "checkbox",
//   "combobox",
//   "date-field",
//   "date-picker",
//   "date-range-picker",
//   "form",
//   "grid-list",
//   "link",
//   "list-box",
//   "menu",
//   "meter",
//   "number-field",
//   "popover",
//   "progress-bar",
//   "radio-group",
//   "range-calendar",
//   "search-field",
//   "select",
//   "slider",
//   "switch",
//   "table",
//   "tabs",
//   "tag-group",
//   "text-field",
//   "time-field",
//   "toggle-button",
//   "toolbar",
//   "tooltip",
// ];

// // Convert component names to PascalCase (e.g., 'button' -> 'Button')
// const toPascalCase = (str) =>
//   str
//     .split("-")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join("");

// // Create the components object
// const components = componentNames.reduce((acc, name) => {
//   const pascalName = toPascalCase(name);
//   acc[name] = {
//     code: `// Code for ${pascalName}`,
//     demo: `<${pascalName}Demo />`,
//   };
//   return acc;
// }, {});

// // console.log(components);

// const fs = require("fs");
// const path = require("path");

// // Directory to save the .mdx files
// const outputDirectory = path.join(__dirname, "/");

// // Component names and descriptions
// const componentDetails = {
//   "alert-dialog":
//     "Alert dialogs are used to capture user attention and usually require an action before proceeding.",
//   breadcrumbs:
//     "Breadcrumbs are a navigation component that shows the user’s location within a hierarchy.",
//   button: "Buttons trigger actions and are fundamental UI components.",
//   calendar: "Calendars allow users to select dates and times.",
//   "checkbox-group":
//     "Checkbox groups let users select multiple options from a list.",
//   checkbox: "Checkboxes are used for binary choices—yes/no, on/off.",
//   combobox:
//     "Comboboxes allow users to select an option from a list or enter a custom value.",
//   "date-field": "Date fields enable users to input or select dates.",
//   "date-picker":
//     "Date pickers provide a calendar interface for selecting dates.",
//   "date-range-picker":
//     "Date range pickers let users select a start and end date.",
//   form: "Forms are used to collect user input.",
//   "grid-list": "Grid lists display items in a grid layout.",
//   link: "Links navigate to different parts of the application or external resources.",
//   "list-box": "List boxes display a list of options for selection.",
//   menu: "Menus are used to navigate between sections or perform actions.",
//   meter: "Meters display measurement values.",
//   "number-field": "Number fields allow users to input numeric values.",
//   popover: "Popovers are used for displaying additional content in context.",
//   "progress-bar": "Progress bars indicate the completion status of a task.",
//   "radio-group": "Radio groups let users select a single option from a list.",
//   "range-calendar": "Range calendars allow selection of a range of dates.",
//   "search-field": "Search fields let users input search queries.",
//   select: "Select fields allow users to choose from a list of options.",
//   slider: "Sliders let users select a value from a range.",
//   switch: "Switches toggle between two states—on and off.",
//   table: "Tables organize data into rows and columns.",
//   tabs: "Tabs switch between different views or sections.",
//   "tag-group": "Tag groups display a set of tags or labels.",
//   "text-field": "Text fields allow users to input text.",
//   "time-field": "Time fields enable users to input or select times.",
//   "toggle-button": "Toggle buttons switch between two states or actions.",
//   toolbar: "Toolbars provide a set of controls or actions.",
//   tooltip: "Tooltips provide additional information on hover.",
// };

// // Function to create an MDX file for each component
// function createMDXFiles() {
//   for (const [component, description] of Object.entries(componentDetails)) {
//     const fileName = `${component}.mdx`;
//     const filePath = path.join(outputDirectory, fileName);

//     // MDX template with dynamic content
//     const content = `
// import { DocsLayout } from "@/layout";
// import { ${
//       component.charAt(0).toUpperCase() + component.slice(1)
//     } } from "@/components/ui/${component}";
// import { ComponentPreview } from "@/components/component-preview";

// <DocsLayout>

// # ${component.charAt(0).toUpperCase() + component.slice(1)}

// <br />

// ${description}

// <br />
// <br />

// <ComponentPreview component="${component}"></ComponentPreview>

// </DocsLayout>
//     `;

//     // Write content to file
//     fs.writeFile(filePath, content.trim(), (err) => {
//       if (err) {
//         console.error(`Error writing file ${fileName}:`, err);
//       } else {
//         console.log(`Created ${fileName}`);
//       }
//     });
//   }
// }

// // Run the function to create MDX files
// // createMDXFiles();
