import React, { useEffect, useState } from 'react'
import './Book.css'

export default function Book(props) {
         
         const {thisbook} = props
        // console.log('thisbook',thisbook)
         if (thisbook.imageLinks){
             return (
                <li>
                <div className="book">
                    <div className="book-top">
                        <div 
                            className="book-cover" 
                            // style={{ 
                            //     width: 128, 
                            //     height: 193, 
                            //     // backgroundImage: `url(${thisbook.imageLinks.thumbnail})`,
                            //     backgroundSize: 'cover',
                            //     backgroundPosition: 'center'
                            // }}
                        >
                                
                        </div>
                       
                    </div>
                    <div className="book-title">{thisbook.title}</div>
                    <div className="book-authors">{thisbook.author ? thisbook.author.toString() : 'Nothing!'}</div>
                </div>
            </li>
             )
         } else {
             return (
                <li>
                <div className="book">
                    <div className="book-title">{thisbook.title}</div>
                    <div className="book-top">
                        <div 
                            className="book-cover" 
                            style={{ 
                                width: 128, 
                                height: 193, 
                                backgroundImage: `url(https://ibf.org/site_assets/img/placeholder-book-cover-default.png)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                                
                        </div>
                       
                    </div>
                    
                    <div className="book-authors">{thisbook.author ? thisbook.author.toString() : 'Nothing!'}</div>
                </div>
            </li>
        )
         }
         
        
}

