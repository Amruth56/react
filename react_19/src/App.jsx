
import { BioProvider } from './hooks/ContextAPI'
import { Home } from './hooks/ContextAPI/Home'
// import { ReducerComp } from './hooks/UseReducer'

export default function App(){

return(
  <>
  <BioProvider>
    <Home/>
  </BioProvider>
  {/* <ReducerComp /> */}
  </>
)
}