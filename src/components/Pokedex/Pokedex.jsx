import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Pokecard from "../Pokecard/Pokecard";

const Pokedex = () => {
  let pokeList = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];
  return (
    <>
      <Container>
        <h1>Pokedex</h1>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {pokeList.map((pokemon) => (
              <Grid size={3} key={pokemon.id}>
                <Pokecard
                  id={pokemon.id}
                  name={pokemon.name}
                  type={pokemon.type}
                  exp={pokemon.base_experience}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Pokedex;
