import axios from "axios";

const MongoServerURI = () => {
    switch (process.env.NODE_ENV) {
        case "development":
            return "http://localhost:8080/api";

        default:
            return "";
    }
};

const apiProductsServices = {
    getAll: async () => {
        try {
            const response = await axios.get(MongoServerURI() + "/products");
            return response;
        } catch (error) {
            console.error("Error on Axios:", error);
        }
    },
    create: async (data) => {
        try {
            const response = await axios.post(MongoServerURI() + "/products", data);
            return response;
        } catch (error) {
            console.error("Error on Axios:", error);
        }
    },
    deleteById: async (id) => {
        try {
            const response = await axios.delete(MongoServerURI() + `/products/${id}`);
            return response;
        } catch (error) {
            console.error("Error on Axios:", error);
        }
    }
};

export default apiProductsServices;
