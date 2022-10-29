import { BsStarFill, BsStarHalf } from "react-icons/bs"

function Clients() {
    return (
        <section className="clients  py-5">
            <div className="row">
                <h4 className="title-main">
                    Nossos clientes
                </h4>
                <small className="text-center">
                    Nós valorizamos a opinião dos nossos clientes!
                </small>
            </div>
            <div className="row justify-content-center align-items-center">
                <div className="col-md-4 text-center">
                    <span className="icon-clients">
                        < BsStarFill/>
                        < BsStarFill/>
                        < BsStarFill/>
                        < BsStarFill/>
                        < BsStarHalf/>
                    </span>
                </div>
            </div>
            <div className="row">
                <small className="text-center">
                    157 Opiniões
                </small>
            </div>
        </section>
    )
}

export default Clients