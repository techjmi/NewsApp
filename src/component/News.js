import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import InfiniteScroll from "react-infinite-scroll-component";
// import Proptypes from 'prop-types'
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.props.category}->NewsNow`;
  }
  async UpdateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8f304adfd45a4416bfbc696f22592f32&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({
      loading: true, //this will show loading untill fetching data
    });
    let data = await fetch(url);
    let pdata = await data.json();
    // console.log(pdata);
    this.setState({
      articles: pdata.articles,
      totalResults: pdata.totalResults,
      loading: false, //after fetching the data this will show error
    });
  }
  async componentDidMount() {
    this.UpdateNews();
  }
  // prevpage = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });

  //   this.UpdateNews();
  // };
  // nextpage = async () => {
  //   if (
  //     !(
  //       this.state.page + 1 >
  //       Math.ceil(this.state.totalResults / this.props.pageSize)
  //     )
  //   ) {
  //     this.setState({
  //       page: this.state.page + 1,
  //       loading: true, // set loading to true before fetching data
  //     });

  //     await this.UpdateNews(); // wait for data to be fetched and state to be updated

  //     this.setState({
  //       loading: false, // set loading to false after data has been fetched and state has been updated
  //     });
  //   }
  // };
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8f304adfd45a4416bfbc696f22592f32&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({
      loading: true, //this will show loading untill fetching data
    });
    let data = await fetch(url);
    let pdata = await data.json();
    // console.log(pdata);
    this.setState({
      articles: this.state.articles.concat(pdata.articles),
      totalResults: pdata.totalResults,
      loading: false, //after fetching the data this will show error
    });
  };

  render() {
    return (
      <div className="container my-4" style={{margin:'35px 0px',marginTop:'90px'}}>
       
        {/* <h2 classNme="text-center"style={{margin:"35px", marginBottom: '20px' }}>NewsNow--Top Headline on {this.props.category}</h2> */}

        {this.state.loading && <Spin />}
        {/* the above line is js concept this means is when loading is true then show spin otherwise not  and shown in above of contents*/}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<Spin />}
        >
          <div className="row">
            {/* {!this.state.loading && */}
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    author={element.author}
                    date={element.publishedAt}
                    imageurl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.prevpage}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.nextpage}
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default News;
