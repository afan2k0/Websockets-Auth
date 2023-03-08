import { io } from "socket.io-client"
import { v4 as uuidv4 } from 'uuid';

let token = localStorage.getItem("token");
if(token === null)
{
  token = uuidv4();
  localStorage.setItem("token", token)
}

const socket = io("http://localhost:3001", {
  auth: {
    token: token
  }
});

function App() {
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}

export default App;
 
/*
key: tokenid //user
value: {
  name:,
  restaurant:,
  table:,
  table-member-id:,
  items: {
    item1: {item-key, amount}
    item2: {item-key, amount}
    item3: {item-key, amount}
    item4: {item-key, amount}
  }
}

key: item-key //menu items
value: {
  restaurant:,
  price:,
  is-special:,
  item-type:,
  stock:
}

key: 
*/