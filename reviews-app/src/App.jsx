import Review from './components/Review/Review';
import AppBody from './components/AppBody/AppBody';
import getArticles from './utils/get-article.js';
import LoadingCircle from './components/LoadingCircle/LoadingCircle';
import { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [data, updateData] = useState(null);

  useEffect(() => {
    getArticles().then(fetchedData => updateData(fetchedData))
  }, [])

  const content = data ? data.map(item => <Review reviewData={item}/>) : <LoadingCircle/>;

  return (
    <div className="App">
      <AppBody>
        {content}
      </AppBody>
      </div>
  );
}

export default App;
