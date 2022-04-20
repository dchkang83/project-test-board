import * as React from 'react';
// import Box from '@mui/material/Box';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Header = () => {
  return (
    <header>
      <h1>Welcome</h1>
    </header>
  )
};

const Nav = () => {
  return (
    <nav style={{ border: '1px solid gray' }}>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  )
};

const Article = () => {
  const [open, setOpen] = React.useState(false);


  return (
    <article style={{ border: '1px solid gray' }}>
      <h2>Welcome</h2>
      Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!Hello web!
      <br />
      <ButtonGroup>
        <Button variant='outlined' onClick={() => {
          setOpen(true);
        }}>Create</Button>
        <Button variant='outlined'>Update</Button>
      </ButtonGroup>
      <Button variant='outlined'>Delete</Button>


      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hello Crete!
          </DialogContentText>
          <DialogActions>
            <Button variant='outlined'>Create</Button>
            <Button variant='outlined' onClick={() => {
              setOpen(false);
            }}>Cancel</Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </article>
  )
};

export default function FixedContainer() {
  return (
    <React.Fragment>
      <Container fixed>
        <Header></Header>
        <Grid container>
          <Grid item xs="2">
            <Nav></Nav>
          </Grid>
          <Grid item xs="10">
            <Article></Article>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
