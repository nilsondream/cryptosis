import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from 'components'
import { CurrencyCircleDollar, HouseSimple, List, Newspaper, Swap, X } from 'phosphor-react'

const navlinks = [
    { id: 1, name: 'Overview', to: '/', icon: <HouseSimple size={27} /> },
    { id: 2, name: 'Criptomonedas', to: '/currencies', icon: <CurrencyCircleDollar size={27} /> },
    { id: 3, name: 'Intercambios', to: '/exchanges', icon: <Swap size={27} /> },
    { id: 4, name: 'Noticias', to: '/news', icon: <Newspaper size={27} /> },
]

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className='navbar-styled'>
                <div className='navbar-left'>
                    <Logo />

                    {
                        navlinks.map((link) => {
                            return (
                                <NavLink to={link.to} key={link.id} className='link'>
                                    {link.name}
                                </NavLink>
                            )
                        })
                    }
                </div>

                <div className='navbar-right'>
                    <button>Iniciar sesión</button>
                    <button>Registrarse</button>
                </div>

                <div className='btn-menu' onClick={toggle}>
                    {!isOpen ? <List size={30} /> : <X size={30} />}
                </div>
            </nav>

            <div className={isOpen ? 'menu menu-open' : 'menu'}>
                {
                    navlinks.map((link) => {
                        return (
                            <NavLink to={link.to} key={link.id} className='link' onClick={toggle}>
                                {link.icon}
                                {link.name}
                            </NavLink>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Navbar