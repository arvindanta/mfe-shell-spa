import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
function Redirect() {

    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() =>{
        navigate(state?.to);
    },[navigate, state])

  return (
    <div>Redirect</div>
  )
}

export default Redirect