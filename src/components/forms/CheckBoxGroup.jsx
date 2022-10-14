import React from 'react'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const CheckBoxGroup = ({value,setFieldValue,fieldname,error}) => {

    const labels = ['Excellent', 'Good', 'Fair', 'Bad']

    const handleChecked = (e,label)=>{
        if(e.target.checked)
        {
            setFieldValue(fieldname,label)
        }
        else{
            setFieldValue(fieldname,'')
        }

    }

    return (
        

        <FormGroup sx={{ display: 'flex', flexDirection: 'row',justifyContent:'flex-start',flexWrap:'wrap' }} >
            {labels.map((label) =>
                <FormControlLabel
                    key={label}

                    control={
                        <Checkbox name={label} checked={value===label} onClick={(e)=>handleChecked(e,label)}/>
                    }
                    label={label}
                    
                />)}
        </FormGroup>

    );
}

export default CheckBoxGroup;