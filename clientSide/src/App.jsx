import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Profile from "./components/Profile";
import Header from "./components/Header";
import OAuth from "./components/OAuth";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./components/CreateListing";
import UpdateListing from "./components/UpdateListing";
import EditListingRedirect from "./components/EditListingRedirect";
import UpdateListingImages from "./components/UpdateListingImages";
import Listings from "./components/Listings";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/search" element={<SearchResults />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/create-listing" element={<CreateListing />}></Route>
          <Route
            path="/editListing/:id"
            element={<EditListingRedirect />}
          ></Route>
          <Route
            path="/update-listing-information/:id"
            element={<UpdateListing />}
          ></Route>
          <Route
            path="/update-listing-images/:id"
            element={<UpdateListingImages />}
          ></Route>
        </Route>
        <Route path="/oauth" element={<OAuth />}></Route>
        <Route path="/listing/:id" element={<Listings />}></Route>
      </Routes>
    </>
  );
}

export default App;
