import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useHistory } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const history = useHistory();

  const [openthree, setOpenthree] = useState(false);

  const handleClickthree = () => {
    setOpenthree(!openthree);
  };
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          ADMIN
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <h3 className="sidebar-heading text-uppercase">Informations</h3>

      <li className="nav-item">
        <Link className="nav-link" to="/leads">
          <i className="fas fa-fw fa-user"></i>
          <span>Leads</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          <i className="fas fa-fw fa-user"></i>
          <span>Contact</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/service">
          <i className="fas fa-fw fa-user"></i>
          <span>Service-Request</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/users">
          <i className="fas fa-fw fa-user"></i>
          <span>Users</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/products">
          <i className="fas fa-fw fa-mobile"></i>
          <span>Products</span>
        </Link>
      </li>
      <List>
        <ListItemButton onClick={handleClickthree}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText className="pagetext" primary="Pages" />
          {openthree ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse
          className="custombtns"
          in={openthree}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <ListSubheader component="div" id="nested-list-subheader">
              Login screens
            </ListSubheader>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                className="buttons"
                onClick={() => history.push("/login")}
                primary="Login"
              />
            </ListItemButton>
            <ListSubheader component="div" id="nested-list-subheader">
              Other pages
            </ListSubheader>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                className="buttons"
                onClick={() => history.push("/404")}
                primary="404 page"
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <hr className="sidebar-divider" />
    </ul>
  );
}