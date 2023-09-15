import './App.css'
import Header from './Component/Header/Header'
import Courses from './Component/Courses/Courses'
import Carts from './Component/Carts/Carts'

function App() {
  

  return (
    <div className='container mx-auto'>
      <Header></Header>
     <div className='flex justify-between gap-6'>
     <Courses></Courses>
     <Carts></Carts>
     </div>
    </div>
  )
}

export default App
