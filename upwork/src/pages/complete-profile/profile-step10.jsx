import React, { useState } from 'react';

const ProfileStep10 = () => {
    const [tags] = useState(['Get Started', 'Category', 'Expertise', 'Expertise Level', 'Education']);
    const [expertiseLevel] = useState([
        { level: 'Entery Level', describeLevel: 'I am relatively new to this field' },
        { level: 'Intermediate', describeLevel: 'I have substantial experience in this field' },
        { level: 'Expert', describeLevel: 'I have comprehensive and deep expertise in this field' },
    ]);


    return (

        <div className='w-full bg-bodyGray md:py-6'>
            <div className="md:gap-4 md:grid md:grid-cols-12">
                <div className='md:col-start-3 md:col-span-2 md:block hidden'>
                    <ul>
                        {tags.map(tag => (<li className='py-2 text-gray-500'>{tag}</li>))}
                    </ul>
                </div>
                <div className='md:col-span-6 bg-white  shadow-lg'>
                    <div className='bg-white px-5 md:py-4'>
                        <span className='text-lg font-bold'>Title & Overview <br /> <span className='text-xs py-0'>7 of 12</span></span>
                    </div>
                    <hr />
                    <div className='bg-white px-5 py-5 md:py-4'>

                        <label htmlFor="title" className='text-xs my-2'>Title</label>
                        <input type="text" className='border-gray-300 border w-full m-2 mb-10 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="title" placeholder="Ex:Web, Mobile and software Dev." />

                        <label htmlFor="areaOfStudy" className='text-xs my-2'>Professional Overview</label>
                        <textarea className='border-gray-300 resize border w-full m-2 mb-10 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="areaOfStudy" placeholder="Ex:Highlight your top skills, experience and iterests" />

                        <button className='border border-gray-300 md:w-1/6 md:float-left w-1/12 justify-center bg-white ml-2 text-primary font-bold md:px-1 py-1 mt-4 mb-10 rounded-md'>Back</button>
                        <button className='border border-gray-300 md:w-1/6 md:float-right w-10/12 justify-center bg-primary mr-2 text-white font-bold md:px-1 py-1 mt-4 mb-10 rounded-md hover:bg-dark'>Next</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep10;