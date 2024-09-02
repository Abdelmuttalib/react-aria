import React, { useMemo, useState } from "react";
import { TableBody } from "react-aria-components";
import {
  Cell,
  Column,
  Row,
  Table,
  TableHeader,
} from "@/registry/default/ui/table";

let rows = [
  { id: 1, name: "Games", date: "6/7/2020", type: "File folder" },
  { id: 2, name: "Program Files", date: "4/7/2021", type: "File folder" },
  { id: 3, name: "bootmgr", date: "11/20/2010", type: "System file" },
  { id: 4, name: "log.txt", date: "1/18/2016", type: "Text Document" },
  { id: 5, name: "Proposal.ppt", date: "6/18/2022", type: "PowerPoint file" },
  { id: 6, name: "Taxes.pdf", date: "12/6/2023", type: "PDF Document" },
  { id: 7, name: "Photos", date: "8/2/2021", type: "File folder" },
  { id: 8, name: "Documents", date: "3/18/2023", type: "File folder" },
  { id: 9, name: "Budget.xls", date: "1/6/2024", type: "Excel file" },
];

type Row = {
  id: number;
  name: string;
  date: string;
  type: string;
};
type Column = Row["name"];

export function TableDemo(args: any) {
  let [sortDescriptor, setSortDescriptor] = useState<{
    column: Column;
    direction: "ascending" | "descending";
  }>({
    column: "name",
    direction: "ascending",
  });

  let items = useMemo(() => {
    let items = rows.slice().sort((a, b) =>
      // @ts-ignore
      a[sortDescriptor.column].localeCompare(b[sortDescriptor.column])
    );
    if (sortDescriptor.direction === "descending") {
      items.reverse();
    }
    return items;
  }, [sortDescriptor]);

  return (
    <Table
      aria-label="Files"
      {...{
        onRowAction: null,
        onCellAction: null,
        selectionMode: "multiple",
      }}
      sortDescriptor={sortDescriptor}
      // @ts-ignore
      onSortChange={setSortDescriptor}
    >
      <TableHeader>
        <Column id="name" isRowHeader allowsSorting>
          Name
        </Column>
        <Column id="type" allowsSorting>
          Type
        </Column>
        <Column id="date" allowsSorting>
          Date Modified
        </Column>
      </TableHeader>
      <TableBody items={items}>
        {(row) => (
          <Row>
            <Cell>{row.name}</Cell>
            <Cell>{row.type}</Cell>
            <Cell>{row.date}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
