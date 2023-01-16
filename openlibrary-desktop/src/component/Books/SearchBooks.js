import React, { useState,useEffect } from 'react';
import '../../Pages/styles/Home.scss'
import Books from './Books';
const SearchBooks = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState(null)
    const [bookData, setbookData] = useState(null)
    const [toSearch, settoSearch] = useState('')
    const [isLoaded, setisLoaded] = useState(false)
    const [searchTerm, setissearchTerm] = useState("")
    // const [search, setsearch] = useState(false)

    
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

  {/* useEffect calls function every time page loads and anytime [useState] occurs */}
  useEffect(() =>{
    getBooks();
  }, [query]);

 {/* Function that sends API request */}
  const getBooks = async() => {
    {/* Always add await when getting response from a promise */}
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await response.json();
  
    setBooks(data.docs);

    console.log('new stuff', data.docs)
  };

    {/* Send search to API only when you click the search button */}
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    {/* Set search back to empty string */}
    setSearch('');
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }
 {/* Set search back to empty string */}

    const handleChange=(event)=>{
  
    const value = event.target.value
         settoSearch(value)

          setTimeout(() => {
        if(value.length>=5){
            find(value)
           }
    },1000); 
    }

const handleChangeCheckBox=(event)=>{
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    settoSearch({
        [name]:value,
        toSearch: "",

    })

    
} 
const find = searchTerm => {
            let authorB00k= search ? 'title' : 'author'
        const url = `http://openlibrary.org/search.json?${authorB00k}=${searchTerm}`
     
     fetch(url )
     
    .then(result => result.json())
    .then(data =>{
  //      console.log(url)
      setbookData({bookData: data.docs,
            isLoaded: true })
    })
   
      }





    let placeHolder = search ?"Search for a book title"  : "Search for an Author"
    let label1 = search ?'Alter your search to Authors' :  'Alter your search to books' 
    
    let coverImage = 'http://covers.openlibrary.org/b/id/'
    return (
        console.log(bookData),
        <>
{/*          
               <label htmlFor="author" id="label" className="container2">{label1}
            <div className="container">
                  <input 
                name = 'search'
                type = "checkbox"
                id="author"
                
                // checked = {this.state.author}
                onChange = {handleChangeCheckBox}
                />
               <span className="checkmark"></span>
               </div>
               </label>

                  <input 
                name = "toSearch"
                type = "text"
               
                placeholder = {placeHolder}
                className="Searchterms"
                value = {toSearch}
                onChange = {handleChange}
                
                /> */}

            <form action="" onSubmit={getSearch}>
                  <label htmlFor="author" id="label" className="container2">
                      Search for a specifi book
                  </label>

                   <input 
                name = 'search'
                type = "text"
                id="author"
                value={search}
                onChange = {updateSearch}
                />
            </form>
                  <div className='Home__bookshelf'>
                    <div className='Home__list-books-content'>
                   
                {
                    //console.log('okay bookdata', bookData),
                    books.length ? books.map((book, idx) =>(
                        <Books 
                        key={idx}
                        title={book.title}
                        author={book.author_name}
                        image = {book.isbn}
                        cover_image = { book.cover_i ? coverImage +book.cover_i +'-M.jpg': null}
                      
                         />
                    )
                    ) : <h1>No Book</h1>
                    
                     }  
                 </div>
                  </div>

        </>
    );
}

export default SearchBooks;
