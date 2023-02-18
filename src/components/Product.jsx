import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DATA from '../Data'
import ReactPaginate from 'react-paginate';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SortIcon from '@mui/icons-material/Sort';

Product.propTypes = {

};

function Product(props) {
    const [products, setProducts] = useState(DATA.slice(0, 60));
    const [pageNumber, setPageNumber] = useState(0)
    const [wordEntered, setWordEntered] = useState('')

    const itemsPerPage = 12
    const pagesVisited = pageNumber * itemsPerPage

    const displayProducts = products.slice(pagesVisited, pagesVisited + itemsPerPage).map((item) => {
        return (
            <div key={item.id} className="col">
                <div className="card my-5 mx-auto">
                    <Link to={`/products/${item.id}`}>
                        <img src={item.img} className="card-img-top" alt={item.title} height='320px' />
                    </Link>
                    <div className="card-body text-center ">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">${item.price}</p>
                        <Link to={`/products/${item.id}`} className="btn btn-outline-warning">Buy now</Link>
                    </div>
                </div>
            </div>
        )
    })

    const pageCount = Math.ceil(products.length / itemsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const handleFilter = (e) => {
        const searchWord = e.target.value
        setWordEntered(searchWord)
        const newFilter = DATA.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase())
        })
        setProducts(newFilter)
    }

    const clearInput = () => {
        setWordEntered('')
        setProducts(DATA.slice(0, 60))
    }

    const sortByLowPrice = () => {
        const sorted = products.slice().sort((a, b) => a.price - b.price)
        setProducts(sorted)
    }
    const sortByHighPrice = () => {
        const sorted = products.slice().sort((a, b) => b.price - a.price)
        setProducts(sorted)
    }
    return (
        <div className='container'>
            <div className="search">

                <div className="searchInputs">
                    <input type="text" placeholder="Find something" value={wordEntered} onChange={handleFilter} />
                    <div className='searchIcon'>
                        {wordEntered === "" ? <SearchIcon /> : <CloseIcon id="clearBtn" onClick={clearInput} />}
                    </div>
                    <button className='sortByPriceBtn' onClick={sortByLowPrice}>
                        1-9<SortIcon />
                    </button>
                    <button className='sortByPriceBtn' onClick={sortByHighPrice}>
                        9-1<SortIcon />
                    </button>
                </div>
            </div>
            <div className="row">
                {displayProducts}
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBtn"}
                    previousLinkClassName={"prevBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </div>
        </div>
    );
}

export default Product;