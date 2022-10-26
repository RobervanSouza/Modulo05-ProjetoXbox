

import { AppBar, CardActions, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";

import { favoritoContext } from "./FavoritoContext";
import { useContext } from "react";



import JogoItem from "components/JogoItem/JogoItem";

import { Jogos } from "components/TodosJogos/Interface";

type FavoriteScreenProps = {
  product: Jogos;
  onSelect: (data: Jogos) => void;
};
 const FavoriteScreen =  () => {
  const { favorites, setFavorites } = useContext(favoritoContext);
     const handleSelection = (product: Jogos) => {};
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="large"
          >
           
          </IconButton>
          <Typography variant="h6">Convites Favoritos</Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <div style={{ marginTop: `5rem` }}>
          <Grid container spacing={2}>
            {favorites?.map((products) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={products.name}>
                <JogoItem product={products} onSelect={handleSelection} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
};
 
export default FavoriteScreen;

/*<pre> {JSON.stringify(favorites.map((product) =>product.name ), undefined, 2)}</pre>*/

/* const category = () =>
 { const [ data, setData,] = useState(products); 
  const filterresultado = (catItem: string) =>{
     const resultado = products.filter((curData) => {
       return curData.name === catItem; }) } } 
*/


