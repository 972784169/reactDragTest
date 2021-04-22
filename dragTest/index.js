import React, {Component} from 'react';
import {DraggableArea,DraggableAreasGroup} from 'react-draggable-tags';
import deleteBtn from './imgs/delete.png';
import deleteBtn2x from './imgs/delete@2x.png';

//import {DraggableAreasGroup} from '../Draggable';

import styles from './style.less';

import mock from './mock.js';

const group = new DraggableAreasGroup();
const DraggableArea1 = group.addArea();
const DraggableArea2 = group.addArea();


export default class CrossArea extends Component {
  constructor() {
    super();
    this.state = {
      leftTags: mock.leftTags,
      rightTags: mock.rightTags
    }
  }

  handleClickDelete=(e,tag,leftOrRight)=> {
    if(leftOrRight=='left'){
      const leftTags=this.state.leftTags.filter(t => tag.id !== t.id);
      this.setState({leftTags});
    }
    else{
      const rightTags = this.state.rightTags.filter(t => tag.id !== t.id);
      this.setState({rightTags});
    }
  
  }


  render() {
    return (
      <div className="CrossArea">
        <div className="square left">
          <DraggableArea1
            tags={this.state.leftTags}
            render={({tag}) => (
              <div className="tag">
                <img
                  className="delete"
                  src={deleteBtn}
                  srcSet={`${deleteBtn2x} 2x`}
                  onClick={(e) => this.handleClickDelete(e,tag,'left')}
                />
                {tag.content}
              </div>
            )}
            onChange={leftTags => {
              this.setState({leftTags});
            }}
          />
        </div>
        <div className="square right">
          <DraggableArea2
            tags={this.state.rightTags}
            render={({tag}) => (
              <div className="tag">
                <img
                  className="delete"
                  src={deleteBtn}
                  srcSet={`${deleteBtn2x} 2x`}
                  onClick={(e) => this.handleClickDelete(e,tag,'right')}
                />
                {tag.content}
              </div>
            )}
            onChange={rightTags => {
              this.setState({rightTags});
            }}
          />
        </div>
      </div>
    );
  }
}