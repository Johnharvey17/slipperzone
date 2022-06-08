import React from 'react'
import UserLayout from "../components/UserLayout.js"

export default function HomePage() {
  return (
    <div>
      HomePage
     
    </div>
    
  )
}

HomePage.getLayout = function getLayout(page){
return <UserLayout sx={{marginTop:"100px"}}>
  {page}
</UserLayout> 
}
