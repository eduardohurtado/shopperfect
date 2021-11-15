import React from "react";
import DataTable from "react-data-table-component";

// Styles
import "./productList.css";

// Table settings
import { tableColumns, tableData } from "./tableSettings";

const ProductList = () => {
    return (
        <div className="tableMainContainer">
            <p className="titleTable">
                <b>Productos en stock</b>
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
                // progressPending={loadingData}
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

export default ProductList;
