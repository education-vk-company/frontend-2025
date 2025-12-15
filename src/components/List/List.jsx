import { Link } from 'react-router-dom'
import classNames from 'classnames'
import styles from './List.module.scss'

export const List = ({ list, linkClickCallback: callback, activeId }) => {
  const ChatItem = ({ id, avatar, nickname, text, time, media }) => {
    const avatarStyles = {
      backgroundImage: `url(${avatar})`,
    }

    return (
      <Link
        className={styles.chatItem} href="/"
        to={`/chat/${id}`}
      >
        <div className={styles.ava} style={avatarStyles}></div>
        <div className={styles.preview}>
          <div className={styles.nickname}>{nickname}</div>
          <div className={styles.message}>{text}</div>
          {
            media && <video src={media}></video>
          }
        </div>
        <div className={styles.meta}>{time}</div>
      </Link>
    )
  }

  const ListEl = list.map(({ id, name, lastMessage, avatar, media }) => (
    <li className={classNames(styles.listItemWrapper, {[styles.listItemWrapperActive]: +activeId === id })} key={id}>
      <ChatItem
        id={id}
        nickname={name}
        time={lastMessage.time}
        avatar={avatar}
        text={lastMessage.text}
        media={media}
      />
    </li>
  ))

  return (
    <ul className={styles.listWrapper}>
      {ListEl}
    </ul>
  )
}
