import React from 'react';
import '../css/Header.css';

class Header extends React.Component {
    render () {
        return (
            <>
                <div className='header mb-4'>
                    <div class="header-top-section">
                        <span className="about-details-span">{this.props.title}</span>
                        <div className="hr m-3"></div>
                    </div>
                    <p className="mt-2 px-5">{this.props.description}</p>
                </div>
            </>
        );
    }
}

export default Header;