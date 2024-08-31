import React,{useState, useEffect} from "react";
import axios from "axios";
import './App.css';
import AddProduct from "./AddProduct";

const App = ()=>{
  const [products, setProducts] =useState([]);
  const [loading, setLoading] =useState(true);
  const [error, setError] =useState(null);
  const [selectedProduct, setSelectedProduct] =useState(null);

  const getData =()=>{
    axios
      .get("http://localhost:8000/getdata")
      .then((res)=>{
        setProducts(res.data); 
        setLoading(false);
      })
      .catch((err)=>{
        console.error(err);
        setError("Failed to fetch products.");
        setLoading(false);
      });
  };

  const deleteProduct =(id)=>{
    axios.delete(`http://localhost:8000/delete/${id}`)
  };

  const editProduct =(product) =>{
    setSelectedProduct(product); 
  };

  useEffect(()=>{
    getData();
  },[products]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="App" >
      <div >
      <AddProduct getData={getData} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
      <h1 >Product List</h1>
      <hr />
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) =>(
            <div key={product.id} className="product">
              <h5>{product.id}</h5>
              <img src={product.image} alt={product.title} className="product-image" />
              <h2>{product.title}</h2>
              <p><strong>Price:</strong> ${product.price}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Category:</strong> {product.category}</p>
              <button onClick={()=>editProduct(product)}>Edit</button>
              <button onClick={()=>deleteProduct(product.id)} style={{backgroundColor:'rgb(211, 29, 29)'}}>Delete</button>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default App;
