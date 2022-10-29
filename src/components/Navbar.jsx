import { BsFillCartFill } from "react-icons/bs"

function Navbar() {
    return (
        <nav>
            <div className="row justify-content-around">
                <div className="col-md-2">
                    LOGO
                </div>
                <div className="col-md-2">
                    <h3>
                        FloreSun
                    </h3>
                </div>
                <div className="col-md-2">
                    <BsFillCartFill className="icon-navbar" />
                </div>
            </div>
        </nav>
    )

}

export default Navbar