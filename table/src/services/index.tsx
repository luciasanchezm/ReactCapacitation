// Firebase database imports
import {DB} from "./firebase";
import {ref, get, child} from "firebase/database";
import {RunProcess} from "../interfaces/index";

export const getData = async (): Promise<RunProcess[]> => {
	const database = ref(DB);
	const reference = child(database, "RunProcess");
	const snapshot = await get(reference);
	const data = (Object.values(snapshot.val()) as RunProcess[]).map((item: RunProcess) => {
		return {
			...item,
			id: item.ID,
		};
	});
	return data;
};
