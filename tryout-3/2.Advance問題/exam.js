
/************************************************************

Q1：与えられたデータセット内の最大身長を取得する関数を作成しましょう。

************************************************************/

const value_set = [
    {"name": "Tanaka", "height": 179},
    {"name": "Doi", "height": 155},
    {"name": "Takahashi", "height": 189},
    {"name": "Miyata", "height": 168},
    {"name": "Sakamoto", "height": 180},
    {"name": "Ito", "height": 152},
    {"name": "Kawada", "height": 177},
    {"name": "Koyama", "height": 169}
];

function getMax(value_set) {
    // ここに処理を記述
}

test('Q1', getMax(value_set), 189);
value_set[2].height = 170;
test('Q1', getMax(value_set), 180);





/************************************************************

Q2：入力された文字列を2,3,5,7文字目を取り出して連結した文字列を返却する関数を作成しましょう

************************************************************/

function getString(str) {
    // ここに処理を記述
}

test('Q2', getString("Ms.Engineerのトライアウト"), "s.ni");
test('Q2', getString("エンジニアリングでは再現性が大切"), "ンジアン");
test('Q2', getString("abcdefghijk"), "bceg");





/************************************************************

Q3：
オブジェクトとコールバック関数を引数にとる、Array.filter のような高階関数
objectFilter を作成しましょう。
コールバック関数は引数にキーとバリューを取り、boolean の返り値を返すものとします。

************************************************************/

const obj = { 'name': '田中花子', 'age': 24, 'height': 160, 'hobby': '紅茶' };

function objectFilter(obj, someFunc) {
    // ここに処理を記述
}

function isNumber(key, value) {
    if (typeof value === 'number') {
        return true;
    }
    return false;
}

function isString(key, value) {
    if (typeof value === 'string') {
        return true;
    }
    return false;
}

test('Q3', objectFilter(obj, isNumber), { age: 24, height: 160 });
test('Q3', objectFilter(obj, isString), { name: '田中花子', hobby: '紅茶' });





/************************************************************

Q4：
引数に配列取り、小さい順から並び替えた配列を返す関数quickSortを定義しましょう。
クイックソートで実装してください。

************************************************************/

// ここに処理を記述

test('Q4', quickSort([6, 9, 2, 5, 4, 1, 0, 3, 7, 8]), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
test('Q4', quickSort([9, 12, 4, 10]), [4, 9, 10, 12]);
test('Q4', quickSort([-30, 3, 12, 82, -1]), [-30, -1, 3, 12, 82]);





/************************************************************

Q5：
第一引数に二分木のデータ、第二引数に追加したいデータをとる関数 insert を作成してください。
引数に渡された二分木にデータを追加して、最終的にそれを返してください。

************************************************************/

const insertTree = (list, data) => {
    // ここに処理を記述
}

const tree = {
    value: 6,
    left: {
        value: 2,
        left: {
            value: 1,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 8,
        left: null,
        right: {
            value: 10,
            left: null,
            right: null
        }
    }
}

const resultTree = {
    value: 6,
    left: {
        value: 2,
        left: {
            value: 1,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 8,
        left: null,
        right: {
            value: 10,
            left: null,
            right: {
                value: 12,
                left: null,
                right: null
            }
        }
    }
}

const tree2 = {
    value: 7,
    left: {
        value: 4,
        left: {
            value: 3,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 15,
        left: null,
        right: null
    }
}

const resultTree2 = {
    value: 7,
    left: {
        value: 4,
        left: {
            value: 3,
            left: null,
            right: null
        },
        right: {
            value: 5,
            left: null,
            right: null
        }
    },
    right: {
        value: 15,
        left: {
            value: 10,
            left: null,
            right: null
        },
        right: null
    }
}

test('Q5', insertTree(tree, 12), resultTree);
test('Q5', insertTree(tree2, 10), resultTree2);