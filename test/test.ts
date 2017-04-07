/// <reference path="../node_modules/@types/node/index.d.ts" />

import * as Fin from "finnlp";
import {build} from "../src/index";
import {dictionary} from "spelt-gb-dict";

build(dictionary,0.22);

function assert(sentence:string,index:number){
	const misspellingIndex = new Fin.Run(sentence).spellcheck()[0].findIndex((x)=>!x.correct);
	if(misspellingIndex !== index) console.log(`❌ FAIL: for the sentence "${sentence}" we were expecting a misspelling at index ${index} but we had it at ${misspellingIndex}`);
	else console.log(`✔ PASS: ${sentence}`);
}

assert("no heve left",1);
assert("I didn't lxve any trace on the scene",3);
assert("That's not a good excusef",5);
assert("Well, he wasn't here onlyy for few hours",6);