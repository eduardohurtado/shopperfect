// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faPencilAlt, faTrash);

export const tableButtons = {
    showImage: (url) => {
        return <img src={url} alt="Imagen no disponible" style={{ width: "100px" }} />;
    },
    edit: () => {
        return (
            <div>
                <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon="pencil-alt" />
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
        selector: (row) => tableButtons.delete(row),
        sortable: true,
        right: true
    }
];
