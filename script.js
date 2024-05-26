// .telnum=電話番号
const telNum = "177";
document.querySelectorAll(".telnum").forEach(
    function(element) {
        element.innerHTML="<a href='tel:" + telNum + "'>" + telNum + "</a>";
    }
);

// .telinfo=電話情報
const telInfo = "受付時間 10:00~18:00 【土日祝定休日】";
document.querySelectorAll(".telinfo").forEach(
    function(element) {
        element.innerHTML=telInfo;
    }
);