/**
 * 旧エディタの記事編集ページのタグを表示オプションから未選択状態にする
 * 廃止予定のため
 */
(() => {
  // ブロックエディタ利用時は対象外。
  if (document.querySelector("body.block-editor-page")) {
    return
  }

  const unchecked = (checkboxId) => {
    const checkbox = document.getElementById(checkboxId)
    if (checkbox && checkbox.checked) {
      checkbox.click()
    }
  }

  // シリーズ
  unchecked("tagsdiv-series-hide")

  // カテゴリ
  unchecked("categorydiv-hide")
})()
