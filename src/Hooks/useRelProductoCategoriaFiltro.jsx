import { useState } from "react"
import { GetRelPRoductoCategoriaFiltroBySub } from "../services/RelProductoCategoriaFiltro"

export const useRelProductoCategoriaFiltro = () => {

    const [dataAll, setDataAll] = useState([]);

    const getPrCaFiBySubCa = async (value) => {

        try {

            const data = await GetRelPRoductoCategoriaFiltroBySub(value)

            setDataAll(data.resultado)
        } catch (er) {
            console.log(er);
            throw er
        }
    }
    return { getPrCaFiBySubCa, dataAll }
}