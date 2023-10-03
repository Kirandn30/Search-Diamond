import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider, createEmotionCache } from '@mantine/core'

const myCache = createEmotionCache({
  key: 'mantine',
  prepend: false
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider
    emotionCache={myCache}
    theme={{
      colors: {
        primary: [
          '#002A42',
          '#002A42',
          '#002A42',
          '#002A42',
          '#002A42',
          '#002A42',
          '#002A42',
          '#002A42',
          '#002A42',
          '#002A42',
        ],
      },
      primaryColor: 'primary',
      fontFamily: 'Poppins',
      defaultRadius: 8,
      components: {
        Modal: {
          defaultProps: {
            transitionProps: { transition: "slide-down", duration: 600 }
          }
        }
      }
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </MantineProvider>
)
