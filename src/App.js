import React, {useEffect, useState} from 'react'
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
      <Counter></Counter>
      <Users></Users>
        {
          products.map(pd => <Products product={pd}></Products>)
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

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onMouseEnter={()=> setCount(count + 1)}>Increase</button>
      <button onClick={()=> setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => 
            <div>
              <li>{user.name}</li>
              <p>{user.email}</p>
            </div>  
          )
        }
      </ul>
    </div>
  )
}

export default App;
