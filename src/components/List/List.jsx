import styles from './List.module.css'

export const List = ({ list }) => {
  const ChatItem = ({ avatar, nickname, text, time }) => {
    const avatarStyles = {
      backgroundImage: `url(${avatar})`,
    }

    return (
      <a className={styles.chatItem} href="/" >
        <div className={styles.ava} style={avatarStyles}></div>
        <div className={styles.preview}>
          <div className={styles.nickname}>{nickname}</div>
          <div className={styles.message}>{text}</div>
        </div>
        <div class="meta">{time}</div>
      </a>
    )
  }

  const ListEl = list.map(({ id, name, lastMessage, avatar }) => (
    <li key={id}>
      <ChatItem
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
