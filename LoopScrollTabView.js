import React from 'react';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import last from 'lodash/last';
import first from 'lodash/first';
import LoopTabBar from './LoopTabBar';

export default class LoopScrollTabView extends React.Component {
  constructor(props) {
    super(props);
    this.pages = this.props.children.length + 2;
  }

  state = {
    currentPage: 1,
  };

  onChangeTab = ({ i, ref, from }) => {
    if (i === this.pages - 1) {
      i = 1;
    } else if (i === 0) {
      i = this.pages - 2;
    }
    this.setState({
      currentPage: i,
    });
    if (this.props.onChangeTab) {
      this.props.onChangeTab({ i, ref, from });
    }
  };

  render() {
    const {
      children,
    } = this.props;

    if (!children.length) {
      return null;
    }

    const firstOne = first(children);
    const lastOne = last(children);
    const firstOneCopy = React.cloneElement(firstOne, {
      key: 'first',
    });
    const lastOneCopy = React.cloneElement(lastOne, {
      key: 'last',
    });

    const newChildren = [firstOneCopy, ...children, lastOneCopy];

    return (
      <ScrollableTabView
        initialPage={1}
        onChangeTab={this.onChangeTab}
        page={this.state.currentPage}
        prerenderingSiblingsNumber={1}
        renderTabBar={() => (
          <LoopTabBar>
            {this.props.renderTabBar()}
          </LoopTabBar>)
        }
        scrollWithoutAnimation
      >
        {newChildren}
      </ScrollableTabView>
    );
  }
}
