const PaginationCreate = (count, step = 3, current = 1) => {
    let pages = [];
    const stepCounter = new Array(step).fill(0).map((_, i) => i)
    for (let i = 0; i <= count; i++) {
        while (stepCounter.length) {
            const page = stepCounter.shift()
            pages = [
                (current - page <= 1) || current - page,
                ...pages,
                (current + page < count) && current + page
            ]
        }
    }
    if (!stepCounter.length) pages = [ current >= step && 1, ...[ ...new Set(pages) ], count > current && count ]
    return pages
}

export default PaginationCreate