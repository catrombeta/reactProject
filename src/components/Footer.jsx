import { BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-3">
                        <h4>Sobre a FloreSun</h4>
                        <a href="#">Sobre a FloreSun</a>
                        <a href="#">Certificado de qualidade</a>
                        <a href="#">Condições gerais</a>
                        <a href="#">Política de privacidade</a>
                        <a href="#">Pedidos comerciais</a>
                    </div>
                    <div className="col-md-3">
                        <h4>Contato</h4>
                        <p>
                            floresun@example.com
                        </p>
                        <p>
                            +351 123456789
                        </p>
                        <div className="socialMedia">
                            <a href="#"><BsInstagram /></a>
                            <a href="#"><BsTwitter /></a>
                            <a href="#"><BsFacebook /></a>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer