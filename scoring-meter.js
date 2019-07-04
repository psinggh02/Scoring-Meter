import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer";


class ScoringMeter extends Component {
  render() {
  	let labelStyle = "";
  	let jsx = "";
  	let options = this.props.options;
  	let defaultOptions = {
	    value: options.value? options.value: 0,
	    needleTransitionDuration: options.needleTransitionDuration? options.needleTransitionDuration: 4000,
	    needleTransition: options.needleTransition?options.needleTransition:"easeElastic",
	    needleHeightRatio: options.needleHeightRatio?options.needleHeightRatio:0.4,
	    currentValueText: options.currentValueText?options.currentValueText:"Overall Match Confidence: ${value}",
	    needleColor: options.needleColor?options.needleColor:"#666",
	    minValue:options.minValue?options.minValue:0,
	    maxValue:options.maxValue?options.maxValue:100,
	    showSegmentLabel: options.showSegmentLabel?options.showSegmentLabel:false,
	    showCurrentValue: options.showCurrentValue?options.showCurrentValue:true
  	}

  	if(!defaultOptions.showSegmentLabel) {
  		labelStyle = "showSegmentLabelStyle";
  	}
  	if(!defaultOptions.showCurrentValue) {
  		labelStyle = labelStyle+" showCurrentValueStyle";
  	}
  	debugger
  	if(isNaN(defaultOptions.value) || defaultOptions.value<0 || defaultOptions.value>100) {
  		return <div>Enter a whole number as the "value" between 0-100.</div>;
  	}
    return (
      <div className={labelStyle}>
		<ReactSpeedometer {...defaultOptions} />
      </div>
    );
  }
}

export default ScoringMeter;
