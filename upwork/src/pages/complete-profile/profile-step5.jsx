import React, { useState } from 'react';
import Sidbar from '../../components/complete-profile/sidbar'
import TagHeader from '../../components/complete-profile/tagHeader'
import BackNextBtns from '../../components/complete-profile/back-nextBtns'

const ProfileStep5 = () => {
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
                <Sidbar />
                <div className='md:col-span-6 bg-white  shadow-lg'>
                    <TagHeader tag='Category' value='2' />

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

                        <BackNextBtns />
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileStep5;