// ==UserScript==
// @name            BTSchool
// @namespace       https://github.com/inu1255/soulsign-chrome
// @version         1.0.0
// @author          10
// @loginURL        http://pt.btschool.club
// @updateURL       https://raw.githubusercontent.com/abner0914/Rule/master/BTSchool.js
// @expire          14400e3
// @domain          pt.btschool.club
// ==/UserScript==

exports.run = async function() {
    var { status, data } = await axios.get('http://pt.btschool.club/index.php?action=addbonus');
    if (status == 200) return '签到成功';
    throw '访问失败';
};

exports.check = async function() {
    var { data } = await axios.get('http://pt.btschool.club/index.php');
    return /欢迎回来/.test(data);
};
