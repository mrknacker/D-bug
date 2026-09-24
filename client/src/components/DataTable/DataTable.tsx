import type { DataTableProps } from "@/pages/types/table"
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../@/components/ui/table"
import "./DataTable.css"
import { EllipsisVertical } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../../../@/components/ui/avatar"

function DataTable<T>({columns, data}: DataTableProps<T>) : React.ReactNode {
  return (
    <Table className="data-table">
      <TableHeader className="data-table-header">
        <TableRow className="data-table-row">
          {columns.map((column) => (
            <TableHead 
            key={String(column.key)}
            className="data-table-head">{column.header}</TableHead>
          ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index} className="data-table-row">
          {columns.map((col) => (
            <TableCell key={String([col.key])}
            className="data-table-data">
              { col.key === "members" ? (
                row.members.map((member) => {
                <div>
                  <Avatar size="sm">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{member}</AvatarFallback>
                  </Avatar>
                </div>
                })
              ) :
              String(row[col.key])} 
            </TableCell>
          ))}
          <TableCell>{
            <button>
              <EllipsisVertical size={16} />
            </button>
          }</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
      </TableFooter>
    </Table>
  )
}

export default DataTable