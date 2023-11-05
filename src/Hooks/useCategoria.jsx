import { useCallback, useState } from "react"
import { getCategorias } from "../services/CategoriaService.js"

export const useCategoria = () => {

    const [categoriasAll, setCategoriasAll] = useState([])

    const obtenerCategorias = useCallback(async () => {
        try {

            const data = await getCategorias()

            setCategoriasAll(data.resultado)
        } catch (er) {

        } finally {

        }
    }, [])

    return {
        categoriasAll,
        obtenerCategorias
    }
}