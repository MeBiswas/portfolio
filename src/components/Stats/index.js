import React from "react";
import PropTypes from "prop-types";

const Stats = (props) => {
  return (
    <section id="stats" className="count-up">
      <div className="row">
        <div className="col-twelve">
          <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-pencil-ruler"></i>
              </div>

              <h3 className="stat-count">{props.count}1500</h3>

              <h5 className="stat-title">Projects Completed</h5>
            </div>

            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-users"></i>
              </div>

              <h3 className="stat-count">900</h3>

              <h5 className="stat-title">Happy Clients</h5>
            </div>

            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-badge"></i>
              </div>

              <h3 className="stat-count">200</h3>

              <h5 className="stat-title">Awards Received</h5>
            </div>

            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-light-bulb"></i>
              </div>

              <h3 className="stat-count">120</h3>

              <h5 className="stat-title">Crazy Ideas</h5>
            </div>

            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-cup"></i>
              </div>

              <h3 className="stat-count">1500</h3>

              <h5 className="stat-title">Coffee Cups</h5>
            </div>

            <div className="bgrid stat">
              <div className="icon-part">
                <i className="icon-clock"></i>
              </div>

              <h3 className="stat-count">7200</h3>

              <h5 className="stat-title">Hours</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Stats.propTypes = {
  count: PropTypes.number,
};

export default Stats;
