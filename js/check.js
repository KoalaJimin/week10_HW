function updateMemo() {
  var memoText = document.getElementById("memoText").value;

  // 현재 URL에서 메모 데이터 가져오기
  var memoData = decodeURIComponent(window.location.hash.substring(1));
  var memo = JSON.parse(memoData);

  // 메모 수정
  memo.text = memoText;

  // 수정된 메모 데이터를 인코딩하여 이전 페이지로 전달
  var encodedMemo = encodeURIComponent(JSON.stringify(memo));
  window.location.href = "memo-board.html#" + encodedMemo;
}

window.onload = function () {
  // URL에서 메모 데이터 가져와서 textarea에 설정
  var memoData = decodeURIComponent(window.location.hash.substring(1));
  var memo = JSON.parse(memoData);
  document.getElementById("memoText").value = memo.text;
};
