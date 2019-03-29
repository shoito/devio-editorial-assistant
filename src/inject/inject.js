(() => {
  const appendFilter = (taxonomyId, listId) => {
    const input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "filter")
    input.addEventListener("input", (event) => filterItem(listId, event.target.value))

    const taxonomyDiv = document.getElementById(taxonomyId)
    taxonomyDiv.insertBefore(input, taxonomyDiv.firstChild)
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