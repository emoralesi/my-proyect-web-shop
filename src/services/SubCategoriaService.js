export async function getSubCategorias() {

    try {
        const response = await fetch(`http://localhost:3600/service/obtenerSubCategoriaYSubSub`).then((res) => {
            return res.json()
        }).then((res) => {
            return res
        });

        return response

    } catch (error) {
        throw error
    }

}

export default { getSubCategorias };

