import React, { Component } from 'react';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

class PushMessage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                發送訊息
              </CardHeader>
              <CardBody>
                <Form action="/api/push/" method="post">
                  <FormGroup>
                    <InputGroup>
                      <Input type="text" id="userid1" name="userid1" placeholder="使用者ID" autoComplete="name"/>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup row>
                    <InputGroup>
                      <Col xs="12" md="12">
                        <Input type="textarea" id="message1" name="message1" placeholder="訊息" row="9" autoComplete="username"/>
                      </Col>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup className="form-actions">
                    <Button type="submit" size="sm" color="success">發送</Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      
      </div>
    );
  }
}

export default PushMessage;
