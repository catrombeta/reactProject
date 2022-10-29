import Card from "./Card"


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
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
            </div>
            <div className="row justify-content-between mt-5">
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
            </div>
            <div className="row justify-content-between mt-5">
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
                <div className="col-md-3">
                    <Card />
                </div>
            </div>
        </section>
    )

}

export default Main