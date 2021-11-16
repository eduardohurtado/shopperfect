import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { message } from "antd";

// Services
import apiProductsServices from "../../../../services/product.services";

// Styles
import "./productsToBuy.css";

// Table settings
import { tableColumns } from "./tableSettings";

const ProductsToBuy = () => {
    const [tableData, setTableData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
                <b>Bienvenido a la tienda</b>
            </p>

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
        </div>
    );
};

export default ProductsToBuy;
