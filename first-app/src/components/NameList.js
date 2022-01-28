import React from 'react';
import Person from './Person';

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana'];
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React',
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular',
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue',
        },
    ];

    const personList = persons.map((person) => (
        <Person key={person.id} person={person}></Person>
    ));
    // return <div>{personList}</div>;

    const nameList = names.map((name, idx) => (
        <h2 key={idx}>
            {idx} {name}
        </h2>
    ));
    return <div>{nameList}</div>;

    // return (
    //     <div>
    //         {/* <h1>{names[0]}</h1>
    //         <h1>{names[1]}</h1>
    //         <h1>{names[2]}</h1> */}
    //         {nameList}
    //     </div>
    // );
}

export default NameList;
