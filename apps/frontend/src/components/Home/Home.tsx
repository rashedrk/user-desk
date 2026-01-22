import useUsers from "@/hooks/useUsers";
import { Separator } from "../ui/separator";
import SearchBox from "./SearchBox/SearchBox";
import UserCard from "./UserCard/UserCard";
import UserDetails from "./UserDetails/UserDetails";
import type { TUser } from "@/types/user.type";
import { useState } from "react";

const Home = () => {
  const [selectedId, setSelectedId] = useState<string>("");
  const { data: users, isLoading } = useUsers();


  return (
    <div>
      <SearchBox />
      <div className="flex mt-10 gap-4 h-full">
        <div>
          {isLoading ? (
            <p>Loading....</p>
          ) : (
            users?.map((user: TUser) => (
              <div
                key={user.id}
                onClick={() => setSelectedId(user.id)}
                className="cursor-pointer"
              >
                <UserCard userData={user} />
              </div>
            ))
          )}
        </div>
        <Separator orientation="vertical" />
            <UserDetails selectedId={selectedId} />
      </div>
    </div>
  );
};

export default Home;
