import { createContext, useEffect, useState } from "react";
import { useCategoria } from "../Hooks/useCategoria";
import { useSubCategoria } from "../Hooks/useSubCategoria";

export const MenuItemsContext = createContext();

export default function MenuItemsProvider(props) {

    const { obtenerCategorias, categoriasAll } = useCategoria();
    const { subCategoriaAll, obtenerSubCategoria } = useSubCategoria();

    const [categoriaFilter, setCategoriaFilter] = useState();

    const FiltrarCategoriaMenu = (idCategoria) => {

        let data = []
        let agrupado = []

        if (idCategoria) {

            data = subCategoriaAll.filter(val => val.id_categoria == (idCategoria))

        } else {

            data = subCategoriaAll.filter(val => val.id_categoria == (categoriasAll[0].id_categoria))

        }


        data?.forEach((item) => {
            const key = item.nombre_sub_categoria
            agrupado[key] = agrupado[key] || []
            agrupado[key].push(item)
        })

        setCategoriaFilter(agrupado);

    }

    useEffect(() => {
        obtenerCategorias()
        obtenerSubCategoria()
    }, [])

    const valor = { obtenerCategorias, categoriasAll, FiltrarCategoriaMenu, categoriaFilter, obtenerSubCategoria }

    return (
        <MenuItemsContext.Provider value={valor}>
            {props.children}
        </MenuItemsContext.Provider>
    )
}