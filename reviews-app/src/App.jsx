import data from './assets/mock/mock-data.json';
import Review from './components/Review/Review';
import AppBody from './components/AppBody/AppBody';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppBody>
        {data.map(item => <Review reviewData={item}/>)}
      </AppBody>
      </div>
  );
}

export default App;
