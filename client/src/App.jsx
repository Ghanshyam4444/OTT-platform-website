import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Navbar } from './components/navbar';
import {Login} from './pages/login';
import { Register } from './pages/register';
import { Footer } from './components/footer';
import { Search } from './pages/search';
import Category from './pages/Category';
import { About } from './pages/about';
import { Contact } from './pages/ContactUs';
import { MySpace } from './pages/mySpace';
import { Logout } from './pages/logout';
import { Error } from './pages/error';
import { AdminLayout } from './components/Layout/admin_layout';
import { AdminUser } from './pages/admin_user';
import { AddMovies } from './pages/add_movies';
import { AdminContact } from './pages/admin_contact';
import { AddWebSeries } from './pages/add_web_series';
import { AdminUpdate } from './pages/admin_update';
import { SeeFullMessage } from './pages/see_ful_message';
import { ShowMovie } from './pages/show_movie';
import { SeeMovies } from './pages/seeallmovies';
import { SeeWebSeries } from './pages/seeallwebseries';
import { EditMovies } from './pages/editMovies';
import { EditWebSeries } from './pages/editwebseries';
import { ShowWebSeries } from './pages/show_web_series';
import { MovieType } from './pages/movie_type';
import { WebSeriesType } from './pages/web_series_type';
import { Subscriber_Plan } from './pages/subscriber_plan';
const App = () => {
  return <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show_movie/:id" element={<ShowMovie />} />
        <Route path="/show_webseries/:id" element={<ShowWebSeries />} />
        <Route path="/subscriber_plans/:id" element={<Subscriber_Plan />} />
        <Route path="/category/movie_type/:type" element={<MovieType />} />
        <Route path="/category/webseries_type/:type" element={<WebSeriesType />} />
        <Route path="/login" element={<Login />} />
        <Route path='/logout' element={<Logout />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/myspace' element={<MySpace/>}/>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path="adminuser" element={<AdminUser/>}/>
          <Route path="adminuser/:id/edit" element={<AdminUpdate/>}/>
          <Route path="admincontact" element={<AdminContact/>}/>
          <Route path="adminContact/:id/edit" element={<SeeFullMessage/>}/>
          <Route path="addmovies" element={<AddMovies/>}/>
          <Route path="addWebSeries" element={<AddWebSeries/>}/>
          <Route path="seeallmovies" element={<SeeMovies/>}/>
          <Route path="seeallmovies/:id/edit" element={<EditMovies/>}/>
          <Route path="seeallwebseries" element={<SeeWebSeries/>}/>
          <Route path="seeallwebseries/:id/edit" element={<EditWebSeries/>}/>
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>

  </>
}
export default App;