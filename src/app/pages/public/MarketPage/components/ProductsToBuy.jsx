import React from "react";
import DataTable from "react-data-table-component";

// Styles
import "./productsToBuy.css";

// Table settings
import { tableColumns, tableData } from "./tableSettings";

const ProductsToBuy = () => {
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

export default ProductsToBuy;
