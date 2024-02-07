import React from 'react';

const Register = () => {
    return (
        <div>
            <h2 className='text-3xl font-semibold mb-5'>Please Register here</h2>
            <form>
                <input className='border rounded-md px-5 mb-3 border-black py-2' type="email" name="email" id="" placeholder='Enter your Email Here' />
                <br />
                <input className='border rounded-md px-5 mb-3 border-black py-2' type="password" name="password" id="" placeholder='Enter your Email Here' />
                <br />
                <input className=' bg-indigo-400 hover:bg-indigo-600 p-2 text-white border rounded-r-md' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;