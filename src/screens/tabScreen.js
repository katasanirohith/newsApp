import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  View,
  Left,
  Body,
  Right,
  Title,
  ScrollableTab,
} from "native-base";
import { Root } from "native-base";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { Tab1 } from "./tabs/tab1.js";
import { Tab2 } from "./tabs/tab2.js";
import { Tab3 } from "./tabs/tab3.js";
import { Tab4 } from "./tabs/tab4.js";
import { Tab5 } from "./tabs/tab5.js";
export class TabScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }
  render() {
    console.disableYellowBox = true;
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Container>
        <Header hasTabs>
          <Left />
          {/* <Left /> */}
          {/* <Left /> */}
          {/* <Left /> */}
          <Body>
            <Title
              style={{
                paddingLeft: "70%",
              }}
            >
              News
            </Title>
          </Body>
          <Right />
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="General">
            <Tab1 />
          </Tab>
          <Tab heading="Technology">
            <Tab2 />
          </Tab>
          <Tab heading="Business">
            <Tab3 />
          </Tab>
          <Tab heading="Sports">
            <Tab4 />
          </Tab>
          <Tab heading="Entertainment">
            <Tab4 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
