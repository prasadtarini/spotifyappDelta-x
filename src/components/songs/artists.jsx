import React from 'react';
import "./songs.css";

let singerdeatils= [
    {'artist':'Lewis Capaldi', 'DOB':'July 21, 2019', 'songs':'Some one you loved, Before you go, Hold me while you wait'},
    {'artist':'Post Malone', 'DOB':'September 27, 2019', 'songs':'Circles Rockstar, Sunflower, Psycho, Wow, Better Now'},
    {'artist':'Justin Bieber, Quavo', 'DOB':'January 02, 2020', 'songs':'Intenstions, Let me love you, Despacito, Yummy, I dont care'}
]

let Artists= ()=>{

    let homepage=()=>{
        window.location.href = '/';
    }

    return(
        <div className='main'>
            <h1 className='head2'>Top 10 Artists</h1>
            <div className='row'>
                <div className='col-10 tab'>
                    <table className='table table-hover'>
                        <thead>
                            <tr style={{"color":"white", "backgroundColor":"#4B5D67"}}>
                                <th>Artist</th>
                                <th>Date of Birth</th>
                                <th>Song</th>
                            </tr>
                        </thead>
                        <tbody>
                            {singerdeatils.map((item)=>{
                                return <tr style={{'height':'100px', 'color':'#4B5D67', 'font-size':'bold'}}>
                                    <td>{item.artist}</td>
                                    <td>{item.DOB}</td>
                                    <td>{item.songs}</td>
                                </tr>
                                
                            })}

                        </tbody>
                    </table>

                </div>

            </div>
            <button className='buttt' onClick={homepage}>Back to home</button>

        </div>
    )
}

export default Artists;