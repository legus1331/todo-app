import { useState } from 'react';

export function useLocalStorage(key) {
	const [data, setData] = useState(() => {
		const storedData = localStorage.getItem(key);
		return storedData ? JSON.parse(storedData) : [];
	});

	const saveData = newData => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};

	return [data, saveData];
}
