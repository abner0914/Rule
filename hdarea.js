// ==UserScript==
// @name            HDArea
// @namespace       https://github.com/inu1255/soulsign-chrome
// @version         1.0.0
// @author          10
// @loginURL        https://www.hdarea.co
// @updateURL       https://raw.githubusercontent.com/abner0914/Rule/master/hdarea.js
// @expire          14400e3
// @domain          www.hdarea.co
// ==/UserScript==

exports.run = async function() {
    var { data,status } = await axios.post('https://www.hdarea.co/sign_in.php', 'action=sign_in', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });
    if (status == 200) return '签到成功';
    throw '签到失败';
};

exports.check = async function() {
    var { data } = await axios.get('https://www.hdarea.co/index.php');
    return /欢迎回来/.test(data);
};
