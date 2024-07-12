// 課題条件
// 変数(num)が3の倍数の場合： “3の倍数です”
// 変数(num)が5の倍数の場合： “5の倍数です”
// 変数(num)が3と5の倍数の場合： “3と5の倍数です”
// 　↑注：この場合これ「のみ」の表示⇒先に書く
// それ以外の場合： 変数(num)を出力する

// 手入力の場合
let num = 20;

//  チェック用
// ランダム変数を発生させる場合（取り敢えず1～10,000まで）
// let num = Math.floor(Math.random() * 10000) + 1;

// 変数(num)が3の倍数＆５の倍数の場合： “3と5の倍数です”
if ((num % 3 == 0) && (num % 5 == 0)) {
  console.log('3と5の倍数です');
//  チェック用
//  console.log(num);
}
// 変数(num)が3の倍数の場合： “3の倍数です”
else if (num % 3 == 0) {
  console.log('3の倍数です');
//  チェック用
//  console.log(num);
   }
// 変数(num)が5の倍数の場合： “5の倍数です”
else if (num % 5 == 0) {
  console.log('5の倍数です');
//  チェック用
//  console.log(num);
   }
// それ以外の場合： 変数(num)を出力する
else {
  console.log(num);
   }