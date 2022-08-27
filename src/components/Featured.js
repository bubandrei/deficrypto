import React, { useEffect, useState } from "react";
import './Featured.css';
// import BTC from '../assets/btc-img.png';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';
import axios from "axios";


const Featured = () => {

    const [data, setData] = useState(null);



    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(data)
    if (!data) {
        return null
    }


    return (
        <div className="fetured">
            <div className="container">
                {/* left side */}
                <div className="left">
                    <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
                    <p>See all available assets: Cryptocurrencies and NFT's</p>
                    <button className='btn'>See More Coins</button>
                </div>


                {/* right side */}
                <div className="right">
                    <div className="top">
                        {/* <img src={BTC} alt='/' /> */}
                        <img src={data[0].image} alt='/' />
                    </div>
                    <div>
                        <h5>{data[0].name}</h5>
                        <p>${data[0].current_price.toLocaleString()}</p>
                    </div>

                    {data[0].price_change_percentage_24h < 0 ? (
                        <span className="red">
                            <FiArrowDownRight />
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className="green">
                            <FiArrowUpRight />
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}



                    {/* <span><FiArrowUpRight />2.5%</span> */}
                </div>


            </div>

        </div>
    )
}
export default Featured;