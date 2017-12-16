"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(3, false);
component.onClick();
console.log("likesCount: " + component.likesCount, "isSelected: " + component.isSelected);
