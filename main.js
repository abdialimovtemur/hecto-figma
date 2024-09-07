import { data , featured} from "./data.js";
const hero = document.querySelector(".hero")

hero.innerHTML = data.map(
    (item) => `<div class="flex items-center">
    <div class="flex flex-col gap-8"><h1 class="text-[#FB2E86] font-bold">${item.title}</h1>
    <h1 class="text-[40px] font-bold">${item.info}</h1>
    <h1 class="text-[#8A8FB9]">${item.discription}</h1>
    <button class="bg-[#FB2E86] py-2 px-4 rounded-sm text-white w-40">${item.button}</button>
    </div>
    <img src="./img/heroImg.png" alt="">
    </div>`
);


const featured_product = document.querySelector(".featured_product");

featured.forEach(item => {
    featured_product.innerHTML += `
   
    `
});