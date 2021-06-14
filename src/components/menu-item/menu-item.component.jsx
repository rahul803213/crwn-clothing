import React from 'react';
import "./menu-item.styles.scss";

export const MenuItem= ({title,imageUrl,size}) => (
    <div className={`${size} menu-item` }>
<div style={{backgroundImage:`url(${imageUrl})`}} className="background-img" > </div>
                    <div className="content" >
                        <h1 className="title">{title}</h1>
                        <span className="subtitle">shop now</span>
                    </div>
               
                </div>
)