import { IoSearch } from "react-icons/io5";
import Button from "@mui/material/Button";

const SearchBox = () => {
  return (
    <div className="d-flex align-items-center col-sm-10 part2">
      
      <div className="headerSearch ml-3 mr-3 ">
        <input type="text" placeholder="Search for products..." />
        <Button>
          <IoSearch />
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
