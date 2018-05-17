import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { Picker, Text, StyleSheet } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component
{
  onButtonPress()
  {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate( { name, phone, shift: shift || 'Monday' });
  }

  render()
  {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}/>
        </CardSection>

        <CardSection>
          <Input 
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({prop: 'phone', value})}/>
        </CardSection>
        
        <CardSection style={styles.pickerCardSectionStyle}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={styles.pickerStyle}
            selectedValue={this.props.shift}
            onValueText={value => this.props.employeeUpdate({prop: 'shift', value})}>
            
              <Picker.Item label="Monday" value="Monday"/>
              <Picker.Item label="Tuesday" value="Tuesday"/>
              <Picker.Item label="Wednesday" value="Wednesday"/>
              <Picker.Item label="Thursday" value="Thursday"/>
              <Picker.Item label="Friday" value="Friday"/>
              <Picker.Item label="Saturday" value="Saturday"/>
              <Picker.Item label="Sunday" value="Sunday"/>
          </Picker>
        </CardSection>

        <CardSection>
          <Button
            onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  pickerCardSectionStyle: {
    height: 55,
    alignItems: 'center'
  },
  pickerTextStyle: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 20
  },
  pickerStyle: {
    flex: 2,
    margin: -8
  }
})

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
}

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);