import React from 'react'
import UserLayout from "../components/UserLayout"

export default function HomePage() {
  return (
    <div>HomePage
      <Home3/>
    </div>
    
  )
}

HomePage.getLayout = function getLayout(page){
return <UserLayout sx={{marginTop:"100px"}}>
  {page}
</UserLayout> 
}
