import { Popconfirm, message } from "antd";

// Services
import apiProductsServices from "../../../../../services/product.services";

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
    delete: (row, setIsOverlayActive) => {
        const onConfirm = (row) => {
            setIsOverlayActive(true);

            apiProductsServices
                .deleteById(row._id)
                .then(() => {
                    message.info("Producto eliminado con éxito :)");
                    setIsOverlayActive(false);
                    window.location.reload();
                })
                .catch((err) => {
                    message.error("API Error");
                    console.error("API Error", err);
                    setIsOverlayActive(false);
                });
        };

        return (
            <div>
                <Popconfirm
                    title="Seguro que quieres eliminar este producto?"
                    onConfirm={() => onConfirm(row)}
                    okText="Si"
                    cancelText="No"
                >
                    <button type="button" className="btn btn-danger">
                        <FontAwesomeIcon icon="trash" />
                    </button>
                </Popconfirm>
            </div>
        );
    }
};
