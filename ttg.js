// ==UserScript==
// @name            Ttg
// @namespace       https://github.com/inu1255/soulsign-chrome
// @version         1.0.0
// @author          10
// @loginURL        https://totheglory.im
// @updateURL       https://raw.githubusercontent.com/abner0914/Rule/master/ttg.js
// @expire          14400e3
// @domain          totheglory.im
// ==/UserScript==

exports.run = async function() {
    var { data,status } = await axios.post('https://totheglory.im/signed.php', 'signed_timestamp=1567153405','signed_token=f2271eda1bb6cc85b4cd37ff2ebc5782', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });
    if (status == 200) return '签到成功';
    throw '签到失败';
};

exports.check = async function() {
    var { data } = await axios.get('https://totheglory.im/index.php');
    return /欢迎回来/.test(data);
};
