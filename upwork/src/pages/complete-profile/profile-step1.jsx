import React from 'react';

const ProfileStep1 = () => {
    return (

        <div className="py-5 md:bg-complementary">
            <div className="py-3 bg-white text-center md:w-1/3 w-4/5 mx-auto px-10 border md:rounded-md border-gray-300">
                <h2 className="text-2xl font-bold my-3">Complete your free account setup</h2>
                <h2 className="text-sm my-3">peterkameel.93@gmail.com</h2>
                {/* <svg className="w-7 h-5 inline-block" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
                    <path fill="currentColor" d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
                </svg> */}
                <input type="text" className='border-gray-300 border w-full md:w-1/2 mb-5 py-2 pl-10 bg-white text-gray-700 placeholder-gray-800 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="firstName" placeholder="First Name" />
                <input type="text" className='border-gray-300 border w-full md:w-1/2 mb-5 py-2 pl-10 bg-white text-gray-700 placeholder-gray-800 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="lastName" placeholder="Last Name" />
                <input type="password" className='border-gray-300 border w-full mb-5 py-2 pl-10 bg-white text-gray-700 placeholder-gray-800 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent' name="lastName" placeholder="Create a password" />
                <label className="block">
                    <select className="form-select inline-flex w-full mb-5 py-2 pl-10 border border-gray-300 shadow-sm bg-white text-base text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Egypt</option>
                        <option>Egypt</option>
                        <option>Egypt</option>
                        <option>Egypt</option>

                    </select>
                </label>
                <>
                    <p className='font-bold my-2'>I want To:</p>
                    <button className='border w-1/3 border-gray-300 px-8 py-2 rounded-tl-md rounded-bl-md hover:bg-primary hover:text-white'>Hire</button>
                    <button className='border w-1/3 border-gray-300 px-8 py-2 rounded-tr-md rounded-br-md hover:bg-primary hover:text-white'>Work</button>
                </>
                <>
                    <label className='my-5 p-2  hover:bg-gray-200 flex '>
                        <input type="checkbox" className='form-checkbox mx-2 bg-primary' />
                        <small>Yes! Send me genuinely useful emails every now and then to help me get the most out of Upwork.</small>
                    </label>
                    <label className='my-5 p-2 hover:bg-gray-200 flex '>
                        <input type="checkbox" className='form-checkbox mx-2 ' />
                        <small>Yes, I understand and agree to the Upwork Terms of Service, including the User Agreement and Privacy Policy.</small>
                    </label>
                </>
                <>
                    <button className='border border-gray-300 w-2/3 justify-center bg-primary text-white font-bold py-2 mb-8 rounded-md hover:bg-dark'>Create My Account</button>

                </>

            </div>
        </div>
    )
}

export default ProfileStep1;