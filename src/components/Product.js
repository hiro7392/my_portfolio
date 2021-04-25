import React from 'react';
//import Hackson_log from './Hackson_log.png';
const Product=()=>{


    return (
        <div className="product">


        <h1 className="Product-title">作ったもの</h1>
        <p>2021年3月20日~21日開催のサポーターズ主催のハッカソンで</p>
        <p>個人開発で習慣を記録するアプリを開発しました。</p>
        <img src={`${process.env.PUBLIC_URL}/Hackson_log.png`} alt="Logo" />;
        </div>

    );

}

export default Product;
