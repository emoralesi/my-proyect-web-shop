import { useState } from "react";
import { getProductoByIdSubCategoria } from "../services/ProductoService";

export const useProducto = () => {

    const [ProductoAll, setProductoAll] = useState([]);

    const getProductoBySubCategoria = async (value) => {
        try {

            const data = await getProductoByIdSubCategoria(value)

            setProductoAll(data.resultado)
        } catch (er) {

        } finally {

        }
    }

    return { ProductoAll, getProductoBySubCategoria }
}