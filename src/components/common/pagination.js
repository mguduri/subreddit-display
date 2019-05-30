import React from "react";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    this.handleCurrentClick = this.handleCurrentClick.bind(this);
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.pageNumbers = [];
    this.maxLimit = 5;
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({
        currentPage: 1
      });
    }
  }

  handleCurrentClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  handlePreviousClick() {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({
        currentPage: Number(currentPage - 1)
      });
    }
  }

  handleNextClick() {
    const { currentPage } = this.state;
    if (currentPage < this.pageNumbers.length) {
      this.setState({
        currentPage: Number(currentPage + 1)
      });
    }
  }

  getCurrentRows = () => {
    const { data, itemsPerPage } = this.props;
    const { currentPage } = this.state;

    // Logic for displaying current Rows
    const indexOfLastRow = currentPage * itemsPerPage;
    const indexOfFirstRow = indexOfLastRow - itemsPerPage;
    return data.slice(indexOfFirstRow, indexOfLastRow);
  };

  render() {
    const currentRows = this.getCurrentRows(),
      { data, renderPosts, itemsPerPage } = this.props,
      { currentPage } = this.state,
      renderRows = renderPosts(currentRows),
      rowsPerPage = Math.ceil(data.length / itemsPerPage);
    this.pageNumbers = [];

    for (let i = 1; i <= rowsPerPage; i++) {
      this.pageNumbers.push(i);
    }

    const renderPageNumbers = this.pageNumbers.map(number => {
      return (
        <li
          className="page-item"
          key={number}
          className={
            number > this.maxLimit && number !== this.state.currentPage
              ? "d-none"
              : ""
          }
        >
          <a
            className={
              number === this.state.currentPage
                ? "active page-link"
                : "page-link"
            }
            href="#"
            id={number}
            onClick={this.handleCurrentClick}
          >
            {number}
          </a>
        </li>
      );
    });

    return (
      <div>
        {renderRows}
        <ul className="pagination">
          <li
            className="page-item"
            className={currentPage === 1 ? "d-none" : ""}
          >
            <a
              className="page-link"
              href="#"
              aria-label="Previous"
              onClick={this.handlePreviousClick}
            >
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          {renderPageNumbers}
          <li
            className="page-item"
            className={currentPage === this.pageNumbers.length ? "d-none" : ""}
          >
            <a
              className="page-link"
              href="#"
              aria-label="Next"
              onClick={this.handleNextClick}
            >
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
