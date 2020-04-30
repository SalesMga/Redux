import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import {formatPrice} from '../../util/format';

import { ProductList } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
       ...product, //copia todos os dados do produto, que ja dentro do response
       priceFormatted: formatPrice(product.price), //add uma nova var que recebe o ´preço e convente para pt-BR
    }));

    this.setState({ products: data });
  }
  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image}
              alt={product.title} />
            <strong> {product.title} </strong>
            <span>{product.priceFormatted}</span>

            <button>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />3
             </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}

      </ProductList>
    );
  }
}

