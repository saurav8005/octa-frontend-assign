import { useRef } from "react"
import '../App.css'


const Registration = ()=> {
    const registrationRef = useRef({username: "", email: "", password: ""});
    return (
        <>  
            <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create your account
              </h1>
            <form className="space-y-4 md:space-y-6" action="#">
             <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Username" onChange={(e)=> {registrationRef.current.username = e.target.value}}></input>
             </div>
             <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Email" onChange={(e)=> {registrationRef.current.email = e.target.value}}></input>
             </div>
             <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" id="password" placeholder="Enter Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=> {registrationRef.current.password = e.target.value}}></input>
             </div>
             <button type="submit" onClick={()=>{console.log(registrationRef)}}  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full submit">Create an account</button>
             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
             Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500 ">Login here</a>
             </p>
             </form>
             </div>
             </div>
             </div>
            </section>
        </>
    )
}

export default Registration