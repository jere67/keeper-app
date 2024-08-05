import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

import { CreateArea, Header, Footer, Note } from "./components"

const App = () => {
  const [list, setList] = useState([]);

  const addItem = (item) => {
    setList((prevValue) => {
      return [...prevValue, item];
    })
  }

  const deleteItem = (id) => {
    console.log(id);
    setList((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <>
      <div>
        <Header />
        <CreateArea onAdd={addItem}/>
        {list.map((item, index) => {
          return (
            <Note key={index} id={index} title={item.title} content={item.content} onChecked={deleteItem} />
          )
        })}
        <Footer />
      </div>
    </>
  )
}

export default App;
