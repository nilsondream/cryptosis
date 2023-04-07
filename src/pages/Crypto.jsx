import React from 'react'
import millify from 'millify'
import { useParams } from 'react-router-dom'
import { useGetCryptoDetailsQuery } from 'services/cryptoApi'
import { Loader } from 'components'
import { CaretDown, CaretUp } from 'phosphor-react'

const Crypto = () => {

    const { coinId } = useParams();
    const { data, isFetching } = useGetCryptoDetailsQuery(coinId);
    const cryptoDetails = data?.data?.coin;

    const stats = [
        { title: 'Precio en Bitcoin', span: `${cryptoDetails?.btcPrice}` },
        { title: 'Suministro Total', span: `${cryptoDetails?.supply?.total}` },
        { title: 'Número de intercambios', span: `${cryptoDetails?.numberOfExchanges}` },
        { title: 'Número de mercados', span: `${cryptoDetails?.numberOfMarkets}` },
    ]

    if (isFetching) return <Loader />;

    return (
        <div className='crypto-styled'>
            <div className='crypto-name'>
                <img src={cryptoDetails?.iconUrl} alt={cryptoDetails?.name} />
                <p>{cryptoDetails?.name}</p>
                <span>{cryptoDetails?.symbol}</span>
            </div>

            <div className='crypto-price'>
                <h1>${cryptoDetails?.price}</h1>
                <div>
                    <p>CAP: ${millify(cryptoDetails?.marketCap)}</p>
                    <span className={cryptoDetails?.change > 0 ? 'up' : 'down'}>
                        {cryptoDetails?.change > 0 ? <CaretUp size={17} /> : <CaretDown size={17} />}
                        {cryptoDetails?.change}%
                    </span>
                </div>
            </div>

            <div className='crypto-stats'>
                {
                    stats.map((item, i) => (
                        <div key={i}>
                            <span>{item.title}</span>
                            <p>{item.span}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Crypto