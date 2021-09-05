import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';

export default function AddressForm() {

    const methods = useForm();

  return <>
    <Typography variant="h6" guttterBottom>
        Shipping Address
    </Typography>
    <FormProvider {...methods}>
        <form onSubmit={}>
            <Grid container spacing={3}>
                
            </Grid>
        </form>
    </FormProvider>
  </>;
}
