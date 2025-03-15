import './Professores.css'
import { Link } from 'react-router-dom'
import adriano from '../../assets/imgs/adriano.jpg'
import ildelandio from '../../assets/imgs/ildelandio.jpg'
import valmir from '../../assets/imgs/valmir.jpg'
import Footer from '../../Footer'

function FaixasPretas() {
  return (
    <>
      <section className="section_professores">
        <div className="thumb">
          <div className="content">
            <Link to='/'><p><i className="uil uil-angle-left"></i> Voltar a página principal</p></Link>
            <h1>Professores</h1>
          </div>
        </div>
        <div className="text-wrapper">
                    <h1>MOVE-MENTE JIU-JITSU!</h1>
                    <h1>MOVE-MENTE JIU-JITSU!</h1>
                    <h1>MOVE-MENTE JIU-JITSU!</h1>
                    <h1>MOVE-MENTE JIU-JITSU!</h1>
                    <h1>MOVE-MENTE JIU-JITSU!</h1>
        </div>
        <div className="professores">
          <div className="professor">
            <div className="img">
              <img src={adriano} />
            </div>
            <div className="content">
              <h1>Adriano Pereira</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla et illum praesentium dolorem odio sapiente id in? Maiores cum quod, esse natus facilis qui nihil neque vitae earum, iusto excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla et illum praesentium dolorem odio sapiente id in? Maiores cum quod, esse natus facilis qui nihil neque vitae earum, iusto excepturi.</p>
              <a href="https://www.instagram.com/adrianopereirateam">
                <div className="social">
                  <i className="uil uil-instagram"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="professor">
            <div className="img">
              <img src={valmir} />
            </div>
            <div className="content">
              <h1>Valmir Silva</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla et illum praesentium dolorem odio sapiente id in? Maiores cum quod, esse natus facilis qui nihil neque vitae earum, iusto excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla et illum praesentium dolorem odio sapiente id in? Maiores cum quod, esse natus facilis qui nihil neque vitae earum, iusto excepturi.</p>
              <a href="https://www.instagram.com/valmir_saj">
                <div className="social">
                  <i className="uil uil-instagram"></i>
                </div>
              </a>
            </div>
          </div>
          <div className="professor">
            <div className="img">
              <img src={ildelandio} />
            </div>
            <div className="content">
              <h1>Ildelandio Oliveira</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla et illum praesentium dolorem odio sapiente id in? Maiores cum quod, esse natus facilis qui nihil neque vitae earum, iusto excepturi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla et illum praesentium dolorem odio sapiente id in? Maiores cum quod, esse natus facilis qui nihil neque vitae earum, iusto excepturi.</p>
              <a href="https://www.instagram.com/projetogeracaogadita/">
                <div className="social">
                  <i className="uil uil-instagram"></i>
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </section>
      <Footer />
    </>
  )
}

export default FaixasPretas