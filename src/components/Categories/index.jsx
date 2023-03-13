import React from 'react'
import './Categories.scss'
import {Link} from "react-router-dom"
const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/5872300/pexels-photo-5872300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src='https://images.pexels.com/photos/974885/pexels-photo-974885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Woman</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                    <img src='https://images.pexels.com/photos/6102153/pexels-photo-6102153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
                <button>
                    <Link className='link' to="/products/1">New Season</Link>
                </button>
                    </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                <div className="row">
            <img src='https://images.pexels.com/photos/6956826/pexels-photo-6956826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Men</Link>
                </button>
            </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src='https://images.pexels.com/photos/3794119/pexels-photo-3794119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Accessories</Link>
                </button>
                    </div>
                </div>
            </div>
            <div className="row">
            <img src='https://images.pexels.com/photos/2830912/pexels-photo-2830912.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <button>
                    <Link className='link' to="/products/1">Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories