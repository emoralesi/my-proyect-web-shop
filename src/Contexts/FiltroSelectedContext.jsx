import { createContext, useState } from "react";

export const FiltroSelectedContext = createContext();

export default function FiltroSelectedProvider(props) {

    const [dataFilter, setDataFilter] = useState([]);
    const [chipList, setChipList] = useState([]);
    const [checked, setChecked] = useState([]);

    const valor = { dataFilter, setDataFilter, chipList, setChipList, checked, setChecked };


    return (
        <FiltroSelectedContext.Provider value={valor}>
            {props.children}
        </FiltroSelectedContext.Provider>
    )
}