import React from 'react';
import {connect} from 'react-redux';

import * as actionCreators from '../action_creators.js';

export const ResultPicker = React.createClass({
  getButtons: function() { return ['Won','Lost','D/C']; },
  render: function() {
    return <div className="result-picker">
      {this.getButtons().map(result =>
        <button
          className={result == this.props.selected ? 'selected button-primary' : ''}
          key={result}
          onClick={() => { this.props.setResult(result); }}
          >
          {result}
        </button>
      )}
    </div>;
  }
});

const mapStateToProps = function(state) {
  return {
    selected: state.get('result')
  };
};

export const ResultPickerComponent = connect(
  mapStateToProps,
  actionCreators
)(ResultPicker);
