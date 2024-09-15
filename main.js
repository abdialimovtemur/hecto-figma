import { data , featured, leatest,} from "./data.js";
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
const leatest_product = document.querySelector(".leatest_product")

featured.forEach(item => {
    featured_product.innerHTML += `
    <div class="flex gap-4 ">
        <div class="flex flex-col text-center shadow-lg bg-white rounded-lg">
            <div class="flex">
                <div class="bg-[#F6F7FB] p-4"><img src="./img/chair1.png" alt=""></div>
            </div>
            <div class="flex flex-col">
                <p class="text-[20px] font-bold">${item.chair}</p>
                <p>chair: "Cantilever chair",</p>
                <p class="text-[#151875]">code: "Code - Y523201",</p>
                <p class="text-[#151875]">price: "$42.00"</p>
            </div>
        </div>
      </div>
    `
});

leatest.forEach(item => {
    leatest_product.innerHTML +=  `
    <div class="flex gap-4 ">
        <div class="flex flex-col text-center shadow-lg bg-white rounded-lg">
            <div class="flex">
                <div class="bg-[#F6F7FB] p-4"><img src="./img/chair1.png" alt=""></div>
            </div>
            <div class="flex flex-col">
                <p class="text-[20px] font-bold">${item.chair}</p>
                <p>chair: "Cantilever chair",</p>
                <p class="text-[#151875]">code: "Code - Y523201",</p>
                <p class="text-[#151875]">price: "$42.00"</p>
            </div>
        </div>
      </div>
    `
})


document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
