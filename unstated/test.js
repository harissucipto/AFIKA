import supermemo2 from 'supermemo2';

const test = supermemo2(5, 1, 6);

console.log(test);

const test2 = supermemo2();

console.log(test2);

console.log(supermemo2(4, test2.schedule, test2.factor));
