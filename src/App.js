import React from 'react';
import './App.css';
import Tariff from './components/tariff/Tariff';

function App() {
  const tarrifs = [
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
      <div className="tarrifs">
        { 
          tarrifs.map(tarrif => <Tariff key={tarrif.id} tarrif={tarrif}/>)
        }
      </div>
    </div>
    
  );
}

export default App;
