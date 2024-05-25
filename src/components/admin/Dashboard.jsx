import React, {useContext, useEffect, useRef, useState} from "react";
import HeaderStats from "../dashboardAdmin/Stats";
import CardBarChart from "../dashboardAdmin/ChartStats";
import * as dashboard from "../../services/dashboard";
import MethodContext from "../../context/methodProvider";
import {useLocation, useNavigate} from "react-router-dom";

const Dashboard = () => {
    const fetchData = useRef();
    const {notify} = useContext(MethodContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState({});


    fetchData.current = async () => {
        const accessToken = JSON.parse(localStorage.getItem("access-token")).accessToken;
        const data = await dashboard.getDashboard(accessToken);
        console.log("🚀 ~ fetchData.current= ~ data:", data);

        setData(() => data?.data || {});
    };
    useEffect(() => {
        fetchData.current();
    }, []);

    useEffect(() => {
        if (location.state?.toastMessage !== '') {
            notify(location.state?.toastMessage, location.state?.statusMessage);
            navigate(location.pathname, {replace: true, state: {}});
        }
    }, []);

    return (
        <div className="bg-lightBlue-600">
            <div>
                <h2 className="text-3xl font-bold">Bảng điều khiển</h2>
                <HeaderStats data={data}></HeaderStats>
            </div>
            <div className="pb-5">
                <h2 className="mb-5 text-3xl font-bold">Statics</h2>
                <CardBarChart data={data}></CardBarChart>
            </div>
            <div className="">
                <h2 className="my-5 text-3xl font-bold">Recent Order</h2>
                <table className="w-full table-auto bg-white">
                    <thead>
                    <tr className="flex w-full bg-gray-100">
                        <th className="flex-1 border p-2 text-black ">ID</th>
                        <th className="flex-1 border p-2 text-black ">Created by</th>
                        <th className="flex-1 border p-2 text-black ">
                            Time
                        </th>
                        <th className="flex-1 border p-2 text-black ">
                            Status
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="flex h-16 items-center">
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            1
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            User
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            10:12:13 12/05/2024
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            pedding
                        </td>
                    </tr>
                    <tr className="flex h-16 items-center">
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            2
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            User
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            10:14:13 12/05/2024
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            pedding
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="">
                <h2 className="my-5 text-3xl font-bold">Recent Blog</h2>
                <table className="w-full table-auto bg-white">
                    <thead>
                    <tr className="flex w-full bg-gray-100">
                        <th className="flex-1 border p-2 text-black ">ID</th>
                        <th className="flex-1 border p-2 text-black ">Created by</th>
                        <th className="flex-1 border p-2 text-black ">
                            Time
                        </th>
                        <th className="flex-1 border p-2 text-black ">
                            Title
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="flex h-16 items-center">
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            1
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            Staff (ID:)
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            10:12:13 12/05/2024
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            Những dấu hiệu ban đầu của suy thận
                        </td>
                    </tr>
                    <tr className="flex h-16 items-center">
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            2
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            Staff(ID: )
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            10:14:13 12/05/2024
                        </td>
                        <td className="flex h-full flex-1 items-center justify-center border px-2">
                            Ăn rau củ giúp tăng cường sức khỏe
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;
