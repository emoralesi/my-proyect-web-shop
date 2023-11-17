import { Checkbox, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { useContext } from "react";
import { FiltroSelectedContext } from "../../Contexts/FiltroSelectedContext";

export default function CheckedFilter({ value, nombre }) {

    const { dataFilter, setDataFilter, chipList, setChipList, checked, setChecked } = useContext(FiltroSelectedContext);

    console.log("mi checked", checked);

    const isChecked = checked?.filter(values => values.origen == nombre && values.nombre == value.nombre_producto_categoria_filtro)[0]?.valor || false;

    return (
        <List component="li" disablePadding>
            <ListItem>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={isChecked}
                        tabIndex={-1}
                        disableRipple
                        value={value.nombre_producto_categoria_filtro}
                        onChange={(e) => {

                            if (checked.filter(values => values.origen == nombre && values.nombre == value.nombre_producto_categoria_filtro).length > 0) {

                                const copiaChecked = [...checked]
                                copiaChecked.filter(values => values.origen == nombre && values.nombre == value.nombre_producto_categoria_filtro)[0].valor = e.target.checked

                                setChecked(copiaChecked);
                            } else {
                                let dataChecked = {
                                    "nombre": value.nombre_producto_categoria_filtro,
                                    "origen": nombre,
                                    "valor": e.target.checked
                                }
                                setChecked((prevListChecked) => [...prevListChecked, dataChecked]);
                            }

                            let data = {
                                filtro: nombre,
                                valor: e.target.value,
                            };

                            if (e.target.checked) {
                                setChipList((prevChipList) => [...prevChipList, data]);
                                setDataFilter((prevDataFilter) => [...prevDataFilter, data])
                            } else if (!e.target.checked) {
                                setChipList((prevChipList) => {
                                    // Filtrar el chipList para eliminar el elemento con el valor y filtro correspondientes
                                    const newChipList = prevChipList.filter((chip) => {
                                        return !(chip.filtro === data.filtro && chip.valor === data.valor);
                                    });
                                    return newChipList;
                                });
                                setDataFilter((prevDataFilter) => {
                                    // Filtrar el chipList para eliminar el elemento con el valor y filtro correspondientes
                                    const newDataList = prevDataFilter.filter((datos) => {
                                        return !(datos.filtro === data.filtro && datos.valor === data.valor);
                                    });
                                    return newDataList;
                                });
                            }

                        }}
                    />
                </ListItemIcon>
                <ListItemText sx={{ color: "black" }} primary={`${value.nombre_producto_categoria_filtro} (${value.cantidad})`} />
            </ListItem>
        </List>
    );
}
