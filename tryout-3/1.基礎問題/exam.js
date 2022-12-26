/************************************************************

Q1：配列の任意のindexの値を更新する関数を作成しましょう

************************************************************/

const arr = [1, 2, 3, 4, 5];

function updateArrayValue(arr, value, index) {
  const updateArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i == index) {
      updateArray.push(value);
    } else updateArray.push(arr[i]);
  }
  return updateArray;
}

test('Q1', updateArrayValue(arr, 8, 2), [1, 2, 8, 4, 5]);
test('Q1', updateArrayValue(arr, 0, 0), [0, 2, 3, 4, 5]);
test('Q1', updateArrayValue(arr, 1, 4), [1, 2, 3, 4, 1]);

/************************************************************

Q2：配列の任意のindexの値を削除する関数を作成しましょう

************************************************************/

const arr2 = [1, 2, 3, 4, 5];

function dropArrayValue(arr, index) {
  const delarray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) {
      delarray.push(arr[i]);
    }
  }
  return delarray;
}

test('Q2', dropArrayValue(arr2, 2), [1, 2, 4, 5]);
test('Q2', dropArrayValue(arr2, 3), [1, 2, 3, 5]);
test('Q2', dropArrayValue(arr2, 0), [2, 3, 4, 5]);

/************************************************************

Q3：
文字列の中から指示された単語を取得して歌詞にします。
数値型の仮引数 start と end をとり、間に含まれる単語が格納された 配列 を返す関数 getLyrics を定義しましょう。
返される配列は文字列の start 番目の次の単語から end 番目までを含みます。

************************************************************/

function getLyrics(start, end) {
  let string = myFavoriteThings.split(' ');
  const array = [];
  for (let i = start; i < end; i++) {
    array.push(string[i]);
  }
  return array;
}

let myFavoriteThings =
  'Raindrops on roses and whiskers on kittens Bright copper kettles and warm woolen mittens Brown paper packages tied up with strings These are a few of my favorite things';

test('Q3', getLyrics(0, 5), ['Raindrops', 'on', 'roses', 'and', 'whiskers']);
test('Q3', getLyrics(6, 9), ['kittens', 'Bright', 'copper']);
test('Q3', getLyrics(21, 29), [
  'These',
  'are',
  'a',
  'few',
  'of',
  'my',
  'favorite',
  'things',
]);
test('Q3', getLyrics(0, 0), []);

/************************************************************

Q4：指定したキーの値を更新する関数を作成しましょう。
キーが存在しない場合はキーとバリューのペアを追加しましょう

************************************************************/

const obj = { tanaka: 17, yamada: 21, takahashi: 25 };

function updateElem(obj, key, value) {
  const ob = {};
  for (const k in obj) {
    if (key == k) {
      ob[key] = value;
    } else {
      ob[key] = value;
    }
    ob[k] = obj[k];
  }
  return ob;
}

test('Q4', updateElem(obj, 'tanaka', 19), {
  tanaka: 19,
  yamada: 21,
  takahashi: 25,
});
test('Q4', updateElem(obj, 'iida', 32), {
  tanaka: 17,
  yamada: 21,
  takahashi: 25,
  iida: 32,
});
test('Q4', updateElem(obj, 'yamada', 10), {
  tanaka: 17,
  yamada: 10,
  takahashi: 25,
});

/************************************************************

Q5：2つのオブジェクトを結合する関数を作成しましょう

************************************************************/

const obj1 = { tanaka: 17, yamada: 21, takahashi: 25 };
const obj2 = { saitou: 38, shimoda: 25 };

function mergeElem(obj1, obj2) {
  // ここに処理を記述
}

test('Q5', mergeElem(obj1, obj2), {
  tanaka: 17,
  yamada: 21,
  takahashi: 25,
  saitou: 38,
  shimoda: 25,
});
test('Q5', mergeElem(obj2, obj1), {
  saitou: 38,
  shimoda: 25,
  tanaka: 17,
  yamada: 21,
  takahashi: 25,
});
test('Q5', mergeElem({ miwa: 10 }, { nakata: 83 }), { miwa: 10, nakata: 83 });

/************************************************************

Q6：
あなたはフルーツの管理人です！

ここでは下記のオブジェクト fruitBasket を使っていきます。

price: 各フルーツの1つの値段

color: 各フルーツにどんな種類があるかを色で表しています

stock: 各フルーツの種類（色）ごとに在庫がいくつあるかを表しています

引数にフルーツの名前を取り、その stock を返してくれる関数 getStock を作りましょう。

もし情報にないフルーツが引数に入ってきた場合は "今はありません" と返してください。

また、そのフルーツの stock の中に1つでも0が含まれていた場合、 "今はストックが十分ではありません" と返してください。

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
  //  ここに処理を記述
}

// ここ以下は変更を加えないでください
fruitBasket.grape.stock.green = 0;
test('Q6', getStock('apple'), { red: 10, green: 5 });
test('Q6', getStock('orange'), '今はありません');
test('Q6', getStock('grape'), '今はストックが十分ではありません');

fruitBasket.grape.stock.green = 2;
test('Q6', getStock('grape'), { purple: 3, green: 2 });
