const btnNao = document.getElementById("nao");
const btnSim = document.getElementById("sim");

// Espera a página carregar
window.onload = () => {
    // Coloca o botão "Não" ao lado do "Sim"
    const simRect = btnSim.getBoundingClientRect();

    btnNao.style.position = "fixed";
    btnNao.style.left = (simRect.right + 20) + "px";
    btnNao.style.top = simRect.top + "px";
};

function moverBotao() {
    const maxX = window.innerWidth - btnNao.offsetWidth;
    const maxY = window.innerHeight - btnNao.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btnNao.style.left = `${x}px`;
    btnNao.style.top = `${y}px`;
}

// O botão foge quando o mouse chega perto
btnNao.addEventListener("mouseover", moverBotao);

// E também foge se alguém conseguir clicar
btnNao.addEventListener("click", (e) => {
    e.preventDefault();
    moverBotao();
});

btnSim.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:column;
            height:100vh;
            background:#ffe4ec;
            font-family:Arial;
        ">
            <h1 style="font-size:60px;color:#d63384;"> linda gostosa</h1>
            <h2> agr estamos namorando hahaha</h2>
        </div>
    `;
});