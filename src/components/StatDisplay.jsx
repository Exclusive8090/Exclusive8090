import React from 'react';
import {connect} from 'react-redux';
import {List, Map} from 'immutable';

import * as actionCreators from '../action_creators';
import {reduceResults} from '../core';

export const StatDisplay = React.createClass({
  getResults: function() {
    return this.props.games ? reduceResults(this.props.games) : Map({});
  },
  render: function() {
    return <div className="something">
      <ul>
      {this.getResults().entrySeq().map((key, result) =>
        <li key={key}>{key} - { result }</li>
      )}
      </ul>
    </div>;
  }
});

const mapStateToProps = function(state) {
  return {
    games: state.get('games')
  };
};

export const StatDisplayComponent = connect(
  mapStateToProps,
  actionCreators
)(StatDisplay);
