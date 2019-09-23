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
    var ret = await axios.get('https://totheglory.im/my.php');
    let m = /signed_timestamp: "(.*?)"/.exec(ret.data);
    let n = /signed_token: "(.*?)"/.exec(ret.data);
    if (!m) throw 'm[1]';
    if (!n) throw 'n[1]';
    var { data,status } = await axios.post('https://totheglory.im/signed.php', 'signed_timestamp='+m[1]+'&signed_token='+n[1],{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });
    if (/您已连续签到/.test(data)) return '签到成功';
    if (/今天已签到过/.test(data)) return '今日已签';
    throw '访问失败';
};

exports.check = async function() {
    var { data } = await axios.get('https://totheglory.im/index.php');
    return /欢迎回来/.test(data);
};
