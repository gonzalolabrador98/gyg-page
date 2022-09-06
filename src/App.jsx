import './App.css';
import { ItemCount } from './itemCount/ItemCount';
import { ItemDetail } from './itemDetail/ItemDetail';
import { ItemListContainer } from './itemList/ItemListContainer';
import { Navbar } from './navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemDetail />
    </>
  );
}

export default App;
