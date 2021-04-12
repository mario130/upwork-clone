import React, { useState } from 'react';
import Sidbar from '../../components/complete-profile/sidbar'
import TagHeader from '../../components/complete-profile/tagHeader'
import BackNextBtns from '../../components/complete-profile/back-nextBtns'


const ProfileStep10 = () => {



    return (

        <div className='w-full bg-bodyGray md:py-6'>
            <div className="md:gap-4 md:grid md:grid-cols-12">
                <Sidbar />
                <div className='md:col-span-6 bg-white  shadow-lg'>
                    <TagHeader tag='Title & Overview' value='7' />

                    <hr />
                    <div className='bg-white px-5 py-5 md:py-4'>

                        <label htmlFor="title" className='text-xs my-2'>Title</label>
                        <input type="text" className='border-gray-300 border w-full m-2 mb-10 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="title" placeholder="Ex:Web, Mobile and software Dev." />

                        <label htmlFor="areaOfStudy" className='text-xs my-2'>Professional Overview</label>
                        <textarea className='border-gray-300 resize border w-full m-2 mb-10 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="areaOfStudy" placeholder="Ex:Highlight your top skills, experience and iterests" />

                        <hr />

                        <BackNextBtns />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep10;