// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

export const tableButtons = {
    showImage: (url) => {
        return <img src={url} alt="Imagen no disponible" style={{ height: "100px" }} />;
    },
    buy: () => {
        return (
            <div>
                <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon="shopping-cart" />
                </button>
            </div>
        );
    }
};

export const tableColumns = [
    {
        name: "Imagen",
        selector: (row) => tableButtons.showImage(row.imagen),
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
        selector: (row) => row.precio,
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
        selector: (row) => row.disponible,
        sortable: true,
        wrap: true
    },
    {
        name: "Comprar",
        selector: (row) => tableButtons.buy(row),
        sortable: true,
        wrap: true,
        right: true
    }
];

export const tableData = [
    {
        imagen: "https://los40es00.epimg.net/los40/imagenes/2020/02/04/cinetv/1580834241_572538_1580834379_noticia_normal.jpg",
        nombre: "Camisa",
        precio: 120,
        descripcion: "Des...",
        cantidad: 24,
        disponible: "No"
    },
    {
        imagen: "",
        nombre: "Corbata",
        precio: 20,
        descripcion: "Des...",
        cantidad: 45,
        disponible: "No"
    },
    {
        imagen: "",
        nombre: "Zapatos",
        precio: 460,
        descripcion: "Des...",
        cantidad: 1,
        disponible: "Si"
    },
    {
        imagen: "",
        nombre: "Gafas",
        precio: 753,
        descripcion: "Des...",
        cantidad: 12,
        disponible: "No"
    },
    {
        imagen: "",
        nombre: "Pantalon",
        precio: 830,
        descripcion: "Des...",
        cantidad: 2,
        disponible: "Si"
    }
];
