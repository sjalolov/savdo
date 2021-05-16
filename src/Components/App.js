import '../css/App.css';

function App() {
  return (
    <div className="App">
      <div class="buttons">
        <button>
          <i class="fas fa-print"></i>
          Print
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>
            <i class="fas fa-ban"></i> 
            Void
            </button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button><i class="fa fa-times"></i>
            QTY
            </button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>
              <i class="fas fa-sign-out-alt"></i>
              Exit
              </button>
              <div></div>
              <button>0</button>
              <button>.00</button>
        </div>
             <div class="order-total">
               <span>$38.00</span>
              </div>
    </div>
  );
}

export default App;
