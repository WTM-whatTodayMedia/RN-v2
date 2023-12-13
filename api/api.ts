import apiClient from "../util/lib/apiClient";

export const fetchList = async () => {
  let objectArray: object[] = [];
  objectArray.push({
    property: "Tag",
    select: {
      equals: "",
    },
  });
  try {
    const { data } = await apiClient.post("", {
      filter: {
        and: objectArray,
      },
    });
    const list = data.results;

    return list;
  } catch (e) {
    console.log(e);
    return {};
  }
};

export const fetchListItem = async (id: number) => {
  const { data } = await apiClient.get(`/questions/${id}`);
  return data;
};

export const getFilterList = async (names: string) => {
  let objectArray: object[] = [];
  objectArray.push({
    property: "Tag",
    select: {
      equals: names,
    },
  });
  try {
    const { data } = await apiClient.post("", {
      filter: {
        and: objectArray,
      },
    });
    const list = data.results;
    return list;
  } catch (e) {
    console.log(e);
    return {};
  }
};
