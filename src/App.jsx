import './App.css';
import { ItemCount } from './itemCount/ItemCount';
import { ItemListContainer } from './itemList/ItemListContainer';
import { Navbar } from './navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemCount />
    </>
  );
}

export default App;
