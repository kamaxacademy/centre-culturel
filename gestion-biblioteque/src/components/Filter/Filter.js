import React, { Component } from "react";
import { connect } from "react-redux";
// import {filterByDate} from '../../redux/actions/bookAction'

class Filter extends Component {
  render() {
    return (
      <div className="">
        <div className="">{`$ products found.`}</div>
        <div className="">
          <label>
            Order by
            <select
              className=""
              
            >
              <option value="">Select</option>
              <option value="lowestprice">Lowest to highest</option>
              <option value="highestprice">Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className="">
          <label>
            {" "}
            Filter Size
            <select
              className=""
            // value={this.props.date}
            //   onChange={(event) => {
            //     this.props.filterByDate(
            //       this.props.books,
            //       event.target.value
            //     );
            //   }}
            >
              <option value="">ALL</option>
              <option value="x">XS</option>
              <option value="s">S</option>
              <option value="m">M</option>
              <option value="l">L</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
  filterByDate: state.filteredItems,
//   date: state.books.date,
  
});
// export default connect(mapStateToProps, {}) (Filter)