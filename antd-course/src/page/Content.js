import React from 'React';
import ShoppingList from './shoppinglist.js';

class Content extends React.Component {
  render() {
    return (
      <ShoppingList name="张三" />
    );
  }
}

export default Content;