/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as MinaetestImdbApi from "../../../../api";
import * as core from "../../../../core";
export declare const CreateMovieRequest: core.serialization.ObjectSchema<serializers.CreateMovieRequest.Raw, MinaetestImdbApi.CreateMovieRequest>;
export declare namespace CreateMovieRequest {
    interface Raw {
        title: string;
        rating: number;
    }
}
