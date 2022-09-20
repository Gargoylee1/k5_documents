declare var TEXTS: { [key: string]: string }
declare var COLORS: { [key: string]: string }
declare var AVAILABLE_JOBS: {job:string, templateGrades: number[]}[]

export const texts = typeof TEXTS === "undefined" ? {} : TEXTS
export const colors = typeof COLORS === "undefined" ? {} : COLORS
export const availableJobs = typeof AVAILABLE_JOBS === "undefined" ? [] : AVAILABLE_JOBS