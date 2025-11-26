import SignUpArticles from './SignUpArticles'
import SignUpForm from './SignUpForm'

function SignUp() {
    return (
        <div className="bg-[#F5F5F5] py-35 max-lg:py-25 px-30 max-lg:px-10 max-md:px-2 flex items-start flex-row-reverse justify-between max-md:flex-wrap ">
           <SignUpForm />
           <SignUpArticles />
        </div>
    )
}

export default SignUp
