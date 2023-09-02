import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItems from "../../../shared/MenuItems/MenuItems";

const PopularMenu = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json()) //convert response to json
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular'); //filter popular items only
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className="mb-14">
            <SectionTitle
                heading={"From Our Menu"}
                subHeading={"Popular Items"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    menu.map(item => <MenuItems
                        key={item._id}
                        item={item} //send item to menuitem
                    ></MenuItems>)
                }
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>

            </div>

        </section>
    );
};

export default PopularMenu;