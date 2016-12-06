// @flow
import React, { PureComponent } from 'react';
import * as Controller from './controller';
import * as Model from './model';
import Code from './view.code.js';

type Props = {
  dispatch: (action: Controller.Action) => void,
  state: Model.State,
};

export default class Index extends PureComponent<void, Props, void> {
  render() {
    const style = {
      notification: {
        marginBottom: 25,
        padding: 10,
      },
      tileChild: {
        overflowX: 'auto',
        padding: 15,
      },
      tileParent: {
        padding: 3,
      },
    }
    return (
      <div className="container" style={{maxWidth: 'none'}}>
        <div className="notification" style={style.notification}>
          <div className="content">
            <div className="tile is-ancestor is-vertical">
              <div className="tile">
                <div className="tile is-parent" style={style.tileParent}>
                  <div className="tile is-child box" style={style.tileChild}>
                    <p className="title is-2">window.gtmDataLayer</p>
                    <Code
                      isExpanded
                      json={this.props.state.dataLayer}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
