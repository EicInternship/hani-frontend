import React, { useEffect, useState } from 'react'
import { getproduct } from '../Service/Service'

function ProductCard({ product }) {
    const [Product, setproduct] = useState([])

    // const imageurl = `http://localhost:8080/${product}`

    useEffect(() => {
        getproduct().then((res) => {
            setproduct(res.data)
        })
    })
    // console.log(product);

    return (
        <div>
            <div className="row">

                {Product.map((f) =>
                    <div className="col-md-6">
                        <div className="card list"  >
                            <img class="card-img-top img-thumbnail" src={`http://localhost:8080/${f.pimagename}`} alt="Card image" />
                            <div class="card-body">
                                <h4 class="card-title">{f.pname}</h4>
                                <p class="card-text">{f.description}</p>
                                <h4>Rs.{f.price}</h4>
                                {/* <button onClick={()=>addtocart(f)}><a href="#" class="btn btn-primary">Add to cart</a></button> */}
                            </div>
                        </div>
                    </div>
                )
                }
            </div>


        </div>
    )
}
export default ProductCard
