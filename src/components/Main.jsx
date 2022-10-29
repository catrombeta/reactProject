import Card from "./Card"
import { cards } from "../../data/db.json"


import { useState, useEffect } from "react"

function Main() {

    return (
        <section className="py-5">
            <div className="row">
                <h4 className="title-main">
                    Flores ao domicílio
                </h4>
            </div>
            <div className="row justify-content-between mt-5">
                {cards.map((card) => {
                    return (
                        <Card 
                            image={card.image}
                            title={card.title}
                            value={card.value}
                        />
                    )
                })}
            </div>
        </section>
    )

}

export default Main