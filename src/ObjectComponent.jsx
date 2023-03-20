import { useState } from "react"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { red,grey } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import ProductTable from "./ProductTable";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Product
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
export const ObjectComponent = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
const initialProduct = {
    id: 0,
    name: 'Adsız',
    price: 100.0,

}

const [product, setProduct] = useState(initialProduct)
const [errors, setErrors] = useState({})

const nameChanged = (event) => {
event.preventDefault()
    setProduct({
        ...product, name: String(event.target.value)
    })
}
const priceChanged = (event) => {
    event.preventDefault()
    setProduct({
        ...product, price: Number(event.target.value)
    })
}

const isValid = () => {
    let valid=true
    let errors=[]
    if(product.name.length<3){
        valid=false
        errors['name']='Ad en az 3 karakter olmali.'
    }
    if(product.price.price<=0){
        valid=false
        errors['price']='Geçerli bir fiyat olmalı.'
    }
    setErrors(errors)
    return valid
}

const save = (event) => {
    event.preventDefault()
    if(!isValid()){
        alert('Geçersiz')
        alert(errors)
        return
    }
    alert(product.id+ ' ' +product.name+' '+product.price)
}



    return (
        < >
            <ul>
                {Object.keys(errors).map(key => {
                <li>
                    {errors[key] ? errors[key] : ``}
                </li>
                })}
            </ul>
        {product.id} {product.name} {product.price}
        <form onSubmit={save}> 
            Öz: {product.id} <br />
            Ad: <input type="text" name="name" value={product.name || ''} onChange={(event)=> nameChanged(event) }></input><br />
            Eder : <input type="text" name="price" value={product.price || ''} onChange={(event)=> priceChanged(event) }></input><br />
            <input type="submit" value="sakla" ></input>
        </form>
        <h1>
            {product.id} {product.name} {product.price}
        </h1>
        <Box
        onSubmit={save}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        bgcolor :grey[50]
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="name" label="Product Name" variant="outlined" value={product.name || ''} onChange={(event)=> nameChanged(event) } /><br/>
      <TextField id="price" label="Product Price" variant="filled" value={product.price || ''} onChange={(event)=> priceChanged(event) }/><br/>
      
      <Button type="submit" variant="outlined" onClick={handleClickOpen}>Sakla</Button>
    </Box>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
            bgcolor :grey[50]
          }}
      >
        <DialogTitle>{"Product Information"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">

          {product.id} {product.name} {product.price}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
        <ProductTable/>
        </>
    )
}