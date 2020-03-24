// @flow
import * as Immutable from "immutable";
import ImmutableModel from "flow-immutable-models";

import type { Marker } from "./Marker";

export type ValidateTResponseModelType = {
	key: string,
	baseValue: string,
	translatedValue: string,
	markers: Array<Marker>
};

// /////////////////////////////////////////////////////////////////////////////
//
// NOTE: THIS CLASS IS GENERATED. DO NOT MAKE CHANGES HERE.
//
// If you need to update this class, update the corresponding flow type above
// and re-run the flow-immutable-models codemod
//
// /////////////////////////////////////////////////////////////////////////////
export class ValidateTResponse extends ImmutableModel {
    static fromJS(json: ValidateTResponseModelType): ValidateTResponse {
        const state: Object = Object.assign({}, json);
        state.markers = Immutable.List(state.markers);
        return new this(Immutable.Map(state));
    }

    toJS(): ValidateTResponseModelType {
        return {
            key: this.key,
            baseValue: this.baseValue,
            translatedValue: this.translatedValue,
            markers: this.markers.toArray(),
        };
    }

    get key(): string {
        return this._state.get('key');
    }

    setKey(key: string): this {
        return this.clone(this._state.set('key', key));
    }

    get baseValue(): string {
        return this._state.get('baseValue');
    }

    setBaseValue(baseValue: string): this {
        return this.clone(this._state.set('baseValue', baseValue));
    }

    get translatedValue(): string {
        return this._state.get('translatedValue');
    }

    setTranslatedValue(translatedValue: string): this {
        return this.clone(this._state.set('translatedValue', translatedValue));
    }

    get markers(): Immutable.List<Marker> {
        return this._state.get('markers');
    }

    setMarkers(markers: Immutable.List<Marker>): this {
        return this.clone(this._state.set('markers', markers));
    }
}
