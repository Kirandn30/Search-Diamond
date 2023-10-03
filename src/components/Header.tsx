import React, { ReactNode } from 'react'

export const Header = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            <div className='absolute w-full h-20 bg-transparent'>

            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
