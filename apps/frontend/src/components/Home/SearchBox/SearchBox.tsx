import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBox = () => {
    return (
        <div className="flex mt-20 gap-2">
            <Input placeholder="Search users... " className="w-1/2 mb-4" />
            <Button variant="default">Search</Button>
        </div>
    );
};

export default SearchBox;