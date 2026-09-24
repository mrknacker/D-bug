export type TableColumn<T> = {

    key?: keyof T;
    header: string;
}

export type DataTableProps<T> = {

    columns: TableColumn<T>[];
    data: T[];

}