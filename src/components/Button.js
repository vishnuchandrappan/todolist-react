import React from 'react'

export default function Button(props) {
    return (
        <button className={"btn-"+props.type}>{props.title}</button>
    )
}
