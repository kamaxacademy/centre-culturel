import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios'
import { Button } from '@material-ui/core';
var multiIsbn = require("multi-isbn")

// const isbn = require('node-isbn');
 
//isbn.resolve('2090386851', function (err, book) {
//     if (err) {
//         console.log('Book not found', err);
//     } else {
//         console.log('Book found %j', book);
//     }
// });

const BarcodeSearch = ()=>{
    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('');
    const [search, setSearch] =useState('');
    //9780156013987

    useEffect(() => { 

    

        multiIsbn.init()
        const fetchData = async () => {
      
          multiIsbn.find(search, function(err, data) {
            if (err) throw err
                
            setData(data)
            })
         
        };
       
        fetchData();
      }, [search]);
 
      
    return (
        <Fragment>
            <h1>BarcodeSearch Component</h1>
            <input 
            type='text'
            value ={query}
            onChange ={event =>setQuery(event.target.value)}
            />
            <Button type='button' onClick={()=>setSearch(query)}>
                Search
            </Button>

        <ul>
            {
               data.data && data.data.length && <ul>
                        {data.data.map(item=>
                          <li key={item.title}>
                          <a href={item.publisher}>{item.title}</a>
                        </li>
                         ) }
                </ul>
                //data,
            //  console.log(data.data.length),
            //   data.length && console.log(data.data.length)

            //   {
            //     data.data.forEach(element => {
            //         console.log(element)
            //     )}
              
            }
        </ul>
       {/* <ul>
        {
        ok = data.data[0],
        
        ok.map(item => (
          <li key={item.title}>
            <a href={item.publisher}>{item.title}</a>
          </li>
        ))}
      </ul> */}

        </Fragment>
    )
}

export default BarcodeSearch;