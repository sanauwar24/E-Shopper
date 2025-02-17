

import React from 'react'
import LeftNav from './LeftNav'
import { Link } from 'react-router-dom'
export default function AdminHome() {
  return (
<>
<div className="container  my-5">
    <div className='row'>
        <div className="col-lg-2 col-12">
        <LeftNav/>
        </div>
        <div className="col-lg-10 col-12">
         <div className='row my-5'>
         <div className="col-md-6">
              <img src='assets/images/bg_1.jpg' alt='' height="455px" width="100%"/>
            </div>

            <div className="col-md-6">
              <h5 className='bg-primary text-light text-center'>Admin Home</h5>
             <table className='table-bordered' style={{width:"100%",height:"70%"}}>
              <tbody>
                <tr>
                  <th>Name </th>
                  <td>sanauwar hussain</td>
                </tr>
                <tr>
                  <th>Email Address</th>
                  <td>admin@eshopper.com</td>
                </tr>
                <tr>
                  <th>Phone </th>
                  <td>+91 9999999999</td>
                </tr>
                <tr>
                  <th>Role </th>
                  <td>Admin</td>
                </tr>
                <tr>
                  
               <td colSpan={2}><Link to="/update-profile" type='button' className='btn btn-primary w-100'>Update Profile</Link></td>
                </tr>

              </tbody>
             </table>
              </div>
          </div>
        </div>
         </div>
        </div>

</>
  )
}
