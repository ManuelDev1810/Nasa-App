import {getGridStringOperators } from "@mui/x-data-grid";

export const columns = [
    {
        field: "img_src",
        headerName: "Image",
        width: 500,
        renderCell: (params) => <img src={params.value} style={{height: "100%", width: "100%", objectFit: "contain"}}  />
    },
    {
        field: "id",
        headerName: "ID",
        width: 100,
        filterOperators: getGridStringOperators().filter(
            (operator) => operator.value === "contains"
        ),
    },
    {
        field: "sol",
        headerName: "Sol",
        width: 150,
        filterOperators: getGridStringOperators().filter(
            (operator) => operator.value === "contains"
        ),
    },
    {
        field: "camera",
        headerName: "Camera",
        width: 150,
        filterOperators: getGridStringOperators().filter(
            (operator) => operator.value === "contains"
        ),
        valueGetter: ({ value }) => value.full_name,
    },
    {
        field: "rover",
        headerName: "Rover Name",
        width: 150,
        filterOperators: getGridStringOperators().filter(
            (operator) => operator.value === "contains"
        ),
        valueGetter: ({ value }) => value.name,
    },
    {
        field: "earth_date",
        headerName: "Earth Date",
        width: 150,
        filterOperators: getGridStringOperators().filter(
            (operator) => operator.value === "contains"
        ),
    },
];