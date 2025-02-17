import React from 'react'

export default function LeftNav() {
  return (
   <>
   <div className='container my-5 fluid'>
   <div class="list-group">
  
  <a href="/admin-home" class="list-group-item list-group-item-action">Admin</a>
  <a href="/admin-user" class="list-group-item list-group-item-action">Users</a>
  <a href="/admin-maincategory" class="list-group-item list-group-item-action">Maincategories</a>

  <a href="/admin-subcategory" class="list-group-item list-group-item-action">Subcategories</a>
  <a href="/admin-brand" class="list-group-item list-group-item-action">Brands</a>
  <a href="/admin-product" class="list-group-item list-group-item-action">Products</a>

  <a href="/admin-contact" class="list-group-item list-group-item-action">Contact Us</a>
  <a href="/admin-newsletter" class="list-group-item list-group-item-action">Newsletters</a>
  <a href="/admin-checkout" class="list-group-item list-group-item-action">Checkouts</a>


</div>
   </div>
   </>
  )
}
