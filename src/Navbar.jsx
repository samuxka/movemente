/* eslint-disable no-unused-vars */
import Logo from './assets/imgs/logo.png'
import React,{ useEffect } from 'react'

function Navbar() {
  useEffect(() => {
    const header = document.querySelector("header")
    const menu = document.querySelector('#menu-icon')
    const navlist = document.querySelector('.navlist')

    const handleScroll = () => {
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 60)
      }
    }

    const handleMenuClick = () => {
      if (header && menu && navlist) {
        header.classList.toggle('head')
        menu.classList.toggle('bx-x')
        navlist.classList.toggle('open')
      }
    }

    const handleWindowScroll = () => {
      if (menu && header && navlist) {
        menu.classList.remove('bx-x')
        header.classList.remove('head')
        navlist.classList.remove('open')
      }
    }

    window.addEventListener("scroll", handleScroll)
    menu?.addEventListener('click', handleMenuClick)
    window.addEventListener('scroll', handleWindowScroll)

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll)
      menu?.removeEventListener('click', handleMenuClick)
      window.removeEventListener('scroll', handleWindowScroll)
    }
  }, [])

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
          <nav>
            <ul className='navlist'>
              <li><a href="#">Inicio</a></li>
              <li><a href='#about'>Sobre</a></li>
              <li><a href="#class">Turmas</a></li>
              <li><a href="#">Grade</a></li>
              <li><a href="#">Faixas Pretas</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </nav>
          <div className="bx bx-menu" id='menu-icon'></div>
      </div>
    </header>
  )
}

export default Navbar