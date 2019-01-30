import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';

export default class LoopTabBar extends React.Component {
  static propTypes = {
    tabs: PropTypes.array,
    activeTab: PropTypes.number,
  };

  static defaultProps = {
    tabs: [],
    activeTab: 0,
  };

  constructor(props) {
    super(props);
    const {
      tabs,
    } = this.props;
    const newTabs = [...tabs];
    newTabs.pop();
    newTabs.shift();
    this.pages = tabs.length;
    this.newTabs = newTabs;
  }

  render() {
    const {
      activeTab,
    } = this.props;

    const newActiveTab = activeTab === this.pages - 1
      ? 0
      : activeTab === 0
        ? this.pages - 2
        : activeTab - 1;

    const newChildren = React.cloneElement(this.props.children, {
      ...this.props,
      activeTab: newActiveTab,
      initialPage: 0,
      tabs: this.newTabs,
    });

    return (
      <View>
        {newChildren}
      </View>
    );
  }
}
