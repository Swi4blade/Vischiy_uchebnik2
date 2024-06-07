//Выполнил Жогин Дмитрий 3ИСИП-821

//Высший учебник практики
//Задание 96
// //№1
// let str = 'ahb acb aeb aeeb adcb axeb';
// console.log(str.replace(/a.b/g, 'a'));
// //№2
// let str1 = 'aba aca aea abba adca abea';
// console.log(str1.replace(/a..a/g, 'a'));
// //№3
// let str2 = 'aba aca aea abba adca abea';
// console.log(str2.replace(/ab.a/g, 'a'));

//Задание 97
// //№1
// let str = 'aa aba abba abbba abca abea';
// console.log(str.replace(/ab+a/g, 'a'));
// //№2
// let str1 = 'aa aba abba abbba abca abea';
// console.log(str1.replace(/ab*a/g, 'a'));
// //№3
// let str2 = 'aa aba abba abbba abca abea';
// console.log(str2.replace(/ab?a/g, 'a'));
// //№4
// let str3 = 'aa aba abba abbba abca abea';
// console.log(str3.replace(/ab*a/g, 'a'));

//Задание 98
// //№1
// let str = 'ab abab abab abababab abea';
// console.log(str.replace(/(ab)+/g, '!'));

//Задание 99
// //№1
// let str = 'a.a aba aea';
// console.log(str.replace(/a\.a/g, '!'));
// //№2
// let str1 = '2+3 223 2223';
// console.log(str1.replace(/2\+3/g, '!'));
// //№3
// let str2 = '23 2+3 2++3 2+++3 345 567';
// console.log(str2.replace(/2\++3/g, '!'));
// //№4
// let str3 = '23 2+3 2++3 2+++3 445 677';
// console.log(str3.replace(/2\+*3/g, '!'));
// //№5
// let str4 = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// console.log(str4.replace(/\*\q+\+/g, '!'));
// //№6
// let str5 = '[abc] {abc} abc (abc) [abc]';
// console.log(str5.replace(/\[abc\]/g, '!'));

//Задание 100
// //№1
// let str = 'aa aba abba abbba abbbba abbbbba';
// console.log(str.replace(/ab{2,4}a/g, '!'));
// //№2
// let str1 = 'aa aba abba abbba abbbba abbbbba';
// console.log(str1.replace(/ab{1,3}a/g, '!'));
// //№3
// let str2 = 'aa aba abba abbba abbbba abbbbba';
// console.log(str2.replace(/ab{4,}a/g, '!'));

//Задание 101
// //№1
// let str = 'aba accca azzza wwwwa';
// console.log(str.replace(/a.+?a/g, '!'));

//Задание 102
// //№1
// let str = 'a1a a2a a3a a4a a5a aba aca';
// console.log(str.replace(/a\da/g, '!'));
// //№2
// let str = 'a1a a22a a333a a4444a a55555a aba aca';
// console.log(str.replace(/a\d+a/g, '!'));
// //№3
// let str = 'aa a1a a22a a333a a4444a a55555a aba aca';
// console.log(str.replace(/a\d*a/g, '!'));
// №4
// let str = 'avb a1b a2b a3b a4b a5b abb acb';
// console.log(str.replace(/a\D+\S+b/g, '!'));
// //№5
// let str = 'ave a#b a2b a$b a4b a5b a-b acb';
// console.log(str.replace(/a\W+b/g, '!'));
// //№6
// let str = 'ave a#a a2a a$a a4a a5a a-a aca';
// console.log(str.replace(/\S+/g, '!'));

//Задание 103
// //№1
// let str = 'aba aea aca aza axa';
// console.log(str.replace(/a[bex]a/g, '!'));
// //№2
// let str = 'a1a a3a a7a a9a aba';
// console.log(str.replace(/a[3-6]a/g, '!'));
// //№3
// let str = 'aba aea afa aha aga';
// console.log(str.replace(/a[a-g]a/g, '!'));
// //№4
// let str = 'aba aea afa aha aga';
// console.log(str.replace(/a[a-fj-z]a/g, '!'));
// //№5
// let str = 'aAa aea aEa aJa a3a';
// console.log(str.replace(/a[a-fA-D]a/g, '!'));
// //№6
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str.replace(/a[a-z]+a/g, '!'));
// //№7
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str.replace(/a[a-zA-Z]+a/g, '!'));
// //№8
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// console.log(str.replace(/a[a-z1-9]+a/g, '!'));

//Задание 104
// //№1
// let str = '1e2 1ff2 1Gh2 1ex2 1x2 1sS2';
// console.log(str.replace(/1[^ex]+?2/g, 'цифра'));
// //№2
// let str = 'x65z x2z x7z x54z x27z xdz';
// console.log(str.replace(/x[^27]+?z/g, '!'));
// //№3
// let str = 'xAz xBz xCz xvz xhz xmz';
// console.log(str.replace(/x[^A-Z]+?z/g, '!'));
// //№4
// let str = 'xAz xBz xCz xvz xhz xmz x1z x2z x3z x%z x@z x#z';
// console.log(str.replace(/x[^A-Za-z0-9]+?z/g, '!'));

//Задание 105
// //№1
// let str = 'wйw wяw wёw wqw';
// console.log(str.replace(/w[а-яё]w/g, '!'));
// //№2
// let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
// console.log(str.replace(/[а-яёА-ЯЁ]+/g, '!'));

//Задание 106
// //№1
// let str = 'aba aea aca aza axa a.a a+a a*a';
// console.log(str.replace(/a[.+*]a/g, '!'));
// //№2
// let str = 'xaz x.z x3z x@z x$z xrz';
// console.log(str.replace(/x[^.@$]z/g, '!'));

//Задание 107
// //№1
// let str = 'xaz x12z xAz x..z x@z';
// console.log(str.replace(/x[\d.]+z/g, '!'));
// //№2
// let str = 'xaaz x12z xagz x..z x@z';
// console.log(str.replace(/x[^\da-g]{3,7}z/g, '!'));

//Задание 108
// //№1
// let str = 'x[]z x[[]]z x()z';
// console.log(str.replace(/x(\[\]*)+z/g, '!'));
// //№1
// let str = 'x[]z x{}z x.z x()z x([])z';
// console.log(str.replace(/x[()[\]{}]*z/g, '!'));

//Задание 109
// //№1
// let str = '^xx axx ^zz bkk @ss';
// console.log(str.replace(/[\^@][a-zA-Z]{2}/g, '!'));
// //№2
// let str = '^xx axx ^zz bkk @ss';
// console.log(str.replace(/[^@^\s][a-zA-Z]{2}/g, '!'));
// //№3
// let str = '^xx axx ^zz bkk';
// console.log(str.replace(/[^\s^][a-zA-Z]{2}/g, '!'));

//Задание 110
// //№1
// let str = 'xaz xBz xcz x-z x@z';
// console.log(str.replace(/x[a-z-A-Z]z/g, '!'));
// //№2
// let str = 'xaz x$z x-z xcz x+z x%z x*z';
// console.log(str.replace(/x[$+-]z/g, '!'));

//Задание 111
// //№1
// let str = 'aaa bbb CCC DDD';
// console.log(str.replace(/[a-z]+/ig, '!'));

//Задание 112
// //№1
// let str = 'abc def xyz';
// console.log(str.replace(/^abc/g, '!'));
// //№2
// let str = 'abc def xyz';
// console.log(str.replace(/xyz$/g, '!'));

//Задание 113
// //№1
// let str = 'abc def xyz';
// console.log(str.replace(/\b/g, '#'));
// //№2
// let str = 'abc def xyz';
// console.log(str.replace(/\B/g, '+'));

//Задание 114
// //№1
// let str = `abc
// def
// ghi
// jkl`;
// console.log(str.replace(/$/gm, '!'));
// //№2
// let str = `abc
// def
// ghi
// jkl`;
// console.log(str.replace(/^/gm, '! '));
// //№3
// let str = `
// abc
// def
// ghi
// jkl
// `;
// console.log(str.replace(/^|s*$/g, '!'));
// //№4
// let str = `
// abc
// def
// ghi
// jkl
// `;
// console.log(str.replace(/^/gm, '! '));
// //№5
// let str = `
// abc
// def
// ghi
// jkl
// `;
// console.log(str.replace(/$/gm, '! '));
// //№6
// let str = `abc
// def
// ghi
// jkl`;
// console.log(str.replace(/^/gm, '    !'));

//Задание 115
// //№1
// let str = 'aeeea aeea aea axa axxa axxxa';
// console.log(str.replace(/a(e+|x+)a/g, '!'));
// //№2
// let str = 'aeeea aeea aea axa axxa axxxa';
// console.log(str.replace(/a(e{2}|x+)a/g, '!'));

//Задание 116
// //№1
// let str = 'a aa aaa aaaa aaaa';
// let reg = /a+/g;
// console.log(str.replace(reg, '!'));

//Задание 117
// //№1
// console.log(/^http:\/\//.test('https://ghdfghdfghdfgh'));
// //№2
// console.log(/^https:\/\//.test('https://ghdfghdfghdfgh'));
// //№3
// console.log(/txt$|html$|php$/.test('text.txt'));
// //№4
// console.log(/jpg$|jpeg$/.test('photo.jpg'));
// //№5
// console.log(/jpg$|jpeg$|png$/.test('photo.png'));
// //№6
// console.log(/^\d{1,12}$/.test('7777'));
// //№7
// console.log(/^\d{4}\-(0[1-9]|1[0-2])\-((0[1-9]|[12][0-9]|3[01]))$/.test('2005-07-01'));
// //№8
// console.log(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/.test('01.07.2005'));
// //№9
// console.log(/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/.test('01:30:17'));
// //№10
// console.log(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test('zhogindmitr@gmail.com'));
// //№11
// console.log(/^(?!:\/\/)([a-zA-Z0-9-_]{1,63}\.)+[a-zA-Z]{2,}$/.test('code.mu'));

//Задание 118
// //№1
// let str = '1 23 456 789';
// console.log(str.search(/\d{3}/));

//Задание 119
// //№1
// let str = '2025-12-31 12:59:59';
// console.log(str.split(/[-:\s]/));

//Задание 120
// //№1
// let str = 'aaa 123 bbb';
// console.log(str.match(/\d{3}/));
// //№2
// let str = 'aaa 123 bbb';
// let res = str.match(/\d/);
// console.log(res.index);

//Задание 121
// //№1
// let str = 'sss domain.ru zzz';
// let res = str.match(/([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})/);
// console.log(res[0]);
// console.log(res[1]);
// console.log(res[2]);
// console.log(res);
// //№2
// let str = '31.12.2025';
// let res = str.match(/(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})/);
// console.log(res[0]);
// console.log(res[1]);
// console.log(res[2]);
// console.log(res[3]);
// console.log(res);

//Задание 122
// //№1
// let str = 'site.ru sss site.com zzz site.net'; 
// let res = str.match(/([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})/g);
// console.log(res);
// //№2
// let str = 'a1b c34d x567z';
// let res = str.match(/\d+/g);
// let sum = res.reduce((acc, num) => acc + parseInt(num), 0)
// console.log(res);
// console.log("Сумма всех чисел в строке:",sum);

//Задание 123
// //№1
// let str = '12:37 15:48 17:59';
// let matches = str.matchAll(/(\d{2})\:(\d{2})/g);
// for (let match of matches) {
// 	console.log(match);
// }
// //№2
// let str = 'site.ru sss site.com zzz site.net';
// let matches = str.matchAll(/([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})/g);
// for (let match of matches) {
//     	console.log(match);
//     }

//Задание 124
// //№1
// let str = '12:37:57 15:48:58 17:59:59';
// let reg = /(\d{2})\:(\d{2})\:(\d{2})/g;
// let res;
// while (res = reg.exec(str)) {
// 	console.log(res); 
// }

//Задание 125
// //№1
// let str = '12:37 15:48 17:59';

// let reg = /\d+/g;
// reg.lastIndex = 5;

// let res;
// while (res = reg.exec(str)) {
// 	console.log(res);
// }

//Задание 126
// //№1
// let str = '12 34 56 78';
// let result = str.replace(/\b(\d)(\d)\b/g, (match, p1, p2) => p2 + p1);
// console.log(result);
// //№2
// let str = '31.12.2025';
// let res = str.replace(/(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})/g, '$3.$2.$1');
// console.log(res);

//Задание 127
// //№1
// let str = 'aaa [2] bbb [3] ccc [12] ddd';
// let result = str.replace(/\[(\d+)\]/g, (match, p1) => {
//     let doubled = parseInt(p1) * 2;
//     return `[${doubled}]`;
// });
// console.log(result);
// //№2
// let str = '123 456 789';
// let result = str.replace(/\d+/g, (match) => {
//     return match.split('').reverse().join('');
// });
// console.log(result);
// //№3
// let str = '31.12.2025 30.11.2024 29.10.2023';
// let result = str.replace(/(\d{2})\.(\d{2})\.(\d{4})/g, (match, day, month, year) => {
//     return `${year}-${month}-${day}`;
// });
// console.log(result);

//Задание 128
// //№1
// let str = 'a1b2c3';
// let result = str.replace(/\d/g, (match) => {
//     return match + match;
// });
// console.log(result);
// //№2
// let str = 'sss site.ru zzz site.com kkk';
// let result = str.replace(/(\b[a-zA-Z0-9-]+\.[a-zA-Z]{2,}\b)/g, (match) => {
//     return `<a href="http://${match}">${match}</a>`;
// });
// console.log(result);

//Задание 129
// //№1
// let str = 'aaa bbb ccc xyz';
// let res = str.replace(/(\w)\1\1/g, '!');
// console.log(res);
// //№2
// let str = 'a aa aaa aaaa aaaaa';
// let res = str.replace(/(\w)\1+/g, '!');
// console.log(res);
// //№3
// let str = 'aaa aaa bbb bbb ccc ddd';
// let res = str.replace(/\b(\w+)\s+\1\b/g, '!');
// console.log(res);

//Задание 130
// //№1
// let str = '12:59:59';
// let reg = /(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})/;
// let res = str.match(reg);
// console.log(res.groups);
// console.log(res.groups.hours);
// console.log(res.groups.minutes);
// console.log(res.groups.seconds);

//Задание 131
// //№1
// let str = '12:59:59 12:59:12 09:45:09';
// let res = str.replace(/\b(\d{2}):\d{2}:\1\b/g, '!');
// console.log(res);

//Задание 133
// //№1
// let str = 'func1() func2() func3()';
// let res = str.match(/\b\w+(?=\(\))/g);
// console.log(res);
// //№2
// let str = '<a href="" class="eee" id="zzz">';
// let res = str.match(/\b\w+(?==)/g);
// console.log(res);
// //№3
// let str = '$aaa $bbb $ccc xxxx';
// let res = str.match(/(?<=\$)\w+/g);
// console.log(res);

//Задание 134
// //№1
// let str = 'example.ru';
// let domains = 'ru|by|ua';
// let reg = new RegExp(`^[a-z]+\\.(${domains})$`);
// let res = reg.test(str);
// console.log(res);
// //№2
// let str = 'example.ru'; // Пример строки для тестирования
// let arr = ['ru', 'by', 'ua'];

// // Преобразуем массив в строку, разделенную символом |
// let domains = arr.join('|');

// // Создаем регулярное выражение с использованием новой строки
// let reg = new RegExp(`^[a-z]+\\.(${domains})$`);
// let res = reg.test(str);

// console.log(res); // Вывод: true или false в зависимости от значения str

//Задание 135
// //№1
// let str = '123 456 789';
// // Создаем регулярное выражение в виде строки
// let reg = new RegExp('[0-9]+', 'g');
// let res = str.replace(reg, '!');
// console.log(res);

//Задание 136
// //№1
// let str = 'x1y x12y x123y';
// // Создаем регулярное выражение в виде строки
// let reg = new RegExp('x\\d+y');
// let res = str.replace(reg, '!');
// console.log(res);
// //№2
// let str = 'x.y xay xby';
// let reg = new RegExp('x\\.y');
// let res = str.replace(reg, '!');
// console.log(res);
// //№3
// let str = 'x\\y';
// let reg = new RegExp('x\\\\y');
// let res = str.replace(reg, '!');
// console.log(res);