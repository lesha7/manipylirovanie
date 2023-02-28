// let elem = document.querySelector(`#elem`)
// let li = document.createElement(`li`)
// li.textContent = 'item'
// elem.appendChild(li);


// let elem = document.querySelector(`#elem`)
// let bur = document.querySelector(`#button`)

// bur.addEventListener(`click`, ()=>{
//     let li = document.createElement(`li`)
//         li.textContent = 'item'
//         elem.appendChild(li);
// })


// let elem = document.querySelector(`#elem`)
// let bur = document.querySelector(`#button`)
// bur.addEventListener(`click`, ()=>{
//     let li = document.createElement(`li`)
//         li.textContent = 'dora'
//         elem.appendChild(li);
//         li.addEventListener(`click`, ()=>{
//             li.textContent += `!`
//         })
// })



// let daun = document.querySelector(`#daun`)

// for (let i = 1; i <= 10; i++){
//     let li = document.createElement(`li`)
//     li.textContent = `sdjsadjashjka`
//     daun.appendChild(li);
// }


// let daun = document.querySelector(`#daun`)

// for (let i = 1; i <= 5; i++){
//     let ass = document.createElement(`input`)
//     ass.textContent = `asd`
//     ass.addEventListener(`blur`, ()=>{
//         let p = document.createElement(`p`)
//         p.textContent = ass.value
//         daun.appendChild(p);
//     })
//     daun.appendChild(ass);
// }



// let elems = document.querySelectorAll('li');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		elem.remove();
// 	});
// }

// let elems = document.querySelectorAll('#parent');
// let bur = document.querySelector(`#button`)
// bur.addEventListener(`click`, ()=>{
// for (let elem of elems){
//         elem.remove()
//     }
// })


// let ul = document.querySelector('#elem');
// let li = document.createElement(`li`)
// li.innerHTML = `fin`;
// ul.prepend(li)
// let li1 = document.createElement(`li`)
// li1.innerHTML = `str`;
// ul.append(li1)


// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');

// let li = document.createElement(`li`)
// li.innerHTML = `new`
// parent.insertBefore(li, elem)
// li.addEventListener(`click`, ()=>{
//     li.textContent += `!`
// })


// let p = document.createElement(`p`);
// p.innerHTML = `!!!`;
// let elem =document.querySelector(`#elem`)
// elem.insertAdjacentElement('beforeBegin', p)


// let p = document.createElement(`p`);
// p.innerHTML = `!!!`;
//  let elem =document.querySelector(`#elem`)
//  elem.insertAdjacentElement('afterEnd', p)


// let p = document.createElement(`p`);
// p.innerHTML = `!!!`;
//  let elem =document.querySelector(`#elem`)
//  elem.insertAdjacentElement('afterBegin', p)


// let p = document.createElement(`p`);
// p.innerHTML = `!!!`;
//  let elem =document.querySelector(`#elem`)
//  elem.insertAdjacentElement('beforeEnd', p)


// let www = document.querySelector(`#www`);
// let elem =document.querySelector(`#elem`)
// elem.insertAdjacentHTML('afterBegin', `  <div class="www"><p>text</p>
// <p>text</p><input></div> 
// `)

// let but = document.querySelector(`button`)
// let input = but.querySelector(`input`)
// but.addEventListener(`click`, ()=>{
//     let clon = input.cloneNode(true)
//     but.appendChild(clon);
// })



// let elem = document.querySelector('#elem');
// console.log(elem.matches('div.www'));


// let elem = document.querySelector('#elemi');
// console.log(elem.matches('p'));


// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let chil = elem1.contains(elem2)
// console.log(chil)