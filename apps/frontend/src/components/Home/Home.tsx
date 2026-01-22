import { Separator } from "../ui/separator";
import SearchBox from "./SearchBox/SearchBox";
import UserCard from "./UserCard/UserCard";
import UserDetails from "./UserDetails/UserDetails";

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
                <UserDetails/>
            </div>
        </div>
    );
};

export default Home;