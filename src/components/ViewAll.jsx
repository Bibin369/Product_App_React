import React, { useEffect, useState } from 'react'
import ProductHeader from './ProductHeader'
import axios from 'axios'

const ViewAll = () => {
  const [data, changeData] = useState(
    [
    ]
  )
  const fetchData = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      changeData(response.data)

    }
    )
  }
  useEffect(() => { fetchData() }, [])
  return (
    <div>
      <ProductHeader />
      <br></br>
      <div class="container">
        <div class="row ">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
              {data.map(
                (value, index) => {
                  return <div class="col col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 d-flex alighitems-strech">
                    <div class="card">
                      <img height="250px" width="250px" src={value.image} class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">{value.category}</h5>
                        <p class="card-text">Price : {value.price}</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                      </div>
                    </div>
                  </div>
                }
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewAll