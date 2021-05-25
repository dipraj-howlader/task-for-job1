import React from 'react';

const ExplainCurrency = (props) => {
    // const {base_unit, buy,high,last,low,name,open,quote_unit,sell,type,volume} = pro;
    const a = props.data
    console.log()
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        console.log("aaaa",element)
        
    }


    return (
        <div>
           {
            //    a?.map(dat => console.log(dat))
           }
        </div>
    );
};

export default ExplainCurrency;