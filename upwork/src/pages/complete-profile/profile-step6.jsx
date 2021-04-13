import React, { useState } from 'react';
import Sidbar from '../../components/complete-profile/sidbar'
import TagHeader from '../../components/complete-profile/tagHeader'
import BackNextBtns from '../../components/complete-profile/back-nextBtns'



const ProfileStep6 = () => {
    const [skills] = useState(['MySql', 'NodeJS', 'Bootstrap', 'CSS3', 'HTML5', 'Tailwindcss', 'Express', 'React', 'Angular', 'MongoDB']);
    const [otherSkills] = useState(['MySql', 'NodeJS', 'Bootstrap', 'CSS3', 'HTML5', 'Tailwindcss', 'Express', 'React', 'Angular']);

    return (

        <div className='w-full bg-bodyGray md:py-6'>
            <div className="md:gap-4 md:grid md:grid-cols-12">
                <Sidbar />
                <div className='md:col-span-6 bg-white  shadow-lg'>
                    <TagHeader tag='Expertise' value='3' />

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

                        <BackNextBtns />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep6;