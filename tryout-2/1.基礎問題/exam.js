/************************************************************

Q1：配列の先頭に値を追加する関数を作成しましょう。

************************************************************/

function addValueToTopOfArray(arr, value) {
  arr.unshift(value);
  return arr;
}

test('Q1', addValueToTopOfArray([1, 2, 3, 4, 5], 0), [0, 1, 2, 3, 4, 5]);
test('Q1', addValueToTopOfArray([1, 2, 3, 4, 5], 10), [10, 1, 2, 3, 4, 5]);
test('Q1', addValueToTopOfArray(['one', 'two', 'three'], 'head'), [
  'head',
  'one',
  'two',
  'three',
]);

/************************************************************

Q2：配列内の全要素の任意のべき乗の配列を取得する関数を作成しましょう

************************************************************/

function calcArrayPow(arr, pow) {
  return arr.map((i) => i ** pow);
}

test('Q2', calcArrayPow([1, 2, 3, 4, 5], 2), [1, 4, 9, 16, 25]);
test('Q2', calcArrayPow([1, 2, 3, 4, 5], 3), [1, 8, 27, 64, 125]);
test('Q2', calcArrayPow([11, 22, 0, 33], 0), [1, 1, 1, 1]);

/************************************************************

Q3：
数値型の仮引数 start と end をとり、間に含まれる配列を返す関数 getBetweenNumber を定義しましょう。
start と end は index 番号を示し、返り値の配列に end 番目を含みません。また、元の配列を変化させてはいけません。

************************************************************/

const espanolNumber = [
  'cero',
  'uno',
  'dos',
  'tres',
  'cuatro',
  'cinco',
  'seis',
  'siste',
  'ocho',
];

function getBetweenNumber(start, end) {
  let res = [];
  for (let i = start; i < end; i++) {
    res.push(espanolNumber[i]);
  }
  return res;
}

test('Q3', getBetweenNumber(2, 5), ['dos', 'tres', 'cuatro']);
test('Q3', getBetweenNumber(4, 6), ['cuatro', 'cinco']);
test('Q3', getBetweenNumber(0, 0), []);
test('Q3', getBetweenNumber(0, espanolNumber.length), [
  'cero',
  'uno',
  'dos',
  'tres',
  'cuatro',
  'cinco',
  'seis',
  'siste',
  'ocho',
]);

/************************************************************

Q4：指定したキーの要素を削除する関数を作成しましょう

************************************************************/

function dropElem(obj, key) {
  let res = {};
  for (const k in obj) {
    if (k !== key) {
      res[k] = obj[k];
    }
  }
  return res;
}

test('Q4', dropElem({ tanaka: 17, yamada: 21, takahashi: 25 }, 'tanaka'), {
  yamada: 21,
  takahashi: 25,
});
test(
  'Q4',
  dropElem({ red: 'apple', yellow: 'banana', orange: 'orange' }, 'yellow'),
  { red: 'apple', orange: 'orange' }
);
test(
  'Q4',
  dropElem({ 1993: 'yamada', 2002: 'takahashi', 2019: 'tanaka' }, '2002'),
  { 1993: 'yamada', 2019: 'tanaka' }
);

/************************************************************

Q5：
あなたはアイドルグループのマネージャーを任されました！

オブジェクトの中に、メンバーカラーを key としたオブジェクトがあります。
その中はメンバーの名前と年齢がまとまっています。

このオブジェクトの中から25歳以上のメンバーの名前とメンバーカラーが知りたいです。

下記のテストコードを見て、テストをパスするように over25 という関数を作成しましょう。

************************************************************/

function over25(obj) {
  const res = [];
  let colorObj = { color: [] };
  let nameObj = { name: [] };
  for (const key in obj) {
    if (obj[key].age > 24) {
      colorObj.color.push(key);
      nameObj.name.push(obj[key].name);
    }
  }
  res.push(colorObj, nameObj);
  return res;
}

const member = {
  orange: {
    name: 'Arisa',
    age: 20,
  },
  blue: {
    name: 'Marina',
    age: 25,
  },
  purple: {
    name: 'Moe',
    age: 26,
  },
};

const expect = [{ color: ['blue', 'purple'] }, { name: ['Marina', 'Moe'] }];

const member2 = {
  red: {
    name: 'Riko',
    age: 25,
  },
  yellow: {
    name: 'Miyu',
    age: 22,
  },
  purple: {
    name: 'Airi',
    age: 18,
  },
};

const expect2 = [{ color: ['red'] }, { name: ['Riko'] }];

test('Q5', over25(member), expect);
test('Q5', over25(member2), expect2);

/************************************************************

Q6：任意の個数の数値型の引数をとり、その数の合計を数値型で返す関数getSumを定義しましょう。

************************************************************/

// ここにコードを書きましょう

test('Q6', getSum(1), 1);
test('Q6', getSum(1, 3), 4);
test('Q6', getSum(1, 3, 5, 7, 9, 11), 36);
test('Q6', getSum(9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20), 174);
