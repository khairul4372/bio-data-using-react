import React from 'react'

const Skills = (props) => {

    return (
        <>
            <h2>Programing Skills</h2>
            {props.data.map(value => {
               return <p key={Math.random()}>{value}</p>
            })}
        </>
    )
}
export default Skills;
