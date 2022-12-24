/************************************************************

Q1：与えられたデータセット内の平均身長を取得する関数を作成しましょう

************************************************************/

const value_set = [
  { name: 'Tanaka', height: 179 },
  { name: 'Doi', height: 155 },
  { name: 'Takahashi', height: 189 },
  { name: 'Miyata', height: 168 },
  { name: 'Sakamoto', height: 180 },
  { name: 'Ito', height: 152 },
  { name: 'Kawada', height: 177 },
  { name: 'Koyama', height: 169 },
];

const value_set2 = [
  { name: 'Hisoka', height: 195 },
  { name: 'Morooka', height: 145 },
  { name: 'Hasegawa', height: 168 },
  { name: 'Munemoto', height: 171 },
  { name: 'Akiba', height: 178 },
  { name: 'Yamahara', height: 166 },
];

const value_set3 = [
  { name: 'Mayama', height: 165 },
  { name: 'Saito', height: 170 },
  { name: 'Yamaguchi', height: 175 },
];

function getAverage(value_set) {
  let res;
  let allNum = 0;
  for (const item of value_set) {
    allNum += item.height;
  }
  res = allNum / value_set.length;
  return res;
}

test('Q1', getAverage(value_set), 171.125);
test('Q1', getAverage(value_set2), 170.5);
test('Q1', getAverage(value_set3), 170);

/************************************************************

Q2：入力された文字列から指定されたn-gramの配列を取得する関数を作成しましょう。

例) “今日の晩御飯はカレーだ。”
1-gram: [”今”, “日”, “の”, “晩”, “御”, “飯”, “は”, “カ”, “レ”, “ー”, “だ”, “。”]
2-gram: [”今日”, “日の”, “の晩”, ・・・・, “レー”, “ーだ”, “だ。”] 

************************************************************/

const str = '今日の晩御飯はカレーだ。';
const str2 = '明日の朝は早い';

function getNgram(str, ngram) {
  const res = [];
}

test('Q2', getNgram(str, 1), [
  '今',
  '日',
  'の',
  '晩',
  '御',
  '飯',
  'は',
  'カ',
  'レ',
  'ー',
  'だ',
  '。',
]);
test('Q2', getNgram(str, 2), [
  '今日',
  '日の',
  'の晩',
  '晩御',
  '御飯',
  '飯は',
  'はカ',
  'カレ',
  'レー',
  'ーだ',
  'だ。',
]);
test('Q2', getNgram(str2, 3), [
  '明日の',
  '日の朝',
  'の朝は',
  '朝は早',
  'は早い',
]);

/************************************************************

Q3：
オブジェクトとコールバック関数を引数にとる、Array.map のような高階関数 objectMap を作成しましょう
コールバック関数は引数にキーとバリューを取り、Object の返り値を返すものとします。

************************************************************/

const obj = { Tanaka: 60, Yamada: 72, Takahashi: 49, Hisoka: 95 };
const obj2 = { Minato: 55, Sawada: 88 };

function objectMap(obj, someFunc) {
  // ここに処理を記述
}

function addFive(key, value) {
  const obj = {};
  obj[key] = value + 5;
  return obj;
}

function toUpperLetters(key, value) {
  const obj = {};
  obj[key.toUpperCase()] = value;
  return obj;
}

test('Q3', objectMap(obj, addFive), {
  Tanaka: 65,
  Yamada: 77,
  Takahashi: 54,
  Hisoka: 100,
});
test('Q3', objectMap(obj, toUpperLetters), {
  TANAKA: 60,
  YAMADA: 72,
  TAKAHASHI: 49,
  HISOKA: 95,
});
test('Q3', objectMap(obj2, addFive), { Minato: 60, Sawada: 93 });
test('Q3', objectMap(obj2, toUpperLetters), { MINATO: 55, SAWADA: 88 });

/************************************************************

Q4：
引数に配列取り、大きい順に並び替え、4番目の要素を返す関数 bubbleSort を定義しましょう。
バブルソートで実装してください。

************************************************************/

// ここに処理を記述

test('Q4', bubbleSort([6, 9, 2, 1, 0, 3, 7]), 3);
test('Q4', bubbleSort([7, 10, 3, 1, -6]), 1);
test('Q4', bubbleSort([44, 1, 98, 20, 45, 49, 4]), 44);

/************************************************************

Q5：
引数に配列取り、大きい順に並び替え、4番目の要素を返す関数quickSortを定義しましょう。
クイックソートで実装してください。

************************************************************/

// ここに処理を記述

test('Q5', quickSort([6, 9, 2, 1, 0, 3, 7]), 3);
test('Q5', quickSort([7, 10, 3, 1, -6]), 1);
test('Q5', quickSort([44, 1, 98, 20, 45, 49, 4]), 44);
