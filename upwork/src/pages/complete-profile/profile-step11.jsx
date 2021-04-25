import React, { useState } from 'react';
import Sidbar from '../../components/complete-profile/sidbar'
import TagHeader from '../../components/complete-profile/tagHeader'
import BackNextBtns from '../../components/complete-profile/back-nextBtns'


const ProfileStep11 = () => {
    return (

        <>
                    <TagHeader tag='Profile Photo & Phone No.' value='8' />
                    <hr />
                    <div className='bg-white px-5 py-5 md:py-4'>
                        <div className='w-full'>
                            <h1 className='text-xs mb-10 mt-2'>Please upload a professional portrait that clearly shows your face.</h1>
                            <img className='rounded-full w-1/3 mx-auto' src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="" />
                            <br /><br />
                            <div className='w-1/3 mx-auto'>
                                <input type="file" name="profileImg" className='py-5' accept="image/jpeg, image/png" />
                            </div>
                        </div>

                        <hr />

                        <div className='w-full'>
                            <h1 className='text-sm font-bold my-4 '>Add your phone number.</h1>
                            <label htmlFor="phone" className='text-xs mb-1 font-bold block mt-6'>Phone</label>
                            <input type="text" className='border-gray-300 border w-full mx-1 my-2 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="phone" placeholder="Mobile Number" />
                            <h1 className='text-sm my-4'>Your phone number will not be shared with clients.</h1>

                        </div>


                        <hr />

                        <BackNextBtns />
                    </div>
                </>
          
    )
}

export default ProfileStep11;