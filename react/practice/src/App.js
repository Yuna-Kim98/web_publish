import './App.css';
import AppMenu from './components/AppMenu.jsx'
import Favicon from './components/Favicon.jsx';

export default function App() {
  return (
    <div className="App">
      <header className='header'>
        <Favicon />
        <AppMenu />
      </header>
    </div>
  );
}