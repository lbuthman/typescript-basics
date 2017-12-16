let message;
message = 'abc';

//help compiler access IntelliSense by informing type
let a = (<string>message).endsWith('c'); //maybe more common
let b = (message as string).endsWith('c');