import { Divider, List } from "@mui/material";
import { useContext, useEffect } from "react";
import { MenuItemsContext } from "../../Contexts/MenuItemsContext";
import CategoriaItem from "./CategoriaItem";

export default function MenuCategoria() {

    const { obtenerCategorias, categoriasAll } = useContext(MenuItemsContext)

    const CategoriaList = categoriasAll.map((data) => (
        <div key={data.id_categorias}>
            <CategoriaItem values={data} />
            <Divider />
        </div>
    ));

    useEffect(() => {
        obtenerCategorias();
    }, [])

    return (
        <div>

            <List open={true}>
                {CategoriaList}
            </List>
        </div>
    )
}