import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/shared/header/Header";
import MovieList from "../pages/movieList";

const RoutesList = (): JSX.Element => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList />} />
      </Routes>
    </Router>
  )
}

export default RoutesList;