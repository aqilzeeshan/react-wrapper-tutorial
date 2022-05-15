import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import AnimalDetails from '../AnimalDetails/AnimalDetails';

//destructuring the props in the parameter list for the AnimalCard function, then displaying the data in a div
/*
Up till now, you’ve passed all props as if they were HTML attributes, 
but you can also use objects to send props. To use an object as a prop, 
you need to use the spread operator—...props—surrounded with curly braces. 
This will change each key-value pair into a prop.
*/
/*
 remove diet from the destructured object and instead collect the rest of the props into 
 a variable called props. Then pass those props directly to AnimalDetails:
*/
export default function AnimalCard({ name, size, ...props }) {
  return(
    <Card 
        title="Animal" 
        details={
            <AnimalDetails
                {...props}
            />
        }
    >
      <h3>{name}</h3>
      <div>{size}kg</div>
      
    </Card>
  )
}

//Notice that you can remove the diet PropType since you are not using the prop in this component.
AnimalCard.propTypes = {
  //diet: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
}