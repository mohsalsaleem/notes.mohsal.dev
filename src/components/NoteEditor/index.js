import React, { useState, useEffect } from 'react';
import { Layout, Icon, Input } from 'antd';
import SlateEditor from '../SlateEditor';

const { Header, Content } = Layout;

function NoteEditor(props) {
    const [note, setNote] = useState(null);

    useEffect(() => {
        setNote(note => props.note)
    }, [])

    const handleTitleChange = (title) => {
      setNote(note => {
        return { ...note, title }
      })
    }

    return (
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="NotesPage-trigger"
              type={props.toggle ? 'menu-unfold' : 'menu-fold'}
              onClick={props.toggle}
            />
            <Input placeholder="Title here" defaultValue={note.title} />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            <SlateEditor content={note.content} />
          </Content>
        </Layout>
    )
}

export default NoteEditor;