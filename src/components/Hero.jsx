// import React from 'react'
// import { IoIosArrowDown } from "react-icons/fa"


function Hero() {
    return (
        <div className="mt-3">
            <div className="row hero align-items-center">
                <h1>
                    Escolha o ramo perfeito para a ocasião!
                </h1>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-md-5 hero-box gx-0">
                    <div className="row justify-content-around">
                        <h3 className="mb-3">
                            Ordenar produtos por:
                        </h3>
                        <div className="col-md-3 button-hero">
                                Popularidade
                        </div>
                        <div className="col-md-3 button-hero">
                                Preço
                        </div>
                        <div className="col-md-3 button-hero">
                                Cor
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* <IoIosArrowDown /> */}
                </div>
            </div>
        </div>
    )
}

export default Hero