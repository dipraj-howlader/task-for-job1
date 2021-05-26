import React, { useEffect, useState } from 'react';
import './Currency.css';

const Currency = () => {
    const [cyptocurrency , setCyptocurrency] = useState(null) 

    useEffect(() => {
        fetch('http://localhost:5000/currency', {
            headers:{
                'Content-Type':'Application/JSON'
            },
            body:JSON.stringify()
        })
        .then(res => res.json())
        .then(data => setCyptocurrency(data))
    }, [])
        
        if(cyptocurrency?.batinr){
            var { batinr,btcinr,eosinr,ethinr,iostinr,omginr,trxinr,xrpinr,zilinr,zrxinr } = cyptocurrency;
        }


    return (
        <div>
            <div className="curr-style">
                <p>1</p>
                <p>{btcinr?.name}</p>
                <p>₹{btcinr?.last}</p>
                <p>₹{btcinr?.buy}/₹{btcinr?.sell}</p>
                <p>{btcinr?.volume}</p>
                <p>{btcinr?.base_unit}</p>
               
            </div>
            <div className="curr-style">
            <p>2</p>
                <p>{batinr?.name}</p>
                <p>₹{batinr?.last}</p>
                <p>₹{batinr?.buy}/₹{batinr?.sell}</p>
                <p>{batinr?.volume}</p>
                <p>{batinr?.base_unit}</p>
            </div>
            <div className="curr-style">
            <p>3</p>
                <p>{eosinr?.name}</p>
                <p>₹{eosinr?.last}</p>
                <p>₹{eosinr?.buy}/₹{eosinr?.sell}</p>
                <p>{eosinr?.volume}</p>
                <p>{eosinr?.base_unit}</p>
            </div>
            <div className="curr-style">
            <p>4</p>
                <p>{ethinr?.name}</p>
                <p>₹{ethinr?.last}</p>
                <p>₹{ethinr?.buy}/₹{ethinr?.sell}</p>
                <p>{ethinr?.volume}</p>
                <p>{ethinr?.base_unit}</p>
            </div>
            <div className="curr-style">
            <p>5</p>
                <p>{iostinr?.name}</p>
                <p>₹{iostinr?.last}</p>
                <p>₹{iostinr?.buy}/₹{iostinr?.sell}</p>
                <p>{iostinr?.volume}</p>
                <p>{iostinr?.base_unit}</p>
            </div>
            <div className="curr-style">
            <p>6</p>
                <p>{omginr?.name}</p>
                <p>₹{omginr?.last}</p>
                <p>₹{omginr?.buy}/₹{omginr?.sell}</p>
                <p>{omginr?.volume}</p>
                <p>{omginr?.base_unit}</p>
            </div>
            <div className="curr-style">
            <p>7</p>
                <p>{trxinr?.name}</p>
                <p>₹{trxinr?.last}</p>
                <p>₹{trxinr?.buy}/₹{trxinr?.sell}</p>
                <p>{trxinr?.volume}</p>
                <p>{trxinr?.base_unit}</p>
            </div>
            <div className="curr-style">
            <p>8</p>
                <p>{xrpinr?.name}</p>
                <p>₹{xrpinr?.last}</p>
                <p>₹{xrpinr?.buy}/₹{xrpinr?.sell}</p>
                <p>{xrpinr?.volume}</p>
                <p>{xrpinr?.base_unit}</p>
            </div>
            <div className="curr-style">
            <p>9</p>
                <p>{zilinr?.name}</p>
                <p>₹{zilinr?.last}</p>
                <p>₹{zilinr?.buy}/₹{zilinr?.sell}</p>
                <p>{zilinr?.volume}</p>
                <p>{zilinr?.base_unit}</p>
            </div>
            <div className="curr-style">
            <p>10</p>
                <p>{zrxinr?.name}</p>
                <p>₹{zrxinr?.last}</p>
                <p>₹{zrxinr?.buy}/₹{zrxinr?.sell}</p>
                <p>{zrxinr?.volume}</p>
                <p>{zrxinr?.base_unit}</p>
            </div>
        </div>
    );
};

export default Currency;