import React, { use } from 'react'
import PricingCard from './PricingCard';
const Pricing = ({fetchedData}) => {
 const PricingData= use(fetchedData);
 console.log(PricingData);
    return (
        <>
        <div className='grid md:grid-cols-3 mx-auto w-4/5 gap-3 grid-cols-1'>
            {
                PricingData.map(plan=> <PricingCard plan={plan} key={plan.id}></PricingCard>)
            }
        </div>
        </>
    )
}

export default Pricing