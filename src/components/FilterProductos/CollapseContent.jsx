import { Chip, ListItem } from "@mui/material";
import React, { useContext, useState } from "react";
import CheckedFilter from "./CheckedFilter";
import { FiltroSelectedContext } from "../../Contexts/FiltroSelectedContext";

export default function CollapseContent({ data, value }) {

    const { dataFilter, setDataFilter, chipList, setChipList, checked, setChecked } = useContext(FiltroSelectedContext);

    const handleChipDelete = (filtro, valor) => {
        setChipList((prevChipList) => {
            // Filtrar el chipList para eliminar el elemento con el valor y filtro correspondientes
            const newChipList = prevChipList.filter((chip) => {
                return !(chip.filtro === filtro && chip.valor === valor);
            });
            return newChipList;
        });

        setDataFilter((prevFilterList) => {
            // Filtrar el chipList para eliminar el elemento con el valor y filtro correspondientes
            const newFilterList = prevFilterList.filter((datos) => {
                return !(datos.filtro === filtro && datos.valor === valor);
            });
            return newFilterList;
        });

        console.log("filtro", filtro);
        console.log("valor", valor);

        const copiaChecked = [...checked]
        copiaChecked.filter(values => values.origen == filtro && values.nombre == valor)[0].valor = false

        setChecked(copiaChecked);
    };

    return (
        <>
            <ListItem>
                <div style={{ border: 'solid 0.5px', minHeight: '60px', width: '100%', padding: 5 }}>
                    {
                        chipList.filter(values => values.filtro == value).length > 0 ?
                            chipList.filter(values => values.filtro == value).map((chip, index) => (
                                <Chip
                                    key={index}
                                    color="success"
                                    size="medium"
                                    variant="elevated"
                                    label={chip.valor}
                                    onDelete={() => handleChipDelete(chip.filtro, chip.valor)}
                                />
                            )) :
                            <p style={{ fontFamily: 'monospace', fontSize: 15 }}>Seleccione un filtro..</p>
                    }
                </div>
            </ListItem>
            {data[value].productos.map((value2) => (
                <CheckedFilter
                    key={value2.nombre_producto_categoria_filtro}
                    value={value2}
                    nombre={value}
                />
            ))}
        </>
    );
}
