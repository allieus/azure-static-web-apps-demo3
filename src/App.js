import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('...');

  useEffect(() => {
    fetch("/api/blog/greeting/?name=Django")
      .then((res) => res.json())
      .then(json => {
        setMessage(json.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Azure Static Web Apps with Python/Django</h1>

      <div>
        Message from Django:
        {message}
      </div>

    </div>
  );
}

export default App;
