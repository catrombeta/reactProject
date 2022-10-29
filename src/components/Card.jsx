function Card({ image, title, description }) {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-img-top">
                    <img src={image} />
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title">
                        {title}
                    </h5>
                    <p class="card-text">
                        {description}
                    </p>
                    <a href="#" class="btn button-card">Adicionar ao carrinho</a>
                </div>
            </div>
        </div>

    )
}

export default Card