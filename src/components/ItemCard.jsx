function ItemCard({ image, title, value }) {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <img src={image} />
                    <h4>
                        {title}
                    </h4>
                    <p>
                        {value}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ItemCard