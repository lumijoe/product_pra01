// .telnum=電話番号
const telNum = "03-xxxx-xxx3";
document.querySelectorAll(".telNum").forEach(
    function(element) {
        element.innerHTML="<a href='tel:" + telNum + "'>" + telNum + "</a>";
    }
);

// .telinfo=電話情報
const telInfo = "受付時間 10:00~18:00 【土日祝定休日】";
document.querySelectorAll(".telInfo").forEach(
    function(element) {
        element.innerHTML=telInfo;
    }
);

document.addEventListener("DOMContentLoaded", function() {
    // テキストのリスト
    const newTexts = [
        "選ばれる理由",
        "サービス紹介",
        "導入までの流れ",
        "料金プラン",
        "よくあるご質問"
    ];

    // nav-item クラスを持つ全てのリスト項目を取得
    const navItems = document.querySelectorAll(".nav-item");

    // navItems をループしてテキストを変更
    navItems.forEach((item, index) => {
        // それぞれのリスト項目のテキストを新しいテキストに置き換える
        if (newTexts[index]) {
            item.querySelector("a").textContent = newTexts[index];
        }
    });
});