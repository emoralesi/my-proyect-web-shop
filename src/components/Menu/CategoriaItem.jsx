import { Button } from "@mui/material";
import { MenuItemsContext } from "../../Contexts/MenuItemsContext";
import { useContext } from "react";

export default function CategoriaItem({ values }) {

    const { FiltrarCategoriaMenu } = useContext(MenuItemsContext)

    return (
        <Button style={{width:'100%'}} onClick={() => { FiltrarCategoriaMenu(values.id_categoria) }}><h5 style={{color:'black',fontSize:13}}>{values.nombre}</h5></Button>
    )
}