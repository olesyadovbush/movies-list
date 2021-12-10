import { useEffect, useState } from "react";
import "./List.scss";
import Card from "../card";

interface IMovies {
  title: string;
  episode_id: number;
}

interface IList {
  onReceiveTitle?: (name: string) => void;
  favoriteItem?: string,
  getFavorite: (name: string) => void;
}

const List = ({ onReceiveTitle, favoriteItem }: IList) => {
  
  const [movies, setMovies] = useState<IMovies[]>([]);
  const [favorite, setFavorite] = useState(localStorage.getItem("movieItem")?.toString());

  useEffect(() => {
    fetch(`https://swapi.dev/api/films`, { method: "GET" })
      .then((res) => res.json())
      .then((response) => {
        setMovies(response.results);
      })
      .catch((error) => console.log(error));
      const favoriteItem = localStorage.getItem("movieName");
      console.log(3, favoriteItem);
        if(favoriteItem) {
          setFavorite(favoriteItem);
        }
  }, [setMovies, favorite]);

  return (
    <div className="card-block">
      {(movies || []).map((el) => (
        <Card
          isFavoriteButton={false}
          key={el.episode_id}
          name={el.title}
          getFavorite={name => console.log(6, name)}
          favoriteItem={favoriteItem}
          onReceiveName={name => onReceiveTitle && onReceiveTitle(name)}
        />
      ))}
    </div>
  );
};
export default List;
