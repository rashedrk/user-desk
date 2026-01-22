import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const UserCard = () => {
  return (
    <Card className="w-xs mb-2 hover:shadow-lg cursor-pointer">
      <CardContent className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="" alt="" />
          <AvatarFallback>RK</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold text-base mb-1">Rashedul Islam</h3>
          <div className="text-xs flex items-center justify-between gap-2">
            <p className="px-2 py-1 bg-secondary rounded-md capitalize">
              Admin
            </p>
            <p className="text-gray-400">
              <span
                className={`inline-flex h-2 w-2 rounded-full mr-2 ${
                  true ? "bg-green-500" : "bg-gray-400"
                }`}
              />
              {true ? "Active" : "Inactive"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
