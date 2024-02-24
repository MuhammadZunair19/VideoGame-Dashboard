import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";
import GameGrid from "./components/GameGrid";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'

      }}
    >
      <GridItem
        area="nav" >
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem
          area="aside" paddingX={5}>
          <GenreList selectedGenre={selectGenre} onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>

      <GridItem area="main" >
        <PlatformSelector selectedPlatform={selectedPlatform} onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectGenre} />
      </GridItem>
    </Grid>
  )
}

export default App;