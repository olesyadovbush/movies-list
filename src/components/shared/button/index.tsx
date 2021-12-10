import "./Button.scss";

interface IButtonProps {
  text: string;
  name?: string;
  action?: (name: string) => void;
  style?: object;
}

interface IEvent {
  currentTarget: ITarget;
}

interface ITarget {
  name: string;
}

const Button = ({ name, text, action, style }: IButtonProps) => {
  return (
    <button
      name={name}
      className="button"
      onClick={(e: IEvent) => action && action(e.currentTarget.name)}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
