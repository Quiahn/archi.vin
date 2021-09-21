import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/front.svg'
export default function Home () {
    return (
        <div className='position-relative'>
            <div className="row animated animatedFadeInUp fadeInUp">
                <div className="d-flex col-12 col-sm-6 text-center align-items-center">
                    <div className='d-block p-3 mx-auto'>
                        <h1 className='display-4'>Try out ARCHI.VIN</h1>
                        <h5 className='d-block'>for all of your music storing needs</h5>
                        <NavLink to='/sign-up' className='btn btn-dark m-2'>Sign Up</NavLink>
                        <NavLink to='/sign-in' className='btn btn-dark m-2'>Sign In</NavLink>
                    </div>
                </div>
                <div className="col-6 py-4 mx-auto">
                    <img src={logo} className='w-100 bob-down img-fluid'/>
                </div>
            </div>
        </div>
    )
}
