import React from 'react'

export default function Footer(props) {
    return (
        <footer className="footer">
            <h2 className="footer-heading">{props.title} TextUtils</h2>
            <p className="footer-text">TextUtils is an application which helps you to analyze your text quickly and efficiently.</p>
        </footer>
    )
}
