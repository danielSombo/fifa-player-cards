import './App.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen py-8">
      <h1 className='text-center text-4xl font-extrabold text-gray-800 mb-6'>FIFA Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
