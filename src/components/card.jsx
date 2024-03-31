function Card (person){
    return (
<div className="card">
    <p className="card__name">{person.person.name}</p>
    <img className="card__image" alt="person" src ={person.person.url}  />
    <div className="card__text">
        <p className="card__universe">Вселенная: {person.person.universe} </p>
        <p className="card__intellegence">Интеллект: {person.person.intellegence}</p>
        <p className="card__force">Сила: {person.person.force}</p>
        <p className="card__speed">Скорость: {person.person.speed}</p>
        <p className="card__skills">Навыки: {person.person.skills}</p>
    </div>
</div>
    );
}
export default Card;
