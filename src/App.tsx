import { useState } from "react";
import { Grid, GridItem, Flex, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { Game, Platform } from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";
import usePlatforms from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  //const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  //const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //  null
  //);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // ~992px
      }}
      // lg: Aside 200px, main takes all space
      templateColumns={{
        base: "1fr",
        lg: "minmax(200px, auto) 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <GameHeading gameQuery={gameQuery} />
        <Flex marginBottom={4} marginTop={2}>
          <Box marginRight={4}>
            <PlatformSelector
              selectedPlatfrom={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
          </Box>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectedSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
