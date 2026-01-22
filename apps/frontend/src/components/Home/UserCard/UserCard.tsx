import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserCard = () => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow w-80">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="" alt="" />
          <AvatarFallback>Name</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="font-semibold text-base mb-4">Rashedul Islam</h3>
          <div className="text-xs flex items-center justify-between gap-2">
            <p className="px-2 py-1 bg-secondary rounded-md capitalize">
              Admin
            </p>
            <p className="text-gray-700">
              <span
                className={`inline-flex h-2 w-2 rounded-full mr-2 ${
                  true ? "bg-green-500" : "bg-gray-400"
                }`}
              />
              {true ? "Active" : "Inactive"}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
