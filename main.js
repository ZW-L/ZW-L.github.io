const content = document.getElementById('content')
// 鼠标悬停在元素上方时，发生过渡
content.addEventListener('mouseover', () => {
  content.style.backgroundColor = 'red'
  content.style.borderRadius = '50%'
})

// 鼠标离开元素时，也发生过渡
content.addEventListener('mouseout', () => {
  content.style.backgroundColor = '#ccc'
  content.style.borderRadius = '0'
})