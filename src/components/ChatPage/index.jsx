import { ActiveChat } from '../ActiveChat/ActiveChat'
import { List } from '../List/List'
import { MessageForm } from '../MessageForm/MessageForm'
import styles from './ChatPage.module.scss'
import { useParams } from 'react-router-dom'
import classNames from 'classnames'

export const ChatPage = ({ chatsList, activeChat, onMessageDelete, onFormSubmit }) => {
  const { activeChatID } = useParams()

  return (
    <>
      <div className={classNames(styles.ChatPage)}>
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
