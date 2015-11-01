export abstract class FileProcessorChain {
	protected _extensions: string[];

	protected _nextProcessor: FileProcessorChain;

	constructor(extensions: string[]) {
		this._extensions = extensions;
	}

	public processFile(filename: string): void {
		if ( this._nextProcessor )
			this._nextProcessor.processFile(filename);
	}

	public setNextProcessor(processor: FileProcessorChain): void {
		this._nextProcessor = processor;
	}
}

export class WordFileProcessor extends FileProcessorChain {

	constructor(extensions: string[]) {
		super(extensions);
	}

	public processFile(filename: string): void {
		let processed = this._extensions.some((extension) => {
			if ( filename.indexOf(`.${extension}`) !== -1 ) {
				console.log(`word file processor processes ${filename}`);
				return true;
			}
		});

		if ( !processed && this._nextProcessor )
			this._nextProcessor.processFile(filename);
	}
}

export class ExcelFileProcessor extends FileProcessorChain {
	constructor(extensions: string[]) {
		super(extensions);
	}

	public processFile(filename: string): void {
		let processed = this._extensions.some((extension) => {
			if ( filename.indexOf(`.${extension}`) !== -1 ) {
				console.log(`excel file processor processes ${filename}`);
				return true;
			}
		});

		if ( !processed && this._nextProcessor )
			this._nextProcessor.processFile(filename);
	}
}