
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {

  const keyvalid=localStorage.getItem('isLoggedIn')
   
  if(!keyvalid) return <Navigate to="/login"/>
  return children 
    
  
}

export default ProtectedRoute
