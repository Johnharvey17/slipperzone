import React from 'react'
import UserLayout from "../components/UserLayout"
export default function Products() {
  return (
    <div>Products</div>
  )
}
Products.getLayout = function getLayout(page){
    return <UserLayout sx={{marginTop:'100px'}}>
      {page}
    </UserLayout> 
    }