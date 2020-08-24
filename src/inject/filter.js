/**
 * 旧エディタの記事編集ページのカテゴリ、特集カテゴリのフォームにインクリメンタルサーチ機能を加える
 */
(() => {
  // ブロックエディタ利用時は対象外。ブロックエディタが標準で同機能を提供する。
  if (document.querySelector("body.block-editor-page")) {
    return
  }

  const appendFilter = (taxonomyId, listId) => {
    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "filter")
    input.addEventListener("input", (event) => filterItem(listId, event.target.value))

    const taxonomyDiv = document.getElementById(taxonomyId)
    if (taxonomyDiv) {
      taxonomyDiv.insertBefore(input, taxonomyDiv.firstChild)
    }
  }

  const filterItem = (listId, keyword) => {
    document.querySelectorAll("#" + listId + " li").forEach((item, i, items) => {
      if (!item.innerText.toLowerCase().includes(keyword.toLowerCase())) {
        item.style = "display:none"
      } else {
        item.style = "display:list-item"
      }
    })
  }

  appendFilter("taxonomy-category", "categorychecklist")
  appendFilter("taxonomy-referencecat", "referencecatchecklist")
})()