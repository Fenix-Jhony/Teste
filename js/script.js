
const criarProdutos = (item) => {
    const things = item.products
    console.log(things)
    const loja = document.querySelector('.container-products')
    things.map((things) => {
        let card = document.createElement('div')
        card.classList.add('box-products')
        card.innerHTML = `
    <img src="${things.image}" alt="">
    <h2>${things.name}</h2>
    <p>${things.description}</p>
    <h4> de: R$${things.oldPrice},00</h4>
    <h3>Por: R$${things.price},00</h3>
    <h4>Ou ${things.installments.count}x de R$${things.installments.value}0</h4>
    <button><a href="#">Comprar</a></button>`
        loja.appendChild(card)

    })
    let btnCarregar = document.querySelector('.btn-mais')
    btnCarregar.onclick = async () => {
        btnCarregar.classList.add('active')
        if (btnCarregar.classList.contains('active')) {
            dados = await fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=2')
            products = await dados.json()
            criarProdutos(products)
            return
        } else {
            console.log("slc")
        }


    }




}
const requisiçao = async () => {
    this.dados = await fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
    this.products = await dados.json()
    criarProdutos(products)
}
requisiçao()








