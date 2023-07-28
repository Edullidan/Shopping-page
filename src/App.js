import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Стул серый",
          img: "getimage.jpeg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "chairs",
          price: "49.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "Table.jpeg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "tabels",
          price: "199.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "grey-sofa.jpeg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "sofas",
          price: "89.99",
        },
        {
          id: 4,
          title: "Лампа",
          img: "images.jpeg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "light",
          price: "129.99",
        },
        {
          id: 5,
          title: "Стул Белый",
          img: "white.jpeg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "chairs",
          price: "249.99",
        },
      ],
    };
    this.state.currentItems = this.state.items 
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}></Header>
        <Categories chooseCategory={this.chooseCategory}></Categories>
        <Items items={this.state.currentItems} onAdd={this.addToOrder}></Items>
        <Footer></Footer>
      </div>
    );
  }
  
  chooseCategory(category){
    if(category === 'all'){
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({ 
      currentItems: this.state.items.filter((el) => el.category === category)
    })
  }

  deleteOrder (id) {
    this.setState({orders: this.state.orders.filter((el) => el.id !== id )})
  }

  addToOrder(item) {
    this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
