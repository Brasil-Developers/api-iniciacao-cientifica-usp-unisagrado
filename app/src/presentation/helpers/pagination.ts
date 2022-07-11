
function getPagination({ page, size }: { page: number; size: number; }) {
    const limit = size ? +size : 10;

    if(page == 0) 
        page = 1;

    const offset = page ? (page-1) * limit : 0;

    return { limit, offset }
}

function getPagingData({ data, limit, page }: { data: any; limit: number; page: number; }) {
    const { count: totalItems, rows: items } = data;
    const currentPage = page ? +page : 1;
    const totalPages = Math.ceil(totalItems / limit);

    return { currentPage, totalPages, totalItems, items }
}

export {
    getPagination,
    getPagingData
} 