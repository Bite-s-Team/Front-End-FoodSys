
import { ReactNode } from 'react';

export function FoodCardDetailsContainer({children}:{children: ReactNode}){

  return(
    <div className='flex justify-between w-full p-3'>
      {children}
    </div>
  )
}
