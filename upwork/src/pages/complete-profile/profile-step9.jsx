import React, { useState } from 'react';
import Sidbar from '../../components/complete-profile/sidbar'
import TagHeader from '../../components/complete-profile/tagHeader'

const ProfileStep9 = () => {

    return (

        <div className='w-full bg-bodyGray md:py-6'>
            <div className="md:gap-4 md:grid md:grid-cols-12">
                <Sidbar />
                <div className='md:col-span-6 bg-white  shadow-lg'>
                    <TagHeader tag='Hourly rate' value='6' />

                    <hr />
                    <div className='bg-white px-5 md:py-4'>
                        <h1 className='text-xs font-bold my-4'>Clients will see this rate on your profile and in search results once you publish your profile. You can adjust your rate every time you submit a proposal.</h1>
                        <hr />
                        <label htmlFor="hourlyRate" className='text-xs my-2'><span className='font-bold'>Hourly Rate</span> <br /> Total amount the client will see</label>
                        <input type="number" className='border-gray-300 border w-2/3 m-2 mb-10 py-2 pl-5 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="hourlyRate" placeholder="$:Add value between $3.00 and $999.00 " /> /hr
                        <hr />
                        <label className='text-xs my-2'><span className='font-bold'>Upwork Service Fee</span> <br /> The Upwork Service Fee is 20% when you begin a contract with a new client. Once you bill over $500 with your client, the fee will be 10%. <br /><span className='text-xl text-right w-full float-right font-bold'>$ -2/hr</span></label>
                        <hr className='my-10' />


                        <button className='border border-gray-300 md:w-1/6 md:float-left w-1/12 justify-center bg-white ml-2 text-primary font-bold md:px-1 py-1 mt-4 mb-10 rounded-md'>Back</button>
                        <button className='border border-gray-300 md:w-1/6 md:float-right w-10/12 justify-center bg-primary mr-2 text-white font-bold md:px-1 py-1 mt-4 mb-10 rounded-md hover:bg-dark'>Next</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep9;