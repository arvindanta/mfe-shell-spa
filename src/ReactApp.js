import React, { useRef, useEffect} from 'react'
import { MFEController } from "./controller";
import { defineCustomElement} from "@freshworksinc/platform-application/dist/components/mfe-application"
defineCustomElement()


function ReactApp(props) {
    const ref = useRef(null)
    console.log('rendering ', props)
    useEffect(() =>{
        ref.current.appProps= {
            routerBasePath:"/accounts/react1",
            test: 1,
            test1: 'tsdasd',
            i18nStrings: "json"
        }
    },[])
  return (
    <div>
      <button onClick={() => {
         MFEController?.__mfe_publish?.({
          eventName: 'ROUTE_CHANGE',
            action: {
              type: 'navigate',
              sender: 'root',
              receiver: 'reactForm',
              cb:() =>{
                
              }
            },
            payload: { from: '', to: '/about' },
        });
      }}>Go to about page </button>
      
      <mfe-application
      app-id="reactForm"
      instance-id="mfe1"
      ref={ref}
      id="x"
      iframe
      host-url="http://localhost:9003"
      iframe-src="http://localhost:9003"
      version="0.1.1"
      >
      </mfe-application>

        {/* <br/><br/>
     WC
     <mfe-application
      app-id="web12"
      instance-id="mfe2"
      id="y"
      host-url="http://localhost:9002"
      version="0.1.1"
    >
    </mfe-application> */}
    </div>
  )
}

export default ReactApp