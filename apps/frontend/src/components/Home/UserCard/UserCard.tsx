import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import type { TUser } from "@/types/user.type";

const UserCard = ({userData} : {userData: TUser}) => {
  const {name, active, role} = userData
  return (
    <Card className="w-xs mb-2 hover:shadow-lg cursor-pointer">
      <CardContent className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold text-base mb-1">{name}</h3>
          <div className="text-xs flex items-center justify-between gap-2">
            <p className="px-2 py-1 bg-secondary rounded-md capitalize">
              {role}
            </p>
            <p className="text-gray-400">
              <span
                className={`inline-flex h-2 w-2 rounded-full mr-2 ${
                  active ? "bg-green-500" : "bg-gray-400"
                }`}
              />
              {active ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
