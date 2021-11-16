// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faPencilAlt, faTrash);

export const tableButtons = {
    showImage: (url) => {
        return <img src={url} alt="Imagen no disponible" style={{ height: "100px" }} />;
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
        name: "Cantidad",
        selector: (row) => row.cantidad,
        sortable: true,
        wrap: true
    },
    {
        name: "Cliente",
        selector: (row) => row.cliente,
        sortable: true,
        wrap: true
    }
];

export const tableData = [
    {
        imagen: "https://los40es00.epimg.net/los40/imagenes/2020/02/04/cinetv/1580834241_572538_1580834379_noticia_normal.jpg",
        nombre: "Camisa",
        precio: 120,
        cantidad: 24,
        cliente: "grij4lba@hotmail.com"
    },
    {
        imagen: "https://los40es00.epimg.net/los40/imagenes/2020/02/04/cinetv/1580834241_572538_1580834379_noticia_normal.jpg",
        nombre: "Camisa",
        precio: 120,
        cantidad: 24,
        cliente: "grij4lba@hotmail.com"
    },
    {
        imagen: "https://los40es00.epimg.net/los40/imagenes/2020/02/04/cinetv/1580834241_572538_1580834379_noticia_normal.jpg",
        nombre: "Camisa",
        precio: 120,
        cantidad: 24,
        cliente: "grij4lba@hotmail.com"
    },
    {
        imagen: "https://los40es00.epimg.net/los40/imagenes/2020/02/04/cinetv/1580834241_572538_1580834379_noticia_normal.jpg",
        nombre: "Camisa",
        precio: 120,
        cantidad: 24,
        cliente: "grij4lba@hotmail.com"
    },
    {
        imagen: "https://los40es00.epimg.net/los40/imagenes/2020/02/04/cinetv/1580834241_572538_1580834379_noticia_normal.jpg",
        nombre: "Camisa",
        precio: 120,
        cantidad: 24,
        cliente: "grij4lba@hotmail.com"
    }
];
