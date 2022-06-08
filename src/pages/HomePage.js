import React from 'react'
import UserLayout from "../components/UserLayout.js"
import Slideshow from '../components/slideshow.js'

export default function HomePage() {
  return (
    <div>
      HomePage open mo 
      <Slideshow/>
    </div>
    
  )
}

HomePage.getLayout = function getLayout(page){
return <UserLayout sx={{marginTop:"100px"}}>
  {page}
</UserLayout> 
}
