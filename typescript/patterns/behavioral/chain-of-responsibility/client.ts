/**
 * Avoid coupling the sender of a request to its receiver by giving morethan one
 * object a chance to handle the request. Chain the receivingobjects and pass the
 * request along the chain until an objecthandles it
 *
 * Usecase:
 * 		--> more than one object may handle a request, and the handler isn't knowna
 * 				priori. The handler should be ascertained automatically
 * 		--> you want to issue a request to one of several objects withoutspecifying
 * 				the receiver explicitly
 * 		--> the set of objects that can handle a request should be specifieddynamically
 */

'use strict';

import {FileProcessorChain, WordFileProcessor, ExcelFileProcessor} from './chain-of-responsibility';

let chain: FileProcessorChain = new WordFileProcessor(['doc', 'docx']);
chain.setNextProcessor(new ExcelFileProcessor(['xls', 'xlsx']));

// someone in the chain should process the current file (file5.txt will not be 
// processed since there is no corresponding file processor in the chain)
['file1.xls', 'file2.doc', 'file3.docx', 'file4.xlsx', 'file5.txt'].forEach((cur) => {
	chain.processFile(cur);
});