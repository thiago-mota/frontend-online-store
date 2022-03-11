import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categorie: [],
    };
  }

  componentDidMount() {
    this.handleCategorie();
  }

  handleCategorie = async () => {
    const categories = await getCategories();
    this.setState({ categorie: categories });
  }

  render() {
    const { categorie } = this.state;
    return (
      <div>
        { categorie.map((obj) => (
          <label key={ obj.id } data-testid="category" htmlFor={ obj.name }>
            <input
              type="radio"
              id={ obj.name }
              name="radio-btn"
            />
            { obj.name }
          </label>
        )) }
      </div>
    );
  }
}

export default Categories;
