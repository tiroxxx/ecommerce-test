import { ShoppingCart } from '@material-ui/icons';
import {
  AppBar,
  Tollbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Toolbar,
} from '@material-ui/core';

export default function Navbar() {
  return (
  <>
    <AppBar position="fix" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography>
            <img src={} alt="Commerce.js" height="25px"  className={classes.image}/>
        </Typography>
      </Toolbar>
    </AppBar>
  </>
  )
}
