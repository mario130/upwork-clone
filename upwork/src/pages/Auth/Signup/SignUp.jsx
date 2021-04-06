const Signup = () => {
    return ( 
        <div id="signup" className="py-5 bg-complementary">
            <div className="md:container md:mx-auto">
               <div className="form-wrapper py-6 bg-white text-center">
                   <h2 className="h1 text-3xl font-bold">Get your free account</h2>
                   
                   <button type="button" className="btn mx-auto  block bg-blue-500 hover:bg-blue-700 focus:outline-none focus:shadow-outline">Continue with Google</button>
                   <button type="button">Continue with Apple</button>

               </div>
            </div>
        </div>
        
     );
}
 
export default Signup;