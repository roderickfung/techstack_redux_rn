import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  // life cycle method: just by defining it, it'll automatically call just from loading the screen.
  componentWillMount() {
    // boilerplate shit
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    // take the props of libraries to render the screen
    this.dataSource = ds.cloneWithRows(this.props.dataList);
  }

  // figure out who to render a single row element from the library
  renderRow(library) {
    return (
      <ListItem library={library} />
    );
  }

  render(){
    return(
      <ListView
        dataSource={ this.dataSource }
        renderRow={ this.renderRow }
      />
    );
  }
}

// calls the function connect, when connect is called, it returns another function with LibraryList.

const mapStateToProps = state => {
  // purpose of function: take global state object (application state), and map it and provide them as props as a component to LibraryList.

  return { dataList: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);
