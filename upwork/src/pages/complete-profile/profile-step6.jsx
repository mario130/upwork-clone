import React, { useState } from 'react';
import Sidbar from '../../components/complete-profile/sidbar'

const ProfileStep6 = () => {
    const [skills] = useState(['MySql', 'NodeJS', 'Bootstrap', 'CSS3', 'HTML5', 'Tailwindcss', 'Express', 'React', 'Angular', 'MongoDB']);
    const [otherSkills] = useState(['MySql', 'NodeJS', 'Bootstrap', 'CSS3', 'HTML5', 'Tailwindcss', 'Express', 'React', 'Angular']);

    return (

        <div className='w-full bg-bodyGray md:py-6'>
            <div className="md:gap-4 md:grid md:grid-cols-12">
                <Sidbar />
                <div className='md:col-span-6 bg-white  shadow-lg'>
                    <div className='bg-white px-5 md:py-4'>
                        <span className='text-lg font-bold'>Expertise <br /> <span className='text-xs py-0'>3 of 12</span></span>
                    </div>
                    <hr />
                    <div className='bg-white px-5 md:py-4'>
                        <h1 className='text-sm font-bold my-4'>Select your skills</h1>
                        {skills.map((skill, i) => (<button className=' w-1/6 justify-center bg-gray-200 hover:bg-gray-300 mx-1 my-1 text-gray-800 font-bold rounded-md text-sm'>{skill}</button>))}
                        <br />
                        <h1 className='text-sm mt-4 mb-2'>Not what you are looking for?</h1>
                        <label className="block">
                            <select className="form-select inline-flex w-full mb-5 py-1 pl-5 border border-gray-300 shadow-sm bg-white text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                {skills.map((ele, i) => (<option key={i} value={ele}>{ele}</option>))}
                            </select>
                        </label>
                        <h1 className='text-xs w-1/3  mt-2 mb-10 text-gray-400'>Select at least 1 skill</h1>


                        <hr />

                        <button className='border border-gray-300 md:w-1/6 md:float-left w-1/12 justify-center bg-white ml-2 text-primary font-bold md:px-1 py-1 mt-4 mb-10 rounded-md'>Back</button>
                        <button className='border border-gray-300 md:w-1/6 md:float-right w-10/12 justify-center bg-primary mr-2 text-white font-bold md:px-1 py-1 mt-4 mb-10 rounded-md hover:bg-dark'>Next</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep6;