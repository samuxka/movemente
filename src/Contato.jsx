/* eslint-disable no-unused-vars */
import { useState } from "react"
import Swal from "sweetalert2"

function Contato(){
    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "c292f38f-3383-410a-8fc7-9f96e18a00c5");   

        try{
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if(data.success) {
                Swal.fire({
                    title: "Sucesso!",
                    text: "Sua mensagem foi enviada com sucesso! OSS!!!",
                    icon: "success"
                });
            }else{
                Swal.fire({
                    title: "Erro!",
                    text: "Infelismente não foi possivel enviar sua mensagem, tente novamente",
                    icon: "error"
                });
                setResult("Não foi possivel enviar mensagem, tente novamente")
            }
        } catch (error){
            Swal.fire({
                title: "Erro!",
                text: "Infelismente não foi possivel enviar sua mensagem, tente novamente",
                icon: "error"
            });
            setResult("Não foi possivel enviar mensagem, tente novamente")
        }
    }

    return(
        <section className="contact" id="contact">
            <div className="top">
                <h1>Contato</h1>
            </div>
            <div className="bottom">
                <div className="infos_academy">
                    <div className="info">
                        <h1>Fale conosco</h1>
                        <nav className="links">
                            <ul>
                                <li><a href="#"><i className="uil uil-envelope-alt"></i> movementejiujitsu@gmail.com</a></li>
                                <li><a href="https://www.instagram.com/academiamovemente/"><i className="uil uil-instagram"></i> academiamovemente</a></li>
                                {/* <li><a href="#"><i className="uil uil-youtube"></i> canal da academia</a></li> */}
                                <li><a href="https://api.whatsapp.com/send?phone=5575999236060&text=Ol%C3%A1%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20jiu-jitsu" target="_blank"><i className="uil uil-phone"></i> +55 75999236060</a></li>
                                <li><a href="https://www.google.com/maps/place/Av.+Juracy+Magalhães,+Santo+Antônio+de+Jesus+-+BA,+44444-088/@-12.969413,-39.2478964,123m/data=!3m1!1e3!4m6!3m5!1s0x73e2a3c0a23d573:0xee82816128ce3940!8m2!3d-12.9691122!4d-39.2524235!16s%2Fg%2F1ymts97y0?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"><i className="uil uil-map-marker-alt"></i> Av. Juracy Magalhaes - Santo Antônio de Jesus, BA</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="mapa">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d451.05033257594937!2d-39.24801046349168!3d-12.969317587851837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1725239348044!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
                    </div>
                </div>
                <div className="message_academy">
                    <form onSubmit={onSubmit} method="POST">
                        <div className="input-box">
                            <label>Nome Completo</label>
                            <input type="text" className="field" placeholder="Digite seu nome completo" name='name' required />
                        </div>
                        <div className="input-box">
                            <label>Endereço de email</label>
                            <input type="email" className="field" placeholder="Digite email" name='email' required />
                        </div>
                        <div className="input-box">
                            <label>Sua mensagem</label>
                            <textarea name="message" className="field mess" placeholder="Digite sua mensagem" required></textarea>
                        </div>
                        <button type="submit">Enviar mensagem</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contato