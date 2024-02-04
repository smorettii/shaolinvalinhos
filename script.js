const links = {
    'Instagram' : 'https://www.instagram.com/shaolinvalinhos/',
    'Whatsapp' : 'https://wa.me/message/XSIBDXPFYSHTA1',
    'Youtube' : 'https://www.youtube.com/ShaolinValinhos',
    'Facebook' : 'https://www.facebook.com/academiashaolinvalinhos/',
    'Site' : 'https://shaolinvalinhos.com.br/'
}

async function wait(ms) {
    return new Promise(result => {
        setTimeout(result, ms)
    })
}

async function notificar(text) {
    const info = document.querySelector("#info").cloneNode(true)
    document.body.appendChild(info)
    info.style.display = 'block'
    info.style.transform = 'translate(50%, -50%) scale(0)'
    info.style.transition = '350ms ease-in-out'
    info.querySelector("h1").textContent = text
    await wait(1)
    info.style.transform = 'translate(50%, -50%) scale(1)'
    await wait(String(text).split("").length * 35)
    info.style.transform = 'translate(50%, -50%) scale(0)'
    await wait(1000)
    document.body.removeChild(info)
}

document.querySelectorAll("#link").forEach(div => {
    const alt = div.getAttribute('alt')

    div.querySelector("h1").addEventListener('click', ()=>{
        window.open(links[alt])
    })
    div.querySelector("#logo").addEventListener('click', ()=>{
        window.open(links[alt])
    })
})

document.querySelectorAll("#pontos").forEach(div => {
    const alt = div.getAttribute('alt')
    const ponto = div
    ponto.addEventListener("click", ()=> {
        notificar(alt)
    })
})