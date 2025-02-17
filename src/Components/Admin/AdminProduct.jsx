import React, { useEffect } from 'react'
import LeftNav from './LeftNav'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {deleteProduct, getProduct} from "../../Store/ActionCreators/ProductActionCreators"
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

const paginationModel = { page: 0, pageSize: 5 };
export default function AdminProduct() {

  var product = useSelector((state)=>state.ProductStateData)
var dispatch = useDispatch();
var navigate = useNavigate();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'maincategory', headerName: 'Maincategory', width: 130 },
    { field: 'subcategory', headerName: 'Subcategory', width: 130 },
    { field: 'brand', headerName: 'Brand', width: 70 },
    { field: 'color', headerName: 'Color', width: 70 },
    { field: 'size', headerName: 'Size', width: 70 },
    { field: 'baseprice',headerName:'Base Price',width:100,renderCell:({row})=>
    <p>&#8377;{row.baseprice}</p>},
    { field: 'discount',headerName:'Discount',width:100,renderCell:({row})=>
      <p>&#8377;{row.discount} %</p>},
    { field: 'finalprice',headerName:'Final Price',width:100,renderCell:({row})=>
      <p>&#8377;{row.finalprice}</p>},
    { field: 'description', headerName: 'Description', width: 130 },
    { field: 'stock', headerName: 'Stock', width: 130 },
    { field: 'pic1',headerName:'Pic1',width:140, renderCell:({row})=>
    <img src={`/assets/productImages/${row.pic1}`} height="100px" width="100%" className="rounded"/>},
    { field: 'pic2',headerName:'Pic2',width:140, renderCell:({row})=>
      <img src={`/assets/productImages/${row.pic2}`} height="100px" width="100%" className="rounded"/>},
    { field: 'pic3',headerName:'Pic3',width:140, renderCell:({row})=>
      <img src={`/assets/productImages/${row.pic3}`} height="100px" width="100%" className="rounded"/>},
    { field: 'pic4',headerName:'Pic4',width:140, renderCell:({row})=>
      <img src={`/assets/productImages/${row.pic4}`} height="100px" width="100%" className="rounded"/>},
  

    {
      field:"edit",
      headerName:"Edit",
      sortable:false,
      renderCell:({row})=>
      <Button onClick={()=>{navigate("/admin-update-product/"+row.id)}}>
       Edit
      </Button>,
      },
      {
        field:"delete",
        headerName:"Delete",
        sortable:false,
        renderCell:({row})=>
        <Button onClick={()=>dispatch(deleteProduct({id : row.id}))}>
         Delete
        </Button>,
        },
  ];

  const rows = [];
  for(let item of product)
  {
    rows.push(item);
  }

  useEffect(()=>
  {
   dispatch(getProduct())
  },[])

  return (
    <>
    <br></br>
    <br></br>
     <div className="container-fluid my-5">
      <div className="row">
        <div className="col-lg-2 col-12">
          <LeftNav/>
        </div>
        <div className="col-lg-10 col-12">
        <h5 className='bg-secondary text-center text-light p-1'>Product<Link to="/admin-add-product" className="float-right"><span className="material-symbols-outlined text-light">
add
</span></Link></h5>
<Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
        </div>

        </div>
        </div>
    
    </>
  )
}
