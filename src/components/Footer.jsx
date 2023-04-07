import { Chats, Lifebuoy, PaperPlaneRight } from 'phosphor-react'
import React from 'react'

const Footer = () => {
    return (
        <footer className='footer-styled'>
            <div className='footer-container'>
                <div className='item'>
                    <Lifebuoy size={22} />
                    <h3>Centro de ayuda</h3>
                    <p>Respuestas a preguntas frecuentes.</p>
                    <span>Visite el centro de ayuda</span>
                </div>

                <div className='item'>
                    <Chats size={22} />
                    <h3>Comunidad</h3>
                    <p>Haga preguntas y discuta temas con otros desarrolladores.</p>
                    <span>Visita la comunidad</span>
                </div>

                <div className='item'>
                    <PaperPlaneRight size={22} />
                    <h3>Soporte</h3>
                    <p>Póngase en contacto con un especialista en soporte de Cryptosis.</p>
                    <span>Habla con nosotros</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer