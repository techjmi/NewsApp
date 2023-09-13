import React, { Component } from 'react'

export class NewsItem extends Component {
  constructor(){
super(); //this will ensure the object of this class is made
  }
  render() {
    let {title, description, imageurl , newsUrl, author,date}=this.props
    return (
      <div>
      <div className="card">
  <img src= {imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small class="text-muted">By {author} on {date}</small></p>
    <a href={newsUrl} target='-blank' className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
