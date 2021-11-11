
export type Nikki = {
    id: number,
    content: string,
    createdAt: any,
}

export interface NikkiPageData {
    nikkis: Array<Nikki>,
    totalPage: number,
    currentPage: number,
}
