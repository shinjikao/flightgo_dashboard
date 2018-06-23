import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, TabContent, TabPane } from 'reactstrap';
import { Route } from 'react-router-dom';

class CustomServices extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: 1
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col sm="12" xl="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>用戶列表</strong> <small>Line@</small>
                <div className="card-header-actions">
                  <Badge>Line</Badge>
                </div>
              </CardHeader>
              <CardBody>
                <Row>
                  <ListGroup id="list-tab" role="tablist">
                    <div class="float-left" onClick={() => this.toggle(0)} action active={this.state.activeTab === 0}>
                      待處理
                    </div>
                    <div class="float-right" onClick={() => this.toggle(1)} action active={this.state.activeTab === 1}>
                      服務中
                    </div>
                  </ListGroup>
                  <Col>
                    <TabContent activeTab={this.state.activeTab}>
                      <TabPane tabId={0} >
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>彥均 <p class="float-right">下午03:50</p><Badge className="float-right" pill>1</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>紅梅 <p class="float-right">下午03:50</p><Badge className="float-right" pill>3</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>家永 <p class="float-right">下午03:50</p><Badge className="float-right" pill>5</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>王雅婷 <p class="float-right">下午03:50</p><Badge className="float-right" pill>2</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>就是愛吃 <p class="float-right">下午03:50</p> <Badge className="float-right" pill>4</Badge></ListGroupItem>
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>政庭  <p class="float-right">下午03:50</p><Badge className="float-right" pill>6</Badge></ListGroupItem>

                      </TabPane>
                      <TabPane tabId={1}>
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>使用者A </ListGroupItem>
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>使用者B </ListGroupItem>
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>使用者C </ListGroupItem>
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>使用者D </ListGroupItem>
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>使用者E </ListGroupItem>
                        <ListGroupItem className="justify-content-between"><i class="icon-user icons font-2xl d-block mt-4"></i>使用者F </ListGroupItem>

                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col sm="12" xl="8">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>用戶</strong>
                <small> tags</small>
              </CardHeader>
              <CardBody>
                <div>
                  <i class="icon-user icons font-2xl d-block mt-4">彥均</i>
                  <div class="float-right">歷史標籤</div>
                </div>
                <div>
                  用戶喜好
                  <div>
                    會員資料
                    <div>姓名:林彥均</div>
                    <div>Email:user@gmail.com</div>
                    <div>電話:0912345678</div>
                    <div>護照過期日:2023年6月</div>

                  </div>
                  <div>
                    過去歷史紀錄
                    <span class="mr-1 badge badge-success">團體行程 首爾 今年3月</span>
                    <span class="mr-1 badge badge-success">團體行程 大阪 去年12月</span>
                    <span class="mr-1 badge badge-success">2個月內重複詢價</span>
                  </div>
                </div>

                <ListGroup>
                  <div class="float-left"><i class="icon-user icons font-2xl d-block mt-4"></i>彥均 <p class="float-right">下午03:50</p></div>
                  <div class="float-right">你好，已將你問題轉給真人客服 <p>下午03:50</p></div>
                  <div class="float-right">通知真人客服中  <p>下午03:51</p></div>
                  <div class="float-right">你好，我是線上服務專員曾月青(小青) <p>下午03:52</p></div>

                  <div>
                    <textarea name="chat-input" id="textarea-input" rows="2" placeholder="輸入對話" type="textarea"></textarea>
                    <i class="cui-cursor icons font-2xl d-block mt-4"></i>
                  </div>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CustomServices;
