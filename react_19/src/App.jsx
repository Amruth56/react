import {useState} from 'react'
import { LoginForm } from './components/LoginForm'
import { UserContext } from './utils/contexts/userCintext'
import useFetchUser from './utils/hooks/useFetchUser'
import { ReducerComp } from './hooks/UseReducer'

export default function App(){

return(
  <>
  <ReducerComp />
  </>
)
}