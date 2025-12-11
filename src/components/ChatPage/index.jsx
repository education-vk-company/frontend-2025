import { ActiveChat } from '../ActiveChat/ActiveChat'
import { List } from '../List/List'
import { MessageForm } from '../MessageForm/MessageForm'
import styles from '../../App.module.css'
import { useParams } from 'react-router-dom'

export const ChatPage = ({ chatsList, activeChat, onMessageDelete, onFormSubmit }) => {
  const { activeChatID } = useParams()

  return (
    <>
      <div>
        <List
          list={chatsList}
          activeId={activeChatID}
        />
      </div>
      <div className={styles.RightColumn}>
        <ActiveChat
          messages={activeChat[activeChatID].messages}
          messagesLength={activeChat[activeChatID].messages.length}
          deleteMsgCallback={onMessageDelete}
        />
        <MessageForm onFormSubmit={(text) => onFormSubmit(text)} />
      </div>
    </>
  )
}
