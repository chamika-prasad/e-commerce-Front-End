import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import zoom from "./zoom.png";
import './SearchBar.css';

export default function SearchBar() {

    const [searchName,setSearchnName] = useState("");
    const navigate = useNavigate();

    const searchProduct = (e:any) => {

        e.preventDefault()

        navigate(`/SearchProduct/${searchName}`);
    }

  return (
    <div>

        <form method='post' onSubmit={(e) => searchProduct(e)}>
            <div className="d-flex flex-row-reverse">
                <div className="">             
                    <button className="btn btn-outline-success search" type="submit">
                        <img className="icon" src={zoom}  alt=""/>
                    </button>
                </div>
                <div className="p-2">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={searchName} onChange={(e) => setSearchnName(e.target.value)}/>
                </div>
            </div>
        </form>

    </div>
  )
}
