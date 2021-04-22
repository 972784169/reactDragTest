import React, {Component} from 'react';

import {DraggableArea,DraggableAreasGroup} from 'react-draggable-tags';
import deleteBtn from './imgs/delete.png';
import deleteBtn2x from './imgs/delete@2x.png';
import styles from './style.less';

import mock from './mock.js';

export default class AddAndDelete extends Component {
  constructor() {
    super();
    this.state = {
      tags: mock.tags
    };

    
  }

  handleClickAdd() {
    if (this.input.value.length < 1) return;
    const tags = this.state.tags.slice();
    tags.push({id: Math.random() , content: this.input.value});
    this.setState({tags});
    this.input.value = '';
  }

  handleClickDelete(tag) {
    const tags = this.state.tags.filter(t => tag.id !== t.id);
    this.setState({tags});
  }

  render() {
    return (
      <div className="AddAndDelete">
        <div className="main">
          <DraggableArea
            tags={this.state.tags}
            render={({tag, index}) => (
              <div className="tag">
                <img
                  className="delete"
                  src={deleteBtn}
                  srcSet={`${deleteBtn2x} 2x`}  
                  onClick={() => this.handleClickDelete(tag)}
                />
                {tag.content}
              </div>
            )}
            onChange={tags => this.setState({tags})}
          />
        </div>
        <div className="inputs">
          <input ref={r => this.input = r} />
          <button onClick={()=>{this.handleClickAdd()}}>Add</button>
        </div>
      </div>
    );
  }
}