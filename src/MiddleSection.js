import React from 'react';
import './MiddleSection.css';
import Button from 'react-bootstrap/Button';
function MiddleSection() {
    return (
        <div className="section__3">
            <h1 className="section3__text">Activities | 26th Apr, 2020</h1>
            <hr />
            <Button variant="primary" className="section3__button">+ Schedule Activity</Button>
        </div>
    )
}

export default MiddleSection;