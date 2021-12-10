import "./InformComponent.scss";

interface IInformProps {
  title?: string,
  text?: string | number
}

const InformComponent = ({title, text} : IInformProps) => {
  return (
    <div className="inform-component">
      <span className="inform-component--bold">{title}: </span>
    <span>{text}</span>
  </div>
  )
}
export default InformComponent;