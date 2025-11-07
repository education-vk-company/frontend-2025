import styles from './List.module.css'

export const List = ({ list, linkClickCallback: callback }) => {
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
    <li key={id}>
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
