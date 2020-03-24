// @flow
import * as Immutable from "immutable";
import ImmutableModel from "flow-immutable-models";

export type MarkerModelType = {
	startLineNumber: number,
	endLineNumber: number,
	startColumn: number,
	endColumn: number,
	message: string,
	severity: number,
	source: string
};

// /////////////////////////////////////////////////////////////////////////////
//
// NOTE: THIS CLASS IS GENERATED. DO NOT MAKE CHANGES HERE.
//
// If you need to update this class, update the corresponding flow type above
// and re-run the flow-immutable-models codemod
//
// /////////////////////////////////////////////////////////////////////////////
export class Marker extends ImmutableModel {
    static fromJS(json: MarkerModelType): Marker {
        const state: Object = Object.assign({}, json);
        return new this(Immutable.Map(state));
    }

    toJS(): MarkerModelType {
        return {
            startLineNumber: this.startLineNumber,
            endLineNumber: this.endLineNumber,
            startColumn: this.startColumn,
            endColumn: this.endColumn,
            message: this.message,
            severity: this.severity,
            source: this.source,
        };
    }

    get startLineNumber(): number {
        return this._state.get('startLineNumber');
    }

    setStartLineNumber(startLineNumber: number): this {
        return this.clone(this._state.set('startLineNumber', startLineNumber));
    }

    get endLineNumber(): number {
        return this._state.get('endLineNumber');
    }

    setEndLineNumber(endLineNumber: number): this {
        return this.clone(this._state.set('endLineNumber', endLineNumber));
    }

    get startColumn(): number {
        return this._state.get('startColumn');
    }

    setStartColumn(startColumn: number): this {
        return this.clone(this._state.set('startColumn', startColumn));
    }

    get endColumn(): number {
        return this._state.get('endColumn');
    }

    setEndColumn(endColumn: number): this {
        return this.clone(this._state.set('endColumn', endColumn));
    }

    get message(): string {
        return this._state.get('message');
    }

    setMessage(message: string): this {
        return this.clone(this._state.set('message', message));
    }

    get severity(): number {
        return this._state.get('severity');
    }

    setSeverity(severity: number): this {
        return this.clone(this._state.set('severity', severity));
    }

    get source(): string {
        return this._state.get('source');
    }

    setSource(source: string): this {
        return this.clone(this._state.set('source', source));
    }
}
