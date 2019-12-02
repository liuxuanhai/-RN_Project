import _ from 'lodash';
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {studentsListData} from '../actions';
import ListItem from './ListItem';

class StudentsList extends Component {
  componentDidMount() {
    this.props.studentsListData();
  }

  renderRow({item, index}) {
    return <ListItem ogrenci={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.studentsArray}
        renderItem={this.renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const mapStateToProps = ({StudentDataResponse}) => {
  const studentsArray = _.map(StudentDataResponse, (val, uid) => {
    return {...val, uid};
  });
  return {studentsArray};
};

export default connect(
  mapStateToProps,
  {studentsListData},
)(StudentsList);
