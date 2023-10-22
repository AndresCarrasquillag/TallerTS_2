import { seriesData } from './data.js';
import { Serie } from './serie.js';


let seriesTbody = document.getElementById("seriesTabla")!;
let promedioTemps = document.getElementById("promedio")!;
let cartaTexto = document.getElementById("cartaTexto")!;
let cartaTitulo = document.getElementById("cartaTitulo")!;
let cartaLink = document.getElementById("cartaLink")! as HTMLAnchorElement;
let cartaImg = document.getElementById("cartaImg") as HTMLImageElement;

promedioTemps.innerHTML = darPromedioTemp(seriesData)


function llenarTabla(series: Serie[]) {
    series.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                                <td><a href="#" id="titulo${serie.titulo}">${serie.titulo}</a></td>
                                <td>${serie.plataforma}</td>
                                <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
        const tituloElemento :HTMLElement = document.getElementById("titulo"+serie.titulo)!;
        tituloElemento.onclick = () => cambiarInfo(serie);
    });
}

function darPromedioTemp(series: Serie[]) {

    let temporadasTotal: number = 0;
    series.forEach(serie => temporadasTotal = temporadasTotal + serie.temporadas);
    return `${temporadasTotal/series.length}`;
}

function cambiarInfo(serie: Serie) {
    cartaTitulo.innerText = serie.titulo;
    cartaImg.src = serie.imagen;
    cartaImg.width = 490;
    cartaLink.innerText = serie.link;
    cartaLink.href = serie.link;
    cartaLink.target =  '_blank';
    cartaTexto.innerText = serie.descripcion;

}

llenarTabla(seriesData);
