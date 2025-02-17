import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import LeftNav from "./LeftNav"
import { addBrand,getBrand } from "../../Store/ActionCreators/BrandActionCreators"
export default function AdminCreateBrand() {
  let [name, setName] = useState("")
  let navigate = useNavigate()

  let dispatch = useDispatch()
  let BrandStateData = useSelector((state) => state.BrandStateData)
 console.log(BrandStateData)
  function getData(e) {
    setName(e.target.value)
    }

  
  function postData(e) {
    e.preventDefault()
    let item = BrandStateData.find((x) => x.name===name)
    if (item)
       alert("Brand Name is already Exist")

      else {
        console.log(name)
        dispatch(addBrand({name:name}))
        navigate("/admin-Brand")
      }
    }


  useEffect(() => 
  {
   dispatch(getBrand())
  }, [])

  return (
    <>
     <div className="container-fluid my-5">
      <div className="row">
        <div className="col-lg-2 col-12">
          <LeftNav/>
        </div>
        <div className="col-lg-10 col-12">
        <h5 className='bg-secondary text-center text-light p-1'>Brand</h5>

         <form className='p-5' onSubmit={postData}>
            <div className="mb-3">
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" placeholder='Enter Brand Name' className='form-control'
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
