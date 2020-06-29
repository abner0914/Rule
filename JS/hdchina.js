// ==UserScript==
// @name            HDChina
// @namespace       https://github.com/inu1255/soulsign-chrome
// @version         1.0.0
// @author          10
// @loginURL        https://hdchina.org
// @updateURL       https://raw.githubusercontent.com/abner0914/Rule/master/hdchina.js
// @expire          14400e3
// @domain          hdchina.org
// ==/UserScript==

exports.run = async function() {
    var { data,status } = await axios.post('https://hdchina.org/plugin_sign-in.php?cmd=signin', 'csrf=6156b862d50b41bcdb29551bd5e435927f3d5a8e', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });
    if (status == 200) return '签到成功';
    throw '签到失败';
};

exports.check = async function() {
    var { data } = await axios.get('https://hdchina.org/index.php');
    return /欢迎回来/.test(data);
};
