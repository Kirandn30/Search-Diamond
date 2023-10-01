import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider
    // theme={{
    //   colors: {
    //     primary: [
    //       '#002A42',
    //       '#002A42',
    //       '#002A42',
    //       '#002A42',
    //       '#002A42',
    //       '#002A42',
    //       '#002A42',
    //       '#002A42',
    //       '#002A42',
    //       '#002A42',
    //     ],
    //   },
    //   primaryColor: 'primary',
    //   fontFamily: 'Noto Sans',
    //   defaultRadius: 8,
    //   components: {
    //     Modal: {
    //       defaultProps: {
    //         transitionProps: { transition: "slide-down", duration: 600 }
    //       }
    //     }
    //   }
    // }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </MantineProvider>
)
