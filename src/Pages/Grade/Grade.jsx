import Footer from '../../Footer'
import './Grade.css'
import { Link } from 'react-router-dom'

function Grade() {
    return(
        <>
            <section className="grade" id="grade">
                <div className="thumb">
                    <div className="content">
                        <Link to='/'><p><i className="uil uil-angle-left"></i> Voltar a página principal</p></Link>
                        <h1>Grade de aulas</h1>
                    </div>
                </div>
                <div className="text-wrapper">
                    <h1>MOVE-MENTE JIU-JITSU!</h1>
                    <h1>MOVE-MENTE JIU-JITSU!</h1>
                    <h1>MOVE-MENTE JIU-JITSU!</h1>
                    <h1>MOVE-MENTE JIU-JITSU!</h1>
                    <h1>MOVE-MENTE JIU-JITSU!</h1>
                </div>
                <div className="aulas">
                    <div className="day">
                        <h1>Segunda - Feira:</h1>
                        <p><i className='bx bxs-circle'></i>5:30 - 7:00 <span>- Matutino</span></p>
                        <p><i className='bx bxs-circle'></i>17:30 - 18:30 <span>- Kids Turma 1</span></p>
                        <p><i className='bx bxs-circle'></i>18:30 - 19:30 <span>- Kids Turma 2</span></p>
                        <p><i className='bx bxs-circle'></i>19:30 - 21:00 <span>- Infanto-Juvenil</span></p>
                    </div>
                    <div className="day">
                        <h1>Terça - Feira:</h1>
                        <p><i className='bx bxs-circle'></i>17:30 - 18:30 <span>- Infantil Turma 1</span></p>
                        <p><i className='bx bxs-circle'></i>18:30 - 19:30 <span>- Infantil Turma 2</span></p>
                        <p><i className='bx bxs-circle'></i>19:30 - 21:00 <span>- Adulto</span></p>
                    </div>
                    <div className="day">
                        <h1>Quarta - Feira:</h1>
                        <p><i className='bx bxs-circle'></i>5:30 - 7:00 <span>- Matutino</span></p>
                        <p><i className='bx bxs-circle'></i>17:30 - 18:30 <span>- Kids Turma 1</span></p>
                        <p><i className='bx bxs-circle'></i>18:30 - 19:30 <span>- Kids Turma 2</span></p>
                        <p><i className='bx bxs-circle'></i>19:30 - 21:00 <span>- Infanto-Juvenil</span></p>
                    </div>
                    <div className="day">
                        <h1>Quinta - Feira:</h1>
                        <p><i className='bx bxs-circle'></i>17:30 - 18:30 <span>- Infantil Turma 1</span></p>
                        <p><i className='bx bxs-circle'></i>18:30 - 19:30 <span>- Infantil Turma 2</span></p>
                        <p><i className='bx bxs-circle'></i>19:30 - 21:00 <span>- Adulto</span></p>
                    </div>
                    <div className="day">
                        <h1>Sexta - Feira:</h1>
                        <p><i className='bx bxs-circle'></i>18:30 - 19:30 <span>- Feminino</span></p>
                        <p><i className='bx bxs-circle'></i>19:30 - 21:00 <span>- Nogi</span></p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Grade