import Button from "../../shared/button";
import "./Card.scss";

interface ICardProps {
  name: string;
  isFavoriteButton: boolean;
  onReceiveName?: (name: string) => void;
  favoriteItem?: string;
  getFavorite: (name: string) => void;
}

const Card = ({
  name,
  isFavoriteButton,
  onReceiveName,
  favoriteItem,
  getFavorite,
}: ICardProps) => {
  const saveFavoriteName = (text: string) => {
    getFavorite(text);
    localStorage.setItem("movieName", name);
  };

  return (
    <div
      className="card"
      onClick={() => (onReceiveName ? onReceiveName(name) : null)}
    >
      <div className="card__description">
        <h3>{name}</h3>
        {isFavoriteButton && (
          <Button
            style={{ width: "130px", height: "40px" }}
            text={"Select Favorite"}
            name={name}
            action={(text: string) => saveFavoriteName(text)}
          />
        )}
        {name === favoriteItem && (
          <Button
            style={{ width: "130px", height: "40px" }}
            text={"Favorite"}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
