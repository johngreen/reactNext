import React from 'react'



class Next extends React.Component {

  constructor(props) {
    super(props);
  /*  this.state = {
      value: '',
      selectValue:'',
      countryData:[],
      country:''
  };*/

/*    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);*/


  }

  componentDidMount() {

    console.log("mounted");

  /*  this.setState({ countryData: [
      { value: 'USA', name: 'USA' },
      { value: 'CANADA', name: 'CANADA'},
      {  value: 'UK', name: 'UNITED KINGDOM' }
    ] });

    this.setState({showList:false})

    this.setState({personData:false})*/
  }

  handleChange(event) {
  /*  this.setState({value: event.target.value});*/
  }

  handleChangeSelect(event){

  /*  console.log(event)
    console.log("hello");
    console.log(event)
      this.setState({
        value: event,
        country: event
      });*/
  }

  handleSubmit(event) {
  }

  render() {
    return (
      <div>This is where the next js test will go.</div>
    );
  }
}

export default Next;
