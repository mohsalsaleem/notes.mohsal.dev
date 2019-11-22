import React from 'react';
import { Layout, Menu, Icon } from 'antd';

import './index.css';
import logo from '../../mohsal.dev.png';

const { Sider } = Layout;

class DeleteNote extends React.Component {
  render() {
    return(
      <Icon type="delete" className="NoteMenu-delete-note-icon" />
    )
  }
}

class NotesMenu extends React.Component {
  render() {

    return (
        <Sider theme="light" trigger={null} collapsedWidth="0" collapsible collapsed={this.props.collapsed}>
          <div className="logo">
            <a href="https://mohsal.dev" target="_blank" rel="noopener noreferrer"><img src={logo} alt="logo" /></a>
          </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} selectedKeys={[this.props.selectedNoteId]}>
            <Menu.Item key="1" onClick={this.props.newNote}>
              <Icon type="plus" />
              <span>Add new note</span>
            </Menu.Item>
            {
              this.props.notes.map((note, index) => {
                return (
                  <Menu.Item onClick={() => { this.props.selectNote(note.id) }} key={note.id}>
                    {/* <DeleteNote aria-label="Delete Note" onClick={() => this.props.deleteNote(note.id)} /> */}
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
