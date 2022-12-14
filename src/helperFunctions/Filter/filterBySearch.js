export const getFilterBySearch = (data, searchText) => {
    return data.filter((item) =>
    item.title.toLowerCase().includes(searchText.trim().toLowerCase())
    );
  };