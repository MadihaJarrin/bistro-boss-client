import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }

        , [])


    return (
        <section className="my-20">
            <SectionTitle
                subHeading="What Our Client Say"
                heading={'Testimonials'}
            >

            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}

                        ></SwiperSlide>
                    )
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;