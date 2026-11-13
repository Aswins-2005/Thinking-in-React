import React from 'react'

export const Filter = ({InStock,SetInStock}) => {
  return (
    <>
        <div className='filter'>
            <input type='checkbox' checked={InStock}
            onChange={(e) => SetInStock(e.target.checked)}
            />
            <label>Only Show The Products In Stock</label>
        </div>
    </>
  )
}
