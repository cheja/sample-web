import React, { useEffect } from "react";
import "./App.css";
import { connect } from 'react-redux';
import ExternalDataDisplayer from "./components/ExternalDataDisplayer";
import BeautifulDataDisplayer from "./components/hoc/BeautifulDataDisplayer";
import GenericDataDisplayer from "./components/GenericDataDisplayer";

import getUser from "./api/getUser";

import logo from "./logo.svg";

const App = ({ user }) => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BeautifulDataDisplayer>
          <ExternalDataDisplayer
            url="https://reqres.in/api/users?page=2"
            renderLoader={() => (
              <div>
                <p>
                  Loading data...
                </p>
              </div>
            )}
            renderData={(data) => (<p>Last users: {JSON.stringify(data)}</p>)}
          />
        </BeautifulDataDisplayer>
        <ExternalDataDisplayer
          url="https://reqres.in/api/users/2"
          renderLoader={() => (
            <img src={logo} className="App-logo" alt="logo" />
          )}
          renderData={(data) => (<p>My user is: {JSON.stringify(data)}</p>)}
        />
        <GenericDataDisplayer
          loading={user === null}
          renderLoader={() => (
            <img src={logo} className="App-logo" alt="logo" />
          )}
          data={JSON.stringify(user)}
        />
      </header>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user }
};

export default connect(mapStateToProps)(App);
