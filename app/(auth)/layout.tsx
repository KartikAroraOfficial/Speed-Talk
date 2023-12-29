import React from 'react';

const AuthLayout = ({ children }:{ children: React.ReactNode }) => {
    return (
        <div className='bg-slate-300 h-full w-full flex place-items-center justify-center'>
            {children}
        </div>
    )
}

export default AuthLayout;