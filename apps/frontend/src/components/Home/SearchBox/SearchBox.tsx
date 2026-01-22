import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import type { TSelectItemValue } from "@/types/user.type";
import { selectItem } from "@/constant/user.constant";



interface SearchBoxProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedRole: TSelectItemValue;
  setSelectedRole: React.Dispatch<React.SetStateAction<TSelectItemValue>>;
}

const SearchBox = ({
  searchTerm,
  setSearchTerm,
  selectedRole,
  setSelectedRole,
}: SearchBoxProps) => {
  return (
    <div className="flex mt-20 gap-2">
      <InputGroup>
        <InputGroupInput
          placeholder="Search users... "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

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
