import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <>
            <div className='max-w-[1040px] mx-auto grid  sm:gap-6 sm:grid-cols-2 md:grid-cols-4 border-b'>
                <div className='pl-10 md:pl-6' >
                    <h1 className='footer-list-heading'>Location</h1>
                    <li className=' footer-list'>India</li>
                    <li className=' footer-list'>Japan</li>
                    <li className=' footer-list'>Russia</li>
                    <li className=' footer-list'>USA</li>
                    <li className=' footer-list'>France</li>
                </div>
                <div className='pl-10 md:pl-6'>
                    <h1 className='footer-list-heading'>QuicK Links</h1>
                    <li className=' footer-list'>Home</li>
                    <li className=' footer-list'>Dishes</li>
                    <li className=' footer-list'>About</li>
                    <li className=' footer-list'>Menu</li>
                    <li className=' footer-list'>Review</li>
                    <li className=' footer-list'>Order</li>
                </div>
                <div className='pl-10 md:pl-6'>
                    <h1 className='footer-list-heading'>Contact Info</h1>
                    <li className=' footer-list'>+123-456-7898</li>
                    <li className=' footer-list'>+111-121-3124</li>
                    <li className=' footer-list'>rohanhati@gmail.com</li>
                    <li className=' footer-list'>subhampal@gmail.com</li>
                    <li className=' footer-list'>Bankura, West-Bengal</li>
                </div>
                <div className='pl-10 md:pl-6'>
                    <h1 className='footer-list-heading'>Follow Us</h1>
                    <li className=' footer-list'>Facebook</li>
                    <li className=' footer-list'>Instragram</li>
                    <li className=' footer-list'>Linkedin</li>
                    <li className=' footer-list'>Twitter</li>
                    <li className=' footer-list'>Git Hub</li>
                </div>
            </div>
            <p className='font-medium text-center pb-4'>Copyright @ {date} By Mr. Suresh Pal</p>
        </>
    )
}
export default Footer