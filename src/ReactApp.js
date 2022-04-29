import React, { useRef, useEffect} from 'react'
import { MFEController } from "./controller";

function ReactApp(props) {
    const ref = useRef(null)
    console.log('rendering ', props)
    useEffect(() =>{
        ref.current.appProps={
            routerBasePath:"/accounts/react1"
        }
    },[])
  return (
    <div>
      <button onClick={() => {
         MFEController?.__mfe_publish?.({
          action: {
            type: "navigate",
            sender: "root",
            receiver: "reactForm",
          },
          payload: { from: "/accounts/react1", to: '/about'},
          senderOrigin: window.origin,
          targetOrigin: "http://localhost:3333",
        });
      }}>Go to about page </button>
      
        <mfe-application
            app-id="reactForm"
            app-name="react form"
            ref={ref}
            key={props.to}
         >
        </mfe-application>

        <br/><br/>
     WC
        <mfe-application
    app-id="web12"
    app-name="web compomnents"

 > 
</mfe-application> 
    </div>
  )
}

export default ReactApp