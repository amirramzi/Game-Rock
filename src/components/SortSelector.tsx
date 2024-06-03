import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { id: 1, value: "", lable: "Relevance" },
    { id: 2, value: "-added", lable: "Data Added" },
    { id: 3, value: "-name", lable: "Name" },
    { id: 4, value: "-released", lable: "Release Date" },
    { id: 5, value: "-metacritic", lable: "Popularity" },
    { id: 6, value: "-rating", lable: "Average Rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : {currentSortOrder?.lable || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrders.map((sort) => (
          <MenuItem
            key={sort.id}
            value={sort.value}
            onClick={() => onSelectSortOrder(sort.value)}>
            {sort.lable}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
