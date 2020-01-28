import React from 'react';
import './App.css';
import Tariff from './components/tariff/Tariff';

function App() {
  const tariffs = [
    {
      id: 1,
      price: 700,
      title: 'Мой онлайн+',
      details: {
        unlimitedCalls: true,
        minutes: 800,
        traffic: 30
      }
    },
    {
      id: 2,
      price: 550,
      title: 'Везде онлайн',
      details: {
        unlimitedCalls: true,
        minutes: 500,
        traffic: 40
      }
    },
    {
      id: 3,
      price: 320,
      title: 'Мой онлайн',
      details: {
        unlimitedCalls: true,
        minutes: 500,
        traffic: 15
      }
    }
  ]
  return (
    <div className="container">
      <div className="tariffs">
        { 
          tariffs.map(tariff => <Tariff key={tariff.id} tariff={tariff}/>)
        }
      </div>
    </div>
    
  );
}

export default App;
