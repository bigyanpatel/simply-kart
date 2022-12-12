const getFilteredByCategory = (data, categoryObj) => {
    let filteredData = [];
    for (let category in categoryObj) {
        if (categoryObj[category]) {
        const result = data.filter((item) => item.categoryName === category);
        filteredData.unshift(...result);
        }
    }
    return filteredData.length === 0 ? data : filteredData;
    };

    export { getFilteredByCategory };