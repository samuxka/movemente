import Matutino from './assets/imgs/matutino.jpg'
import Kids1 from './assets/imgs/kids2.jpg'
import Infantil2 from './assets/imgs/infantil2.jpg'
import Juvenil from './assets/imgs/juvenil.jpg'
import Adulto from './assets/imgs/adulto.jpg'
import Mulher from './assets/imgs/mulheres.jpg'
import Nogi from './assets/imgs/nogi.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules';


function Class(){
    return(
        <section className='class' id='class'>
            <div className="top">
                <h1>Turmas</h1>
            </div>
            <div className="bottom">
                <Swiper
                    spaceBetween={30}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    grabCursor={true}
                    modules={[Pagination]}
                    breakpoints={{
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 1,
                        },
                        // when window width is > 768px
                        769: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="card">
                            <div className="image">
                                <img src={Matutino} />
                            </div>
                            <div className="info">
                                <h2>Matutino</h2>
                                <p>Ideal para quem busca começar o dia com energia, a turma Matutino oferece aulas de jiu-jitsu que combinam técnica e condicionamento físico. Seja para melhorar o desempenho ou para relaxar antes do trabalho.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <div className="image"><img src={Kids1} /></div>
                            <div className="info">
                                <h2>Kids</h2>
                                <p>A turma Kids é projetada para crianças pequenas, proporcionando um primeiro contato com o jiu-jitsu de forma lúdica e segura. Focamos no desenvolvimento motor e social, ensinando disciplina e respeito desde cedo, em um ambiente divertido.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <div className="image"><img src={Infantil2} /></div>
                            <div className="info">
                            <h2>Infantil</h2>
                                <p>Nossa turma infantil ensina jiu-jitsu de forma divertida e segura, promovendo disciplina, respeito e autoconfiança. Com foco no desenvolvimento físico e mental, as crianças aprendem técnicas fundamentais em um ambiente acolhedor e motivador.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <div className="image"><img src={Juvenil} /></div>
                            <div className="info">
                            <h2>Infanto-Juvenil</h2>
                                <p>A turma infanto-juvenil é o espaço ideal para adolecentes que desejam aprimorar suas habilidades no jiu-jitsu. Com um ambiente dinâmico e focado na superação, nossos alunos aprendem técnicas essenciais, ganham confiança e fortalecem o caráter.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="card">
                            <div className="image"><img src={Mulher} /></div>
                            <div className="info">
                                <h2>Feminino</h2>
                                <p>Especificamente para mulheres, essa turma promove empoderamento e autodefesa, ensinando técnicas adaptadas às necessidades femininas. Em um ambiente inspirador, você se conecta com outras mulheres fortes e determinadas a evoluir no jiu-jitsu.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="image"><img src={Adulto} /></div>
                            <div className="info">
                                <h2>Adulto</h2>
                                <p>As aulas para adultos são projetadas para todos os níveis, proporcionando um treinamento completo que alia técnica, resistência e controle mental. Em um ambiente motivador, você pode evoluir no seu ritmo, desde o iniciante até o avançado.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card">
                            <div className="image"><img src={Nogi} /></div>
                            <div className="info">
                                <h2>No-gi</h2>
                                <p>A turma No-Gi oferece uma abordagem diferente do jiu-jitsu, com treinos sem kimono que focam em agilidade e adaptação. Ideal para quem busca desafios únicos, essas aulas aprimoram habilidades de luta e aumentam a resistência física.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Class