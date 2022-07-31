import React, { useContext } from 'react';
import CreateProduct from '../components/CreateProduct';
import ErrorMassage from '../components/ErrorMassage';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import Product from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks';
import { IProduct } from '../models';









function ProductsPage() {
    const {loading, error, products, addProduct} = useProducts()
    const {modal, open, close} = useContext(ModalContext)
  
    const createHandler = (product: IProduct) => {
      close()
      addProduct(product)
    }
  
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        { loading && <Loader /> }
        { error && <ErrorMassage error={error}/>}
        { products.map((product) => (
          <Product product={product} key={product.id} />
        )) }
        {/* <Product product={products[0]}/>
        <Product product={products[1]}/> */}
  
      { modal && <Modal title="Create new product" onClose={() => close()}>
          <CreateProduct onCreate={createHandler}/>
        </Modal>}
  
        <button className="fixed bottom-5 right- 5 rounded-full bg-pink-400 text-white text-xl px-4 py-2"
        onClick={() => open()}>add</button>
      </div>
    );
}

export default ProductsPage