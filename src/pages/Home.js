import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Categories from '../components/Categories';
import Cart from '../components/Cart';

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

        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          <button
            type="button"
          >
            Carrinho de Compras
          </button>
        </Link>

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

        { products.length === 0
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
        <Categories />
      </div>
    );
  }
}

export default Home;
