import React, {Component, useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid';
import BooksToDisplay from './BooksToDisplay';
// uuid()
import './styles/Home.scss'
// import './styles/BookApiCall.css'
// import './styles/BookToDisplay.css'


let Togoodreads = 'https://www.goodreads.com/book/show/'
let coverImage = 'http://covers.openlibrary.org/b/id/'

class BookAPICall extends Component {
constructor(props) {
        super(props)
        this.state = {
            error: null,
            bookData: null,
            toSearch: "",
            isLoaded: false,
            searchTerm:"",
            search:false,
           
        }
        // uuid().enableUniqueIds(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleChangeCheckBox = this.handleChangeCheckBox.bind(this)
    }
    
    handleChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]:value,
            
        })
       
        
        
    setTimeout(() => {
        if(value.length>=5){
            this.find(value)
           }
    },1000);    
        
}
handleChangeCheckBox(event){
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    this.setState({
        [name]:value,
        toSearch: "",

    })}
        find = searchTerm => {
            let authorB00k= this.state.search ? 'title' : 'author'
        const url = `http://openlibrary.org/search.json?${authorB00k}=${searchTerm}`
     
     fetch(url )
     
    .then(result => result.json())
    .then(data =>{
  //      console.log(url)
        this.setState({bookData: data.docs,
            isLoaded: true })
            // const IMAGE_URL = `http://covers.openlibrary.org/b/isbn/9782702124284-M.jpg`;
       
    })


      }

   componentDidMount() {
  this.find(this.state.searchTerm)
  
  if(this.state.toSearch.length<=5){
    this.setState({
        bookData: null
    })
}
    }      
   

    render() {
     console.log(this.state.bookData)
         
        const { error, isLoaded } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          
          
           let placeHolder = this.state.search ?"Search for a book title"  : "Search for an Author"
           let label1 = this.state.search ?'Alter your search to Authors' :  'Alter your search to books' 

          
        //   console.log(placeHolder)
        return (

            <>
           <div>
               <div className="buttonNning">
               
               <label htmlFor="author" id="label" className="container2">{label1}
            <div className="container">
                  <input 
                name = 'search'
                type = "checkbox"
                id="author"
                
                checked = {this.state.author}
                onChange = {this.handleChangeCheckBox}
                />
               <span className="checkmark"></span>
               </div>
               </label>
               </div>
               <input 
                name = "toSearch"
                type = "text"
               
                placeholder = {placeHolder}
                className="Searchterms"
                value = {this.state.toSearch}
                onChange = {this.handleChange}
                
                />
                
            { this.state.bookData.map(item => (


               item.cover_i ? 
          // <ul className="BooksToDisplay">
              <BooksToDisplay  id={uuid()} title={item.title} author_name={item.author_name}
                isbn={ item.isbn  ?item.isbn[0] : 'No ISBN'}
               subject = {item.subject ? item.subject[0]:'No Subject'}
               goodreads={ item.id_goodreads ? Togoodreads + item.id_goodreads[0] : '404'}
               readingLink = {item.key? item.key:null}
               img={  item.cover_i ? coverImage +item.cover_i +'-L.jpg': null } />
               
          //  </ul>
           :null 
         
           ))}
            </div>
        
                

                    </>
        )
    }
    }
        
    
}

export default BookAPICall;
