import React from "react";
import {
  Alert,
  View,
  ActivityIndicator,
  Text,
  Modal,
  Dimensions,
  Share,
} from "react-native";
import { WebView } from "react-native-webview";
import {
  Container,
  Header,
  Left,
  Right,
  Content,
  Title,
  Button,
  Icon,
  Body,
} from "native-base";
const webHeight = Dimensions.get("window").height - 56;
class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleShare = () => {
    const { url, title } = this.props.articleData;
    var message = `${title}\n\nRead More by visiting ${url}\n\nShared from Microsoft Teams App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  };
  hadleClose = () => {
    console.debug("workkkk");
    return this.props.onClose();
  };

  render() {
    const { showModal, articleData } = this.props;
    const { url } = articleData;
    if (url != undefined) {
      return (
        <Modal
          animationType="side"
          transparent
          visible={showModal}
          onRequestClose={this.hadleClose}
        >
          <Container
            style={{ margin: 15, marginBottom: 0, backgroundColor: "#fff" }}
          >
            <Header>
              <Left>
                <Button onPress={this.hadleClose} transparent>
                  <Icon name="close" style={{ color: "#fff", fontSize: 12 }} />
                </Button>
              </Left>
              <Body>
                <Title children={articleData.title} style={{ color: "#fff" }} />
              </Body>
              <Right>
                <Button onPress={this.handleShare} transparent>
                  <Icon name="share" style={{ color: "#fff", fontSize: 12 }} />
                </Button>
              </Right>
            </Header>
            <Content contentContainerStyle={{ height: webHeight }}>
              <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
                onError={this.hadleClose}
                startInLoadingState
                scalesPageToFit
              />
            </Content>
          </Container>
        </Modal>
      );
    } else {
      console.log("Returning Null");
      return null;
    }
  }
}
export default ModalComponent;
