// ==UserScript==
// @name            PTHome
// @namespace       https://github.com/inu1255/soulsign-chrome
// @version         1.0.0
// @author          10
// @loginURL        https://pthome.net
// @updateURL       https://raw.githubusercontent.com/abner0914/Rule/master/pthome.js
// @expire          14400e3
// @domain          pthome.net
// ==/UserScript==

exports.run = async function() {
    var { data } = await axios.get('https://pthome.net/attendance.php');
    if (/签到成功/.test(data)) return '签到成功';
    if (/您今天已经签到过了/.test(data)) return '今日已签';
    throw '访问失败';
};

exports.check = async function() {
    var { data } = await axios.get('https://pthome.net/index.php');
    return /欢迎回来/.test(data);
};
