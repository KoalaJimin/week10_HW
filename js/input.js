// 메모 작성
function createMemo() {
  var memoTextarea = document.querySelector(".memoText");
  var memoText = memoTextarea.value.trim();

  if (memoText !== "") {
    // 메모 게시판 페이지로 이동
    window.location.href = "main.html#" + encodeURIComponent(memoText);
  }
}
