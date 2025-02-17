import React, { useEffect, useState } from 'react'
import LeftNav from './LeftNav'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { addMaincategory, getMaincategory } from '../../Store/ActionCreators/MaincategoryActionCreators'

export default function AdminAddMaincategory() 
{
  let [name, setName] = useState("")
  let navigate = useNavigate()

  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
  function getData(e) {
    setName(e.target.value)
    }

  
  function postData(e) {
    e.preventDefault()
    let item = MaincategoryStateData.find((x) => x.name===name)
    if (item)
       alert("Maincategory Name is already Exist")

      else {
        console.log(name)
        dispatch(addMaincategory({name:name}))
        navigate("/admin-maincategory")
      }
    }


  useEffect(() => 
  {
   dispatch(getMaincategory())
  }, [])

  return (
    <>
     <div className="container-fluid my-5">
      <div className="row">
        <div className="col-lg-2 col-12">
          <LeftNav/>
        </div>
        <div className="col-lg-10 col-12">
        <h5 className='bg-secondary text-center text-light p-1'>Main Category</h5>

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
