import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <article key={person.login.uuid} className='person'>
            <img src={person.picture.medium} alt="..." />
            <div>
              <h4>{person.name.first + person.name.last}</h4>
              <p>{person.dob.age} years</p>
              <p>{`${new Date(person.dob.date).toDateString()}`}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;