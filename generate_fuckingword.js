function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function generateFuckingword(option) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let collection = []

  if (option === 'engineer') {
    collection += '身為一個工程師'
    collection += sample(task.engineer)
    collection += sample(phrase)
  } else if (option === 'designer') {
    collection += '身為一個設計師'
    collection += sample(task.designer)
    collection += sample(phrase)
  } else if (option === 'entrepreneur') {
    collection += '身為一個創業家'
    collection += sample(task.entrepreneur)
    collection += sample(phrase)
  }

  if (collection.length === 0) {
    return '你必須選擇一名職業'
  }

  return collection
}



module.exports = generateFuckingword