import useUsers from "@/hooks/useUsers";
import { Separator } from "../ui/separator";
import SearchBox from "./SearchBox/SearchBox";
import UserCard from "./UserCard/UserCard";
import UserDetails from "./UserDetails/UserDetails";
import type { TUser } from "@/types/user.type";

const Home = () => {
  const { data: users, isLoading } = useUsers();
  return (
    <div>
      <SearchBox />
      <div className="flex mt-10 gap-4 h-full">
        <div>
          {isLoading ? (
            <p>Loading....</p>
          ) : (
            users.map((user: TUser) => (
              <UserCard key={user._id} userData={user} />
            ))
          )}
        </div>
        <Separator orientation="vertical" />
        <UserDetails />
      </div>
    </div>
  );
};

export default Home;
