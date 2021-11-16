import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { message } from "antd";
import LoadingOverlay from "react-loading-overlay-ts";

// Styles
import "./productList.css";

// Services
import apiProductsServices from "../../../../../services/product.services";

// Table settings
import { tableButtons } from "./tableSettings";

const ProductList = () => {
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isOverlayActive, setIsOverlayActive] = useState(false);

    const tableColumns = [
        {
            name: "Imagen",
            selector: (row) => tableButtons.showImage(row.imagen),
            width: "150px",
            sortable: true,
            wrap: true
        },
        {
            name: "Nombre",
            selector: (row) => row.nombre,
            sortable: true,
            wrap: true
        },
        {
            name: "Precio",
            selector: (row) =>
                new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(
                    row.precio
                ),
            sortable: true,
            wrap: true
        },
        {
            name: "Descripcion",
            selector: (row) => row.descripcion,
            sortable: true,
            wrap: true
        },
        {
            name: "Cantidad",
            selector: (row) => row.cantidad,
            sortable: true,
            wrap: true
        },
        {
            name: "Disponible",
            selector: (row) => (row.disponible ? "Si" : "No"),
            sortable: true,
            wrap: true
        },
        {
            name: "Editar",
            selector: (row) => tableButtons.edit(row),
            sortable: true,
            wrap: true,
            right: true,
            compact: true
        },
        {
            name: "Eliminar",
            selector: (row) => tableButtons.delete(row, setIsOverlayActive),
            sortable: true,
            right: true
        }
    ];

    useEffect(() => {
        apiProductsServices
            .getAll()
            .then((res) => {
                setTableData(res.data.response);
                setIsLoading(false);
            })
            .catch((err) => {
                message.error("API error");
                console.warn("API error:", err);
            });
    }, []);

    return (
        <div className="tableMainContainer">
            <p className="titleTable">
                <b>Productos en stock</b>
            </p>

            <LoadingOverlay active={isOverlayActive} spinner text="Cargando...">
                <DataTable
                    columns={tableColumns}
                    data={tableData}
                    responsive={true}
                    highlightOnHover={true}
                    striped={true}
                    // selectableRows={true}
                    selectableRowsVisibleOnly={true}
                    pointerOnHover={true}
                    progressPending={isLoading}
                    // theme='solarized'
                    // clearSelectedRows={clearSelectedRows}
                    // onRowClicked={handleRowClicked}
                    // onSelectedRowsChange={handleRowSelected}
                    // contextActions={contextActions}
                    pagination={true}
                    paginationServer
                    // paginationTotalRows={paginationTotalRows}
                    paginationRowsPerPageOptions={[10]}
                    // onChangePage={(page) => onChangePage(page)}
                />
            </LoadingOverlay>
        </div>
    );
};

export default ProductList;
