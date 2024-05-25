import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {

    return (

        <footer className="bg-primaryColor">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="grid col-span-1 md:grid-cols-2 lg:grid-cols-3 gap-9 items-center">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center mx-auto w-64 h-32 overflow-hidden">
                            {/* <img src={require('../../assets/images/logoWhite.png')} */}
                            <img src={require('../../assets/images/logoWhite1.png')}
                                 className="w-full h-[200px] filter" alt="SharedSpaceFinder" />
                        </Link>
                    </div>
                    <p className="block text-white text-xl font-medium mb-4 text-center md:text-left">249 Trần Cao Vân, <br/> Quận Thanh Khê - Tp. Đà Nẵng</p>
                    <div className="grid grid-cols-2 gap-8 transform md:translate-x-1/2 lg:translate-x-0 text-center">
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase">Quick Links</h2>
                            <ul className="text-gray-50 text-xs font-semibold">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Trang Chủ</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Danh Mục</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Chia Sẻ</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Liên Hệ</Link>
                                </li>

                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-white uppercase">Về Pharmacy</h2>
                            <ul className="text-gray-50  text-xs font-semibold">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline ">Giới thiệu</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Hệ thống cửa hàng</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Giấy phép kinh doanh</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Quy chế hoạt động</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Chính sách đổi trả</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">Chính sách giao hàng</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-50 sm:text-center ">© 2023 <Link to="/"
                      className="hover:underline">SharedSpaceFinder™</Link>. All Rights Reserved</span>

                </div>
            </div>
        </footer>

    );
};

export default Footer;