import { person } from "../info/person";
import Card from "./card";

function Cards (){
return (
<section id="container">
{
                person.map((person, index) => {
                    return (
                        < Card person = {person} key = {index} />
                    )                
                })
            }
</section>
);
}

export default Cards;
