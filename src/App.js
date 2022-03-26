import "./App.css";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Switch, Route } from "react-router-dom";
import Products from "./Products";
import Users from "./Users";
import Service from "./Service"; 
import CreateUser from "./CreateUser";
import Editusers from "./EditUser";
import { UserProvider } from "./UserContext";
import { ProductProvider } from "./ProductContext";
import { ContactProvider } from "./ContactContext";
import CreateProducts from "./CreateProducts";
import Editproducts from "./Editproducts";
import {Login} from "./login"
import {Error} from "./404error"
import Leads from "./Leads";
import Contact from "./Contact";

function App() {
  return (
    <div className="App wrapper">
      <Sidebar />
      <div className="content-wrapper d-flex flex-column">
        <div className="content">
          <Topbar />
          <Switch>
          <Route path="/leads" exact>
              <UserProvider>
                <Leads />
              </UserProvider>
            </Route>

            <Route path="/contact" exact>
              <ContactProvider>
                <Contact />
              </ContactProvider>
            </Route>

            <Route path="/service" exact>
              <UserProvider>
                <Service />
              </UserProvider>
            </Route>
            <Route path="/users" exact>
              <UserProvider>
                <Users />
              </UserProvider>
            </Route>

            <Route path="/products" exact>
              <ProductProvider>
                <Products />
              </ProductProvider>
            </Route>

            <Route exact path="/login">
              <Login/> 
       </Route>
       <Route exact path="/404">
              <Error/> 
       </Route>

            <Route path="/" component={Dashboard} exact />

            <Route path="/createuser" exact>
              <UserProvider>
                <CreateUser />
              </UserProvider>
            </Route>

            <Route path="/createproducts" exact>
              <ProductProvider>
                <CreateProducts />
              </ProductProvider>
            </Route>

            <>
              <UserProvider>
                <Route path="/users/edit/:id" component={Editusers}></Route>
              </UserProvider>

              <ProductProvider>
                <Route
                  path="/products/edit/:id"
                  component={Editproducts}
                ></Route>
              </ProductProvider>
            </>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;


