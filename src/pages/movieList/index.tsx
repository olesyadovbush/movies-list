import "./List.scss";
import { useState, lazy, Suspense } from "react";
import Card from "../../components/movie/card";
const List = lazy(() => import('../../components/movie/list'));

const MovieList = () => {
  const [selectedName, setSelectedName] = useState<string>('');
  const [favoriteItem, setFavoriteItem] = useState(localStorage.getItem("movieName")?.toString());
 
  return (
    <>
      <section className="movies">
        <div className="movies__wrapper">
          <Suspense fallback={<div>Still Loading…</div>}>
            <List getFavorite={() => {}} onReceiveTitle={name => setSelectedName(name)} favoriteItem={favoriteItem}/>
          </Suspense>
        </div>
        <div className="movies__item">
          <Card getFavorite={name => setFavoriteItem(name)}  favoriteItem={favoriteItem} name={selectedName || "Your movie"} isFavoriteButton={true} onReceiveName={()=> {}}/>
        </div>
      </section>
    </>
  );
}

export default MovieList;