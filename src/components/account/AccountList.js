import React from 'react'

class AccountList extends React.Component {


  render() {
    return (
      <ul>

        {

            this.state.personData[0].map((person, i) =>
              <li key={i}>
                {person.FirstName}
              </li>
            )

        }

      </ul>
    );
  }
}

export default AccountList;
