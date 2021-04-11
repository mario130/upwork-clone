import React from 'react';

const ProfileStep2 = () => {
    return (

        <div className="py-5 ">
            <div className="py-3 bg-white text-center md:w-1/3 w-full mx-auto border md:rounded-md md:border-none border-gray-300">
                <div className='w-full py-4'>
                    <svg className=' w-1/3 mx-auto' viewBox="0 0 145 130" xmlns="http://www.w3.org/2000/svg"><circle cx="72.5" cy="65" fill="#1d4354" r="64.5"></circle><path d="M32.2 35.2H113v47.2H32.2z" fill="#fff"></path><path d="M118.1 86.6h-91V29.8c0-.3.2-.5.5-.5h90.1c.3 0 .5.2.5.5v56.8z" fill="#1d4354"></path><path d="M32.2 34.4H113v47.2H32.2z" fill="#fff"></path><path d="M27.5 94.8c-.3 0-.5-.2-.5-.5v-7.7h91.1v7.7c0 .3-.2.5-.5.5H27.5z" fill="#e0e0e0"></path><circle cx="72.6" cy="90.5" fill="#1d4354" r="1.6"></circle><path d="M118.1 86.6h-91V30.4c0-.5.4-1 1-1h89.1c.5 0 1 .4 1 1v56.2z" fill="#33637a"></path><path d="M32.2 34.4H113v47.2H32.2z" fill="#fff"></path><path d="M87.8 108.2H57.4c-.3 0-.5-.2-.5-.5v-1.6c0-.3.2-.5.5-.5h4.5c.5 0 .9-.1 1.3-.4 1-.8 1.6-1.9 1.6-3.3v-7.2h15.5v6.7c0 1.4.5 2.6 1.3 3.4.4.4 1 .7 1.7.7h4.5c.3 0 .5.2.5.5v1.6c-.1.3-.3.6-.5.6z" fill="#d1d1d1"></path><path d="M28 94.8c-.5 0-1-.4-1-1v-7.2h91.1v7.2c0 .5-.4 1-1 1H28z" fill="#f2f2f2"></path><circle cx="72.6" cy="90.5" fill="#1d4354" r="1.6"></circle><path d="M87.8 108.2H57.4c-.3 0-.5-.2-.5-.5v-1.6c0-.3.2-.5.5-.5h30.4c.3 0 .5.2.5.5v1.6c-.1.2-.3.5-.5.5z" fill="#fff"></path><path d="M93.6 73.6H50.8c-.3 0-.5-.2-.5-.5V45.7c0-.3.2-.5.5-.5h42.8c.3 0 .5.2.5.5V73c.1.4-.2.6-.5.6z" fill="#e0e0e0"></path><g fill="#c4c4c4"><path d="M72.3 62.7c-.2 0-.3-.1-.5-.2l-21.1-16c-.3-.3-.4-.7-.1-1.1.2-.3.7-.4 1.1-.1L72.3 61l20.6-15.6c.3-.3.8-.2 1.1.1.2.3.2.8-.1 1.1l-21 16c-.3 0-.5.1-.6.1z"></path><path d="M51.3 73.5c-.2 0-.5-.1-.6-.3-.2-.3-.2-.8.2-1l17.2-12.7c.3-.2.8-.2 1 .2.2.3.2.8-.2 1L51.7 73.4c-.1.1-.3.1-.4.1zM93.3 73.5c-.2 0-.3 0-.4-.1L75.7 60.6c-.3-.2-.4-.7-.2-1 .2-.3.7-.4 1-.2l17.2 12.7c.3.2.4.7.2 1-.1.3-.3.4-.6.4z"></path></g><g><circle cx="93.3" cy="47.1" fill="#fff" r="9"></circle><circle cx="93.3" cy="47.1" fill="#6fda44" r="6.4"></circle></g><path d="M93.2 20.7h-2.4v-2.4c0-.3-.2-.5-.5-.5s-.5.2-.5.5v2.4h-2.4c-.3 0-.5.2-.5.5s.2.5.5.5h2.4v2.4c0 .3.2.5.5.5s.5-.2.5-.5v-2.4h2.4c.3 0 .5-.2.5-.5s-.3-.5-.5-.5z" fill="#ffcc0d"></path><circle cx="103.3" cy="29.4" fill="#f3756c" r="1.7"></circle></svg>
                    <h1 className='text-gray-600 text-xl md:text-2xl font-bold py-2 md:py-6 '>Verify your email to proceed</h1>
                    <h1 className='text-gray-700 text-sm pt-2 '>We just sent an email to the address: <span className='font-bold'>peterkameel.93@gmail.com</span></h1>
                    <h1 className='text-gray-700 text-sm pb-2 '>Please check your email and click on the link provided to verify your address</h1>
                    <a href="/" className='text-primary py-2'>Change email</a><br />
                    <a href="/" className='text-primary py-2'>I need help verifying my email</a>
                </div>
                <button className='border border-gray-300 w-11/12 md:w-2/3 justify-center bg-primary mx-4 text-white font-bold py-2 mt-4 mb-10 rounded-md hover:bg-dark'>Resend Verification Email</button>

            </div>
        </div>
    )
}

export default ProfileStep2;