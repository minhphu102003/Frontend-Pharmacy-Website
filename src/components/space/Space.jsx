import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowsLeftRight,
    faBath,
    faBed, faEllipsisVertical,
    faHeart,
    faLayerGroup, faMapLocationDot,
    faStar,
    faUserGroup
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {Link} from "react-router-dom";

const Space = () => {
    return (
        <div className="py-4">
            <Link to="/">
                <div
                    className="w-auto mx-3 rounded-xl hover:shadow-xl transform transition-all translate-y-0 hover:-translate-y-2 ">
                    <div className="h-[300px] w-full relative">
                        <img className="w-full h-full object-cover rounded-t-xl"
                             src="https://afamilycdn.com/thumb_w/710/2017/photo-2-1507000784259.jpg" alt="anh phong"/>
                        <p className="absolute top-3 left-3 uppercase bg-primaryColor rounded text-white text-xs font-semibold px-4 py-[1px]">Top
                            rate</p>
                        <div className=" absolute bottom-3 left-3 right-3 flex justify-between text-white">
                            <div className="font-bold">
                                <FontAwesomeIcon className="pr-3" icon={faLayerGroup}/>
                                <span>04 Photos</span>
                            </div>
                            <div className="font-bold">
                                <span className="pr-3">Saved</span>
                                <FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}}/>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-b-xl border-gray-400 border-[1px]">
                        <div className="px-3 py-3 ">
                            <p className="text-sm font-semibold text-primaryColor ">Phòng Trọ</p>
                            <h4 className="text-xm font-bold text-textBoldColor ">Tên Owner</h4>
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-xm font-bold text-textBoldColor">1.450.000 <span
                                    className="text-[#d4d4d4] font-thin">/ tháng</span></p>
                                <img className="w-[40px] h-[40px] rounded-full mx-3"
                                     src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                                     alt="customer"></img>
                            </div>

                            <div className="mb-2">
                                <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "#f5ed00",}}/>
                                <FontAwesomeIcon icon={faStar} style={{color: "#d4d4d4",}}/>
                                <span className="ml-3 text-[#d4d4d4] ">12 review owners</span>
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-[#d4d4d4] text-sm">
                                <div className="text-left ">
                                    <FontAwesomeIcon className="-rotate-45" icon={faArrowsLeftRight}
                                                     style={{color: "#c2c2c2",}}/>
                                    <span className="ml-3">120 m^2</span>
                                </div>
                                <div className="text-right ">
                                    <FontAwesomeIcon icon={faBed}/>
                                    <span className="ml-3">02 Bedrooms</span>
                                </div>
                                <div className="text-left ">
                                    <FontAwesomeIcon icon={faUserGroup}/>
                                    <span className="ml-3">04 Guess</span>
                                </div>
                                <div className="text-right ">
                                    <FontAwesomeIcon icon={faBath}/>
                                    <span className="ml-3">01 Bathroom</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-textBoldColor bg-[#fafafa] rounded-b-xl px-3 py-1">
                            <div>
                                <FontAwesomeIcon icon={faMapLocationDot} />
                                <span className="mx-3 ">18 Tô Hiệu, Liên Chiểu, Đà Nẵng</span>
                            </div>
                            <FontAwesomeIcon  icon={faEllipsisVertical}/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Space