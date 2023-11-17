import { useMemo, useState } from "react";
import { getProductoByIdSubCategoria } from "../services/ProductoService";

export const useProducto = () => {

    const [ProductoAll, setProductoAll] = useState([]);

    const getProductoBySubCategoria = useMemo(() => async (value) => {
        try {
            const data = await getProductoByIdSubCategoria(value);
            setProductoAll(data.resultado);
        } catch (er) {
            // Manejo de errores
        }
    }, [ProductoAll]);

    return { ProductoAll, getProductoBySubCategoria }
}