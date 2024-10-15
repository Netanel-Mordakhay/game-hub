import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import mushroomLogo from "../assets/mushroomLogo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (search: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={mushroomLogo} boxSize="60px" padding={1} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
