//일기 작성 페이지로 이동
function goToInputPage() {
  window.location.href = "input.html";
}

//타일 탭으로 변경
function goToTilePage() {
  window.location.href = "main.html";
}
function displayMemos(memos) {
  var memoBoard = document.querySelector(".memo-board");
  memoBoard.innerHTML = "";

  memos.forEach(function (memo) {
    var memoItem = document.createElement("div");
    memoItem.classList.add("memo-item");

    var memoDate = document.createElement("div");
    memoDate.classList.add("memo-date");
    memoDate.textContent = memo.date;

    /*var memoText = document.createElement("div");
    memoText.classList.add("memo-text");
    memoText.textContent = memo.text;*/

    memoItem.appendChild(memoDate);
    //memoItem.appendChild(memoText);

    memoBoard.appendChild(memoItem);
  });
}

function getSavedMemos() {
  var savedMemos = localStorage.getItem("memos");
  return savedMemos ? JSON.parse(savedMemos) : [];
}

function init() {
  // 메모 생성 칸에서 전달된 메모 내용 가져오기
  var memoText = decodeURIComponent(window.location.hash.substring(1));

  if (memoText) {
    var memos = getSavedMemos();
    var currentDate = new Date();
    //var dateString = currentDate.getFullYear();
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var date = currentDate.getDate();
    var day = currentDate.getDay();

    function getTodayLabel() {
      var week = new Array(
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
      );

      var today = new Date().getDay();
      var todayLabel = week[today];

      return todayLabel;
    }

    var dateString =
      year + "년 " + month + "월 " + date + "일 " + getTodayLabel();

    memos.push({ text: memoText, date: dateString });
    localStorage.setItem("memos", JSON.stringify(memos));
  }

  // 페이지 로드 시 저장된 메모들 표시
  var memos = getSavedMemos();
  displayMemos(memos);
}

function clearMemos() {
  localStorage.removeItem("memos");
  displayMemos([]);
}

function onWhiteBoxClick() {
  const whiteBoxId = this.dataset.id;
  window.location.href = "/pages/check.html?id=" + whiteBoxId;
}

// 메모 삭제
function deleteMemo(index) {
  var memos = getSavedMemos();
  memos.splice(index, 1);
  localStorage.setItem("memos", JSON.stringify(memos));
  displayMemos(memos);
}

// 메모 수정
function showEditForm(index, text) {
  var memoItems = document.querySelectorAll(".memo-item");
  var memoItem = memoItems[index];
  var memoText = memoItem.querySelector(".memo-text");
  var memoDate = memoItem.querySelector(".memo-date");
  var memoControls = memoItem.querySelector(".memo-controls");
  var editForm = memoItem.querySelector(".memo-edit-form");
  var textarea = editForm.querySelector("textarea");

  memoText.style.display = "none";
  memoDate.style.display = "none";
  memoControls.style.display = "none";
  editForm.style.display = "block";

  textarea.value = text;
  textarea.focus();
}

function updateMemo(index, newText) {
  var memos = getSavedMemos();
  var memo = memos[index];
  memo.text = newText;
  localStorage.setItem("memos", JSON.stringify(memos));
  displayMemos(memos);
}

init();

// 새로고침 시 메모 초기화
/*function clearMemos() {
    localStorage.removeItem("memos");
    displayMemos([]);
  }
  window.addEventListener("beforeunload", function () {
    clearMemos();
  });*/

//일기 작성 페이지로 이동
function goToInputPage() {
  window.location.href = "input.html";
}

//리스트 탭으로 변경
function goToListPage() {
  window.location.href = "mainList.html";
}

//로그아웃
function goToLoginPage() {
  window.location.href = "login.html";
}
