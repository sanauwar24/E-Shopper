import React, { useEffect, useState } from 'react'
import LeftNav from './LeftNav'
import { useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { addProduct, getProduct } from '../../Store/ActionCreators/ProductActionCreators'
import { getMaincategory } from '../../Store/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../../Store/ActionCreators/SubcategoryActionCreators'
import { getBrand} from '../../Store/ActionCreators/BrandActionCreators'


export default function AdminAddProduct() 
{
  // let [name, setName] = useState("")

  let[data,setData] = useState({
    name:"",
    maincategory:"",
    subcategory:"",
    brand:"",
    color:"",
    size:"",
    baseprice:"",
    discount:"",
    finalprice:"",
    stock:"In Stock",
    description:"This is Sample Product",
    pic1:"",
    pic2:"",
    pic3:"",
    pic4:""
  })
  let navigate = useNavigate()

  let dispatch = useDispatch()

  let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
  console.log(MaincategoryStateData)
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
  let BrandStateData = useSelector((state) => state.BrandStateData)

  function getData(e) {
    let name = e.target.name 
    let value = e.target.value 
    setData((old)=>
    {
      return{
        ...old,
        [name]:value
      }
    })
    }

    function getFile(e) {
      let name = e.target.name 
    let value = e.target.files[0].name 
    setData((old)=>
    {
      return{
        ...old,
        [name]:value
      }
    })
      }
     

  function postData(e) {
    e.preventDefault()

    var bp = Number(data.baseprice);
    var d = Number(data.discount)
    var fp = parseInt(bp-bp*d/100);

    var mc = data.maincategory;
    var sc= data.subcategory;
    var br = data.brand;

    if(mc==="")
      mc=MaincategoryStateData[0].name 
    
    if(sc==="")
      sc=SubcategoryStateData[0].name 
    
    if(br==="")
      br=BrandStateData[0].name 
    let item = 
    {
      name:data.name,
      maincategory:mc,
      subcategory:sc,
      brand:br,
      color:data.color,
      size:data.size,
      baseprice:bp,
      discount:d,
      finalprice:fp,
      stock:data.stock,
      description:data.description,
      pic1:data.pic1,
      pic2:data.pic2,
      pic3:data.pic3,
      pic4:data.pic4

    }
        dispatch(addProduct(item))
        navigate("/admin-Product")
      }
    


  useEffect(() => 
  {
   dispatch(getProduct())
   dispatch(getMaincategory())
   dispatch(getSubcategory())
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
        <h5 className='bg-secondary text-center text-light p-1'>Product</h5>

         <form className='p-5' onSubmit={postData}>
            <div className="mb-3">
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" placeholder='Enter Product Name' className='form-control'
                onChange={getData} name='name'/>
            </div>

            <div className="row mb-3">
              <div className="col-lg-3 col-md-6 col-12">
                <label htmlFor='maincategory'>Maincategory</label>
                <select name='maincategory' id='maincategory' className='form-control' onChange={getData}>
               {
                MaincategoryStateData.map((item,index)=>
                {
                  return(
                    <option key={index} value={item.name}>{item.name}</option>
                  )
                })
               }
                </select>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <label htmlFor='subcategory'>Subcategory</label>
                <select name='subcategory' id='subcategory' className='form-control' onChange={getData}>
               {
                SubcategoryStateData.map((item,index)=>
                {
                  return(
                    <option key={index} value={item.name}>{item.name}</option>
                  )
                })
               }
                </select>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <label htmlFor='brand'>Brand</label>
                <select name='brand' id='brand' className='form-control' onChange={getData}>
               {
                BrandStateData.map((item,index)=>
                {
                  return(
                    <option key={index} value={item.name}>{item.name}</option>
                  )
                })
               }
                </select>
              </div>

              <div className="col-lg-3 col-md-6 col-12">
                <label htmlFor='stock'>Stock</label>
                <select name='stock' id='stock' className='form-control' onChange={getData}>
                <option value='in stock'>In Stock</option>
                <option value='out of stock'>Out Of Stock</option>
                </select>
              </div>
              
            </div>
              <div className='row mb-3'>
                <div className="col-lg-6 col-mg-6 col-12">
                  <label htmlFor='color'>Color</label>
                  <input type='text' placeholder='Enter Color' name='color'
                  id='color' onChange={getData} className='form-control'/>
                </div>
                <div className="col-lg-6 col-mg-6 col-12">
                  <label htmlFor='size'>Size</label>
                  <input type='number' placeholder='Enter Size' name='size'
                  id='size' onChange={getData} className='form-control'/>
                </div>
              </div>

              <div className='row mb-3'>
                <div className="col-lg-6 col-mg-6 col-12">
                  <label htmlFor='baseprice'>Base Price</label>
                  <input type='number' placeholder='Enter Base Price' name='baseprice'
                  id='baseprice' onChange={getData} className='form-control'/>
                </div>
                <div className="col-lg-6 col-mg-6 col-12">
                  <label htmlFor='discount'>Discount</label>
                  <input type='number' placeholder='Enter Discount' name='discount'
                  id='discount' onChange={getData} className='form-control'/>
                </div>
              </div>
              <div className='row mb-3'>
              <div className="col-lg-12">
              <label htmlFor='description'>Description</label>
                <textarea name="description" id="description" rows='3'
                className='form-control' placeholder='This is Sample Product'></textarea>
              </div>
              </div>
             <div className='row mb-3'>
              <div className="col-lg-6 col-md-4 col-12">
                <label htmlFor='pic1'>Pic1</label>
                <input type='file' name='pic1' id='pic1' onChange={getFile}
                className='form-control'/>
              </div>
              <div className="col-lg-6 col-md-4 col-12">
                <label htmlFor='pic2'>Pic2</label>
                <input type='file' name='pic2' id='pic2' onChange={getFile}
                className='form-control'/>
              </div>
             </div>

             <div className='row mb-3'>
              <div className="col-lg-6 col-md-4 col-12">
                <label htmlFor='pic3'>Pic3</label>
                <input type='file' name='pic3' id='pic3' onChange={getFile}
                className='form-control'/>
              </div>
              <div className="col-lg-6 col-md-4 col-12">
                <label htmlFor='pic4'>Pic4</label>
                <input type='file' name='pic4' id='pic4' onChange={getFile}
                className='form-control'/>
              </div>
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
