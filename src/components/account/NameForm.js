import React from 'react'
import axios from 'axios'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import AccountList from './AccountList'
import logo from '../../images/securemote.png';
import { Select, DatePicker } from 'antd'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'


console.log("there")
console.log(axios)
console.log("here")




class NameForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      selectValue:'',
      countryData:[],
      country:''
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const Option = Select.Option;
  }

  componentDidMount() {

    console.log("mounted");

    this.setState({ countryData: [
      { value: 'USA', name: 'USA' },
      { value: 'CANADA', name: 'CANADA'},
      {  value: 'UK', name: 'UNITED KINGDOM' }
    ] });

    this.setState({showList:false})

    this.setState({personData:false})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChangeSelect(event){

    console.log(event)
    console.log("hello");
    console.log(event)
      this.setState({
        value: event,
        country: event
      });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

    //const params = {adminGuid: "bf513abb-9d79-4bdb-bce6-7ab3f0c1dc6d"};
    //  {'adminGuid': "bf513abb-9d79-4bdb-bce6-7ab3f0c1dc6d"}
    axios.post(
      'https://localhost/Account/PortalLogin',
      52730
     ).then(
      (response) => {
        console.log(response)
        this.setState({personData:response.data})
        console.log("personData",response.data)
        this.setState({showList:true})
      },
      (error) => {
        console.log(error)
        this.setState({showList:false})
      }
    );
  }

  render() {
    return (
      <div>
      <div>Form example wired up to antD</div>
      <img src={logo} alt="logo" />
      <form onSubmit={this.handleSubmit}>
      <p>Please enter a name to search the list</p>
      <label>
      Name:
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
      <p>Or search from the drop down list</p>
      <label>
      Select:
      <Select name="country"  defaultValue={this.state.country} value={this.state.country} onChange={this.handleChangeSelect}>
      {this.state.countryData.map((e, key) => {
        return <Option key={key} value={e.value}>{e.name}</Option>;
      })}
      </Select>
      </label>
      <label>

      fff

      {(() => {
        if(this.state.showList){
          return<div>
          <div>The list contains:</div>
          <AccountList />
          </div>

        }else{
          return <div>There is nothing to see here</div>
        }
        })()}


        <DatePicker />


      </label>
      </form>
      </div>
    );
  }
}

export default NameForm;
