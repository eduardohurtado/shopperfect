import React, { useState } from "react";
import { Form, Input, Button, Select, message } from "antd";
import LoadingOverlay from "react-loading-overlay-ts";

// Services
import apiProductsServices from "../../../services/product.services";

// Styles
import "./newProductPage.css";

const { Option } = Select;

const NewProductPage = () => {
    const [isOverlayActive, setIsOverlayActive] = useState(false);

    const onFinish = (values) => {
        setIsOverlayActive(true);
        console.log("Success:", values);

        const dataNewProduct = {
            imagen: values.imageProduct,
            nombre: values.nameProduct,
            precio: parseInt(values.priceProduct, 10),
            descripcion: values.descriptionProduct,
            cantidad: parseInt(values.amountProduct, 10),
            disponible: values.isAbleProduct === "si" ? true : false
        };

        apiProductsServices
            .create(dataNewProduct)
            .then((res) => {
                message.info("Producto añadido con éxito :)");
                setIsOverlayActive(false);
            })
            .catch((err) => {
                message.error("API Error");
                console.error("API Error:", err);
                setIsOverlayActive(false);
            });
    };

    const onFinishFailed = () => {
        message.error("Por favor llena el formulario correctamente");
    };

    return (
        <div className="newProductPageContainer">
            <div className="titleNewProduct">
                <p>Añadir un nuevo producto al stock</p>
            </div>

            <LoadingOverlay active={isOverlayActive} spinner text="Cargando...">
                <div className="newProductFormContainer">
                    <div className="newProductForm">
                        <Form
                            name="basic"
                            initialValues={{
                                remember: true
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Nombre"
                                name="nameProduct"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor ingresar el nombre del nuevo producto"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Precio"
                                name="priceProduct"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor ingresar el precio del nuevo producto"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Descripción"
                                name="descriptionProduct"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor ingresar la descripción del nuevo producto"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Cantidad"
                                name="amountProduct"
                                rules={[
                                    {
                                        required: true,
                                        message: "Por favor ingresar la cantidad del nuevo producto"
                                    }
                                ]}
                            >
                                <Input type="number" />
                            </Form.Item>

                            <Form.Item
                                label="Link de la imagen"
                                name="imageProduct"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor ingresar el enlace de la imagen del nuevo producto"
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Disponible"
                                name="isAbleProduct"
                                initialValue="si"
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Por favor seleccionar si el producto está disponible"
                                    }
                                ]}
                            >
                                <Select>
                                    <Option value="si">Si</Option>
                                    <Option value="no">No</Option>
                                </Select>
                            </Form.Item>

                            <div className="center">
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Añadir
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </LoadingOverlay>
        </div>
    );
};

export default NewProductPage;
