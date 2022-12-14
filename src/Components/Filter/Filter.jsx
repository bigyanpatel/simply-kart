import React from "react";
import "./Filter.css";
import { FaStar } from "react-icons/fa";
import { useFilter } from "../../contexts/FilterContext";
import { initialState } from "../../barrelexport/Filterutil";
import { actionTypes } from "../../helperFunctions/Filter/actionTypes";

export const Filter = () => {
  const { filterState, filterDispatch } = useFilter();
  const { sortBy, categories, rating, price } = filterState;
  const { Fiction, Non_fiction, Philosophy, Family_relationship, Self_help } =
    categories;
  const {
    CLEAR_ALL,
    FILTER_BY_PRICE_RANGE,
    SORT_BY,
    FILTER_BY_FICTION,
    FILTER_BY_NON_FICTION,
    FILTER_BY_PHILOSOPHY,
    FILTER_BY_FAMILY_AND_RELATIONSHIP,
    FILTER_BY_SELF_HELP,
    SORT_BY_RATING,
  } = actionTypes;

  return (
    <>
      <div className="sidebar">
        <div className="filter-heading">
          <h3>Filters</h3>
          <button
            onClick={() =>
              filterDispatch({ type: CLEAR_ALL, payload: initialState })
            }
            className="btn pd-sm is-primary"
          >
            Clear All
          </button>
        </div>

        <div className="price-range">
          <h4 className="cat-heading">Price</h4>
          <p className="label-style">1₹ to {filterState.price}₹</p>
          <input
            onChange={(e) =>
              filterDispatch({
                type: FILTER_BY_PRICE_RANGE,
                payload: e.target.value,
              })
            }
            className="slider cursor"
            min="1"
            max="600"
            value={price}
            type="range"
            list="tickmarks"
          />
          <div className="range-label pd-hztl-sm">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
          <datalist id="tickmarks">
            <option value="0"></option>
            <option value="300"></option>
            <option value="600"></option>
          </datalist>
        </div>
        <div className="price-category">
          <h4 className="cat-heading">Sort by pricing</h4>
          <label className="label-style" htmlFor="lth">
            <input
              id="lth"
              onChange={() =>
                filterDispatch({ type: SORT_BY, payload: "LOW_TO_HIGH" })
              }
              checked={sortBy && sortBy === "LOW_TO_HIGH"}
              type="radio"
              name="price-sort"
            />
            Low To High
          </label>
          <label className="label-style" htmlFor="htl">
            <input
              id="htl"
              onChange={() =>
                filterDispatch({ type: SORT_BY, payload: "HIGH_TO_LOW" })
              }
              checked={sortBy && sortBy === "HIGH_TO_LOW"}
              type="radio"
              name="price-sort"
            />
            High To Low
          </label>
        </div>
        <div className="book-category">
          <h4 className="cat-heading">Category</h4>
          <label className="label-style" htmlFor="fiction">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: FILTER_BY_FICTION,
                  payload: e.target.checked,
                })
              }
              checked={Fiction}
              value={Fiction}
              type="checkbox"
              id="fiction"
            />
            Fiction
          </label>
          <label className="label-style" htmlFor="non-fiction">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: FILTER_BY_NON_FICTION,
                  payload: e.target.checked,
                })
              }
              checked={Non_fiction}
              value={Non_fiction}
              type="checkbox"
              id="non-fiction"
            />
            Non-fiction
          </label>
          <label className="label-style" htmlFor="philosophy">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: FILTER_BY_PHILOSOPHY,
                  payload: e.target.checked,
                })
              }
              checked={Philosophy}
              value={Philosophy}
              type="checkbox"
              id="philosophy"
            />
            Philosophy
          </label>
          <label className="label-style" htmlFor="family">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: FILTER_BY_FAMILY_AND_RELATIONSHIP,
                  payload: e.target.checked,
                })
              }
              checked={Family_relationship}
              value={Family_relationship}
              type="checkbox"
              id="family"
            />
            Family & Relationships
          </label>
          <label className="label-style" htmlFor="self-help">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: FILTER_BY_SELF_HELP,
                  payload: e.target.checked,
                })
              }
              checked={Self_help}
              value={Self_help}
              type="checkbox"
              id="self-help"
            />
            Self-help
          </label>
        </div>
        <div className="rating-category">
          <h4 className="cat-heading">Ratings</h4>
          <label className="label-style" htmlFor="four-star">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: SORT_BY_RATING,
                  payload: e.target.value,
                })
              }
              checked={rating === 4}
              value="4"
              type="radio"
              name="rating"
              id="four-star"
            />
            4
            <FaStar className="rating-star" /> & above
          </label>
          <label className="label-style" htmlFor="three-star">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: SORT_BY_RATING,
                  payload: e.target.value,
                })
              }
              checked={rating === 3}
              value="3"
              type="radio"
              name="rating"
              id="three-star"
            />
            3
            <FaStar className="rating-star" /> & above
          </label>
          <label className="label-style" htmlFor="two-star">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: SORT_BY_RATING,
                  payload: e.target.value,
                })
              }
              checked={rating === 2}
              value="2"
              type="radio"
              name="rating"
              id="two-star"
            />
            2
            <FaStar className="rating-star" /> & above
          </label>
          <label className="label-style" htmlFor="one-star">
            <input
              onChange={(e) =>
                filterDispatch({
                  type: SORT_BY_RATING,
                  payload: e.target.value,
                })
              }
              checked={rating === 1 && true}
              value="1"
              type="radio"
              name="rating"
              id="one-star"
            />
            1
            <FaStar className="rating-star" /> & above
          </label>
        </div>
      </div>
    </>
  );
};