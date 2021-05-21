import "./App.css";
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { title: "Car Insurence", amount: "$54.01", date: new Date(2021, 0, 29) },
    { title: "New TV", amount: "$24.03", date: new Date(2021, 3, 9) },
    { title: "Toilet Paper", amount: "$40.01", date: new Date(2021, 10, 2) },
  ];
  return (
    <div className="App">
      <h1>Create React App</h1>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
