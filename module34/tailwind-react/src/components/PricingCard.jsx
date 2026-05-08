import React from 'react'

const PricingCard = ({plan}) => {
  return (
    <div>
            <div className='bg-amber-200 rounded-lg shadow-md p-3 w-80 mt-10'>
                <h2>{plan.name}</h2>
                <p>Price {plan.price}</p>
                <p>{plan.description}</p>
                <p>{plan.features}</p>
            </div>
    </div>
  )
}

export default PricingCard