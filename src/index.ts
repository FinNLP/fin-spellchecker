import * as Fin from "finnlp";
import {buildSpelt,CheckResult} from "spelt";

let spellchecker:(input:string)=>CheckResult;

export const build = function (dictionary:string,distance:number=0.22) {
	spellchecker = buildSpelt({
		dictionary:dictionary,
		distanceThreshold:distance
	});
};

declare module "finnlp" {
	export interface Run {
		spellcheck:(this:Fin.Run)=>CheckResult[][];
	}
}

Fin.Run.prototype.spellcheck = function(this:Fin.Run) : CheckResult[][] {
	const result:CheckResult[][] = [];
	this.sentences.forEach((sentence,sentenceIndex)=>{
		result[sentenceIndex] = [];
		sentence.tokens.forEach((token,tokenIndex)=>{
			result[sentenceIndex][tokenIndex] = spellchecker(token);
		});
	});
	return result;
};