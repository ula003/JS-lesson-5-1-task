let index = prompt()
index = Number(index);
let arr = ['Aleksey', 'Kartoshka', 'Margarita', 'Morgenshtern', 'Monica']
if (index >=0 && index < arr.length){
    arr.splice(index, 1)
    alert(arr)
} else {
    alert(`Нет такого элемента с индексом ${index} `)
}
