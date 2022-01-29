import "./styles.css";

const onClickAdd = () => {
  const inputText = document.querySelector("#add-text").value;
  document.querySelector("#add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 完了button生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncomleteList(completeButton.parentNode);

    // 完了ボタンを押下時のアクション
    const completeTarget = completeButton.parentNode;
    const text = completeTarget.firstElementChild.innerText;

    completeTarget.textContent = null;
    const li = document.createElement("li");
    li.innerHTML = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    completeTarget.appendChild(li);
    completeTarget.appendChild(backButton);

    console.log(completeTarget);
    //完了リストに追加
    document.querySelector("#complete-list").appendChild(completeTarget);
  });

  // 削除button作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncomleteList(deleteTarget);
  });

  //未完了から指定の要素を削除
  const deleteFromIncomleteList = (target) => {
    document.querySelector("#incomplete-list").removeChild(target);
  };

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.querySelector("#incomplete-list").appendChild(div);
};

document.querySelector("#add-button").addEventListener("click", onClickAdd);
