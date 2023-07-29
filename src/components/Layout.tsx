import Image from 'next/image'
import React from 'react'
import Header from './Header'

const Layout = (props: any) => {
    return (
        <>
            <div>
                <Header></Header>
                {props.children}
            </div>
        </>
    )
}

export default Layout