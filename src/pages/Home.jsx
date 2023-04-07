import React from 'react'
import millify from 'millify'
import { Loader } from 'components'
import { useGetCryptosQuery } from 'services/cryptoApi'
import Cryptocurrencies from './Currencies'

const Home = () => {

    const { data, isFetching } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;

    if (isFetching) return <Loader />;

    return (
        <div className='home-styled'>
            <h1>Bienvenido a Cryptosis</h1>

            <section>
                <h2>Estadísticas globales</h2>

                <div className='stats'>
                    <div className='item'>
                        <p>Criptomonedas totales</p>
                        <span>{globalStats.total}</span>
                    </div>
                    <div className='item'>
                        <p>Capitalización total del mercado</p>
                        <span>{millify(globalStats.totalMarketCap)}</span>
                    </div>
                </div>
            </section>

            <section>
                <h2>Las 10 mejores criptomonedas</h2>
                <Cryptocurrencies simplified />
            </section>
        </div>
    )
}

export default Home