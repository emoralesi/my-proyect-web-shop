import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { Collapse, Divider, ListItem, ListItemText } from "@mui/material"
import { useState } from "react"
import CollapseContent from "./CollapseContent"

export default function ExpandListFilter({ dataAll, value }) {

    const [open, setOpen] = useState(true)
    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <div>

            <ListItem button key={value} onClick={handleClick}>
                <ListItemText sx={{ paddingLeft: '7px' }} primary={value} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
                key={value + 1}
                in={open}
                timeout='auto'
                unmountOnExit
            >
                <CollapseContent data={dataAll} value={value}/>
            </Collapse>
            <Divider />
        </div>
    )
}