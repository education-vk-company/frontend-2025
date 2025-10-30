export const ChatFormComponent = () => {
  return `
    <form>
      <input type="text" placeholder="Type here..." />
      <input type="submit" />
    </form>
  `
}

let formUnlistenMap = [] // [form, clb]

const UnlistenFormSubmit = () => {
  if (!formUnlistenMap.length) {
    return;
  }

  const [formElement, listenerCallback] = formUnlistenMap;
  formElement.removeEventListener('submit', listenerCallback)
  formUnlistenMap = [];
}

export const ListenFormSubmit = (formElement, callback) => {
  UnlistenFormSubmit();

  elementWithChats.querySelectorAll('a').forEach((a) => {
    const listenerCallback = (e) => {
      e.preventDefault();
      const clickedIndex = a.href.split('/').at(-1);
      callback(+clickedIndex)
    }

    elPool.push([a, listenerCallback])
    a.addEventListener('click', listenerCallback);
  })
}
