import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SelectBox2({options, setActive, eclass, selected}) {

  
    return (
        <Box className={eclass}>
            <FormControl fullWidth>
                <Select
                    variant="standard"
                    id="demo-simple-select"
                    value={selected}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    onChange={e=>setActive(e.target.value)}
                    IconComponent={ExpandMoreIcon}
                    className="w-100"
                >
                    {options.map((item, idx)=>{
                        return <MenuItem value={item[0]} key={item[0]} >
                            <span>{item[1]}</span>
                        </MenuItem>
                    })}
                </Select>
            </FormControl>
          
        </Box>
    )
}

export default SelectBox2
