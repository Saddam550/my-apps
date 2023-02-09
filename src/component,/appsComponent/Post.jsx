


/* eslint-disable array-callback-return */
import React, { Component } from "react";
import MyData from "../../url.json";
// import DefultImage from '../appsComponent/allValue/pic/news-2.jpg'
export default class post extends Component {
  constructor() {
    super();
    this.state = {
      post: "",
      value: [],
      error: null,
      search: "",
      showValue: "",
      searchDefaultValue: ""
    };
  }

  componentDidMount() {
    this.setState({
      value: MyData,
    });
  }

  handleSearch =(e)=> {
    e.preventDefault()
   this.setState({
    search: '',
    showValue:this.state.search,
    searchDefaultValue:"your Search result : "
   })

  }

  render() {
    const { value, search,showValue,searchDefaultValue } = this.state;


    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="mb-3">
               
                <form >

                  <input
                    type="search"
                    onChange={(searchValue) =>
                      this.setState({ search: searchValue.target.value })
                    }
                    className="form-control"
                    value={search }
                    aria-describedby="helpId"
                    placeholder="🔎 search..."
                  ></input>

               <button  className="visually-hidden" onClick={this.handleSearch}  ></button>
                </form>
                <p> {searchDefaultValue}<span className="text-danger">{showValue}</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <table className="table table-hover text-primary table-responsive table-responsive-sm table-responsive-lg table-responsive-md table-responsive-xl table-responsive-xxl ">
              <thead className="thead-primary">
                <tr
                  style={{
                    background: "rgb(3 3 28)",
                    border: " 1px solid white",
                  }}
                >
                  <th>number</th>
                  <th>Country</th>
                  <th>flags</th>{" "}
                </tr>
              </thead>
              {/* search iten  opsonaley set start for reactJs 2023 ================================ */}
              {value.filter((val)=> {
                
                if (search==="") {
                  return val
                }
                else if(val.name.toLowerCase().includes(search.toLowerCase())){
                  return val
                }
              // {/* search iten  opsonaley set End for reactJs 2023 ================================ */}

              }).map((item, index) => (
                <tr
                  className="table-hover  hoverTable text-light"
                  key={index}
                  style={{ background: "#0f0f42" }}
                >
                  <td>{index+1}</td>
                  <td style={{ textAlign: "left", padding: "0 160px" }}>
                    {item.name}
                  </td>
                  <td>
                    <img
                      src={item.flags.png ? item.flags.png : "not a image"}
                      alt="show"
                    />
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </>
    );
  }
}
