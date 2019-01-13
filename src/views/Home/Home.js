import React from 'react';
import {
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({
  categories
}) => ( < section className = "showcase" >
  <
  div className = "home" >
  <
  h1 className = "homeContent" > Choose a Category < /h1></div >

  {
    categories.length > 0 && ( < section className = "container" >
      <
      div className = "linkContent" >
      <
      ul className = "items" >

      {
        categories.map(category => ( < li className = "itemsLinnk" >
          <
          Link className = "link"
          to = {
            `/categories/${category.id}`
          }
          key = {
            category.id
          } > {
            category.title
          } < /Link> </li >
        ))
      }

      <
      /ul> </div >


      <
      /section>
    )
  } < /section>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    }),
  ),
}

export default Home;