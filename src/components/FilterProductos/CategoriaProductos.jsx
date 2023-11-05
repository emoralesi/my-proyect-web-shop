import CategoryIcon from '@mui/icons-material/Category';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, Button, Divider, List, ListItem, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useProducto } from "../../Hooks/useProducto";
import { useRelProductoCategoriaFiltro } from '../../Hooks/useRelProductoCategoriaFiltro';
import GhostPic from "../../assets/GhostPic.png";
import '../../styles/CategoriaProducto.css';
import ExpandListFilter from './ExpandFilter';
import { FiltroSelectedContext } from '../../Contexts/FiltroSelectedContext';


export default function CategoriaProductos({ idSubCategoria }) {

    const { ProductoAll, getProductoBySubCategoria } = useProducto();
    const { dataAll, getPrCaFiBySubCa } = useRelProductoCategoriaFiltro();
    const { dataFilter, setDataFilter } = useContext(FiltroSelectedContext);


    useEffect(() => {
        getProductoBySubCategoria(idSubCategoria)
        getPrCaFiBySubCa(idSubCategoria);
    }, [])

    return (

        <Box p={2} sx={{ display: 'flex', width: 'auto' }}>
            {
                console.log("mi data Filter", dataFilter)
            }
            <Stack direction={"row"} spacing={2} sx={{ width: '100%' }}>
                <Stack direction={"column"} spacing={2} sx={{ width: '30%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '100%' }}>
                        <Box sx={{ border: 'solid 1px', borderColor: 'grey.800', borderRadius: '16px', backgroundColor: 'aliceblue', minHeight: '100px', marginBottom: 5, width: 'auto', display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'row', wordBreak: 'break-all' }} >
                            <CategoryIcon />
                            <p style={{ width: 'auto', height: 'auto', fontFamily: 'monospace', fontSize: 20, }}>TECNOLOGIA</p>
                        </Box>
                        <Box p={1} sx={{ border: 'solid 1px', borderColor: 'grey.800', borderRadius: '16px', backgroundColor: '#ffff', minHeight: '100px', marginBottom: 5, width: 'auto', display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'row', wordBreak: 'break-all' }} >
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem style={{ marginBottom: 15, height: '10px', width: '100%', display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'left', paddingLeft: 15 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'space-between' }}>
                                        <FilterAltIcon />
                                        <p style={{ width: 'auto', height: 'auto', fontFamily: 'monospace', fontSize: 20, }}>FILTROS</p>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'left' }}>
                                        <Button variant="contained" size='small' color='success'>APLICAR</Button>
                                        <Button sx={{marginLeft:1}} variant="outlined" size='small'>LIMPIAR</Button>
                                    </div>
                                </ListItem>
                                <div style={{ display: 'flex', border: 'solid 0.1px', borderColor: 'grey.100', borderRadius: '10px' }}>
                                    <div style={{ width: '100%' }}>
                                        {
                                            Object.keys(dataAll).map((key, index) => (
                                                <ExpandListFilter key={index} dataAll={dataAll} value={key} />
                                            ))
                                        }
                                    </div>
                                    {/* <ListItem>
                                        <div>
                                            <Chip
                                                color="success"
                                                size="medium"
                                                variant="elevated"
                                                label="muchas gracias"
                                                onDelete={()=>{

                                                }}
                                            />
                                        </div>
                                    </ListItem> */}
                                </div>
                            </List>
                        </Box>
                    </div>
                </Stack>

                <Stack direction={"column"} spacing={2} sx={{ width: '80%', display: 'flex', alignItems: 'center' }}>
                    <div className="gridProductos">
                        <ul>
                            <Box key="XD" className='gridContain' sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '8px' }}>
                                <div style={{ paddingBottom: '15px', fontSize: 15 }}>
                                    <img src={GhostPic} alt="GhostPic" />
                                </div>
                                <div>
                                    <li><h5>TELEVISOR 4K</h5></li>
                                    <li><p>PRECIO: <strong>29990</strong></p></li>
                                    <Button>AGREGAR AL CARRO</Button>
                                </div>
                            </Box>
                            <Box key="XD" className='gridContain' sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '8px' }}>
                                <div style={{ paddingBottom: '15px', fontSize: 15 }}>
                                    <img src={GhostPic} alt="GhostPic" />
                                </div>
                                <div>
                                    <li><h5>TELEVISOR 4K</h5></li>
                                    <li><p>PRECIO: <strong>29990</strong></p></li>
                                    <Button>AGREGAR AL CARRO</Button>
                                </div>
                            </Box>
                            <Box key="XD" className='gridContain' sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '8px' }}>
                                <div style={{ paddingBottom: '15px', fontSize: 15 }}>
                                    <img src={GhostPic} alt="GhostPic" />
                                </div>
                                <div>
                                    <li><h5>TELEVISOR 4K</h5></li>
                                    <li><p>PRECIO: <strong>29990</strong></p></li>
                                    <Button>AGREGAR AL CARRO</Button>
                                </div>
                            </Box>
                            <Box key="XD" className='gridContain' sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '8px' }}>
                                <div style={{ paddingBottom: '15px', fontSize: 15 }}>
                                    <img src={GhostPic} alt="GhostPic" />
                                </div>
                                <div>
                                    <li><h5>TELEVISOR 4K</h5></li>
                                    <li><p>PRECIO: <strong>29990</strong></p></li>
                                    <Button>AGREGAR AL CARRO</Button>
                                </div>
                            </Box>
                            <Box key="XD" className='gridContain' sx={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)', padding: '8px' }}>
                                <div style={{ paddingBottom: '15px', fontSize: 15 }}>
                                    <img src={GhostPic} alt="GhostPic" />
                                </div>
                                <div>
                                    <li><h5>TELEVISOR 4K</h5></li>
                                    <li><p>PRECIO: <strong>29990</strong></p></li>
                                    <Button>AGREGAR AL CARRO</Button>
                                </div>
                            </Box>
                        </ul>
                    </div>
                </Stack>

            </Stack >
        </Box >
    )
}