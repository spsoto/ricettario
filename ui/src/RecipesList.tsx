import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const RecipesList = ({ recipes }: any) => (
  <ListGroup>
    {recipes.map((recipe: any, i: number) => (
      <ListGroupItem key={i} tag="a" href={`/recipes/${recipe.id}`}>
        {recipe.title}
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default RecipesList;
