export class Serie {
    id: number;
    titulo: string;
    plataforma: string;
    temporadas: number;
    descripcion: string;
    link: string;
    imagen: string;

    constructor(idE: number, tituloE: string, plataformaE: string, temporadasE: number, descripcionE: string, linkE: string, imagenE: string) {
        this.id = idE;
        this.plataforma = plataformaE;
        this.titulo = tituloE;
        this.temporadas = temporadasE;
        this.descripcion = descripcionE;
        this.link = linkE;
        this.imagen = imagenE;
    }
}