import './App.css'
import Header from './Component/Header/Header'
import Courses from './Component/Courses/Courses'
import Carts from './Component/Carts/Carts'
import { useState } from 'react'

function App() {
  const [selectCourse,setSelectCourse]=useState([])

  const handleSelectCourse=(course)=>{
    // console.log('Clicked the btn')
    // console.log(course)
    const newSelectCourse=[...selectCourse,course]
    setSelectCourse(newSelectCourse)
  }

  return (
    <div className='container mx-auto'>
      <Header></Header>
     <div className='flex justify-between gap-6'>
     <Courses handleSelectCourse={handleSelectCourse}></Courses>
     <Carts selectCourse={selectCourse}></Carts>
     </div>
    </div>
  )
}

export default App
