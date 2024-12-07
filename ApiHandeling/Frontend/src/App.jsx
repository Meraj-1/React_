import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from'react';

function App() {

// const {products, error, loading} = customReactQuery("/api/products")

const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
const [name, setName] = useState("")

useEffect(() => {
  setLoading(true)
  axios.get('/api/products')
   .then(response => {
      setProducts(response.data)
      setLoading(false)
    })
   .catch(error => {
      setError(error)
      setLoading(false)
    })
}, [])

if(loading) {
  return <h2>....Loding data from data  base api</h2>
}
if(error) {
  return <h2>fetching error</h2>
}
  return (
    <>
    <h2>Number of products on my api {products.length}</h2>
    <h3>{setName}</h3>
    </>
  )
}


export default App


// const customReactQuery = (urlPath) => {
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     setLoading(true)
//     axios.get(urlPath)
//      .then(response => {
//         setProducts(response.data)
//         setLoading(false)
//       })
//      .catch(error => {
//         setError(error)
//         setLoading(false)
//       })
//   }, [])

//   return {
//     products,
//     loading,
//     error
//   }
// }