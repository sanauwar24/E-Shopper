import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate ,useParams} from 'react-router-dom'
import LeftNav from "./LeftNav"
import { getBrand, updateBrand } from "../../Store/ActionCreators/BrandActionCreators"
export default function AdmimUpdateBrand() {
  let [name, setName] = useState("")
  let navigate = useNavigate()
  let {id} = useParams();
  let dispatch = useDispatch()
  let BrandStateData = useSelector((state) => state.BrandStateData)
  
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
        dispatch(updateBrand({id:id,name:name}))
        navigate("/admin-Brand")
      }
    }


  useEffect(() => 
  {
   dispatch(getBrand())
   var item = BrandStateData.find((item)=>item.id===Number(id))
   setName(item.name)
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
                <input type="text" id="name" placeholder='Enter Brand Name' className='form-control'
                onChange={getData} value={name}/>
            </div>
            <div className="mb-3">
                <button type='submit' className='btn btn-secondary w-100'>Update</button>
            </div>
         </form>
        </div>

        </div>
        </div>
    
    </>
  )
}
