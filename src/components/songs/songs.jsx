import React from 'react';
import "./songs.css"; 
let songDetails= [
    {'artwork':'https://i.pinimg.com/originals/93/bc/65/93bc65a8f41fe324b24de8822a9b8202.jpg', 'song':'Some one You loved', 'DOR':'July 21, 2019', 'artist':'Lewis Capaldi', 'rating':'Good'},
    {'artwork':'https://assets.vogue.com/photos/5b609aec67f1177f20a9a875/master/pass/00-promo-post-malone.jpg', 'song':'Circles', 'DOR':'September 27, 2019', 'artist':'Post Malone', 'rating':'Superhit'},
    {'artwork':'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg', 'song':'Intentions', 'DOR':'January 02, 2020', 'artist':'Justin Bieber, Quaovo', 'rating':'Good'}
]

let Songs=()=> {
   
    let singerDetails=()=>{
        window.location.href = '/artists';
    }
    let addsong=()=>{
        window.location.href = '/addsong';
    }

   return(
       <div className='main'>
           <div className='d-flex flex-row justify-content-space-around p-3 mb-2'>
           <h1 className='head1'>Top 10 Songs</h1>
           <button className='butt' onClick={addsong}>+ Add Songs</button>
           </div> 
           <div className='row'>
               <div className='col-10 tab'>
               <table className='table table-hover'>
               <thead>
                   <tr style={{"color":"white", "backgroundColor":"#4B5D67"}}>
                       <th>Art work</th>
                       <th>Song</th>
                       <th>Date of Release</th>
                       <th>Artist</th>
                       <th>Rating</th>
                   </tr>
               </thead>
               <tbody>
                   {songDetails.map((item)=>{
                       return <tr style={{'height':'100px', 'color':'#4B5D67', 'font-size':'bold'}}>
                           <td><img className='imgs' src={item.artwork}/> </td>
                           <td>{item.song}</td>
                           <td>{item.DOR}</td>
                           <td>{item.artist}</td>
                           <td>
                           <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star checked"></span>
                            <span class="fa fa-star"></span>
                           </td>
                       </tr>
                   })}
               </tbody>

           </table>
                   
               </div>
               <button className='buttt' onClick={singerDetails}>Click to see the Singer Details</button>

           </div>

       </div>
   )
}

export default Songs;