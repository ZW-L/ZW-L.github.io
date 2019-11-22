## 实现 Ajax

### 简单的 `GET` 请求封装

```javascript
const getJSON = function(url) {
  let xmlhttp
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest()
  } else {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      const data = xmlhttp.responseText
      console.log(data)
    }
  }
  xmlhttp.open('GET', url)
  xmlhttp.send()
}
```

###  使用 Promise 封装

1. 单个 `promise`	

```javascript
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = () => {
      if(xmlhttp.readyState === 4) {
        if(xmlhttp.status === 200) {
          const data = xmlhttp.responseText
          resolve(data)
        } else {
          reject('Data Not Found!')
        }
      }
    }
    xmlhttp.open('GET', url)
    xmlhttp.send()
  })
}

getJSON(url).then((res) => {
  console.log(res)
}, (error) => {
  console.log(error)
})
```

2. 链式 `promise`，实现按需请求，或者后面的请求依赖于前一次请求

```javascript
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xmlhttp = new XMLHttpRequest()
    xmlhttp.onreadystatechange = () => {
      if(xmlhttp.readyState === 4) {
        if(xmlhttp.status === 200) {
          const data = xmlhttp.responseText
          resolve(data)
        } else {
          reject('Data Not Found!')
        }
      }
    }
    xmlhttp.open('GET', url)
    xmlhttp.send()
  })
}

getJSON(url)
  .then(res => {
    console.log(res)
    const search_user = 'https://api.github.com/search/users?q=aaa'
    return getJSON(url)
      .then(res => {
        console.log(res)
      })
  })
```




## 工具库实现

### axios

1. 发送 GET 请求

```javascript
const url = 'https://api.github.com/search/repositories?q=vue&sort=stars'
axios.get(url)
  .then(response => {
    const data = response.data
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

// 将请求参数写在一个对象中
const url = 'https://api.github.com/search/repositories'
axios.get(url, {
  params: {
    q: 'vue',
    sort: 'stars'
  }
}).then(response => {
    const data = response.data
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
```