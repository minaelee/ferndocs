/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as errors from "../../../../errors";
import * as MinaetestImdbApi from "../../..";
export declare class MovieDoesNotExistError extends errors.MinaetestImdbApiError {
    constructor(body: MinaetestImdbApi.MovieId);
}
