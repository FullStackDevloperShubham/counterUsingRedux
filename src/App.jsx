import Header from './components/Header'
import DisplatCounter from './components/DisplatCounter'
import Controlls from './components/Controlls'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'



function App() {

  return (
    <>
      <div className="px-4 py-5 my-5 text-center ">
        <Header />
        <div className="col-lg-6 mx-auto">
          <DisplatCounter />
          <Controlls />
        </div>
      </div>
    </>
  )
}

export default App
