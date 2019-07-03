import React from 'react';
import { Query } from 'react-apollo';
import { Navbar, NavbarBrand } from 'reactstrap';
import { loader } from 'graphql.macro';
import RecipesList from 'RecipesList';
// import { ApolloQueryResult } from 'apollo-boost';

const getRecipes = loader('queries/recipes/getRecipes.gql');

const App = () => (
  <div>
    <Navbar color="dark" dark expand="md" fixed="top" className="justify-content-center">
      <NavbarBrand>
        <span role="img" aria-label="Chef Female">
          👩‍🍳
        </span>{' '}
        Ricettario{' '}
        <span role="img" aria-label="Chef Male">
          👨🏻‍🍳
        </span>
      </NavbarBrand>
    </Navbar>
    <div className="container main">
      <Query query={getRecipes}>
        {({ loading, error, data }: any) => (
          <div>
            {loading && <div>Loading...</div>}
            {error && <div>Failed to load...</div>}
            {!loading && !error && <RecipesList recipes={data.recipes} />}
          </div>
        )}
      </Query>
    </div>
  </div>
);

export default App;
