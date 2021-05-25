import React, { useEffect, useState } from 'react';
import ExplainCurrency from '../ExplainCurrency/ExplainCurrency';
import './Currency.css';

const Currency = () => {

    const [currencies, setCurrencies] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/currency')
        .then(res => res.json())
        .then(data => console.log(data.batinr))
    },[])
    return (
        <div>
            {
           currencies?.map(data => <ExplainCurrency data={data}></ExplainCurrency> )
            }
        </div>
    );
};

export default Currency;