import React,{Component,PropTypes} from 'react';
import './Grid.scss';

var pd='15px';

export class Grid extends Component{
  render(){
    return <div className="Grid">
            {this.props.children}
           </div>
    }
}

export class Row extends Component{
  render(){
    return <div className="Row" style={this.props.style}>
            {this.props.children}
           </div>
    }
}

export class Col extends Component{
  static propTypes = {
    width: PropTypes.array,
    offset: PropTypes.array,
    pdr:PropTypes.number,
    pdl:PropTypes.number,
  };
  // static defaultProps = {
  //   pdr:0,
  //   pdl:0,
  // }
  render(){
    let pdr:0;
    let pdl:0;
    if (this.props.pdr!='undefind'){
      pdr=this.props.pdr;
    }
    if (this.props.pdl!='undefind'){
      pdl=this.props.pdl;
    }
    let width='100%';
    if (this.props.width) {
      width=this.props.width[0]/this.props.width[1]*100+'%';
    }
    let offset=0;
    if(this.props.offset){
      offset=this.props.offset[0]/this.props.offset[1]*100+'%';
    }
    return <div className="Col" style={{width:width,marginLeft:offset,paddingRight:pdr,paddingLeft:pdl}}>
            {this.props.children}
           </div>
    }
}


