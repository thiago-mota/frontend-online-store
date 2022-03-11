import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      products: [],
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  }

  fetchProducts = async () => {
    const { name } = this.state;
    const response = await getProductsFromCategoryAndQuery('', name);
    const data = response.results;
    console.log(data);

    this.setState({
      name: '',
      products: data,
    });
  }

  render() {
    const { name, products } = this.state;
    return (
      <div>
        <input
          type="text"
          name="name"
          data-testid="query-input"
          value={ name }
          onChange={ this.handleInput }
          placeholder="Digite o nome do produto"
        />
        <button
          type="submit"
          data-testid="query-button"
          onClick={ this.fetchProducts }
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        { products === 0
          ? <p>Nenhum produto foi encontrado</p>
          : (
            products.map((product) => (
              <div
                key={ product.id }
                data-testid="product"
              >
                <p>{product.id}</p>
                <p>{ product.title}</p>
                <p>{product.price}</p>
                <img src={ product.thumbnail } alt={ product.title } />
              </div>
            ))
          )}
      </div>
    );
  }
}

export default Home;
