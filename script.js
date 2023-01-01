var container = document.querySelector(".container")


async function sports(){

var surl = 'https://inshorts.deta.dev/news?category=sports'

var fetch_s = await fetch(surl)
var json_s = await fetch_s.json()






var create_wrap= document.createElement('div')
create_wrap.setAttribute('class','create-wrap')




for( var sdata =0; sdata<10; sdata++){
    console.log(json_s.data[sdata]);
    var cre_h_card = document.createElement('div')
    cre_h_card.setAttribute('class', 'mb-3')
    cre_h_card.classList.add('card')

cre_h_card.setAttribute('style','max-width:70rem;')
container.append(create_wrap)
create_wrap.append(cre_h_card)

var cre_h_row = document.createElement('div')
cre_h_row.setAttribute('class','row')
cre_h_row.classList.add('g-0')
cre_h_card.append(cre_h_row)


var create_col_md_4 = document.createElement('div')
create_col_md_4.setAttribute('class','col-lg-4')
create_col_md_4.classList.add('col-md-5')
cre_h_row.append(create_col_md_4)


var create_img = document.createElement('img')
create_img.setAttribute('src',json_s.data[sdata].imageUrl)
create_img.setAttribute('class','img-fluid')

create_img.setAttribute('alt','newsimage')
create_img.classList.add('rounded-start')
create_img.classList.add('card-img')
create_img.classList.add('h-100')
create_col_md_4.append(create_img)




var create_col_md_8 = document.createElement('div')
create_col_md_8.setAttribute('class','col-lg-8')
create_col_md_8.classList.add('col-md-7')
cre_h_card.append(create_col_md_8)
cre_h_row.append(create_col_md_8)



var create_card_body= document.createElement('div')
create_card_body.setAttribute('class','card-body')
create_col_md_8.append(create_card_body)


var create_h5 = document.createElement('h5')
create_h5.setAttribute('class','card-title')
create_h5.textContent= json_s.data[sdata].title
create_card_body.append(create_h5)


var create_p = document.createElement('p')
create_p.setAttribute('class','card-text')
create_card_body.append(create_p)

var create_p1 = document.createElement('p')
create_p.textContent = json_s.data[sdata].content
create_p1.setAttribute('class','card-text')

var create_small = document.createElement('small')
create_small.setAttribute('class','text-muted')
create_small.classList.add('float-end')
create_small.classList.add('mb-3')
create_small.textContent=json_s.data[sdata].date
create_p1.append(create_small)
create_card_body.append(create_p1)
}
}                        
sports()









var heading = document.querySelector('.heading')
var heading2 = document.querySelector('.heading2')

var create_card_f = document.createElement('div')
create_card_f.setAttribute('class','black')
create_card_f.classList.add('mt-5')
// container.append(create_card_f)
heading.insertAdjacentElement("afterend",create_card_f)

var row = document.createElement('div')
row.setAttribute('class','row')
create_card_f.append(row)



for( var i=0;i<12;i++){

async function dogs(){

    var dogsurl = 'https://randomfox.ca/floof/'

var fetch_dogs = await fetch(dogsurl)
var json_dogs = await fetch_dogs.json()

console.log(json_dogs.image);


    var catsurl = 'https://catfact.ninja/fact'

var fetch_cats = await fetch(catsurl)
var json_cats = await fetch_cats.json()



console.log(json_cats.fact);


var create_col_md_3 = document.createElement('div')
create_col_md_3.setAttribute('class','col-md-4')
row.append(create_col_md_3)

    var create_card_f = document.createElement('div')
    create_card_f.setAttribute('class', 'card')
    create_card_f.classList.add('mb-5')
    create_col_md_3.append(create_card_f)

    var create_img = document.createElement('img')
    create_img.setAttribute('src',json_dogs.image)
    create_img.setAttribute('class', 'card-img')
    create_img.classList.add('h-100vh')

    create_card_f.append(create_img)

var create_card_body_f = document.createElement('div')
create_card_body_f.setAttribute('class','card-body')
create_card_body_f.innerHTML=` <p><small class='text-muted' >${json_cats.fact}</small></p> `
create_card_f.append(create_card_body_f)


}

dogs()



}



var create_wrap= document.createElement('div')
create_wrap.setAttribute('class','create-wrap')























var create_row = document.createElement('div')
create_row.setAttribute('class','row')
create_row.classList.add('mt-5')
container.append(create_row)
for(var i = 0; i <4; i++) {
    
async function Mixed(){


var url ='https://api.chucknorris.io/jokes/random'

var fetch_url = await fetch(url)
var json_fetch = await fetch_url.json()

var create_col_md_4 = document.createElement('div')
create_col_md_4.setAttribute('class','col-md-6')
// create_col_md_4.classList.add('mb-5')
create_row.append(create_col_md_4)


var create_card = document.createElement('div')
create_card.setAttribute('class','card')
create_card.classList.add('jokecards')
// create_card.setAttribute('style','max-width: 18rem')
create_card.classList.add('bg-dark')
create_card.classList.add('text-white')
create_card.classList.add('mt-5')
// // create_card.style.width='20rem'
create_col_md_4.append(create_card)


var create_header = document.createElement('div')
create_header.setAttribute('class','card-header')
create_header.classList.add('text-center')
create_header.classList.add('bg-black')
create_header.classList.add('p-1')
create_header.innerText = "Jokes"
create_card.append(create_header)


var create_card_body = document.createElement('div')
create_card_body.setAttribute('class','card-body')
create_card.append(create_card_body)

var create_card_text1 = document.createElement('div')
create_card_text1.setAttribute('class','card-text')
create_card_text1.classList.add('text-center')
create_card_text1.classList.add('mb-2')
create_card_text1.classList.add('m-2')
create_card_text1.textContent= json_fetch.value
create_card_body.append(create_card_text1)



    console.log(json_fetch.value);






}

Mixed()








}

















