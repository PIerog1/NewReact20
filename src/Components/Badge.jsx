import React from 'react';
import './Badge.scss';

function Badge({variant, icon, text}) {
    return (
        <span className={`badge badge-${variant}`}>
        <span className="badge-icon">{icon}</span>
        <span className="badge-text">{text}</span>
        </span>
        
    );
}
export default Badge;