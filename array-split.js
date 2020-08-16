const nums = [1,4,5,8,7,9,12];
const cut = nums.slice(2,5); // index no.2 theke 5 er agg porjonto slice korbe. but main array te kono effect porbe na.
console.log(cut);

const nums2 = [1,4,5,8,7,9,12];
const remove = nums2.splice(2,3,20,30,40); // index 2 theke suru hoye koyta element remove korbe seta bujhacche. r last a remove kora element gular jaygay notun ki element add korbe ta set kore deya jay splice er khetre.
console.log(remove);
console.log(nums2);    //splice a main array change hoye jay.

const together = nums2.join(","); // join use korle ta string er moto kore fele element gula k.
console.log(together);