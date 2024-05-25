import React from "react";
import { Link } from "react-router-dom";

const Feedback = ({ items, imgDefault }) => {
    return (
        <div className="py-4">
                <div className="w-auto mx-3 bg-white text-center shadow p-4 rounded-xl hover:shadow-xl transform transition-transform duration-300 hover:scale-105 h-[300px]">
                    <div className="text-primaryColor text-4xl mb-3">
                        <img
                            className="w-full h-[200px] object-cover rounded-[10px]"
                            src={items?.img || imgDefault}
                            alt={items?.name}
                        />
                    </div>
                    <h4 className="mt-3 mb-8 text-xl font-bold text-textBoldColor">{items?.name}</h4>
                </div>
        </div>
    );
};

export default Feedback;
