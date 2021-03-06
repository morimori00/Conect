// 年齢
var ageData = [0,1,2,3,4,5,6,7,8,9,10];
ageData.push(11,12,13,14,15,16,17,18,19,20);
ageData.push(21,22,23,24,25,26,27,28,29,30);
ageData.push(31,32,33,34,35,36,37,38,39,40);
ageData.push(41,42,43,44,45,46,47,48,49,50);
ageData.push(51,52,53,54,55,56,57,58,59,60);
ageData.push(61,62,63,64,65,66,67,68,69,70);
ageData.push(71,72,73,74,75,76,77,78,79,80);
ageData.push(81,82,83,84,85,86,87,88,89,90);
ageData.push(91,92,93,94,95,96,97,98,99,100);
ageData.push(101,102,103,104,105,106,107,108,109,110);
ageData.push(111,112,113,114,115,116,117,118,119,120);

// 都道府県
var prefectureData = ['１組','２組','３組','４組','５組','６組','７組',
'先生'];

list = {
    makeAgeList: function(id) {        
        // 要素削除
        $(id).empty();
        // リストを作成
        var dom = "<option value='' selected>- age -</option>";
        for (var i = 0; i < ageData.length; i++) {
            dom = dom + "<option value='" + ageData[i] + "'>" + ageData[i] + "</option>";
        }
        // 要素設定
        $(id).append(dom);
    },
    makePrefectureList: function(id) {
        // 要素削除
        $(id).empty();
        // リストを作成
        var dom = "<option value='' selected>- クラスを選択 -</option>";
        for (var i = 0; i < prefectureData.length; i++) {
            dom = dom + "<option value='" + prefectureData[i] + "'>" + prefectureData[i] + "</option>";
        }
        // 要素設定
        $(id).append(dom);
    }
};