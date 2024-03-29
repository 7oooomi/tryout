/************************************************************

Q1：配列の末尾に値を追加する関数を作成しましょう。

************************************************************/

function addValueToEndOfArray(arr, value) {
  arr.push(value);
  return arr;
}

test('Q1', addValueToEndOfArray([1, 2, 3, 4, 5], 6), [1, 2, 3, 4, 5, 6]);
test('Q1', addValueToEndOfArray([1, 2, 3, 4, 5], 10), [1, 2, 3, 4, 5, 10]);
test('Q1', addValueToEndOfArray(['red', 'blue', 'yellow'], 'orange'), [
  'red',
  'blue',
  'yellow',
  'orange',
]);

/************************************************************

Q2：配列の任意のindexの値を削除する関数を作成しましょう

************************************************************/

function dropArrayValue(arr, index) {
  arr.splice(index, 1);
  return arr;
}

test('Q2', dropArrayValue([1, 2, 3, 4, 5], 2), [1, 2, 4, 5]);
test('Q2', dropArrayValue([1, 2, 3, 4, 5], 3), [1, 2, 3, 5]);
test('Q2', dropArrayValue([1, 2, 3, 4, 'five'], 4), [1, 2, 3, 4]);

/************************************************************

Q3：数値型の配列を引数にとり、配列の要素が3の倍数の場合は"feeling"、
5の倍数の場合には”"good"、両方を満たす場合には"Feeling Good"に
置き換えられた配列を返す関数feelingGoodを定義しましょう。

************************************************************/

// ここに処理を記述
function feelingGood(arr) {
  const array = [];
  for (const item of arr) {
    if (item % 3 === 0 && item % 5 === 0) {
      array.push('Feeling Good');
    } else if (item % 3 === 0) {
      array.push('feeling');
    } else if (item % 5 === 0) {
      array.push('good');
    } else {
      array.push(item);
    }
  }
  return array;
}

const toThree = [1, 2, 3];
const toThreeResult = [1, 2, 'feeling'];

const toSix = [1, 2, 3, 4, 5, 6];
const toSixResult = [1, 2, 'feeling', 4, 'good', 'feeling'];

const toTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const toTenResult = [
  1,
  2,
  'feeling',
  4,
  'good',
  'feeling',
  7,
  8,
  'feeling',
  'good',
];

const toThirty = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
const toThirtyResult = [
  1,
  2,
  'feeling',
  4,
  'good',
  'feeling',
  7,
  8,
  'feeling',
  'good',
  11,
  'feeling',
  13,
  14,
  'Feeling Good',
  16,
  17,
  'feeling',
  19,
  'good',
  'feeling',
  22,
  23,
  'feeling',
  'good',
  26,
  'feeling',
  28,
  29,
  'Feeling Good',
];

test('Q3', feelingGood(toThree), toThreeResult);
test('Q3', feelingGood(toSix), toSixResult);
test('Q3', feelingGood(toTen), toTenResult);
test('Q3', feelingGood(toThirty), toThirtyResult);

/************************************************************

Q4：オブジェクトにキーとバリューで指定した要素を追加する関数を作成しましょう

************************************************************/

const obj = { tanaka: 17, yamada: 21, takahashi: 25 };

function addElem(obj, key, value) {
  obj[key] = value;
  return obj;
}

test('Q4', addElem(obj, 'iida', 32), {
  tanaka: 17,
  yamada: 21,
  takahashi: 25,
  iida: 32,
});

/************************************************************

Q5：オブジェクト内のすべての要素の任意のべき乗を求める関数を作成しましょう

************************************************************/

function calcElemPow(obj, pow) {
  let num;
  for (const key in obj) {
    num = obj[key] ** pow;
    obj[key] = num;
  }
  return obj;
}

test('Q5', calcElemPow({ tanaka: 17, yamada: 21, takahashi: 25 }, 2), {
  tanaka: 289,
  yamada: 441,
  takahashi: 625,
});
test('Q5', calcElemPow({ tanaka: 3, yamada: 2, takahashi: 1 }, 3), {
  tanaka: 27,
  yamada: 8,
  takahashi: 1,
});
test('Q5', calcElemPow({ tanaka: 17, yamada: 21, takahashi: 25 }, 1), {
  tanaka: 17,
  yamada: 21,
  takahashi: 25,
});

/************************************************************

Q6：
あなたはフルーツの管理人です！

ここでは下記のオブジェクト`fruitBasket`を使っていきます。

`price`: 各フルーツの1つの値段

`color`: 各フルーツにどんな種類があるかを色で表しています

`stock`: 各フルーツの種類（色）ごとに在庫がいくつあるかを表しています

引数にフルーツの名前を取り、その`stock`を返してくれる関数`getStock`を作りましょう。

もし情報にないフルーツが引数に入ってきた場合は`"今はありません"`と返してください。

また、そのフルーツの`stock`の中に1つでも`0`が含まれていた場合、`"今はストックが十分ではありません"`と返してください。

************************************************************/

const fruitBasket = {
  apple: {
    price: 120,
    color: ['red', 'green'],
    stock: {
      red: 10,
      green: 5,
    },
  },
  grape: {
    price: 1000,
    color: ['purple', 'green'],
    stock: {
      purple: 3,
      green: 0,
    },
  },
  banana: {
    price: 100,
    color: ['yellow'],
    stock: {
      yellow: 50,
    },
  },
};

function getStock(fruits) {
  if (!fruitBasket[fruits]) {
    return '今はありません';
  }
  for (const item of Object.values(fruitBasket[fruits].stock)) {
    if (item === 0) {
      return '今はストックが十分ではありません';
    }
  }
  return fruitBasket[fruits].stock;
}

// ここ以下は変更を加えないでください
fruitBasket.grape.stock.green = 0;
test('Q6', getStock('apple'), { red: 10, green: 5 });
test('Q6', getStock('orange'), '今はありません');
test('Q6', getStock('grape'), '今はストックが十分ではありません');

fruitBasket.grape.stock.green = 2;
test('Q6', getStock('grape'), { purple: 3, green: 2 });
