import React, { useState } from 'react';
import Sidbar from '../../components/complete-profile/sidbar'
import TagHeader from '../../components/complete-profile/tagHeader'
import BackNextBtns from '../../components/complete-profile/back-nextBtns'



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
                    <TagHeader tag='Expertise level' value='4' />

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

                        <BackNextBtns />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep7;