import { seriesData } from './data.js';
var seriesTbody = document.getElementById("seriesTabla");
var promedioTemps = document.getElementById("promedio");
var cartaTexto = document.getElementById("cartaTexto");
var cartaTitulo = document.getElementById("cartaTitulo");
var cartaLink = document.getElementById("cartaLink");
var cartaImg = document.getElementById("cartaImg");
promedioTemps.innerHTML = darPromedioTemp(seriesData);
function llenarTabla(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td><a href=\"#\" id=\"titulo").concat(serie.titulo, "\">").concat(serie.titulo, "</a></td>\n                                <td>").concat(serie.plataforma, "</td>\n                                <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
        var tituloElemento = document.getElementById("titulo" + serie.titulo);
        tituloElemento.onclick = function () { return cambiarInfo(serie); };
    });
}
function darPromedioTemp(series) {
    var temporadasTotal = 0;
    series.forEach(function (serie) { return temporadasTotal = temporadasTotal + serie.temporadas; });
    return "".concat(temporadasTotal / series.length);
}
function cambiarInfo(serie) {
    cartaTitulo.innerText = serie.titulo;
    cartaImg.src = serie.imagen;
    cartaImg.width = 490;
    cartaLink.innerText = serie.link;
    cartaLink.href = serie.link;
    cartaLink.target = '_blank';
    cartaTexto.innerText = serie.descripcion;
}
llenarTabla(seriesData);
