import React, { useEffect, useState } from 'react'
import './Book.css'
import background from '../../assets/images/red.jpg'
export default function Book(props) {
         
         const {thisbook} = props
 
         if (thisbook.imageLinks){
             return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div 
                            className="book-cover" 
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
                <div className="book book-white"
                    // style={{
                    //     backgroundImage: `url(${background})`,
                    //     width: 128, 
                    //     height: 193,
                    //     backgroundColor:"red"
                    // }}
                >
                    <h3>{thisbook.title}</h3>
                    <h3>{thisbook.author}</h3>
                
                    
                </div>
            </li>
        )
         }
         
        
}

