// import React, { Component } from "react";
// import {
//   Container,
//   Header,
//   Content,
//   List,
//   ListItem,
//   Thumbnail,
//   Text,
//   Left,
//   Body,
//   Right,
//   Button,
// } from "native-base";
// import { Alert, View, ActivityIndicator } from "react-native";
// import { getArticles } from "../../fetchingNews/news";
// export class Tab1 extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       data: null,
//     };
//   }

//   componentDidMount() {
//     getArticles((category = "general")).then(
//       (data) => {
//         this.setState({
//           isLoading: false,
//           data: data,
//         });

//         // console.log(this.state.data);
//       },
//       (error) => {
//         Alert.alert("Error");
//       }
//     );
//   }
//   render() {
//     console.log(this.state.data);

//     let view = this.state.isLoading ? (
//       <View>
//         <ActivityIndicator animating={this.state.isLoading} />
//         <Text style={{ marginTop: 10 }}> Loading .. </Text>
//       </View>
//     ) : (
//       <List
//         dataArray={this.state.data}
//         renderRow={(item) => {
//           return <DataItem data={item} />;
//         }}
//       />
//     );
//     return (
//       <Container>
//         {/* <Header /> */}
//         <Content>{view}</Content>
//       </Container>
//     );
//   }
// }

// class DataItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.data = props.data;
//   }
//   trail = () => {
//     console.log("working");
//   };
//   render() {
//     var totalString = this.data.publishedAt;
//     var onlyDate = totalString.substring(0, 10);
//     var onlyTime = totalString.substring(11, 16);
//     const ReverseString = (str) => str.split("-").reverse().join("-");
//     onlyDate = ReverseString(onlyDate);

//     return (
//       <ListItem thumbnail>
//         <Left>
//           <Thumbnail
//             square
//             source={{
//               uri:
//                 this.data.urlToImage != null
//                   ? this.data.urlToImage
//                   : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",
//             }}
//           />
//         </Left>
//         <Body>
//           <Text numberOfLines={2}>{this.data.title}</Text>
//           <Text note numberOfLines={2}>
//             {this.data.description}
//           </Text>
//           <View
//             style={{
//               flex: 1,
//               flexDirection: "row",
//               marginTop: 8,
//               marginLeft: 0,
//             }}
//           >
//             <Text>{this.data.source.name}</Text>
//             <Text style={{ color: "grey" }}>
//               {onlyTime} {", "}
//               {onlyDate}
//             </Text>
//           </View>
//         </Body>
//         <Right>
//           <Button transparent onPress={this.trail}>
//             <Text>View</Text>
//           </Button>
//         </Right>
//       </ListItem>
//     );
//   }
// }

import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";
import { Alert, View, ActivityIndicator } from "react-native";
import { getArticles } from "../../fetchingNews/news";
import Modal from "..//../component/modal";
export class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
      setModalVisivle: false,
      modalArticleData: {},
    };
  }
  itemOnPress = (articleData) => {
    this.setState({ setModalVisivle: true, modalArticleData: articleData });
  };
  closeOnPress = () => {
    console.log("sjjj");
    this.setState({ setModalVisivle: false, modalArticleData: {} });
  };

  componentDidMount() {
    getArticles((category = "business")).then(
      (data) => {
        this.setState({
          isLoading: false,
          data: data,
        });

        // console.log(this.state.data);
      },
      (error) => {
        Alert.alert("Error");
      }
    );
  }
  render() {
    // console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{ marginTop: 10 }}> Loading .. </Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return <DataItem onPress={this.itemOnPress} data={item} />;
        }}
      />
    );
    return (
      <Container>
        {/* <Header /> */}
        <Content>{view}</Content>
        <Modal
          showModel={this.state.setModalVisivle}
          articleData={this.state.modalArticleData}
          onClose={this.closeOnPress}
        ></Modal>
      </Container>
    );
  }
}

class DataItem extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }
  handlePress = () => {
    console.log("Helloooo");
    const { url, title } = this.data;
    this.props.onPress({ url, title });
  };
  render() {
    var totalString = this.data.publishedAt;
    var onlyDate = totalString.substring(0, 10);
    var onlyTime = totalString.substring(11, 16);
    const ReverseString = (str) => str.split("-").reverse().join("-");
    onlyDate = ReverseString(onlyDate);

    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail
            square
            source={{
              uri:
                this.data.urlToImage != null
                  ? this.data.urlToImage
                  : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",
            }}
          />
        </Left>
        <Body>
          <Text numberOfLines={2}>{this.data.title}</Text>
          <Text note numberOfLines={2}>
            {this.data.description}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 8,
              marginLeft: 0,
            }}
          >
            <Text note>{this.data.source.name}</Text>
            <Text style={{ color: "grey" }}>
              {onlyTime} {", "}
              {onlyDate}
            </Text>
          </View>
        </Body>
        <Right>
          <Button transparent onPress={this.handlePress}>
            <Text>View</Text>
          </Button>
        </Right>
      </ListItem>
    );
  }
}
