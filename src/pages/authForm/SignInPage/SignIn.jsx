import React from 'react'
import SignInForm from './SignInForm'
import SignInArticle from './SignInArticle'

function SignIn() {
    return (
        <div className='bg-[#F5F5F5] py-35 max-lg:py-25 px-30 max-lg:px-10 max-md:px-2 flex items-center justify-between max-md:flex-wrap'>
            <SignInForm />
            <SignInArticle />
        </div>
    )
}

export default SignIn
