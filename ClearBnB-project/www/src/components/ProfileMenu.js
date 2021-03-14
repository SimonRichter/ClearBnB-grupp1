import React, { useContext, useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import '../style/ProfileMenu.css';
import { useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'



const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.black,
        backgroundColor: theme.palette.common.main
    },
  },
}))(MenuItem);



export default function CustomizedMenus(props) {
   const { whoAmI, logOut, whoIsOnline } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();

  useEffect(() => {
    whoIsOnline();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogOut = () => {
    logOut();
    history.push('/');
  }

  return (
    <div className="profileMenu">
      {whoAmI && <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
       
        onClick={handleClick}
      >
        <AccountCircleIcon
          color='secondary'
          fontSize="large"
        />
      </Button>}
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClick={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Host Residence" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => history.push('/myBookings')} >
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="My bookings" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => onLogOut()} >
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Log out" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
