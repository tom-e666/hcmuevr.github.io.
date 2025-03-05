'use client'
import { useEffect } from "react";
import introJs from "intro.js";

export default function Home() {

        useEffect(() => {
               setTimeout(function() {
                       introJs().setOptions({
                               steps: [
                                       {
                                               element: "#frame-container",
                                               intro: "👉 Chào bạn! Hãy tìm hiểu một chút trước khi chúng ta cùng khám phá Trường Đại học Sư Phạm TP.HCM nhé!",
                                               tooltipClass: "custom-intro-tooltip",

                                       },
                                       {
                                               element: "#city-map",
                                               intro: "📍 Đây là vị trí của bạn trên bản đồ, hãy dùng nó để định hướng nha!",
                                               tooltipClass: "custom-intro-tooltip"
                                       },
                                       {
                                               element: "#menu-button",
                                               intro: "📌 Danh sách các địa điểm quan trọng ở đây, hãy chọn nơi bạn muốn đến nhé!",
                                               tooltipClass: "custom-intro-tooltip"
                                       },
                                       {
                                               element: "#button-1",
                                               intro: "🔍 Nhấn vào đây để phóng to bản đồ.",
                                               tooltipClass: "custom-intro-tooltip"
                                       },
                                       {
                                               element: "#button-2",
                                               intro: "🔎 Nhấn vào đây để thu nhỏ bản đồ.",
                                               tooltipClass: "custom-intro-tooltip"
                                       },
                                       {
                                               element: "#button-3",
                                               intro: "🗣 Bật trợ lý thuyết minh để nghe hướng dẫn chi tiết cho bạn nha.",
                                               tooltipClass: "custom-intro-tooltip"
                                       },
                                       {
                                               element: "#button-4",
                                               intro: "ℹ️ Hiển thị thông tin chi tiết về địa điểm bạn đang xem.",
                                               tooltipClass: "custom-intro-tooltip"
                                       },
                                       {
                                               element: "#button-5",
                                               intro: "🖥 Trải nghiệm toàn màn hình để nhìn rõ hơn.",
                                               tooltipClass: "custom-intro-tooltip"
                                       },
                                       {
                                               element: "#frame-container",
                                               intro: "🌟 Tuyệt vời! Hãy cùng khám phá Trường Đại học Sư phạm Thành phố Hồ Chí Minh ngay thôi!",
                                               tooltipClass: "custom-intro-tooltip"
                                       },
                               ],
                               nextLabel: "Tiếp theo",
                               prevLabel: "Trước đó",
                               doneLabel: "Hoàn thành",
                       }).start();
               },5000);
        }, []);
        return (
            <div id="iframe-container" className="w-screen h-screen bg-amber-100">
                    <iframe
                        src="https://hcmuevr360.vercel.app/"
                        className="w-full h-full border-0"
                    />


                    <div
                        id="city-map"
                        style={{
                                zIndex: 10,
                                background: "rgb(25, 0, 25)",
                                border: "1px solid rgb(0, 0, 0)",
                                cursor: "default",
                                height: "146px",
                                overflow: "hidden",
                                position: "absolute",
                                right: "5px",
                                top: "44px",
                                width: "292px",
                                pointerEvents: "auto",
                                opacity:0,
                        }}
                    ></div>

                    {/* Button List */}
                    <div
                        id="button-list"
                        style={{
                                zIndex: 10,
                                border: "1px solid rgb(0, 0, 0)",
                                cursor: "pointer",
                                height: "32px",
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)",
                                bottom: "2dvh",
                                opacity: 0,
                                visibility: "inherit",
                                width: "288px",
                                pointerEvents: "auto",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "rgba(255,255,255,0.2)",
                        }}
                    >
                            {/* Buttons */}
                            <div
                                id="button-1"
                                data-intro="Hello step two!"
                                style={{
                                        zIndex: 10,
                                        background: "rgb(128, 128, 128)",
                                        border: "1px dashed rgb(0, 0, 0)",
                                        height: "32px",
                                        width: "32px",
                                        pointerEvents: "auto",
                                        opacity: 0,
                                }}
                            ></div>

                            <div
                                id="button-2"
                                style={{
                                        zIndex: 10,
                                        background: "rgb(25, 0, 25)",
                                        border: "1px dashed rgb(0, 0, 0)",
                                        height: "32px",
                                        width: "32px",
                                        pointerEvents: "auto",
                                        opacity: 0,

                                }}
                            ></div>

                            <div
                                id="button-3"
                                style={{
                                        zIndex: 10,
                                        background: "rgb(25, 0, 25)",
                                        border: "1px solid rgb(0, 0, 0)",
                                        height: "32px",
                                        width: "32px",
                                        pointerEvents: "auto",
                                        opacity: 0,

                                }}
                            ></div>

                            <div
                                id="button-4"
                                style={{
                                        zIndex: 10,
                                        background: "rgb(25, 0, 25)",
                                        border: "1px solid rgb(0, 0, 0)",
                                        height: "32px",
                                        width: "32px",
                                        pointerEvents: "auto",
                                        opacity: 0,

                                }}
                            ></div>

                            <div
                                id="button-5"
                                style={{
                                        zIndex: 10,
                                        background: "rgb(25, 0, 25)",
                                        border: "1px solid rgb(0, 0, 0)",
                                        height: "32px",
                                        width: "32px",
                                        pointerEvents: "auto",
                                        opacity: 0,

                                }}
                            ></div>
                    </div>

                    {/* Menu Button */}
                    <div
                        id="menu-button"
                        style={{
                                zIndex: 10,
                                cursor: "pointer",
                                height: "32px",
                                left: "5px",
                                position: "absolute",
                                top: "5px",
                                width: "32px",
                                pointerEvents: "auto",
                                background: "rgba(0, 0, 0, 0.2)",
                                border: "1px solid black",
                                opacity: 0,

                        }}
                    ></div>
            </div>
        );
}
