import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="overflow-hidden py-2 z-10 shadow bg-[#05529D] mt-5 text-white w-full mx-auto text-[10px]">
            <div className="relative text-[12px] rounded-4xl z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap text-[12px]">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12 text-[12px]">
                        <div className="flex h-full flex-col justify-between text-[12px]">
                            <div className="mb-4 inline-flex items-center text-[12px]">
                                <Logo width="70px" />
                            </div>
                            <div>
                                <p className="text-sm text-silver-800">
                                    &copy; Copyright 2025. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-[14px] font-semibold uppercase text-white">
                                Company
                            </h3>
                            <ul>
                             
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-silver-600 text-[12px] hover:text-white"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-silver-600 text-[12px] hover:text-white"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12 text-[12px]">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-[14px] font-semibold uppercase text-white">
                                Support
                            </h3>
                            <ul>
                              
                                <li className="mb-4 text-[8px]">
                                    <Link
                                        className=" text-base font-medium text-silver-600 text-[12px] hover:text-white"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                              
                                <li>
                                    <Link
                                        className=" text-base font-medium text-silver-600 text-[12px] hover:text-white"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-[14px] font-semibold uppercase text-white">
                                Legals
                            </h3>
                            <ul>
                                
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-silver-600 text-[12px] hover:text-white"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-silver-600 text-[12px] hover:text-white"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer