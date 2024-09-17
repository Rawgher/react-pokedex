import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const Pokecard = (props) => {
  let { id, name, type, exp } = props;
  return (
    <Card>
      <CardContent>
        <h2>{name}</h2>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <p>Type: {type}</p>
        <p>EXP: {exp}</p>
      </CardContent>
    </Card>
  );
};

export default Pokecard;
