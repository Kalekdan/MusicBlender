import './App.css';
import {PlayButton} from './PlayButton';
import {ExportButton} from './ExportButton';

function App() {
  return (
    <div className="App">
      <ExportButton></ExportButton>
      <header className="App-header">
        <PlayButton></PlayButton>
      </header>
      
    </div>
  );
}
 
export default App;