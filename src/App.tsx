import { Suspense } from 'react'
import './App.css'
import Users from './Users'
// import Batter from './Batter'
// import Cart from './Cart'
// import Counter from './Counter'

const usersDataPromise = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
  const data = await res.json();
  return data;
}

const postDataPromise = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}

function App() {
  // function handleClick2() {
  //   alert('button clicked')
  // }
  // const handleClick3 = () => {
  //   alert('click me 3')
  // }
  // const handleAddToCart = (id) => {
  //   alert('Buying Item' + id)
  // }
  return (
    <>
      <Suspense fallback={<p>Loading.....</p>}>
        <Users usersDataPromise={usersDataPromise()}></Users>
      </Suspense>

      <Suspense fallback={<p>Lodding Posts Data...</p>}>

      </Suspense>
      {/* <Counter></Counter>
      <Batter></Batter> */}
      {/* <Cart></Cart> */}
      {/* <button onclick="handleClick()">Click Me</button> */}
      {/* <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={handleClick3}>Click Me 3</button>
      <button onClick={(() => alert('Click Me 4'))}>Click Me 4</button>
      <button onClick={() => handleAddToCart(45)}>Buy This</button> */}
    </>
  )
}

export default App
