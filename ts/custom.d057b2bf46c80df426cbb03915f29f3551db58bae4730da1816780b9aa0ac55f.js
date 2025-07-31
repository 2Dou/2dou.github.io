(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const addSpacesBetweenChineseAndEnglish = (text) => {
      return text.replace(/([\u4e00-\u9fa5])(\w)/g, "$1 $2").replace(/(\w)([\u4e00-\u9fa5])/g, "$1 $2");
    };
    const ele = document.getElementsByTagName("main").item(0);
    if (ele) {
      ele.innerHTML = addSpacesBetweenChineseAndEnglish(ele.innerHTML);
    }
    ;
  });
})();
