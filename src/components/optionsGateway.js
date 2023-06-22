const baseUrl =
  'https://6374b55948dfab73a4e65042.mockapi.io/todo_list/events_react_project';

export const fetchOptionsList = () => {
  return fetch(baseUrl).then((response) => response.json());
};

export const updateOptions = (updatedOptions) => {
  return fetch(`${baseUrl}/1`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedOptions),
  });
};
