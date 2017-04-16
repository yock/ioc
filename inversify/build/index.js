"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = require("./types");
var Repo_1 = require("./Repo");
var Search_1 = require("./Search");
function main() {
    var container = new inversify_1.Container();
    container.bind(types_1.TYPES.ISearch).to(Search_1.Search);
    container.bind(types_1.TYPES.IRepo).to(Repo_1.Repo);
    var search = container.get(types_1.TYPES.ISearch);
    console.log(search.withKeyword('test'));
}
main();
