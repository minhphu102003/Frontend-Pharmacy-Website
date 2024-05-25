import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MethodContext from "../../context/methodProvider";
import ChatIcon from "../../components/boxChat/ChatIcon";
import ChatBox from "../../components/boxChat/ChatBox";
import * as blogService from '../../services/blog';

const Blog = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { notify } = useContext(MethodContext);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [categories, setCategories] = useState([]); // State để lưu trữ danh sách categories
    const [featuredPost, setFeaturedPost] = useState(null); // State để lưu trữ bài viết nổi bật
    const [blogPosts, setBlogPosts] = useState([]); // State để lưu trữ danh sách các bài viết

    const defaultImg = 'https://prod-cdn.pharmacity.io/blog/THU-CU-DOI-MOI_384x287.jpg';
    const defaultImgBlog = 'https://data-service.pharmacity.io/pmc-upload-media/production/pmc-ecm-asm/posts/rau-diep-ca-co-tac-dung-gi-12-tac-dung-cua-rau-diep-ca-0-1200x676.webp';
    useEffect(() => {
        // Gọi API để lấy danh sách categories và bài viết khi component được mount
        fetchCategories();
        fetchFeaturedPost();
        fetchBlogPosts();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      };

    // Hàm gọi API để lấy danh sách categories
    const fetchCategories = async () => {
        const listCategory = await blogService.getListCategory();
        if(listCategory?.status === 200){
            const listCategoryData = listCategory?.data?.listCategory;
            console.log(listCategoryData);
            setCategories(listCategoryData);
        }
        else{
            console.log(listCategory);
        }
    };

    // Hàm gọi API để lấy bài viết nổi bật
    const fetchFeaturedPost = async () => {
        const blog = await blogService.getListBlog({limit:1});
        if(blog?.status === 200){
            console.log(blog?.data);
            const blogData = blog?.data?.listBlog[0];
            console.log(blogData)
            setFeaturedPost(blogData);
        }
        else{
            console.log(blog);
        }
    };

    // Hàm gọi API để lấy danh sách các bài viết
    const fetchBlogPosts = async () => {
        const listBlog = await blogService.getListBlog();
        if(listBlog?.status === 200){
            const dataBlog = listBlog?.data?.listBlog;
            setBlogPosts(dataBlog);
        }
        else{
            console.log(listBlog);
        }
    };

    const handleChatOpen = () => {
        setIsChatOpen(true);
    };

    const handleChatClose = () => {
        setIsChatOpen(false);
    };

    return (
        <div className=" w-[70vw] m-auto">
            <div className="flex space-x-4 py-6 w-full">
                <button className="px-4 py-2 border rounded-lg transition-colors duration-300 hover:bg-primaryColor hover:text-white">Bài viết nổi bật</button>
                {categories.map((category) => (
                    <button key={category.id} className="px-4 py-2 border rounded-lg transition-colors duration-300 hover:bg-primaryColor hover:text-white">
                        {category.name}
                    </button>
                ))}
            </div>
    
            <div className="flex">
                {/* Hiển thị bài viết nổi bật */}
                {featuredPost && (
                    <div className="w-1/3 p-4 my-2 cursor-pointer">
                        <img className="w-full h-auto" src={featuredPost?.img || defaultImg} alt="" />
                        <h2 className="mt-4 text-xl font-bold hover:text-primaryColor transition-colors duration-300">{featuredPost?.title}</h2>
                        <p className="text-sm line-clamp-3">{featuredPost?.description}</p>
                    </div>
                )}
    
                {/* Hiển thị danh sách các bài viết */}
                <div className="w-2/3 grid gap-4 my-5 cursor-pointer">
                    {blogPosts.map((post) => (
                        <div key={post?.id} className="flex p-4 border rounded-lg">
                            <img className="w-1/3 h-auto object-cover mr-4" src={post?.img || defaultImgBlog} alt={post?.title || 'Ảnh blog'} />
                            <div className="w-2/3">
                                <h3 className="text-lg font-bold hover:text-primaryColor transition-colors duration-300">{post?.title}</h3>
                                <button className="mt-2 px-4 py-1 bg-black text-white rounded">{post?.categoryName}</button>
                                <p className="mt-2 text-sm">{post?.category}</p>
                                <p className="text-sm my-5">{formatDate(post?.date)}</p>
                                <p className="text-m line-clamp-3">{post?.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    
            {/* Hiển thị nút chat */}
            {!isChatOpen && <ChatIcon onClick={handleChatOpen} />}
            {isChatOpen && <ChatBox onClose={handleChatClose} />}
        </div>
    );
    
};

export default Blog;
