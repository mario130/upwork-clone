import React, { useState } from 'react';

const ProfileStep11 = () => {
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
                        <span className='text-lg font-bold'>Profile Photo & Phone No. <br /> <span className='text-xs py-0'>8 of 12</span></span>
                    </div>
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

                        <button className='border border-gray-300 md:w-1/6 md:float-left w-1/12 justify-center bg-white ml-2 text-primary font-bold md:px-1 py-1 mt-4 mb-10 rounded-md'>Back</button>
                        <button className='border border-gray-300 md:w-1/6 md:float-right w-10/12 justify-center bg-primary mr-2 text-white font-bold md:px-1 py-1 mt-4 mb-10 rounded-md hover:bg-dark'>Next</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep11;