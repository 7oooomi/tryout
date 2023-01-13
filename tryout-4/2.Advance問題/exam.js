/************************************************************

Q1：与えられたデータセット内の身長の中央を取得する関数を作成しましょう。

************************************************************/

const value_set = [
  { name: 'Doi', height: 155 },
  { name: 'Takahashi', height: 189 },
  { name: 'Miyata', height: 168 },
  { name: 'Sakamoto', height: 180 },
  { name: 'Ito', height: 152 },
  { name: 'Kawada', height: 177 },
  { name: 'Koyama', height: 169 },
];

function getMedian(value_set) {
  let median = [];
  for (const i of value_set) {
    median.push(i.height);
  }
  median.sort((a, b) => a - b);

  return median[(median.length - 1) / 2];
}

test('Q1', getMedian(value_set), 169);
value_set.push({ name: 'Isono', height: 172 });
value_set.push({ name: 'Mita', height: 193 });
test('Q1', getMedian(value_set), 172);

/************************************************************

Q2：引数に文字列を1つ取り、引数の文字列の大文字は小文字に、
小文字は大文字にした文字列を返す関数getStringを作りましょう。

************************************************************/

const str = 'I am instRucTor at Ms.enginEer';

function getString(str) {
  let strArr = str.split('');
  const res = [];
  for (const i of strArr) {
    if (i === i.toUpperCase()) {
      res.push(i.toLowerCase());
    } else {
      res.push(i.toUpperCase());
    }
  }
  return res.join('');
}

test('Q2', getString(str), 'i AM INSTrUCtOR AT mS.ENGINeER');
test('Q2', getString('lIGHT'), 'Light');
test('Q2', getString('dafKadkeW'), 'DAFkADKEw');

/************************************************************

Q3：
パスワードの入力チェック用に、文字列と任意の数のコールバック関数を引数に持つ高階関数 passwordCheck を作成しましょう。
・パスワードにエラーがない場合は true を返します。
・パスワードにエラーがある場合は false を返します。

************************************************************/

const password = 'aaad32!dda';

function passwordCheck(string, ...func) {
  let res = true;
  for (const fc of func) {
    if (fc(string) == false) {
      res = false;
    }
  }
  return res;
}

function isTooShort(password) {
  if (password.length < 7) {
    console.log('password is too short!');
    return false;
  }
  return true;
}

function containsInvalidCharacters(password) {
  const invalid_characters = [' ', '!'];
  for (let character of invalid_characters) {
    if (password.indexOf(character) !== -1) {
      console.log('Cannot use "' + character + '" in password');
      return false;
    }
  }
  return true;
}

test('Q3', passwordCheck(password, isTooShort), true);
test(
  'Q3',
  passwordCheck(password, isTooShort, containsInvalidCharacters),
  false
);

/************************************************************

Q4：
第一引数にリストのデータ、第二引数に削除したいデータをとる関数 removeLinkedList を作成してください。
引数に渡されたデータの中から削除をして、最終的にリスト全体を返してください。

************************************************************/

const removeLinkedList = (list, data) => {
  // ここに処理を記述
};

const linkedList2 = {
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

const resultLinkedList2 = {
  head: {
    value: 0,
    next: {
      value: 6,
      next: {
        value: 2,
        next: null,
      },
    },
  },
};

const linkedList3 = {
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

const resultLinkedList3 = {
  head: {
    value: 72,
    next: {
      value: 60,
      next: {
        value: 8,
        next: null,
      },
    },
  },
};

test('Q4', removeLinkedList(linkedList2, 3), resultLinkedList2);
test('Q4', removeLinkedList(linkedList3, 20), resultLinkedList3);

/************************************************************

Q5：
第一引数に二分木のデータ、第二引数に検索したいデータをとる関数 searchTree を作成してください。
引数に渡された二分木の中からデータを検索して、もしあれば true を、なければ false を返してください。

************************************************************/

const searchTree = (list, data) => {
  // ここに処理を記述
};

const tree = {
  value: 6,
  left: {
    value: 2,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 8,
    left: null,
    right: {
      value: 10,
      left: null,
      right: null,
    },
  },
};

test('Q5', searchTree(tree, 5), true);
test('Q5', searchTree(tree, 4), false);
test('Q5', searchTree(tree, 6), true);
test('Q5', searchTree(tree, 10), true);
test('Q5', searchTree(tree, 20), false);
