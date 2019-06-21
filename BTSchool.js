// ==UserScript==
// @name            BTSchool
// @namespace       https://github.com/inu1255/soulsign-chrome
// @version         1.0.0
// @author          GSM
// @loginURL        http://pt.btschool.club
// @updateURL       https://raw.githubusercontent.com/abner0914/Rule/master/BTSchool.js
// @expire          14400e3
// @domain          pt.btschool.club
// ==/UserScript==

exports.run = async function() {
    var { data } = await axios.get('http://pt.btschool.club/index.php?action=addbonus');
    if (/签到成功/.test(data)) return '签到成功';
    if (/您今天已经签到过了/.test(data)) return '今日已签';
    throw '访问失败';
};

exports.check = async function() {
    var { data } = await axios.get('http://pt.btschool.club/index.php');
    return /欢迎回来/.test(data);
};
