//flow
import * as Immutable from "immutable";
import ImmutableModel from "flow-immutable-models";

export type JSONParserResponseModelType = {
	error?: string,
	data?: Object
};

// /////////////////////////////////////////////////////////////////////////////
//
// NOTE: THIS CLASS IS GENERATED. DO NOT MAKE CHANGES HERE.
//
// If you need to update this class, update the corresponding flow type above
// and re-run the flow-immutable-models codemod
//
// /////////////////////////////////////////////////////////////////////////////
export class JSONParserResponse extends ImmutableModel {
    static fromJS(json: JSONParserResponseModelType): JSONParserResponse {
        const state: Object = Object.assign({}, json);
        return new this(Immutable.Map(state));
    }

    toJS(): JSONParserResponseModelType {
        const js: JSONParserResponseModelType = {};

        if (this.error != null) {
            js.error = this.error;
        }

        if (this.data != null) {
            js.data = this.data;
        }

        return js;
    }

    get error(): ?string {
        return this._state.get('error');
    }

    setError(error: ?string): this {
        return this.clone(this._state.set('error', error));
    }

    get data(): ?Object {
        return this._state.get('data');
    }

    setData(data: ?Object): this {
        return this.clone(this._state.set('data', data));
    }
}
