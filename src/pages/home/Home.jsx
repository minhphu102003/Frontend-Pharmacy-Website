import TitlePart from "../../components/titlePart/TitlePart";
import Categories from "../../components/categories/Categories";
import React, { useContext, useEffect, useState } from "react";
import SlideShow from "../../components/slideShow/SlideShow";
import { useLocation, useNavigate } from "react-router-dom";
import MethodContext from "../../context/methodProvider";
import Medicine from "../../components/medicine/Medicine";
import ChatIcon from "../../components/boxChat/ChatIcon";
import ChatBox from "../../components/boxChat/ChatBox";

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { notify } = useContext(MethodContext);
    const [isChatOpen, setIsChatOpen] = useState(false);

    useEffect(() => {
        if (location.state?.toastMessage !== '') {
            notify(location.state?.toastMessage, 'success');
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate, notify]);

    const handleChatOpen = () => {
        setIsChatOpen(true);
    };

    const handleChatClose = () => {
        setIsChatOpen(false);
    };

    return (
        <div className="">
            <div className="max-w-[1200px] mx-auto px-10 mt-4 text-center">
                <img className="w-full h-[300px] object-cover"
                     src="https://data-service.pharmacity.io/pmc-ecm-webapp-config-api/production/banner/Web%20592x200-1711940019564.png"
                     alt="introduce" />
            </div>
            {/*categories*/}
            <TitlePart title="Danh Mục" subTitle="Đa dạng danh mục"
                       subDesc="Về tất cả các loại thuốc : Mọi thứ điều có ở pharmacy" />

            <Categories />
            <Medicine  titlePart="Các sản phẩm thuốc nỗi trội" />
            <SlideShow typeSlide='brand' titlePart="Các nhãn hàng nối trội" />


            <SlideShow typeSlide='category detail' titlePart="Các danh mục thuốc nỗi trội" background={true} />

            {!isChatOpen && <ChatIcon onClick={handleChatOpen} />}
            {isChatOpen && <ChatBox onClose={handleChatClose} />}
        </div>
    )
}

export default Home;

