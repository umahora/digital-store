import React from "react";
import MyButton from "./MyButton";
import { Slides } from "../data/slides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Gallery = ({ className = "" }) => {
    return (
        <>
            <section className="bg-light-gray-3 py-4 md:py-10">
                <section
                    className={`relative 2xl:w-[1440px] 2xl:h-[681px] flex flex-col justify-center mx-auto overflow-hidden ${className}`}
                >
                    <div className="absolute flex rounded-full overflow-hidden -right-15 md:right-0 top-0">
                        <div className="w-35 h-35 custom-pattern"></div>
                    </div>

                    <Swiper
                        modules={[Autoplay, Pagination]}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        className="w-full h-full"
                        style={{
                            "--swiper-pagination-color": "var(--color-primary)",
                            "--swiper-pagination-bullet-size": "12px",
                        }}
                    >
                        {Slides.map((item, id) => (
                            <SwiperSlide className="py-10 md:p-25 ">
                                <section className="flex flex-col xl:flex-row items-center p-4 gap-10">
                                    <img
                                        className="xl:order-2 object-contain w-65 md:w-150"
                                        key={id}
                                        src={item.imageSrc}
                                    />
                                    <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-8">
                                        <p className="text-base  text-warning font-bold">
                                            {item.subtitle}
                                        </p>
                                        <h3 className="text-[40px] text-center md:text-start md:text-6xl font-bold text-dark-gray-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-center md:text-start md:text-lg text-dark-gray-2">
                                            {item.description}
                                        </p>
                                        <MyButton myStyle={"default"} className="w-full md:w-auto">
                                            {item.buttonText}
                                        </MyButton>
                                        
                                    </div>
                                </section>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </section>
        </>
    );
};
export default Gallery;
