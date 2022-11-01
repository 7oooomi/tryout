/************************************************************

Q1：任意の個数の数値型の引数をとり、その数の合計を数値型で返す関数getSumを定義しましょう。

************************************************************/

function getSum(...theArgs) {
  let total = 0;
  for (const num of theArgs) {
    total += num;
  }
  return total;
}

test('Q1', getSum(1), 1);
test('Q1', getSum(1, 3), 4);
test('Q1', getSum(1, 3, 5, 7, 9, 11), 36);
test('Q1', getSum(9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20), 174);

/************************************************************

Q2：入力された文字列を逆順にする関数を作成しましょう

************************************************************/

function getReverse(str) {
  let reverseStr = str.split('').reverse().join('');
  return reverseStr;
}

test('Q2', getReverse('ーシクタ'), 'タクシー');
test('Q2', getReverse('トマト'), 'トマト');
test('Q2', getReverse('ラベンダー'), 'ーダンベラ');
test('Q2', getReverse('UPC'), 'CPU');

/************************************************************

Q3：
Array.filter, Array.map を利用して配列の偶数要素のみを抽出した配列に対して
各要素を二乗した配列を返す関数を作成しましょう

************************************************************/

function squareForEvenNumber(arr) {
  // ここに処理を記述
}

test('Q3', squareForEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]), [4, 16, 36, 64]);
test('Q3', squareForEvenNumber([1, 3, 5]), []);
test('Q3', squareForEvenNumber([2, 4, 6]), [4, 16, 36]);

/************************************************************

Q4：
引数に配列を取り、小さい順から並び替えた配列を返す関数 bubbleSort を定義しましょう。
バブルソートで実装してください。

************************************************************/

// ここに処理を記述

test(
  'Q4',
  bubbleSort([6, 9, 2, 5, 4, 1, 0, 3, 7, 8]),
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
);
test('Q4', bubbleSort([3, 1, 0, 2]), [0, 1, 2, 3]);
test('Q4', bubbleSort([7, 39, 22, 13]), [7, 13, 22, 39]);

/************************************************************

Q5：
第一引数にリストのデータ、第二引数に追加するデータの前の値、
第三引数に追加したいデータをとる関数`insertLinkedList`を作成してください。
第二引数に渡されたデータの次に、第三引数に渡されたデータを連結するようにして、
最終的にリスト全体を返してください。

************************************************************/

const insertLinkedList = (list, data, addData) => {
  // ここに処理を記述
};

const linkedList = {
  head: {
    value: 0,
    next: {
      value: 3,
      next: {
        value: 2,
        next: null,
      },
    },
  },
};

const resultLinkedList = {
  head: {
    value: 0,
    next: {
      value: 3,
      next: {
        value: 6,
        next: {
          value: 2,
          next: null,
        },
      },
    },
  },
};

const linkedList2 = {
  head: {
    value: 72,
    next: {
      value: 20,
      next: {
        value: 60,
        next: {
          value: 8,
          next: null,
        },
      },
    },
  },
};

const resultLinkedList2 = {
  head: {
    value: 72,
    next: {
      value: 20,
      next: {
        value: 60,
        next: {
          value: 8,
          next: {
            value: 15,
            next: null,
          },
        },
      },
    },
  },
};

test('Q5', insertLinkedList(linkedList, 3, 6), resultLinkedList);
test('Q5', insertLinkedList(linkedList2, 8, 15), resultLinkedList2);
