import React, { useState, useEffect } from 'react';
import {Navbar, NavbarText} from 'reactstrap'; 
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Login from '../Login/Login'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {checkUser} from '../../Redux/Actions/auth'
import Sell from './Sell.js';
import Signin from './Signin';
import { getAllProducts } from "../../Redux/Actions/Product";
import {useHistory} from 'react-router-dom'

function Header(props) {

const {checkUser, getAllProducts} = props
const history = useHistory()

useEffect(() => {
  checkUser()
  getAllProducts()
}, [])

  const [isOpen, setIsOpen] = useState(false);
  const [searchField, setSearchField] = useState('');

  const toggle = () => setIsOpen(!isOpen);

  const searchProduct = () => {
    if(searchField !== ''){
      history.push(`/search/${searchField}`)}
    }

    return (
    <>
      <Login toggle={toggle} modal={isOpen} />
      <Navbar color="light" light fixed='true' className='headerNavbar'>
        <div className="container-fluid ContainerFluid">
          <div className="row w-100 rowParent">
            <div className="col-lg-4 col-md-3 col-sm-2 d-flex logoParent">
              <Link to="/" className='ml-3 mt-4 navbar-brand'>
                <h3>💫 Book Seva</h3>
              </Link>
              {/* <div className='header__category'>
                <FontAwesomeIcon icon={faSearch} size="lg" className='searchIcon' />
                <input type='text' className='inputCategory' defaultValue='Karachi Sindh' />
                <FontAwesomeIcon icon={faChevronDown} size="lg" className='header__caretDown' />
              </div> */}
            </div>
            <div className="col-lg-6 header__searchParent">
              <div className='header__search'>
                <input type='text' className='inputSearch' onChange={(e) => setSearchField(e.target.value)}  placeholder='Find Books' />
                <span className='header__searchParent' onClick={()=> searchProduct() }><FontAwesomeIcon icon={faSearch} size="lg" className='header__searchBtn' /></span>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3">
            {Object.keys(props.currentUser).length > 0 ? <Signin /> : <div className='d-flex'><span className='header__login' onClick={toggle}>Login</span>
             <Sell toggle={toggle} modal={isOpen} />
             </div>}
            </div>
            <NavbarText>
            </NavbarText>
          </div>
        </div>
      </Navbar>
    </>
  )
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkUser: () => dispatch(checkUser()),
    getAllProducts: () => dispatch(getAllProducts()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)

