import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Card from '../component/Card'
import {listBooks} from '../redux/actions/bookActions'


import './styles/Home.scss'

let openlibrary = 'https://openlibrary.org'
let coverImage = 'http://covers.openlibrary.org/b/id/'
let Togoodreads = 'https://www.goodreads.com/book/show/'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
   
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    spacing:4,
    display: 'flex',
   
  
  },

  grid:{
       display: 'flex',
  }
}));


const Home = () => {

  const classes = useStyles();
  const [state, setState] = useState({
            error: null,
            bookData: null,
            toSearch: "",
            isLoaded: false,
            searchTerm:"",
            search:false,
  });
  const dispatch = useDispatch();
  const bookList = useSelector(state=>state.bookList);
  console.log('debug from Home', bookList);
  const {loading, books} = bookList;

  useEffect(() => {
    dispatch(listBooks({}))
    return () => {
      //cleanup
    };
  }, [dispatch]);

 const findBooks= ()=>{
   

  const authorBook = 'title'
 const searchTerm = 'Albert Jacquard'
  fetch(`http://openlibrary.org/search.json?${authorBook}=${searchTerm}`)
  .then (result =>
    result.json())
  .then((data=>{
    console.log(data.docs)
  }))

 }

 findBooks();
    return (
      <>
          {/* <div className='Home__bookshelf'>
            <div className='Home__list-books-content'>
                    <div className='Home_book Home_book-white'>
                      
                    </div>

                     
            </div>
        </div> */}

        <div className={classes.root}>
      <Grid container spacing={3}>
   {books ? books.map(item =>  
       
        <Grid item xs={3}>
      
             <Paper elevation={20} className={classes.paper}>

         
            <Grid item xs={12} className={classes.grid}>
                <Card title={item.title} author ={item.author}/>
               <h3>{item.title}</h3>
            </Grid>
            
            </Paper>
            
            </Grid>
            ) : <h1>No books</h1>
          }

          
        
       
      </Grid>
    </div>

      </>
    );
}

export default Home;
