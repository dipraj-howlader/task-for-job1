import React, { useEffect, useState } from 'react';

const ExplainCurrency = (props) => {
        // const { batinr,btcinr,eosinr,ethinr,iostinr,omginr,trxinr,xrpinr,zilinr,zrxinrs } = props?.curr;

    // const [base_unit, buy,high,last,low,name,open,quote_unit,sell,type,volume]

        console.log(props?.curr?.batinr?.low)
        console.log(props?.curr?.btcinr?.low)
        console.log(props?.curr?.eosinr?.low)
        console.log(props?.curr?.ethinr?.low)
        console.log(props?.curr?.iostinr?.low)
        console.log(props?.curr?.omginr?.low)
        console.log(props?.curr?.trxinr?.low)
        console.log(props?.curr?.xrpinr?.low)
        console.log(props?.curr?.zilinr?.low)
        console.log(props?.curr?.zrxinrs?.low)


      
    


    return (
        <div>
         {/* <h1>I need help{props?.curr?.batinr?.low}</h1> */}
            <p>2</p>
                <p>{batinr?.name}</p>
                <p>{batinr?.last}</p>
                <p>{batinr?.buy}/{batinr?.sell}</p>
                <p>{batinr?.volume}</p>
                <p>{batinr?.base_unit}</p>
        </div>
    );
};

export default ExplainCurrency;