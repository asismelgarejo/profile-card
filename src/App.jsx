import React, { Component } from 'react';


import Banner from './assets/images/bg-pattern-card.svg';
import Victor from './assets/images/image-victor.jpg';

import Banner2 from './assets/images/k-b.jpg';
import Koyomi from './assets/images/koyomi.jpg';

import Banner3 from './assets/images/deno.jpg';
import Edward from './assets/images/edward.jpg';

class App extends Component{
  state = {
    users:[
      {
        banner:{
          image: Banner,
          description: 'banner user1'
        },
        avatar: {
          image: Victor,
          description: 'victor avatar'
        },
        name: "Victor Crest",
        age: 26,
        country: "London",
        stadistics: {
          followers: 80,
          likes: 803,
          photos: 1.4
        }
      },
      {
        banner:{
          image: Banner2,
          description: 'banner user2'
        },
        avatar: {
          image: Koyomi,
          description: 'koyomi avatar'
        },
        name: "Koyomi Araragi",
        age: 26,
        country: "London",
        stadistics: {
          followers: 80,
          likes: 803,
          photos: 1.4
        }
      },
      {
        banner:{
          image: Banner3,
          description: 'banner user3'
        },
        avatar: {
          image: Edward,
          description: 'edward avatar'
        },
        name: "Edward Elric",
        age: 26,
        country: "London",
        stadistics: {
          followers: 80,
          likes: 803,
          photos: 1.4
        }
      }
    ]
  }
  render(){
    return(
      <div id="container">
        {
          this.state.users.map((user, i)=>(
            <article key={i} className="card">
              <div className="user-container">
                <div className="user-banner"><img src={user.banner.image} alt={user.banner.description}/></div>
                <div className="user-avatar">
                  <figure><img src={user.avatar.image} alt={user.avatar.description}/></figure>
                  <h1>{user.name}</h1>&ensp;<span>{user.age}</span><br/>
                  <span>{user.country}</span>
                </div>
              </div>
              <div className="user-stats">
                <div className="stats"><span>{user.stadistics.followers}K</span><br/><span>Followers</span></div>
                <div className="stats"><span>{user.stadistics.likes}K</span><br/><span>Likes</span></div>
                <div className="stats"><span>{user.stadistics.photos}K</span><br/><span>Photos</span></div>
              </div>
            </article>
          ))
        }
      </div>
    )
  }
}

export default App;