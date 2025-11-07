//
export const List = (list = []) => {
  const ListEl = list.map(chatEl => (
    <li>
      {chatEl}
    </li>
  ))

  return (
    <ul>
      {ListEl}
    </ul>
  )
}
