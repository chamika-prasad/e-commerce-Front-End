import React from 'react'
import zoom from "./../assets/images/zoom.png";
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div>

        <div className=''></div>

        <form action="">
            <div className="d-flex flex-row-reverse">
                <div className="">             
                    <button className="btn btn-outline-success search" type="submit">
                        <img className="icon" src={zoom}  alt=""/>
                    </button>
                </div>
                <div className="p-2">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </div>
            </div>
        </form>

    </div>
  )
}
