import Aboutimg from './assets/imgs/about.jpg'

function About() {
 return(
    <section className="about" id='about'>
        <div className="top">
            <h1>Sobre</h1>
        </div>
        <div className="bottom">
            <div className="content">
                <div className="img">
                    <img src={Aboutimg} alt="" />
                </div>
                <div className="text">
                    <div className="title">
                        <h1>Academia Move-Mente</h1>
                    </div>
                    <div className="about_text">
                        <p>Fundada em 2017, a Move-Mente é mais do que uma academia de jiu-jitsu, é um espaço onde a mente e o corpo se conectam em perfeita harmonia. Com foco no desenvolvimento técnico e mental, nossa missão é transformar vidas através do jiu-jitsu, promovendo bem-estar, autoconfiança e disciplina. Seja você iniciante ou avançado, aqui você encontrará um ambiente acolhedor e dedicado ao seu crescimento. Venha fazer parte da nossa família e descubra o poder da movimentação consciente.</p>
                    </div>
                    <div className="button">
                        <a href="https://w.app/U57shG" className="about_btn">Junte-se a nós</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
 )
}

export default About