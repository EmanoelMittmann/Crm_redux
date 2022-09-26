import { configureStore } from '@reduxjs/toolkit'
import { CountClient } from '../reducers/clientState'
import { IsOpen } from '../reducers/ModalFuncionality'
 
export default configureStore({
  reducer: {
    Counter: CountClient,
    Modal: IsOpen,
    
  }
})