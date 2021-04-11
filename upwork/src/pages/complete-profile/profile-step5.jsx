import React, { useState } from 'react';

const ProfileStep5 = () => {
    const [tags] = useState(['Get Started', 'Category', 'Expertise', 'Expertise Level', 'Education']);
    const [category] = useState([
        { value: 1, name: 'Accounting' },
        { value: 2, name: 'Admin Support' },
        { value: 3, name: 'Customer Service' },
        { value: 4, name: 'Data Science' },
        { value: 5, name: 'Web & Mobie Dev.' }
    ]);
    const [optionValue, setOptionValue] = useState(0);
    const [subCategory] = useState([
        { id: 1, topics: ['Accountaing', 'Financial Planning', 'Human Resources', 'Managment Consulting', 'Other'] },
        { id: 2, topics: ['Data Entry', 'Other -Admin Support', 'Personal Assistance', 'Project Managment', 'Transaction', 'Web Researchs'] },
        { id: 3, topics: ['Customer Service', 'Technical Supp[ort'] },
        { id: 4, topics: ['A/B Testing', 'Data Extraction', 'Data Mining', 'Data Visualization', 'Machine Learning'] },
        { id: 5, topics: ['Desctop Development', 'Ecommerce Development', 'Game Development', 'Mobile Development', 'web Development'] },
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
                        <span className='text-lg font-bold'>Category <br /> <span className='text-xs py-0'>2 of 12</span></span>
                    </div>
                    <hr />
                    <div className='bg-white px-5 md:py-4'>
                        <h1 className='text-sm font-bold my-4'>Tell us about the work you do</h1>
                        <h1 className='text-sm my-2'>What is the main service you offer?</h1>
                        <label className="block">
                            <select value={optionValue} className="form-select inline-flex w-full mb-5 py-1 pl-5 border border-gray-300 shadow-sm bg-white text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                {category.map((ele, i) => (<option key={i} value={ele.value}>{ele.name}</option>))}
                            </select>
                        </label>
                        <label className="block">
                            <select className="form-select inline-flex w-full mb-28 py-1 pl-5 border border-gray-300 shadow-sm bg-white text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                                {subCategory[1].topics.map((ele, i) => (<option key={i}>{ele}</option>))}
                            </select>
                        </label>
                        <hr />

                        <button className='border border-gray-300 md:w-1/6 md:float-left w-1/12 justify-center bg-white ml-2 text-primary font-bold md:px-1 py-1 mt-4 mb-10 rounded-md'>Back</button>
                        <button className='border border-gray-300 md:w-1/6 md:float-right w-10/12 justify-center bg-primary mr-2 text-white font-bold md:px-1 py-1 mt-4 mb-10 rounded-md hover:bg-dark'>Next</button>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep5;