import useUsers from "@/hooks/useUsers";
import { Separator } from "../ui/separator";
import SearchBox from "./SearchBox/SearchBox";
import UserCard from "./UserCard/UserCard";
import UserDetails from "./UserDetails/UserDetails";
import type { TUser, TQueryParams, TSelectItemValue, TSortOrder } from "@/types/user.type";
import { useState, useEffect } from "react";
import UserCardSkeleton from "../Skeleton/UserCardSkeleton";
import UserDetailsSkeleton from "../Skeleton/userDetailsSkeleton";

const Home = () => {
  const [selectedId, setSelectedId] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<TSelectItemValue>("all");
  const [sortOrder, setSortOrder] = useState<TSortOrder>(null);
  const [queryParams, setQueryParams] = useState<TQueryParams>({});

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      const params: TQueryParams = {};
      if (searchTerm) params.search = searchTerm;
      if (selectedRole !== "all") params.role = selectedRole;
      if (sortOrder) params.sort = sortOrder;
      setSelectedId("");
      setQueryParams(params);
    }, 400);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, selectedRole, sortOrder]);
  

  const { data: users, isLoading } = useUsers(queryParams);

  return (
    <div>
      <SearchBox
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        disabled={isLoading} 
      />
      <div className="flex mt-10 gap-4 h-full ">
        <div>
          {isLoading ? (
            <>
              {[1, 2, 3, 4].map((_, index) => (
                <UserCardSkeleton key={index} />
              ))}
            </>
          ) : (
            users && users.map((user: TUser) => (
              <div
                key={user.id}
                onClick={() => setSelectedId(user.id)}
                className="cursor-pointer"
              >
                <UserCard selectedId={selectedId} userData={user} />
              </div>
            ))
          )}
        </div>
        <Separator orientation="vertical" />
        {isLoading ? (
          <UserDetailsSkeleton />
        ) : users && users.length > 0 ? (
          <UserDetails selectedId={selectedId} />
        ) : (
          <div className="flex flex-col items-center justify-center flex-1 h-80">
            <p className="text-lg font-semibold text-muted-foreground mb-2">
              No users found
            </p>
            <p className="text-sm text-muted-foreground text-center">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
