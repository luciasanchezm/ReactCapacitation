export interface RunProcess {
	"<ActiveComputer>Computer": number;
	"<ParseUser>User": string;
	"<Process>Process": number;
	Action: string;
	Headless: boolean;
	ID: number;
	id: number;
	JsonResult: string;
	JsonParams: JSONParam[][];
	LastModified: string;
	Progress: number;
	RunID: string;
	StartDate: string;
	State: "Running" | "Finished" | "Queued" | "Init";
	Status: string;
	Step: number;
	SuiteID: number;
	Tries: number;
}
export interface JSONParam {
	Name: string;
	VarType: string;
	VarValue: string;
}
