import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const UserDetails = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <Card className="w-full shadow-lg h-fit">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">User Details</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Complete information about the user
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Name</p>
            <p className="font-semibold">Rashedul Islam</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p className="font-medium ">rk@gmail.com</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Role</p>
            <p className="inline-flex w-fit items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-sm font-semibold text-primary">
              Admin
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-medium">User Status</p>
          <div className="flex items-center space-x-2">
            <Switch
              checked={isActive}
              onCheckedChange={setIsActive}
              id="status"
            />
            <Label
              htmlFor="status"
              className={`text-sm font-semibold ${isActive ? "text-green-600" : "text-red-600"}`}
            >
              {" "}
              {isActive ? "Active" : "Inactive"}
            </Label>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserDetails;
