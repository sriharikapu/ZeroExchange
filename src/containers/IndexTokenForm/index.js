import React, { Component } from 'react';

import TokenName from '../TokenName';
import TokenSelection from '../TokenSelection';
import TokenQuantity from '../TokenQuantity';

import {
  input,
  select,
  label,
  Icon,
  Button,
  Dialog,
  Intent,
  Classes,
  IBackdropProps,
  IOverlayableProps
} from '@blueprintjs/core';
import './IndexTokenForm.css';

// Components
  // Name Your Fund
  // Select Tokens
  // Determine Quantity


// Create a new Index token
// Form has inputs: 'Name', 'Symbol', Composition TokenA, Composition Token B
// Amount A, Amount 2
// Has ability to Select CompositionToken(s)
// Create token

// MVP
// Form for 


class IndexTokenForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      steps: 1,
      fieldValues: {
        name: 'PredictionIndexToken',
        symbol: 'PIT',
        tokens: ['0x6810e776880c02933d47db1b9fc05908e5386b96', '0xe94327d07fc17907b4db788e5adf2ed424addff6'],
        units: [1, 2]
      }
    }

    this.saveData = this.saveData.bind(this); 
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  saveData(data) {
    var oldData = this.state.fieldValues;
    var newData = Object.assign({}, oldData, data);
    this.setState({ fieldValues: newData });
  }
  nextStep() {
    this.setState({ steps: this.state.steps + 1 });
  }

  previousStep() {
    this.setState({ steps: this.state.steps - 1 });
  }

  render () {
    const { fieldValues } = this.state;

    switch (this.state.steps) {
      case 1: 
        return <TokenName 
          name={fieldValues.name}
          symbol={fieldValues.symbol}
          saveData={this.saveData}
          nextStep={this.nextStep}
        />
      case 2: 
        return <TokenSelection
          tokens={this.state.tokens}
          saveData={this.saveData}
          nextStep={this.nextStep}
          previousStep={this.previousStep}
        />
      case 3: 
        return <TokenQuantity 
          saveData={this.saveData}
          nextStep={this.nextStep}
          previousStep={this.previousStep}
        />
    }
  }
}

export default IndexTokenForm;
