import React from 'react';
import { Box, FormControl, FormLabel, InputLabel, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import CheckBoxGroup from './CheckBoxGroup';
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from 'yup';

let validationSchema = yup.object().shape({
  customerName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .matches(/^(\+\91)+\d{10}/, {
      message: "Invalid Indian number",
    })
    .required()
    .max(13,"length of phone number should not be greater 13"),
  beverage_quality:yup.string().required(),
  service_quality:yup.string().required(),
  hygenie:yup.string().required(),
  dining_exp:yup.string().required()


});



 function FeedbackForm({handleUpdateData}) {

    const navigate = useNavigate()





    const formik = useFormik({
        initialValues:{},
        validationSchema:validationSchema,
        validateOnChange:true,
        onSubmit:(values)=>{
            handleUpdateData(values)
            navigate('/message')
        }
    })

    console.log(formik.errors)
    return (
        <>
            <div style={{ width: "100%", height: "100%", backgroundColor: "white" }} onSubmit={formik.handleSubmit}>
                <Box margin={3} height={500}>
                    <Grid container spacing={4} marginTop={2}>
                        <Grid item xs={12} sm={6}>
                            <InputLabel required htmlFor='customerName'>Customer Name</InputLabel>
                            <TextField onChange={formik.handleChange} value={formik.values.customerName} id='customerName' variant='outlined' size='small' fullWidth placeholder='E.g Jon snow' error={!!formik?.errors?.customerName} helperText={formik?.errors?.customerName}/>

                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel required htmlFor='email'>Email</InputLabel>
                            <TextField onChange={formik.handleChange} value={formik.values.email} id='email' variant='outlined' size='small' fullWidth placeholder='E.g abc@gmail.com' error={!!formik?.errors?.email} helperText={formik?.errors?.email}/>
                        </Grid>
                        <Grid item xs={12} sm={6} marginRight={3}>
                            <InputLabel required htmlFor='phone'>Phone</InputLabel>
                            <TextField onChange={formik.handleChange} value={formik.values.phone} id='phone' country={'in'} variant="outlined" size="small" fullWidth  error={!!formik?.errors?.phone} helperText={formik?.errors?.phone} placeholder="+91" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl component="fieldset" variant="standard" error={formik.errors?.service_quality}>
                                <FormLabel required>Please rate the quality of the service you received from your host.</FormLabel>
                                <CheckBoxGroup value={formik?.values?.service_quality} setFieldValue={formik.setFieldValue} fieldname='service_quality'/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl component="fieldset" variant="standard" error={formik.errors?.beverage_quality}>
                                <FormLabel required>Please rate the quality of your beverage.</FormLabel>
                                <CheckBoxGroup value={formik?.values?.beverage_quality} setFieldValue={formik.setFieldValue} fieldname='beverage_quality' />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl component="fieldset" variant="standard" error={formik.errors?.hygenie} >
                                <FormLabel required >Was our restaurant clean?</FormLabel>
                                <CheckBoxGroup value={formik?.values?.hygenie} setFieldValue={formik.setFieldValue} fieldname='hygenie'/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl component="fieldset" variant="standard" error={formik.errors?.dining_exp}>
                                <FormLabel required>Please rate your overall dining experience.</FormLabel>
                                <CheckBoxGroup value={formik?.values?.dining_exp} setFieldValue={formik.setFieldValue} fieldname='dining_exp'/>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type='button' style={{ backgroundColor: '#008000', border: 'none', width: '160px', height: '50px', borderRadius: '5px', color: 'white', fontSize: '16px', cursor: 'pointer' }}  onClick={formik.handleSubmit}>Submit Review</button>
            </Box>
        </>

    )
}


export default FeedbackForm;
