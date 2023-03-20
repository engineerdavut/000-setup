import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react"

const urlList='./json/products.json'
const initialProductList=[]
export default function ProductTable() {
    const [products, setProducts] = useState(initialProductList)
    useEffect(()=>{
        fetch(urlList)
            .then(res=>res.json())
            .then(res=>setProducts(res))

    },[urlList])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell >Name</TableCell>
            <TableCell >Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.name}
              
            >
              <TableCell component="th" scope="row">
                {product.id}
              </TableCell>
              <TableCell >{product.name}</TableCell>
              <TableCell >{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}