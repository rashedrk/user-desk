import { Separator } from "../ui/separator";
import SearchBox from "./SearchBox/SearchBox";
import UserCard from "./UserCard/UserCard";

const Home = () => {
    return (
        <div>
            <SearchBox/>
            <div className="flex mt-10 gap-4 h-full">
                <div>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                </div>
                <Separator orientation="vertical"/>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quod, voluptatem perspiciatis tempora debitis nostrum error ut officia iure quibusdam iusto dolore harum, in eum, iste molestias nobis magni explicabo voluptatibus magnam. Omnis, autem unde repellendus perferendis maxime similique, dolorum labore aperiam cumque, saepe cum reprehenderit at illo quisquam a accusamus nulla nam dignissimos consequuntur tempora temporibus. Quia exercitationem incidunt nulla repellendus repellat saepe iste corporis unde porro ut quas animi, sed optio! Necessitatibus consequatur dignissimos corrupti, reprehenderit voluptatum deleniti quas consequuntur laborum id reiciendis beatae temporibus numquam, ad adipisci quasi quae laboriosam aliquid labore illo rerum eligendi? Aut magnam amet, optio, animi architecto quae aliquid sed quos modi odit repellendus, eveniet excepturi. Ipsa eum temporibus nihil quisquam. Dignissimos consequatur doloribus temporibus labore perspiciatis a cumque corporis possimus? Possimus numquam nam, ipsum sint accusamus deleniti quae debitis qui dicta, quod sunt architecto doloribus est illo.</div>
            </div>
        </div>
    );
};

export default Home;