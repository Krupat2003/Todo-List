// import logo from './logo.svg';
import './App.css';

// components 
import Header from './components/Header';
import TdoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <Header />
      <TdoForm />
      <Todos />
    </div>
  );
}

export default App;
