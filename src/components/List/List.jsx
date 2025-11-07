import styles from './List.module.scss'
import classNames from 'classnames'

export const List = ({ list, linkClickCallback: callback, activeId }) => {
  const ChatItem = ({ id, avatar, nickname, text, time }) => {
    const avatarStyles = {
      backgroundImage: `url(${avatar})`,
    }

    const linkClickClb = (e) => {
      e.preventDefault()
      callback(id)
    }

    return (
      <a
        className={styles.chatItem} href="/"
        onClick={(e) => linkClickClb(e)}
      >
        <div className={styles.ava} style={avatarStyles}></div>
        <div className={styles.preview}>
          <div className={styles.nickname}>{nickname}</div>
          <div className={styles.message}>{text}</div>
        </div>
        <div className={styles.meta}>{time}</div>
      </a>
    )
  }

  const ListEl = list.map(({ id, name, lastMessage, avatar }) => (
    <li className={classNames(styles.listItemWrapper, {[styles.listItemWrapperActive]: activeId === id })} key={id}>
      <ChatItem
        id={id}
        nickname={name}
        time={lastMessage.time}
        avatar={avatar}
        text={lastMessage.text}
      />
    </li>
  ))

  return (
    <ul className={styles.listWrapper}>
      {ListEl}
    </ul>
  )
}
