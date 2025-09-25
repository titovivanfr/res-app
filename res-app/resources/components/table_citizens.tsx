import Paper from '@mui/material/Paper';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TableRow } from '../js/types/table';

interface TableProps {
    rows: TableRow[];
}

export default function TableCitizens({
    rows,
}: TableProps): React.ReactElement {
    const paginationModel = { page: 0, pageSize: 5 };
    const columns: GridColDef[] = [
        {
            field: 'civility',
            headerName: 'Civilité',
            type: 'number',
            width: 90,
        },
        {
            field: 'last_name',
            headerName: 'Nom',
            type: 'number',
            width: 130,
        },
        {
            field: 'using_name',
            headerName: "Nom d'usage",
            type: 'number',
            width: 130,
        },
        {
            field: 'first_name',
            headerName: 'Prénom',
            type: 'number',
            width: 130,
        },

        {
            field: 'email',
            headerName: 'Email',
            type: 'number',
            width: 130,
        },
        {
            field: 'genre',
            headerName: 'Genre',
            type: 'number',
            width: 130,
        },
        {
            field: 'phone',
            headerName: 'Téléphone',
            type: 'number',
            width: 130,
        },
        {
            field: 'apartment',
            headerName: 'Apartment',
            width: 130,
        },
        {
            field: 'birthday',
            headerName: 'Anniversaire',
            width: 130,
        },
    ];
    return (
        <>
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: { paginationModel },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </>
    );
}
