import React from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
    <>
        <App/>
        <Analytics/>
    </>,
)
