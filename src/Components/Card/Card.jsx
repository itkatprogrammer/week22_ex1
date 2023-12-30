import "./Card.scss";

export default function Card(props) {
  return (
    <div className="card">
      <div>
        <h1>Супергерой: {props.name}</h1>
        <h2>Вселенная: {props.universe}</h2>
        <h2>Имя в обычной жизни: {props.alterego}</h2>
        <h3>Назначение: {props.occupation}</h3>
        <h3>Суперспособности: {props.superpowers}</h3>
        <h3>Друзья: {props.friends}</h3>
        <h4>Характеристика: {props.info}</h4>
        <img src={props.url} alt="изображение супергероя" />
      </div>
    </div>
  );
}
