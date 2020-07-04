const cookieName = 'hdarea.co'
const cookieKey = 'cookie_hdarea'
const cookieVal = $persistentStore.read(cookieKey)

function sign() {
  let url = {
    url: `https://www.hdarea.co/sign_in.php`,
    headers: {
      Cookie: cookieVal,
      'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
    },
    body: "action=sign_in"
  }

  $httpClient.post(url, (error, response, data) => {
    let result = JSON.parse(data)
    let title = `${cookieName}`
    // 签到成功
    if (response.status == 200) {
      let subTitle = `签到成功`
      let detail = `详见日志`
      $notification.post(title, subTitle, detail)
    }
    // 签到失败
    else {
      let subTitle = `签到失败`
      detail = `编码: ${result.code}, 说明: ${result.msg}`
      $notification.post(title, subTitle, detail)
    }
    console.log(`${cookieName}, data: ${data}`)
  })

  $done({})
}

sign()