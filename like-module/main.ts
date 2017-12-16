import { LikeComponent } from './like.component';

let component = new LikeComponent(3, false);

component.onClick();
console.log(`likesCount: ${component.likesCount}`,
    `isSelected: ${component.isSelected}`);