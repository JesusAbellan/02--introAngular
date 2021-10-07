export interface Respuesta {
    status:       string;
    totalResults: number;
    articles:     Noticias[];
}

export interface Noticias {
    source:      Source;
    author:      null | string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: string;
    content:     string;
}

export interface Source {
    id:   null | string;
    name: string;
}
