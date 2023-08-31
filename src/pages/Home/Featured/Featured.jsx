import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    // funtion for current date
    const currentDay = new Date().getDate();
    const currentMonth = new Date().toLocaleString([],
        {
            month: 'long'
        });
    const currentYear = new Date().getFullYear();
    return (
        <div className="featured-item">
            <SectionTitle
                subHeading="Check it out"
                heading="Featured Item"
            ></SectionTitle>

            <div className="md:flex justify-center item-center py-8 px-16">
                <div>
                    <img src={featuredImg} alt="featued item" />
                </div>
                <div className="md:ml-10">
                    <p>{currentDay} {currentMonth} {currentYear} </p>
                    <p className="uppercase">Where can I get some ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum mollitia hic distinctio laudantium? Beatae quasi hic fugit doloremque minus, totam reiciendis natus error unde repellat placeat dolorem. Magni, nam? </p>
                    <button className="btn btn-outline">Order Now</button>


                </div>
            </div>
        </div>
    );
};

export default Featured;