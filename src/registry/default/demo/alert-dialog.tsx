// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/registry/default/ui/accordion"

// export default function AccordionDemo() {
//   return (
//     <Accordion type="single" collapsible className="w-full">
//       <AccordionItem value="item-1">
//         <AccordionTrigger>Is it accessible?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It adheres to the WAI-ARIA design pattern.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-2">
//         <AccordionTrigger>Is it styled?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It comes with default styles that matches the other
//           components&apos; aesthetic.
//         </AccordionContent>
//       </AccordionItem>
//       <AccordionItem value="item-3">
//         <AccordionTrigger>Is it animated?</AccordionTrigger>
//         <AccordionContent>
//           Yes. It&apos;s animated by default, but you can disable it if you
//           prefer.
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   )
// }

import { DialogTrigger } from "@/registry/default/ui/dialog";
import { Modal } from "@/registry/default/ui/modal";
import { Button } from "@/registry/default/ui/button";
import { AlertDialog } from "@/registry/default/ui/alert-dialog";

export const AlertDialogDemo = (args: any) => (
  <DialogTrigger>
    <Button variant="secondary">Delete…</Button>
    <Modal>
      <AlertDialog
        {...{
          title: "Delete folder",
          children:
            'Are you sure you want to delete "Documents"? All contents will be permanently destroyed.',
          variant: "destructive",
          actionLabel: "Delete",
        }}
      />
    </Modal>
  </DialogTrigger>
);
