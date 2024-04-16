import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import { ProtectedPage } from './ProtectedPage'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="protectedPage" element={<ProtectedPage />} />
            </Routes>
        </BrowserRouter>
    )
}