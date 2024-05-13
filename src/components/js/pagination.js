// DOM 선택
const links = document.querySelectorAll(".pagination a");

// 함수 구현
const handleLinkClick = (event) => {
  // 기본 동작을 취소합니다.
  event.preventDefault();

  links.forEach((el) => {
    el.classList.remove("is-selected");
    el.removeAttribute("aria-current");
  });

  event.target.classList.add("is-selected");
  event.target.setAttribute("aria-current", "page");
};

// a 요소에 이벤트를 바인딩
links.forEach((link) => {
  link.addEventListener("click", handleLinkClick);
});
