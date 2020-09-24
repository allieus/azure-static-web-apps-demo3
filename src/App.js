import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/dj_http?name=Django')
      .then(res => res.text())
      .then(html => {
        setMessage(html);
      })
      .catch(error => {
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
