import React, { useState } from 'react';

const Sidbar = () => {
    const [tags] = useState(['Get Started', 'Category', 'Expertise', 'Expertise Level', 'Education', 'Hourly rate', 'Title & Overview', 'Profile Photo & Phone No.', 'Location']);

    return (
        <div className='md:col-start-3 md:col-span-2 md:block hidden'>
            <ul>
                {tags.map(tag => (<li className='py-2 text-gray-500'>{tag}</li>))}
            </ul>
        </div>

    )
}

export default Sidbar;