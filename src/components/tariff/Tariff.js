import React from 'react'
import './Tariff.css'

export default function Tariff(props) {
    return (
        <div className="tariff">
            <h2 className="tariff__title">{ props.tariff.title }</h2>
            <div className="tariff__price">
                <span className="tariff__price_num">
                   { props.tariff.price }
                </span>
                <span className="tariff__price_currency">
                    рублей в месяц
                </span>
            </div>
            <div className="tariff__details">
                <ul className="tariff__details_list">
                    {
                        props.tariff.details.unlimitedCalls === true &&
                        <li className="tariff__details_item"> 
                        безлимит на Tele2 России</li>
                        
                    }
                    
                    <li className="tariff__details_item"> 
                    {props.tariff.details.minutes} мин. на остальные номера России</li>
                    <li className="tariff__details_item"> 
                    {props.tariff.details.traffic} ГБ интернета</li>
                </ul>
            </div>
        </div>
    )
}
