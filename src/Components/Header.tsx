import React, { useState, useEffect } from 'react'
import { imgHeader } from '../config/data.tsx'
import '../style/css/reset.css'
import '../style/css/style.css'
import 'aos/dist/aos.css';


const Header = () => {
    const [ mobile, setMobile ] = useState(window.innerWidth <= 1000)
    const [ clickedMenu, setClicked ] = useState(false)


    useEffect(() => {
       const menu = document.getElementById('Menu')
       menu?.addEventListener('click', () => {
            setClicked(true)
       })

       const close = document.getElementById('Close')
       close?.addEventListener('click', () => {
            setClicked(false)
        })

        const links = document.querySelectorAll('#LinksMenu')
        links.forEach( link => {
            link.addEventListener('click', () => { setClicked(false) })
        })
    }, [])
    


    useEffect(() => {
        // Função para atualizar o estado de acordo com a largura da tela
        const handleWindowSizeChange = () => {
            setMobile(window.innerWidth <= 1000);
        };
    
        // Adiciona um listener para detectar mudanças no tamanho da janela
        window.addEventListener('resize', handleWindowSizeChange);
    
        // Remove o listener quando o componente é desmontado
        return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
        };
      }, []);

  return (
    <header>
        <div className='HeaderGrid'>
            { mobile ? 
            <div className='headerFlex'>
                <div>
                    <img className='logoHeader' src={imgHeader[0].img} alt="Img Logo" />
                </div>
                <div className='menuMobile'>
                    <svg id='Menu' className={ clickedMenu ? 'mobileNone' : ''} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <div className={ clickedMenu ? 'closeMobile' : 'mobileNone'}>
                    <svg id='Close' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#ffffff"></path> </g></svg>
                    <div  className='links'>
                        <a id='LinksMenu' href="#Inicio"><h5>Inicio</h5></a>
                        <a id='LinksMenu' href="#Sobre"><h5>Sobre</h5></a>
                        <a id='LinksMenu' href="#Trabalhos"><h5>PortFolio</h5></a>
                        <a id='LinksMenu' href="#Cursos"><h5>Cursos</h5></a>
                        <a id='LinksMenu' href="#Contato"><h5>Contato</h5></a>
                    </div>
                </div>
            </div>
                 : 
                <div className='headerFlex'>
                    <div>
                        <img className='logoHeader' src={imgHeader[0].img} alt="Img Logo" />
                    </div>
                    <div className={ mobile ? 'mobileNone' : 'linksHeader' }>
                        <a href="#Inicio"><h5>Inicio</h5></a>
                        <a href="#Sobre"><h5>Sobre</h5></a>
                        <a href="#Trabalhos"><h5>PortFolio</h5></a>
                        <a href="#Cursos"><h5>Cursos</h5></a>
                        <a href="#Contato"><h5>Contato</h5></a>
                    </div>
                    <div className={ mobile ? 'mobileNone' : 'linksRedesHeader' }>
                        <a href={imgHeader[1].url}>Instagram</a>
                        <a href={imgHeader[2].url}>GitHub</a>
                        <a href={imgHeader[3].url}>LinkDin</a>
                    </div>
                </div>
        }
        </div>
    </header>
  )
}

export default Header