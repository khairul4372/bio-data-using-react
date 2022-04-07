import React from 'react'

export default function Reference(props) {


    return (
        <>
            <h2>Reference</h2>
            {props.data.map((value) => {
                return  <div key={Math.random()}>
                    <h3>{value.name}</h3>
                    <p>{value.position}</p>
                    <p>{value.workplace} </p>
                    <p>{value.email}</p>
                    <p>{value.phone}</p>
                </div>
            })}
        </>
    )
}
