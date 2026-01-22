import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import useUserInfo from "@/hooks/useUserInfo";
import UserDetailsSkeleton from "@/components/Skeleton/userDetailsSkeleton";

const UserDetails = ({ selectedId }: { selectedId: string }) => {
  const { data: userInfo, isLoading } = useUserInfo(selectedId);
  const { name, email, role, active } = userInfo || {};
  const [isActive, setIsActive] = useState(active);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (selectedId) {
      setTimer(0);
      const interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [selectedId]);

  if (!selectedId) {
    return (
      <Card className="w-full flex justify-center items-center shadow-lg h-80">
        <CardContent className="py-12 text-muted-foreground text-center">
          Select a user to see details
        </CardContent>
      </Card>
    );
  }

  if (isLoading) {
    return <UserDetailsSkeleton />;
  }
  return (
    <Card className="w-full shadow-lg h-fit">
      <CardHeader>
        <CardTitle className="text-xl font-bold">User Details</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Complete information about the user
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Name</p>
            <p className="font-semibold">{name}</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Email</p>
            <p className="font-medium ">{email}</p>
          </div>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-muted-foreground">Role</p>
            <p className="inline-flex w-fit items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-sm font-semibold text-primary">
              {role}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full mt-4">
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
              {isActive ? "Active" : "Inactive"}
            </Label>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center items-center text-sm text-muted-foreground gap-2">
        <p>Viewing profile for </p>
        <p className="font-semibold text-primary">{timer} seconds</p>
      </CardFooter>
    </Card>
  );
};

export default UserDetails;
