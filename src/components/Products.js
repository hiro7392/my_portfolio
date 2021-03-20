
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//const Products:React.FC=()=>
const Products=()=>{



    return (
      <div className="aboutMyself">

      <h1 className="about_title">作成者</h1>
      <div classNmae="profile_content">
          <p>広島大学 工学部二類　4年</p>
          <p>川原大宙</p>
          <div className="English">
        <h3>Hiroshima University</h3>
        <p>Electrical Engineering and System Control Course</p>
        </div>
        
        
        
        </div>
        <BrowserRouter>
      <div className="links">            
      <a className="btn github links" href="https://github.com/fish0504"><FontAwesomeIcon icon={['fab','github']}/></a>
      <a className="btn twitter links" href="https://twitter.com/fish0504_"><FontAwesomeIcon icon={['fab','twitter']}/></a>
      <a className="btn AtCoder links" href="https://atcoder.jp/users/fish0504"><FontAwesomeIcon icon={['fas','chess-knight']}/></a>
      </div>
        </BrowserRouter>
      </div>
      

    );
  }



export default Products;
