import React, { useEffect } from 'react'
import LeftNav from './LeftNav'
import { Link, useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {deleteSubcategory, getSubcategory} from "../../Store/ActionCreators/SubcategoryActionCreators"
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

const paginationModel = { page: 0, pageSize: 5 };
export default function AdminSubcategory() {

  var subcategory = useSelector((state)=>state.SubcategoryStateData)
var dispatch = useDispatch();
var navigate = useNavigate();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    {
      field:"edit",
      headerName:"Edit",
      sortable:false,
      renderCell:({row})=>
      <Button onClick={()=>{navigate("/admin-update-subcategory/"+row.id)}}>
       Edit
      </Button>,
      },
      {
        field:"delete",
        headerName:"Delete",
        sortable:false,
        renderCell:({row})=>
        <Button onClick={()=>dispatch(deleteSubcategory({id : row.id}))}>
         Delete
        </Button>,
        },
  ];

  const rows = [];
  for(let item of subcategory)
  {
    rows.push(item);
  }

  useEffect(()=>
  {
   dispatch(getSubcategory())
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
        <h5 className='bg-secondary text-center text-light p-1'>Sub Category<Link to="/admin-add-subcategory" className="float-right"><span className="material-symbols-outlined text-light">
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
