import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Crypto, Currencies, Home, Premiun } from 'pages'
import { Layout } from 'components'
import 'style/Global.scss'

const App = () => {

    // Preload
    const [preloader, setPreload] = useState(true);

    useEffect(() => {
        if (!preloader) {
            if (typeof window === 'undefined' || !window.document) {
                return;
            }
        }
    }, [preloader]);

    const [timer, setTimer] = useState(2);

    const id = useRef(null);

    const clear = () => {
        window.clearInterval(id.current);
        setPreload(false);
    };

    useEffect(() => {
        id.current = window.setInterval(() => {
            setTimer((time) => time - 1);
        }, 1000);
        return () => clear();
    }, []);

    useEffect(() => {
        if (timer === 0) {
            clear();
        }
    }, [timer]);

    if (typeof window === 'undefined' || !window.document) {
        return null;
    }
    return (
        <>
            {
                preloader ? (
                    <div className='loader-screen'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50px" viewBox="0 0 215.96 242.42">
                            <path d="M139.24,59.48V87.39L69.62,47.2,0,87.39V70.15a18.47,18.47,0,0,1,9.24-16L60.37,24.63a18.49,18.49,0,0,1,18.48,0Z" fill='currentColor' />
                            <path d="M177.6,48v69.73l-24.18,14V51.3L83.79,11.1,98.74,2.47a18.49,18.49,0,0,1,18.48,0L168.36,32A18.47,18.47,0,0,1,177.6,48Z" fill='currentColor' />
                            <path d="M100.89,214.49v27.92L9.24,189.51A18.47,18.47,0,0,1,0,173.5V114.44a18.47,18.47,0,0,1,9.24-16L69.62,63.58l24.18,14L24.18,117.73V170.2Z" fill='currentColor' />
                            <path d="M216,70.15v59.06a18.47,18.47,0,0,1-9.24,16l-91.65,52.91V170.2l76.71-44.29V45.52l14.94,8.63A18.47,18.47,0,0,1,216,70.15Z" fill='currentColor' />
                            <path d="M216,156.23V173.5a18.47,18.47,0,0,1-9.24,16l-91.65,52.92V214.49Z" fill='currentColor' />
                            <polygon points="100.89 170.2 100.89 198.12 38.35 162.02 38.35 125.92 62.53 111.95 62.53 148.06 100.89 170.2" fill='currentColor' />
                        </svg>
                    </div>
                ) : (
                    <Layout>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/currencies' element={<Currencies />} />
                            <Route path='/crypto/:coinId' element={<Crypto />} />
                            <Route path='/exchanges' element={<Premiun />} />
                            <Route path='/news' element={<Premiun />} />
                        </Routes>
                    </Layout>
                )
            }
        </>
    )
}

export default App