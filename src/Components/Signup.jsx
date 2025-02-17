import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Signup() {

    var[data,setData]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        password:"",
        cpassword:""
    })

    function getData(e)
    {
        var name = e.target.name;
        var value= e.target.value;
        setData((old)=>
        {
            return{
                ...old,
                [name]:value
            }
        })
    }
    function postData(e)
    {
   e.preventDefault()
   if(data.password === data.cpassword)
    {
        alert(`
            Name            :${data.name}
            Username        :${data.username}
            Email           :${data.email}
            Phone           :${data.phone}
            Password        :${data.password}
            C-Password      :${data.cpassword}
            `)
    }
    else 
    {
        alert(`Password and Confirm Password Not Matched`)
    }
    }
  return (
   <>
   <br></br>
   <br></br>
<div className="container my-5">
    <div className="row">
        <div className="col-md-6 col-sm-8 m-auto">
            <h5 className='bg-primary text-light text-center p-2'>Signup</h5>
            <form onSubmit={postData}>
            <div className="mb-3">
                    <label>Name*</label>
                    <input type="text" name="name" id="name" className= "form-control border-3" 
                    placeholder='Name' onChange={getData} />
                </div>

                <div className="mb-3">
                    <label>User Name*</label>
                    <input type="text" name="username" id="username" className= "form-control border-3" 
                    placeholder='User Name'onChange={getData} />
                </div>


                <div className="mb-3">
                    <label>Email*</label>
                    <input type="email" name="email" id="email" className= "form-control border-3" 
                    placeholder='Email' onChange={getData}/>
                </div>
                <div className="mb-3">
                    <label>Phone*</label>
                    <input type="number" name="phone" id="phone"  className= "form-control border-3" 
                    placeholder='Phone' onChange={getData}/>
                </div>

                <div className="mb-3">
                    <label>Password*</label>
                    <div className="bth-group d-flex">
                        <input type="password" name="password" id='password' className="form-control border-3 border-primary" 
                        placeholder='Password'onChange={getData} />
                    </div>
                </div>

                <div className="mb-3">
                    <label>Confirm Password*</label>
                    <div className="bth-group d-flex">
                        <input type="password" name="cpassword" id='cpassword' className="form-control border-3 border-primary" 
                        placeholder='Confirm Password'onChange={getData} />
                    </div>
                </div>


                <div className="mb-3">
                    <button type="submit" className='btn btn-primary w-100'>Signup</button>
                </div>
            </form>
           
        </div>
    </div >
</div >
   </>
  )
}
