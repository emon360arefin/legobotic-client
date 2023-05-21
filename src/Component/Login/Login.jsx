import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AuthContext } from '../Authentication/AuthProvider';
import useTitle from '../Hooks/useTitle';

const Login = () => {

    useTitle("Login")

    const { signInUser, googleSignIn } = useContext(AuthContext);

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

    const handleSubmitForm = (event) => {
        event.preventDefault()
        setError(null)

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                event.target.reset()
                navigate(from, {replace: true})

            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    const handleGooglSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.log(error);
            })
    }


    return (
        <div className='bg-[#FFFAFA] py-6 md:py-16'>
            <div className='px-2 max-w-7xl mx-auto'>
                <h2 className='text-center text-slate-600 font-semibold text-4xl'>Login</h2>
                <div className=" flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className='md:py-16 md:pr-36 p-0 '>
                        <img src="/login.png" alt="" />
                    </div>
                    <div className="rounded-xl flex-shrink-0 pb-6 w-full max-w-lg shadow-md bg-base-100">

                        <form onSubmit={handleSubmitForm} className="p-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter password" className="input input-bordered" required />
                                <label className="label">
                                    <h2>New to Legobotic? Please <span className='text-blue-700'> <Link to='/register'>Register</Link>  </span></h2>
                                </label>

                            </div>

                            <div className="form-control mt-6">
                                <button className="bg-[#EB1651] text-white text-xl py-2 px-auto rounded-md">Login</button>
                            </div>

                        </form>
                        <div className=' px-6 flex flex-col gap-2'>
                            <h2 className='text-center mb-4 text-xl text-slate-700'>_______ OR _______</h2>
                            <button onClick={handleGooglSignIn} className='md:py-2 py-1 md:px-8 px-4 border w-full rounded hover:shadow-md transform-all ease-in-out duration-500'> <FcGoogle className='inline mb-1 mr-2 text-2xl ' /> <span className='text-xl'>Continue With Google</span> </button>


                            <p className='text-red-400 text-center'>{error}</p>
                            <p className='text-green-400 text-center'>{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;