import Alert from "./components/Alert";
import "./components/ListGroup";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return<div><ListGroup items={ items } heading={"Cities"} onSelectItem={handleSelectItem}/></div>
  // return (
  //   <div>
  //     <Alert>Hello <span>World</span></Alert>
  //   </div>
  // );
}

export default App;
