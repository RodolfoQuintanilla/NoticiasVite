import { Container, Grid, Typography } from '@mui/material';
import { fontSize } from '@mui/system';
import Formulario from './components/Formulario';
import ListadoNoticas from './components/ListadoNoticas';
import { NoticiasProvider } from './context/NotificasionProvider';



function App() {

  return (

    <NoticiasProvider>

      <Container >
        <header>
          <Typography align='center' marginY={5} component="h1"
            variant='h3'
          >
            Buscador de noticias
          </Typography>
        </header>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Formulario />
          </Grid>
        </Grid>

        <ListadoNoticas />

      </Container>

    </NoticiasProvider>
  )
}

export default App
