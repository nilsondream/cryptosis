import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Loader } from 'components'
import { useGetCryptosQuery } from 'services/cryptoApi'
import { NavLink } from 'react-router-dom'
import { MagnifyingGlass } from 'phosphor-react'

const Currencies = ({ simplified }) => {

    const count = simplified ? 10 : 100;
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCryptos(cryptosList?.data?.coins);

        const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm) || item.symbol.toLowerCase().includes(searchTerm));

        setCryptos(filteredData);
    }, [cryptosList, searchTerm]);

    if (isFetching) return <Loader />;

    return (
        <div className='currencies-styled'>
            {
                !simplified && (
                    <div className='currency-header'>
                        <h1>Criptomonedas</h1>
                        <div className='currency-search'>
                            <MagnifyingGlass size={25} />
                            <input
                                type='search'
                                placeholder='Buscar criptomoneda'
                                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                            />
                        </div>
                    </div>
                )
            }

            <div className='currency-list'>
                {
                    cryptos?.map((currency) => (
                        <NavLink key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                            <div className='currency-left'>
                                <img src={currency.iconUrl} alt={currency.symbol} />
                                <div>
                                    <p>{currency.name}</p>
                                    <span>{currency.symbol}</span>
                                </div>
                            </div>
                            <div className='currency-right'>
                                <p>${millify(currency.price)}</p>
                                <p className={currency.change > 0 ? 'up' : 'down'}>{currency.change}%</p>
                                <p>${millify(currency.marketCap)}</p>
                            </div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Currencies