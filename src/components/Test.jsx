import { ExpandLess, ExpandMore } from '@mui/icons-material';
import CategoryIcon from '@mui/icons-material/Category';
import CommentIcon from '@mui/icons-material/Comment';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Box, Button, Chip, Collapse, Divider, List, ListItem, ListItemIcon, ListItemText, Stack } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import { useEffect, useState } from "react";
import { useProducto } from "../Hooks/useProducto";
import GhostPic from "../assets/GhostPic.png";
import '../styles/CategoriaProducto.css';


export default function CategoriaProductos({ idSubCategoria }) {

    const { ProductoAll, getProductoBySubCategoria } = useProducto();
    const [open, setOpen] = useState(true)
    const handleClick = () => {
        setOpen(!open)
    }

    useEffect(() => {
        getProductoBySubCategoria(idSubCategoria)
    }, [])
    const [checked, setChecked] = useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (
        <Box p={2} sx={{ display: 'flex', width: 'auto' }}>
            <Stack direction={"row"} spacing={2} sx={{ width: '100%' }}>
                <Stack direction={"column"} spacing={2} sx={{ width: '20%', display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '100%' }}>
                        <Box sx={{ border: 'solid 1px', borderColor: 'grey.800', borderRadius: '16px', backgroundColor: 'aliceblue', minHeight: '100px', marginBottom: 5, width: 'auto', display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'row', wordBreak: 'break-all' }} >
                            <CategoryIcon />
                            <p style={{ width: 'auto', height: 'auto', fontFamily: 'monospace', fontSize: 20, }}>TECNOLOGIA</p>
                        </Box>
                        <Box p={1} sx={{ border: 'solid 1px', borderColor: 'grey.800', borderRadius: '16px', backgroundColor: '#ffff', minHeight: '100px', marginBottom: 5, width: 'auto', display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center', flexDirection: 'row', wordBreak: 'break-all' }} >
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem style={{ marginBottom: 15, height: '10px', width: '100%', display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'left', paddingLeft: 15 }}>
                                    <FilterAltIcon />
                                    <p style={{ width: 'auto', height: 'auto', fontFamily: 'monospace', fontSize: 20, }}>FILTROS</p>
                                    <Divider />
                                </ListItem>
                                <div style={{ display: 'flex', border: 'solid 0.1px', borderColor: 'grey.100', borderRadius: '10px' }}>
                                    <div style={{ width: '100%' }}>
                                        <ListItem button key={1} onClick={handleClick}>
                                            <ListItemText sx={{ paddingLeft: '7px' }} primary="MARCA" />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Collapse
                                            key={4}
                                            in={open}
                                            timeout='auto'
                                            unmountOnExit
                                        >
                                            <div className='listchild'>
                                                <List component='li' disablePadding key={10}>
                                                    <ListItem button key={2}>
                                                        <ListItemText sx={{ color: 'black' }} key={2} primary="text menu collapse" />
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </Collapse>
                                        <Divider />
                                        <ListItem button key={1} onClick={handleClick}>
                                            <ListItemText sx={{ paddingLeft: '7px' }} primary="HDMI" />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Collapse
                                            key={4}
                                            in={open}
                                            timeout='auto'
                                            unmountOnExit
                                        >
                                            <div style={{
                                                borderRadius: 4,
                                                position: 'relative',
                                                backgroundColor: '#ffff',
                                                border: '3px solid #ced4da',
                                                fontSize: 16,
                                                padding: '10px 26px 10px 12px',
                                            }}>
                                                <ListItem>
                                                    <div>
                                                        <Chip
                                                            color="success"
                                                            size="medium"
                                                            variant="elevated"
                                                            label="muchas gracias"
                                                            onDelete={() => {

                                                            }}
                                                        />
                                                    </div>
                                                </ListItem>
                                            </div>
                                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', overflow: 'auto', maxHeight: '100px' }}>
                                                {[0, 1, 2, 3].map((value) => {
                                                    const labelId = `checkbox-list-label-${value}`;

                                                    return (
                                                        <ListItem
                                                            key={value}
                                                            disablePadding
                                                        >
                                                            <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                                                <ListItemIcon>
                                                                    <Checkbox
                                                                        edge="start"
                                                                        checked={checked.indexOf(value) !== -1}
                                                                        tabIndex={-1}
                                                                        disableRipple
                                                                        inputProps={{ 'aria-labelledby': labelId }}
                                                                    />
                                                                </ListItemIcon>
                                                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                                                            </ListItemButton>
                                                        </ListItem>
                                                    );
                                                })}
                                            </List>
                                        </Collapse>
                                        <Divider />
                                        <ListItem button key={1} onClick={handleClick}>
                                            <ListItemText sx={{ paddingLeft: '7px' }} primary="CAMARAS" />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Collapse
                                            key={4}
                                            in={open}
                                            timeout='auto'
                                            unmountOnExit
                                        >
                                            <div className='listchild'>
                                                <List component='li' disablePadding key={10}>
                                                    <ListItem button key={2}>
                                                        <ListItemText sx={{ color: 'black' }} key={2} primary="text menu collapse" />
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </Collapse>
                                        <Divider />
                                        <ListItem button key={1} onClick={handleClick}>
                                            <ListItemText sx={{ paddingLeft: '7px' }} primary="5G" />
                                            {open ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Collapse
                                            key={4}
                                            in={open}
                                            timeout='auto'
                                            unmountOnExit
                                        >
                                            <div className='listchild'>
                                                <List component='li' disablePadding key={10}>
                                                    <ListItem button key={2}>
                                                        <ListItemText sx={{ color: 'black' }} key={2} primary="text menu collapse" />
                                                    </ListItem>
                                                </List>
                                            </div>
                                        </Collapse>
                                        <Divider />
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