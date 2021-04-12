import React, { useState } from 'react';

const ProfileStep12 = () => {
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
                        <span className='text-lg font-bold'>Location <br /> <span className='text-xs py-0'>9 of 12</span></span>
                    </div>
                    <hr />
                    <div className='bg-white px-5 md:py-4'>
                        <div className='w-full'>
                            <h1 className='text-sm font-bold my-2'>Where are you based?</h1>
                            <h1 className='text-xs mb-6 mt-2'>We take your privacy very seriously. Only your city and country will be shown to clients.</h1>

                            <label htmlFor="street" className='text-xs my-2 font-bold block'>Country</label>
                            <select class="form-select block w-1/2 mb-5 mx-1 my-2 py-2 pl-10 border border-gray-300 shadow-sm bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                <option>Egypt</option>
                                <option>Egypt</option>
                                <option>Egypt</option>
                                <option>Egypt</option>

                            </select>

                            <label htmlFor="street" className='text-xs my-2 font-bold block'>Street Address</label>
                            <input type="text" className='border-gray-300 border w-full mx-1 my-2 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="street" placeholder="" />
                            <input type="text" className='border-gray-300 border w-1/2 mx-1 my-2 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="street" placeholder="Apt./Suite" />
                            <br className='mb-5' />

                            <label htmlFor="city" className='text-xs mb-2 font-bold block mt-6'>City</label>
                            <input type="text" className='border-gray-300 border w-1/2 mx-1 my-2 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="city" placeholder="" />

                            <label htmlFor="postalCode" className='text-xs my-2 font-bold block '>ZIP/Postal code</label>
                            <input type="text" className='border-gray-300 border w-1/2 mx-1 my-2 py-2 pl-10 bg-white text-gray-700 text-sm placeholder-gray-500 shadow-sm  focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="postalCode" placeholder="" />


                            <br /><br />

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

export default ProfileStep12;