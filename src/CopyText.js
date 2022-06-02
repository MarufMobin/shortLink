import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
class CopyText extends Component {
    state = {
        value: '',
        copied: false,
      };
      
    
    render() {
        return (
            <div className='d-flex justify-content-between align-item-center'>
            <CopyToClipboard text={this.state.value}
                onCopy={() => this.setState({copied: true})}>
                <span>{this.props.text}</span>
                </CopyToClipboard>

                <CopyToClipboard text={this.props.text}
                onCopy={() => this.setState({copied: true})}>
                <button className='dtn btn-info rounded-2 mx-3'>Copy</button>
                </CopyToClipboard>

                {this.state.copied ? <span style={{color: 'f06604', marginLeft: "10px"}} >Copied.</span> : null}
             </div>
        );
    }
}

export default CopyText;