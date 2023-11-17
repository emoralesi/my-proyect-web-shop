import { Box, Button, TextField } from "@mui/material";
import GhostPic from "../../assets/GhostPic.png";
import { useState } from "react";

export default function ItemsProductos({ data }) {
    const [cantidad, setCantidad] = useState(1);

    return (
        <Box key={data.nombre} className='gridContain' sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '8px' }}>
            <div style={{ paddingBottom: '15px', fontSize: 15 }}>
                <img src={GhostPic} alt="GhostPic" />
            </div>
            <div>
                <li><h5>{data.nombre}</h5></li>
                <li><p>PRECIO: <strong>{data.precio}</strong></p></li>
                {
                    data.stock > 0 ?
                        <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                            <TextField
                                id="outlined-number"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={cantidad}
                                onChange={(e) => {
                                    setCantidad(e.target.value)
                                }}
                                sx={{ width: '30%' }}
                            />
                            <Button>AGREGAR AL CARRO</Button>
                        </div>
                        : <h4>AGOTADO</h4>
                }

            </div>
        </Box>
    )
}