import { createContext, useState } from "react";

export const FiltroSelectedContext = createContext();

export default function FiltroSelectedProvider(props) {

    const [dataFilter, setDataFilter] = useState([]);

    const valor = { dataFilter, setDataFilter };

    return (
        <FiltroSelectedContext.Provider value={valor}>
            {props.children}
        </FiltroSelectedContext.Provider>
    )
}