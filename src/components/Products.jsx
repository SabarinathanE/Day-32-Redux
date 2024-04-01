import { useState } from "react"


export function ProductsCard({datas = [],CountChange = () => {}}) {

    const [isCarts, setIsCarts] = useState(false)


    return (
        <section className="border-mobile">
            <div className="row">
                <div className="col-6">
                <div className="Mobile-bg">
                <img src={datas.images} className="img-fluid" alt="..." />
                </div>
                </div>
                <div className="col-2 Qnt-tag">
                <div className="Mobile-bg">
                    <button onClick={() => (CountChange(datas,setIsCarts))} >
                        { isCarts ? "Added To cart" : "Add To Cart"}
                    </button>
                </div>
                </div>
                <div className="col-3 Price-tag">
                <div className="Mobile-bg">
                    <b><h3>RS: {datas.price}</h3></b>
                </div>
                </div>
            </div>
        <div className="row">
    <div className="col">
        <div className="card blog-card">
            <div className="card-body">
                
                <div className="row">
                    <div className="col-3">
                        <h5>Mobile:</h5>
                    </div>
                    <div className="col-9">
                        <h5 className="card-title"><i>{datas.title}</i></h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h5>Description:</h5>
                    </div>
                    <div className="col-9">
                        <h5 className="card-title">{datas.description}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h5>Discount:</h5>
                    </div>
                    <div className="col-9">
                        <h5 className="card-title">{datas.discountPercentage}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h5>Rating:</h5>
                    </div>
                    <div className="col-9">
                        <h5 className="card-title">"{datas.rating}"</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h5>Stock:</h5>
                    </div>
                    <div className="col-9">
                        <h5 className="card-title">{datas.stock}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h5>Brand:</h5>
                    </div>
                    <div className="col-9">
                        <h5 className="card-title">{datas.brand}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <h5>Category:</h5>
                    </div>
                    <div className="col-9">
                        <h5 className="card-title">{datas.category}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </section>
    )
}