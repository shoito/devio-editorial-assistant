/**
 * 旧エディタの記事編集ページで禁止されているMarkdownのコードブロック利用を検知してエラーメッセージを表示する
 */
(() => {
  // ブロックエディタ利用時は対象外。ブロックエディタでのMarkdownコードブロックは禁止しない。
  if (document.querySelector("body.block-editor-page")) {
    return
  }

  const notice = document.createElement("div")
  notice.classList.add("notice", "notice-warning", "hidden")
  notice.innerHTML = "<p>旧エディタで禁止されているMarkdownのコードブロック(```)が使われています。<strong>[言語タイプ]ソースコード[/言語タイプ]</strong>記法をご利用ください。</p>"

  const post = document.getElementById("post")
  post.parentElement.insertBefore(notice, post)

  const checkAndNotify = () => {
    const content = document.getElementById("content").value
    if (/```.+```/s.test(content)) {
      notice.classList.remove("hidden")
    } else {
      notice.classList.add("hidden")
    }
  }

  checkAndNotify()

  content.addEventListener("blur", (event) => {
    checkAndNotify()
  })
})()
