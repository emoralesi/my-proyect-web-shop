export async function GetRelPRoductoCategoriaFiltroBySub(idSubCategoria) {

    let data = { "idSubCategoria": idSubCategoria };

    try {
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)

        };
        const response = await fetch(`http://localhost:3600/service/obtenerRelPRoductoCategoriaFiltroBySub`, requestOptions)
            .then((res) => {
                return res.json()
            }).then((res) => {
                return res
            });

        return response

    } catch (error) {
        throw error
    }
}

export default { GetRelPRoductoCategoriaFiltroBySub }