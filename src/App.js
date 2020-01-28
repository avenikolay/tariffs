import React from 'react';
import './App.css';
import Tariff from './components/tariff/Tariff';

function App() {
  const tariffs = [
    {
      id: 1,
      price: 700,
      title: 'Мой онлайн+',
      details: [
        'безлимит на Tele2 России',
        '800 мин. на остальные номера России',
        '30 ГБ интернета',
      ]
    },
    {
      id: 2,
      price: 550,
      title: 'Везде онлайн',
      details: [
        'безлимит на Tele2 России',
        '500 мин. на остальные номера России',
        '40 ГБ интернета',
      ]
      
    },
    {
      id: 3,
      price: 320,
      title: 'Мой онлайн',
      details: [
        'безлимит на Tele2 России',
        '500 мин. на другие мобильные номера домашнего региона',
        '15 ГБ интернета',
      ]
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
