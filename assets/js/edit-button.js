ul.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    const button = event.target;
    const div = button.parentNode
    const li = div.parentNode;
    const ul = li.parentNode;
    if(button.textContent === '修改') {
      const div = li.firstElementChild;
      const p = div.firstElementChild;
      const input = document.createElement('input');
      input.type = 'text';
      input.value = p.textContent;
      div.insertBefore(input, p);
      div.removeChild(p);
      button.textContent = '保存';
    }
  }
})