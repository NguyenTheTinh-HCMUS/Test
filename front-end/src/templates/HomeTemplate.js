import { Route } from "react-router-dom";
import Header from "../components/Header";

import React,{Component,Fragment} from 'react'
class HomeLayout extends Component {


  render() {
    return (
      <Fragment>
        <Header   />
        {this.props.children}
      
      </Fragment>
    );
  }
}


export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={propsRoute => (
        <HomeLayout>
          <Component {...propsRoute} />
        </HomeLayout>
      )}
    />
  );
}