import React, { useState } from 'react'
import { Search } from './components/Search'
import { Filter } from './components/filter'
import Product from './components/Product'
import './App.css'
const App = () => {
  const [search , setSearch] = useState('');
  const [InStock , SetInStock] = useState(false)
  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <Filter InStock = {InStock} SetInStock={SetInStock}/>
      <Product search = {search} InStock = {InStock}/>
    </>
  )
}
export default App