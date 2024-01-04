import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import PcSceneTree from './PcScene';



const ContacteMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duração da animação em milissegundos
            easing: 'ease-in-out', // Tipo de easing da animação
            disable: 'mobile',
          });
          AOS.refresh(); // Atualiza o AOS quando o componente montar ou atualizar
    }, [])

  return (
    <>
        <div  id='Contato' className='containerContacteMe'>
            <div className='titleContacteMe'>
                <h1>Contacte-me</h1>
                <p>Entre em contato para trabalhos</p>
            </div>
            <div className='gridContacteMe'>
                <div data-aos="fade-right" className='infoContacteme'>
                    <div className='containerInfor'>
                        <svg fill="#ac6b34" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 1694.235h1920V226H0v1468.235ZM112.941 376.664V338.94H1807.06v37.723L960 1111.233l-847.059-734.57ZM1807.06 526.198v950.513l-351.134-438.89-88.32 70.475 378.353 472.998H174.042l378.353-472.998-88.32-70.475-351.134 438.89V526.198L960 1260.768l847.059-734.57Z" fill-rule="evenodd"></path> </g></svg>
                        <div>
                            <h4>Alguma dúvida?</h4>
                            <p>Me envie um email</p>
                            <p className='color'>gustavo_raniele@hotmail.com</p>
                        </div>
                    </div>
                    <div className='containerInfor'>
                        <svg fill="#ac6b24" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" enable-background="new 0 0 512 512"  stroke="#ac6b24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M256,0C149.3,0,64,85.3,64,192c0,36.9,11,65.4,30.1,94.3l141.7,215v0c4.3,6.5,11.7,10.7,20.2,10.7c8.5,0,16-4.3,20.2-10.7 l141.7-215C437,257.4,448,228.9,448,192C448,85.3,362.7,0,256,0z M256,298.6c-58.9,0-106.7-47.8-106.7-106.8 c0-59,47.8-106.8,106.7-106.8c58.9,0,106.7,47.8,106.7,106.8C362.7,250.8,314.9,298.6,256,298.6z M256,128c-35.4,0-64,28.6-64,64 c0,35.4,28.6,64,64,64c35.4,0,64-28.6,64-64C320,156.6,291.4,128,256,128z"></path> </g></svg>
                        <div>
                            <h4>Localização</h4>
                            <p>Rua Santa Flora</p>
                            <p className='color'>Bairro Vila Mariana</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" className='formContacteme'>
                    <PcSceneTree />
                </div>
            </div>
        </div>
    </>
  )
}

export default ContacteMe