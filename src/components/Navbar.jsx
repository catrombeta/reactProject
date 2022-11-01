import { BsFillCartFill } from "react-icons/bs"

function Navbar() {
    return (
        <nav>
            <div className="row justify-content-around">
                <div className="col-md-2">
                    <img src="assets/logo.png" className="logo-navbar" />
                </div>
                <div className="col-md-2">
                    <h3>
                        FloreSun
                    </h3>
                </div>
                <div className="col-md-2">

                <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><BsFillCartFill className="icon-navbar position-relative" /><span class="badge ms-1">1</span></button>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasRightLabel">Carrinho</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    )

}

export default Navbar

