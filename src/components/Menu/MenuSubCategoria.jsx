import { useContext, useEffect } from 'react'
import { MenuItemsContext } from '../../Contexts/MenuItemsContext'
import '../../styles/MenuSubCategoria.css'
import { Box } from '@mui/material'

export default function MenuSubCategoria() {

    const { categoriaFilter, FiltrarCategoriaMenu, obtenerSubCategoria } = useContext(MenuItemsContext)

    useEffect(() => {
        FiltrarCategoriaMenu()
        obtenerSubCategoria()
    }, [])

    return (
        <div className="SubCategoriaItems">
            <ul>
                {categoriaFilter ? Object.keys(categoriaFilter).map((key) => (
                    <Box key={key} className='gridContain' sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '8px' }}>
                        <div style={{ paddingBottom: '15px', fontSize:15 }}>
                            <strong style={{wordBreak:'break-word'}}>{key}</strong>
                        </div>
                        <div>
                            {categoriaFilter[key].map((item) => (
                                <li key={item.nombre_sub_sub_categoria}><p style={{fontSize:13}}>{item.nombre_sub_sub_categoria}</p></li>
                            ))}
                        </div>
                    </Box>
                )) : <></>}
            </ul>
        </div>
    )
}