import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <header className="header">
            <span className="title">{props.title}</span> 
        </header>
    )
}
Navbar.propTypes = {title: PropTypes.string}