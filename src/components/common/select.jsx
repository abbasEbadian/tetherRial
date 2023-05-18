import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch }from 'react-redux'
import {Link} from 'react-router-dom'

function SelectBox({asLink=false, actionType="", setActive, eclass, icons=false, selected}) {
    const dispatch = useDispatch()
    const tableData = useSelector(state => state.kucoin.staticCurrencies)

    const handleChange = (e)=>{
        const d = tableData.filter(i=>i.id===e.target.value)
        dispatch({type: actionType, payload: e.target.value})
    }
    const item = "ETH"
    return (
        <Box className={eclass}>
            <FormControl fullWidth>
                <Select
                    variant="standard"
                    id="demo-simple-select"
                    value={selected}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    onChange={handleChange}
                    IconComponent={ExpandMoreIcon}
                    className="w-100"
                >
                         <MenuItem value={item} key={item} >
                            {asLink?
                            <Link to={"/coinExplain?name="+item} className="w-100">
                            {/* {icons && <img src={item.image.thumb} alt="icon" />} */}
                            <span>{item}</span>
                            
                            </Link>:
                            <span>{item}</span>
                            }
                            
                        </MenuItem>
                </Select>
            </FormControl>
          
        </Box>
    )
}

export default SelectBox
