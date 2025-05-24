import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <div>
            <section class="space-y-5 mt-16">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold">Contact</h1>
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
                
                <div
                    class="bg-[linear-gradient(180deg,_#999999_0%,_#00bf834b_50%)] border border-[#99999999] rounded-3xl p-5 space-y-3 lg:col-span-4 ">
                    <div>
                        <img class="rounded-2xl w-full" src="assets/contact1 1.png" alt="" />
                    </div>
                    <h3 className='font-bold'>Parvez Hossain Alif</h3>
                    <p>Chief Operating Officer</p>
                    <p>
                        I am available for freelance work.
                        <br />
                        Connect with me via and call in to my account.
                    </p>
                    <p className='flex flex-col'>
                        <span className='font-semibold'>
                            Phone & Email
                        </span>
                        Phone: +880 1743063201
                        <br />
                        Email: parvezhossain744471@gmail.com
                    </p>
                    
                    <p class="font-bold">Follow Me</p>
                    <div class="flex gap-5">
                        <div
                            class="flex justify-center items-center w-10 h-10 shadow-[1px_1px_5px_black] rounded-lg bg-gradient-to-br from-[#999999] to-white">
                            <FaFacebook></FaFacebook>
                        </div>
                        <div
                            class="flex justify-center items-center w-10 h-10 shadow-[1px_1px_5px_black] rounded-lg bg-gradient-to-br from-[#999999] to-white">
                            <FaInstagram></FaInstagram>
                        </div>
                        <div
                            class="flex justify-center items-center w-10 h-10 shadow-[1px_1px_5px_black] rounded-lg bg-gradient-to-br from-[#999999] to-white">
                            <FaWhatsapp></FaWhatsapp>
                        </div>
                        <div
                            class="flex justify-center items-center w-10 h-10 shadow-[1px_1px_5px_black] rounded-lg bg-gradient-to-br from-[#999999] to-white">
                            <FaLinkedin></FaLinkedin>
                        </div>
                    </div>
                    
                </div>
                

                
                <div class="bg-[#00bf834b] rounded-3xl p-5 flex flex-col justify-center space-y-5 lg:col-span-8">
                    <div class="flex flex-col md:flex-row gap-5">
                        <div class="w-full">
                            <p>Name</p>
                            <input required class="bg-white text-xs md:text-base rounded-xl p-2 w-full border-none"
                                type="text" placeholder="Enter Your Name" />
                        </div>
                        <div class="w-full">
                            <p>Phone</p>
                            <input required class="bg-white text-xs md:text-base rounded-xl p-2 w-full border-none"
                                type="number" placeholder="Enter Your Phone Number" />
                        </div>
                    </div>
                    <div>
                        <p>Email</p>
                        <input required class="bg-white text-xs md:text-base rounded-xl p-2 w-full border-none"
                            type="email" name="" id="" placeholder="Enter Your Email" />
                    </div>
                    <div>
                        <p>Subject</p>
                        <input class="bg-white text-xs md:text-base rounded-xl p-2 w-full border-none" type="text"
                            name="" id="" placeholder="Enter Your Subject" />
                    </div>
                    <div class="w-full">
                        <p>Subject</p>
                        <textarea required class="bg-white text-xs md:text-base rounded-xl p-2 border-none w-full"
                            name="" id="" cols="60" rows="10" placeholder="Enter Your Message"></textarea>
                    </div>
                    <div class="w-full">
                        <button
                            class="btn bg-gradient-to-r from-gray-400 to-white border border-[#99999999] rounded-xl w-full">SEND
                            MESSAGE →</button>
                    </div>
                </div>
                
            </div>
        </section>
        </div>
    );
};

export default Contact;