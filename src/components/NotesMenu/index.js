import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

class NotesMenu extends React.Component {
  render() {

    return (
        <Sider theme="light" trigger={null} collapsedWidth="0" collapsible collapsed={this.props.collapsed}>
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} selectedKeys={[this.props.selectedNoteId]}>
            <Menu.Item key="1" onClick={this.props.newNote}>
              <Icon type="plus" />
              <span>Add new note</span>
            </Menu.Item>
            {
              this.props.notes.map((note, index) => {
                return (
                  <Menu.Item onClick={() => { this.props.selectNote(note.id) }} key={note.id}>
                    <span>{note.title.length ? note.title : "Untitled Note"}</span>
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
