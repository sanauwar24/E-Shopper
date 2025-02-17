import React, { useEffect, useState } from 'react'
import LeftNav from './LeftNav'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { addSubcategory, getSubcategory } from '../../Store/ActionCreators/SubcategoryActionCreators'

export default function AdminAddSubcategory() 
{
  let [name, setName] = useState("")
  let navigate = useNavigate()

  let dispatch = useDispatch()
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
  function getData(e) {
    setName(e.target.value)
    }

  
  function postData(e) {
    e.preventDefault()
    let item = SubcategoryStateData.find((x) => x.name===name)
    if (item)
       alert("Subcategory Name is already Exist")

      else {
        console.log(name)
        dispatch(addSubcategory({name:name}))
        navigate("/admin-subcategory")
      }
    }


  useEffect(() => 
  {
   dispatch(getSubcategory())
  }, [])

  return (
    <>
     <div className="container-fluid my-5">
      <div className="row">
        <div className="col-lg-2 col-12">
          <LeftNav/>
        </div>
        <div className="col-lg-10 col-12">
        <h5 className='bg-secondary text-center text-light p-1'>Sub Category</h5>

         <form className='p-5' onSubmit={postData}>
            <div className="mb-3">
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" placeholder='Enter Maincategory Name' className='form-control'
                onChange={getData}/>
            </div>
            <div className="mb-3">
                <button type='submit' className='btn btn-secondary w-100'>Add</button>
            </div>
         </form>
        </div>

        </div>
        </div>
    
    </>
  )
}
