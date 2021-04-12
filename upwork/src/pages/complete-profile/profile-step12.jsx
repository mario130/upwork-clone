import React, { useState } from 'react';
import Sidbar from '../../components/complete-profile/sidbar'
import TagHeader from '../../components/complete-profile/tagHeader'
import BackNextBtns from '../../components/complete-profile/back-nextBtns'


const ProfileStep12 = () => {

    return (

        <div className='w-full bg-bodyGray md:py-6'>
            <div className="md:gap-4 md:grid md:grid-cols-12">
                <Sidbar />
                <div className='md:col-span-6 bg-white  shadow-lg'>
                    <TagHeader tag='Location' value='9' />

                    <hr />
                    <div className='bg-white px-5 md:py-4'>
                        <div className='w-full'>
                            <h1 className='text-sm font-bold my-2'>Where are you based?</h1>
                            <h1 className='text-xs mb-6 mt-2'>We take your privacy very seriously. Only your city and country will be shown to clients.</h1>

                            <label htmlFor="street" className='text-xs my-2 font-bold block'>Country</label>
                            <select class="form-select block w-1/2 mb-5 mx-1 my-2 py-2 pl-10 border border-gray-300 shadow-sm bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option>Egypt</option>
                                <option>Egypt</option>
                                <option>Egypt</option>
                                <option>Egypt</option>

                            </select>

                            <label htmlFor="street" className='text-xs my-2 font-bold block'>Street Address</label>
                            <input type="text" className='border-gray-300 border w-full mx-1 my-2 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="street" placeholder="" />
                            <input type="text" className='border-gray-300 border w-1/2 mx-1 my-2 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="street" placeholder="Apt./Suite" />
                            <br className='mb-5' />

                            <label htmlFor="city" className='text-xs mb-2 font-bold block mt-6'>City</label>
                            <input type="text" className='border-gray-300 border w-1/2 mx-1 my-2 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="city" placeholder="" />

                            <label htmlFor="postalCode" className='text-xs my-2 font-bold block '>ZIP/Postal code</label>
                            <input type="text" className='border-gray-300 border w-1/2 mx-1 my-2 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="postalCode" placeholder="" />


                            <br /><br />

                        </div>


                        <hr />
                        <BackNextBtns />

                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep12;