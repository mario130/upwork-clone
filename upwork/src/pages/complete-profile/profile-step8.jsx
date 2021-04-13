import React, { useState } from 'react';
import Sidbar from '../../components/complete-profile/sidbar'
import TagHeader from '../../components/complete-profile/tagHeader'
import BackNextBtns from '../../components/complete-profile/back-nextBtns'


const ProfileStep7 = () => {

    return (

        <div className='w-full bg-bodyGray md:py-6'>
            <div className="md:gap-4 md:grid md:grid-cols-12">
                <Sidbar />
                <div className='md:col-span-6 bg-white  shadow-lg'>
                    <TagHeader tag='Education' value='5' />

                    <hr />
                    <div className='bg-white px-5 md:py-4'>
                        <h1 className='text-xs font-bold my-4'>Add the schools you attended, areas of study, and degrees earned.</h1>
                        <hr />
                        <label htmlFor="school" className='text-xs my-2'>School</label>
                        <input type="text" className='border-gray-300 border w-full m-2 mb-10 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="school" placeholder="Ex:Assiut University" />

                        <label htmlFor="areaOfStudy" className='text-xs my-2'>Area Of Study (Optional)</label>
                        <input type="text" className='border-gray-300 border w-full m-2 mb-10 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="areaOfStudy" placeholder="Ex:Computer Science" />

                        <label htmlFor="degree" className='text-xs my-2'>Degree (Optional)</label>
                        <input type="text" className='border-gray-300 border w-full m-2 mb-10 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="degree" placeholder="Ex:Assiut university" />


                        <BackNextBtns />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep7;