import React from 'react'
import products from '../Data/Plist'


const Product = ({search,InStock}) => {
    const fruits = products.filter(
        (product) => product.category === 'Fruits' && product.name.toLowerCase().includes(search.toLowerCase()) &&  
        (!InStock || product.stocked)
    )
    const vegetables = products.filter(
        (product) => product.category === 'Vegetables' && product.name.toLowerCase().includes(search.toLowerCase()) &&
        (!InStock || product.stocked)
    )
    
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        <tr className='fruits'>
            <th colSpan='2'>Fruits</th>
        </tr>
        {
            fruits.map((fruit) =>(
                <tr key={fruit.name}>
                    <td>{fruit.name}</td>
                    <td>{fruit.price   }</td>
                </tr>
            ))
        }

        <tr>
            <th colSpan='2'>Vegetables</th>
        </tr>
        {
            vegetables.map((vegetable) =>(
                <tr key={vegetable.name}>
                    <td>{vegetable.name}</td>
                    <td>{vegetable.price}</td>
                </tr>
            ))
        }
      </tbody>
    </table>
  )
}
export default Product