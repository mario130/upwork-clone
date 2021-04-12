import React, { useState } from 'react';
import Sidbar from '../../components/complete-profile/sidbar'

const ProfileStep7 = () => {

    return (

        <div className='w-full bg-bodyGray md:py-6'>
            <div className="md:gap-4 md:grid md:grid-cols-12">
                <Sidbar />
                <div className='md:col-span-6 bg-white  shadow-lg'>
                    <div className='bg-white px-5 md:py-4'>
                        <span className='text-lg font-bold'>Education <br /> <span className='text-xs py-0'>5 of 12</span></span>
                    </div>
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


                        <button className='border border-gray-300 md:w-1/6 md:float-left w-1/12 justify-center bg-white ml-2 text-primary font-bold md:px-1 py-1 mt-4 mb-10 rounded-md'>Back</button>
                        <button className='border border-gray-300 md:w-1/6 md:float-right w-10/12 justify-center bg-primary mr-2 text-white font-bold md:px-1 py-1 mt-4 mb-10 rounded-md hover:bg-dark'>Next</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep7;