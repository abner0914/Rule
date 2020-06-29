// ==UserScript==
// @name            ourbits
// @namespace       https://github.com/inu1255/soulsign-chrome
// @version         1.0.0
// @author          10
// @loginURL        https://ourbits.club/
// @updateURL       https://raw.githubusercontent.com/abner0914/Rule/master/ourbits.js
// @expire          14400e3
// @domain          ourbits.club
// ==/UserScript==

exports.run = async function() {
    var { status,data } = await axios.get('https://ourbits.club/attendance.php');
    if (status == 200) return '签到成功';
    throw '访问失败';
};

exports.check = async function() {
    var { data } = await axios.get('https://ourbits.club/');
    return /欢迎回来/.test(data);
};
