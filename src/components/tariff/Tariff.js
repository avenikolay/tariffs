import React from 'react'
import './tariff.css'

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
                    {props.tariff.details.map((detail, index) => 
                        <li key={index} className="tariff__details_item">{detail}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
