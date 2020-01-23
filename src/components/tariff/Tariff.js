import React from 'react'
import './Tarrif.css'

export default function Tariff(props) {
    return (
        <div className="tarrif">
            <h2 className="tarrif__title">{ props.tarrif.title }</h2>
            <div className="tarrif__price">
                <span className="tarrif__priceNum">
                   { props.tarrif.price }
                </span>
                <span className="tarrif__priceCurrency">
                    рублей в месяц
                </span>
            </div>
            <div className="tarrif__details">
                <ul className="tarrif__detailsList">
                    {props.tarrif.details.map((detail, index) => 
                        <li key={index} className="tarrif__detailsItem">{detail}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
