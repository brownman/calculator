'use strict'
/**
 * Tokenizer module:
 * A module to build an array based on a predefined type of symbols
 */

function Token(type, value) {
	this.type = type;
	this.value = value;
}

function isComma(ch) {
	return /,/.test(ch);
}

function isDigit(ch) {
	return /\d/.test(ch);
}

function isLetter(ch) {
	return /[a-z]/i.test(ch);
}

function isOperator(ch) {
	return /\+|-|\*|\/|\^/.test(ch);
}

function isLeftParenthesis(ch) {
	return /\(/.test(ch);
}

function isRightParenthesis(ch) {
	return /\)/.test(ch);
}



function process(str) {
	str.replace(/\s+/g, "");
	str=str.split("");

	var result=[];
	var letterBuffer=[];
	var numberBuffer=[];


	str.forEach(function (char, idx) {
		if(isDigit(char)) {
			numberBuffer.push(char);
		} else if(char==".") {
			numberBuffer.push(char);
		} else if (isLetter(char)) {
			if(numberBuffer.length) {
				emptyNumberBufferAsLiteral();
				result.push(new Token("Operator", "*"));
			}
			letterBuffer.push(char);
		} else if (isOperator(char)) {
			emptyNumberBufferAsLiteral();
			emptyLetterBufferAsVariables();
			result.push(new Token("Operator", char));
		} else if (isLeftParenthesis(char)) {
			if(letterBuffer.length) {
				result.push(new Token("Function", letterBuffer.join("")));
				letterBuffer=[];
			} else if(numberBuffer.length) {
				emptyNumberBufferAsLiteral();
				result.push(new Token("Operator", "*"));
			}
			result.push(new Token("Left Parenthesis", char));
		} else if (isRightParenthesis(char)) {
			emptyLetterBufferAsVariables();
			emptyNumberBufferAsLiteral();
			result.push(new Token("Right Parenthesis", char));
		} else if (isComma(char)) {
			emptyNumberBufferAsLiteral();
			emptyLetterBufferAsVariables();
			result.push(new Token("Function Argument Separator", char));
		} else {
		//	result = null;
			return null;
		}
	});
	if (numberBuffer.length) {
		emptyNumberBufferAsLiteral();
	}
	if(letterBuffer.length) {
		emptyLetterBufferAsVariables();
	}
	return result;

	function emptyLetterBufferAsVariables() {
		var l = letterBuffer.length;
		for (var i = 0; i < l; i++) {
			result.push(new Token("Variable", letterBuffer[i]));
			if(i< l-1) { //there are more Variables left
				result.push(new Token("Operator", "*"));
			}
		}
		letterBuffer = [];
	}

	function emptyNumberBufferAsLiteral() {
		if(numberBuffer.length) {
			result.push(new Token("Literal", numberBuffer.join("")));
			numberBuffer=[];
		}
	}

}

var tokenizer = {
	process: process,
	Token: Token
}

module.exports = tokenizer;
