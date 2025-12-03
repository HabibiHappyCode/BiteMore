import React from 'react'
import ContactArticles from './ContactArticles'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <div className='py-30 max-lg:mt-15 max-md:w-[100%]  px-20 max-md:pb-20 max-lg:px-3 max-lg:py-10 bg-[#F8F9FA] flex justify-between max-md:flex-wrap max-md:gap-10'>
            <ContactArticles />
            <ContactForm />
        </div>
    )
}

export default Contact
