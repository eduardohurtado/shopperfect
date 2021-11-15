// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faEye, faTrash);

export const tableButtons = {
    details: () => {
        return (
            <div>
                <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon="eye" />
                </button>
            </div>
        );
    },
    delete: () => {
        return (
            <div>
                <button type="button" className="btn btn-danger">
                    <FontAwesomeIcon icon="trash" />
                </button>
            </div>
        );
    }
};

export const tableColumns = [
    {
        name: "Nombre",
        selector: (row) => row.nombre,
        sortable: true
    },
    {
        name: "Precio",
        selector: (row) => row.precio,
        sortable: true
    },
    {
        name: "Descripcion",
        selector: (row) => row.descripcion,
        sortable: true
    },
    {
        name: "Cantidad",
        selector: (row) => row.cantidad,
        sortable: true
    },
    {
        name: "Disponible",
        selector: (row) => row.disponible,
        sortable: true
    },
    {
        name: "Detalles",
        selector: (row) => tableButtons.details(row),
        sortable: true,
        right: true,
        compact: true
    },
    {
        name: "Eliminar",
        selector: (row) => tableButtons.delete(row),
        sortable: true,
        right: true
    }
];

export const tableData = [
    {
        nombre: "Camisa",
        precio: 120,
        descripcion: "Des...",
        cantidad: 24,
        disponible: "No"
    },
    {
        nombre: "Corbata",
        precio: 20,
        descripcion: "Des...",
        cantidad: 45,
        disponible: "No"
    },
    {
        nombre: "Zapatos",
        precio: 460,
        descripcion: "Des...",
        cantidad: 1,
        disponible: "Si"
    },
    { nombre: "Gafas", precio: 753, descripcion: "Des...", cantidad: 12, disponible: "No" },
    {
        nombre: "Pantalon",
        precio: 830,
        descripcion: "Des...",
        cantidad: 2,
        disponible: "Si"
    }
];
