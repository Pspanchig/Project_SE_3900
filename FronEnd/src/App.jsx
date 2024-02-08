import MenuNavBar from './components/menuNavBar'
import BrandText from './components/BrandText'
import EngComponents from './components/EngComponents'

function App() {
  return (
    <>
      <div className='mainContianer'>        
        <MenuNavBar/>
        <BrandText/>
        {/* <EngComponents/> */}
      </div>

      <div className='secondContainer'>

      </div>
    </>
    
  )
}

export default App
