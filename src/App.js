import './App.css'
import NavButtons from './components/NavButton.js';
import ItemList from './components/ItemList.js';
import ShoppingCart from './components/ShoppingCart.js';

import appliance1img from './images/appliance1.jpg';
import appliance2img from './images/appliance2.jpeg';
import appliance3img from './images/appliance3.jpeg';
import appliance4img from './images/appliance4.jpeg';

function App() {
  return (
    <>
      <nav id='nav-bar'>
          <a class='title'> Lazado </a>
          <NavButtons data={menus}/>
      </nav>
      <div id='contents'>
        <ItemList data={items}/>
      </div>
    </>
  );
}

const menus = [
  {name:"Appliances", id: 1},
  {name: "Gadgets", id: 2},
  {name: "Accessories", id: 3}
]

const items = [
  {name: "Item 1", image: appliance1img, id: 1},
  {name: "Item 2", image: appliance2img, id: 1},
  {name: "Item 3", image: appliance3img, id: 1},
  {name: "Item 4", image: appliance4img, id: 1},
  {name: "Item 5", image: appliance4img, id: 1},
  {name: "Item 6", image: appliance3img, id: 1},
  {name: "Item 7", image: appliance2img, id: 1},
  {name: "Item 8", image: appliance1img, id: 1}
]

export default App;
