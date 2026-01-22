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
import { Search, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TSelectItemValue, TSortOrder } from "@/types/user.type";
import { selectItem } from "@/constant/user.constant";

interface SearchBoxProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedRole: TSelectItemValue;
  setSelectedRole: React.Dispatch<React.SetStateAction<TSelectItemValue>>;
  sortOrder: TSortOrder;
  setSortOrder: React.Dispatch<React.SetStateAction<TSortOrder>>;
}

const SearchBox = ({
  searchTerm,
  setSearchTerm,
  selectedRole,
  setSelectedRole,
  sortOrder,
  setSortOrder,
}: SearchBoxProps) => {
  const toggleSort = () => {
    if (!sortOrder) {
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
    } else {
      setSortOrder(null);
    }
  };
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

      <Button
        variant="outline"
        size="default"
        onClick={toggleSort}
        className="gap-2"
      >
        <ArrowUpDown className="h-4 w-4" />
        Sort by Name
        {sortOrder && (
          <span className="text-xs">
            ({sortOrder === "asc" ? "A-Z" : "Z-A"})
          </span>
        )}
      </Button>
    </div>
  );
};

export default SearchBox;
