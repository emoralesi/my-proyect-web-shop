import { useState } from "react";
import { getSubCategorias } from "../services/SubCategoriaService";

export const useSubCategoria = () => {

    const [subCategoriaAll, setSubCategoriaAll] = useState();
    const [subCategoria] = useState();

    const obtenerSubCategoria = async () => {
        try {

            const data = await getSubCategorias()

            setSubCategoriaAll(data.resultado)
        } catch (er) {

        } finally {

        }
    }

    return {
        subCategoriaAll,
        subCategoria,
        obtenerSubCategoria
    }
}