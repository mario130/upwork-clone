import React, { useState } from 'react';
import Sidbar from '../../components/complete-profile/sidbar'

const ProfileStep7 = () => {
    const [expertiseLevel] = useState([
        { level: 'Entery Level', describeLevel: 'I am relatively new to this field' },
        { level: 'Intermediate', describeLevel: 'I have substantial experience in this field' },
        { level: 'Expert', describeLevel: 'I have comprehensive and deep expertise in this field' },
    ]);


    return (

        <div className='w-full bg-bodyGray md:py-6'>
            <div className="md:gap-4 md:grid md:grid-cols-12">
                <Sidbar />
                <div className='md:col-span-6 bg-white  shadow-lg'>
                    <div className='bg-white px-5 md:py-4'>
                        <span className='text-lg font-bold'>Expertise level <br /> <span className='text-xs py-0'>4 of 12</span></span>
                    </div>
                    <hr />
                    <div className='bg-white px-5 md:py-4'>
                        <h1 className='text-sm font-bold my-4'>What is your level of experience in this field?</h1>

                        {expertiseLevel.map((ele, i) => (
                            <div className='w-11/12 mx-auto text-center border border-gray-300 pb-2 my-2 hover:border-primary hover:bg-gray-100'>
                                <input type="radio" className='form-radio m-2 float-right' />
                                <h1 className='text-sm font-bold my-4'>{ele.level}</h1>
                                <h1 className='text-sm my-4'>{ele.describeLevel}</h1>
                            </div>
                        ))}
                        <hr />

                        <button className='border border-gray-300 md:w-1/6 md:float-left w-1/12 justify-center bg-white ml-2 text-primary font-bold md:px-1 py-1 mt-4 mb-10 rounded-md'>Back</button>
                        <button className='border border-gray-300 md:w-1/6 md:float-right w-10/12 justify-center bg-primary mr-2 text-white font-bold md:px-1 py-1 mt-4 mb-10 rounded-md hover:bg-dark'>Next</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep7;