import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const selectItem = [
  { value: "all", label: "All" },
  { value: "admin", label: "Admin" },
  { value: "editor", label: "Editor" },
  { value: "viewer", label: "Viewer" },
];

type TSelectItemValue = typeof selectItem[number]["value"];

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<TSelectItemValue>("all");

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      console.log({ searchTerm, selectedRole });
    }, 400);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, selectedRole]);

  return (
    <div className="flex mt-20 gap-2">
      <Input
        placeholder="Search users... "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Select value={selectedRole} onValueChange={setSelectedRole}>
        <SelectTrigger className="w-24">
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="popper">
          <SelectGroup>
            <SelectLabel>Role</SelectLabel>
            {selectItem.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SearchBox;
