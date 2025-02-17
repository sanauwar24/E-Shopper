import React, { useEffect, useState } from 'react'
import LeftNav from './LeftNav'
import { useNavigate, useParams } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {getProduct, updateProduct } from '../../Store/ActionCreators/ProductActionCreators'
import {getMaincategory} from "../../Store/ActionCreators/MaincategoryActionCreators"
import {getSubcategory} from "../../Store/ActionCreators/SubcategoryActionCreators"
import {getBrand} from "../../Store/ActionCreators/BrandActionCreators"

export default function AdminUpdateProduct() 
{
  let [data, setData] = useState({
    name: "",
    maincategory: "",
    subcategory: "",
    brand: "",
    color: "",
    size: "",
    baseprice: "",
    discount: "",
    finalprice: "",
    stock:"In Stock",
    description:"This is a sample product",
    pic1:"",
    pic2:"",
    pic3:"",
    pic4:""
  })
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let{id}=useParams()
  let ProductStateData = useSelector((state) => state.ProductStateData)
  var maincategory = useSelector((state)=>state.MaincategoryStateData)
  var subcategory = useSelector((state)=>state.SubcategoryStateData)
  var brand = useSelector((state)=>state.BrandStateData)

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
    console.log(e.target.files[0].name)
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
    // let item = ProductStateData.find((x) => x.name===name)
    // if (item)
    //    alert("Product Name is already Exist")

    //   else {
        // console.log(name)
        var bp=Number(data.baseprice)
        var d=Number(data.discount)
        var fp=parseInt(bp-bp*d/100)

        
    var mc = data.maincategory
    var sc = data.subcategory
    var br = data.brand
    if (mc === "")
      mc = maincategory[0].name
    if (sc === "")
      sc = subcategory[0].name
    if (br === "")
      br = brand[0].name

        var item = {
          id:id,
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
        dispatch(updateProduct(item))
        navigate("/admin-Product")
      
    }


  useEffect(() => 
  {
   dispatch(getProduct())
   dispatch(getMaincategory())
   dispatch(getSubcategory())
   dispatch(getBrand())
   dispatch(getProduct())
   var item = ProductStateData.find((item)=>item.id===Number(id))
   setData(item)
  }, [])


  return (
    <>
     <div className="container-fluid my-5">
      <div className="row">
        <div className="col-lg-2 col-12">
          <LeftNav/>
        </div>
        <div className="col-lg-10 col-12">
        <h5 className='bg-secondary text-center text-light p-1'>Upadte Product</h5>

        <form className='p-5' onSubmit={postData}>
            <div className="mb-3">
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" placeholder='Enter Product Name' className='form-control'
                onChange={getData} name='name' value={data.name}/>
            </div>
            <div className="row mb-3">
             <div className="col-lg-3 col-md-6 col-12">
              <label htmlFor='maincategory'>Maincategory</label>
              <select id='maincategory' name='maincategory' onChange={getData} className='form-control'>
                {
                  maincategory.map((item,index)=>{
                    return(
                      <option key={index} value={item.name} selected={item.name===data.maincategory}>{item.name}</option>
                    )
                  })
                }
              </select>

             </div>

             <div className="col-lg-3 col-md-6 col-12">
              <label htmlFor='subcategory'>Subcategory</label>
              <select id='subcategory' name='subcategory' onChange={getData} className='form-control'>
                {
                  subcategory.map((item,index)=>{
                    return(
                      <option key={index} value={item.name} selected={item.name===data.subcategory}>{item.name}</option>
                    )
                  })
                }
              </select>

             </div>

             <div className="col-lg-3 col-md-6 col-12">
              <label htmlFor='brand'>Brand</label>
              <select id='brand' name='brand' onChange={getData} className='form-control'>
                {
                  brand.map((item,index)=>{
                    return(
                      <option key={index} value={item.name} selected={item.name===data.brand}>{item.name}</option>
                    )
                  })
                }
              </select>

             </div>

             <div className="col-lg-3 col-md-6 col-12">
              <label htmlFor='stock'>Stock</label>
              <select id='stock' name='stock' onChange={getData} className='form-control'>
                <option value='In Stock' selected={"In Stock"===data.stock}>In Stock</option>
                <option value='Out of Stock' selected={"Out Of Stock"===data.stock}>Out of Stock</option>
              </select>

             </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 col-12">
                <label htmlFor='color'>Color</label>
                <input type='text' name='color' id='color' placeholder='Enter color' onChange={getData} className='form-control'
                value={data.color}/>
              </div>

              <div className="col-md-6 col-12">
                <label htmlFor='size'>Size</label>
                <input type='text' name='size' id='size' placeholder='Enter size' onChange={getData} className='form-control'
                value={data.size}/>
              </div>

              <div className="col-md-6 col-12">
                <label htmlFor='baseprice'>Baseprice</label>
                <input type='number' name='baseprice' id='baseprice' placeholder='Enter baseprice' onChange={getData} className='form-control'
                value={data.baseprice}/>
              </div>

              <div className="col-md-6 col-12">
                <label htmlFor='discount'>Discount</label>
                <input type='number' name='discount' id='discount' placeholder='Enter discount' onChange={getData} className='form-control'
                value={data.discount}/>
              </div>

            </div>
              
              <div className="mb-3">
                <label htmlFor='description'>Description</label>
                <textarea name='description' id='description' placeholder='Description' rows='3'
                onChange={getData} className='form-control' value={data.description}/>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 col-12">
                  <label htmlFor='pic1'>Pic1</label>
                  <input type='file' name='pic1' id='pic1' onChange={getFile} className='form-control'/>
                </div>

                <div className="col-md-6 col-12">
                  <label htmlFor='pic2'>Pic2</label>
                  <input type='file' name='pic2' id='pic2' onChange={getFile} className='form-control'/>
                </div>

                 <div className="col-md-6 col-12">
                  <label htmlFor='pic3'>Pic3</label>
                  <input type='file' name='pic3' id='pic3' onChange={getFile} className='form-control'/>
                </div>

                <div className="col-md-6 col-12">
                  <label htmlFor='pic4'>Pic4</label>
                  <input type='file' name='pic4' id='pic4' onChange={getFile} className='form-control'/>
                </div>

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
