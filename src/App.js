import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ['Salman Shah', 'Shakib Khan', 'Bappi', 'Arefin Shuvo'];
  const products = [
    {name: 'Photoshop', price: '$99.9'},
    {name: 'Illustrator', price: '$69.9'},
    {name: 'PDF Reader', price: '$9.9'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        {
          products.map(pro => <Products product={pro}></Products>)
        }
        {/* <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products> */}
        <ul>
          {
            heros.map(hero => <li>{hero}</li>)
          }
        </ul>
      </header>
    </div>
  );
}

function Products(props) {
  const productsStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    width: '300px',
    height: '300px',
    float: 'left',
    margin: '10px'
  }
  const {name, price} = props.product;
  return (
    <div style={productsStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  )
}

export default App;
