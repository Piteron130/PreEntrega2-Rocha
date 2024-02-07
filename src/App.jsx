import CardWidget from "./components/common/CardWidget";
import ItemCountContainer from "./components/common/ItemCount/ItemCountContainer";
import Navbar from "./components/layout/Navbar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
ItemListContainer;

function App() {
  return (
    <div>
      <Navbar />

      <CardWidget />

      {/*<h1>Pedro</h1>*/}

      <ItemListContainer />

      {/*<ItemCountContainer />*/}
    </div>
  );
}

export default App;
