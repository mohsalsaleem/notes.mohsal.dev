import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import TitleSignature from '../TitleSignature';

const { Sider } = Layout;

class NotesMenu extends React.Component {
    render() {
        return (
            <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Icon type="plus" />
                  <span>Add new note</span>
                </Menu.Item>
                {
                  this.props.notes.forEach(note => {
                    return (
                      <Menu.Item key="1">
                        <TitleSignature title={note.title} />
                        <span>{note.title}</span>
                    </Menu.Item>
                    )
                  })
                }
              </Menu>
            </Sider>
        )
    }
}

export default NotesMenu;
