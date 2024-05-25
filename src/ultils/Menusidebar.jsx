import icons from "./icons"
import {FaHistory, FaShare} from "react-icons/fa";
import {FaPenToSquare} from "react-icons/fa6";
import {IoMdNotificationsOutline} from "react-icons/io";
import {PiShareFat} from "react-icons/pi";
import {MdHistory} from "react-icons/md";
const  {HiOutlineUsers,HiOutlineTruck,HiOutlineClock,HiOutlineRefresh,HiOutlinePencilAlt,HiOutlineShoppingCart} = icons
export const sidebarMenu = [
    {
        path: '/profile',
        text: 'Thông tin cá nhân',
        icons: <HiOutlineUsers size={19}/>
    },
    {
        role: "owner",
        path: '/post-spaces',
        text: 'Chờ xác nhận',
        icons: <HiOutlineClock size={19}/>
    },
    {

        path: '/manage-post',
        text: 'Chờ lấy hàng',
        icons: <HiOutlineRefresh size={19}/>
    },
    {
        path: '/favorite-space',
        text: 'Chờ giao hàng',
        icons: <HiOutlineTruck size={19} />
    },
    {
        path: '/my-sharing',
        text: 'Giỏ hàng',
        icons:<HiOutlineShoppingCart size={19} />
    },
    {
        path: '/booking-history',
        text: 'Lịch sử đặt hàng',
        icons: <MdHistory size={19}/>
    },
    {
        path: '/feedback',
        text: 'Đánh giá của bạn',
        icons: <HiOutlinePencilAlt  size={19}/>

    },
    {
        path: '/notifications',
        text: 'Thông báo',
        icons: <IoMdNotificationsOutline size={19} />
    },

]
