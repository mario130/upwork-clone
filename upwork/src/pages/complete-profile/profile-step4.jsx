import React, { useState } from 'react';

const ProfileStep4 = () => {
    const [tags] = useState(['Get Started', 'Category', 'Expertise', 'Expertise Level', 'Education']);
    return (

        <div className='w-full bg-bodyGray md:py-6'>
            <div className="md:gap-4 md:grid md:grid-cols-12">
                <div className='md:col-start-3 md:col-span-2 md:block hidden'>
                    <ul>
                        {tags.map(tag => (<li className='py-2 text-gray-500'>{tag}</li>))}
                    </ul>
                </div>
                <div className='md:col-span-6 bg-white shadow-lg px-5'>
                    <h1 className='text-sm font-bold my-4'>Fill out your profile to apply</h1>
                    <hr />
                    <h1 className='text-sm font-bold my-2'>To provide a high quality experience to all customers, admission to Upwork is highly competitive.</h1>
                    <h1 className='text-sm mt-2 mb-6'>Here’s how it works:</h1>
                    <ul className='list-decimal text-xs pl-6'>
                        <li>Fill out your profile thoroughly and accurately</li>
                        <li>Submit your profile</li>
                        <li>You’ll receive an email within 24 hours to let you know if you were accepted</li>
                    </ul>
                    <h1 className='text-xs my-3'>We are currently experiencing a high number of applications. Create a stand-out profile to increase your chances of getting approved!</h1>
                    <button className='border border-gray-300 md:w-1/4 md:float-right w-11/12 justify-center bg-primary mx-2 text-white font-bold md:px-2 py-1 mt-4 mb-10 rounded-md hover:bg-dark'>Start My Profile</button>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep4;