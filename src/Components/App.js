import '../css/App.css';
import Lookup from './Lookup'
import OrderList from './OrderList'
import BarcodeReader from './BarcodeReader'


function App() {
  return (
    <div className="App">
      <Lookup />
      <OrderList />
      <BarcodeReader />
    </div>
  );
}

export default App;
