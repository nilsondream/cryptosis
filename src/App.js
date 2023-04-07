import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Crypto, Currencies, Exchanges, Home } from 'pages'
import { Layout } from 'components'
import 'style/Global.scss'

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/currencies' element={<Currencies />} />
                <Route path='/exchanges' element={<Exchanges />} />
                <Route path='/crypto/:coinId' element={<Crypto />} />
            </Routes>
        </Layout>
    )
}

export default App